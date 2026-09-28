(() => {
  "use strict";

  const presenterMode = new URLSearchParams(window.location.search).get("tryb") === "prowadzacy";

  if (presenterMode) {
    document.body.classList.add("is-presenter");
    document.querySelectorAll("[data-presenter-only]").forEach((element) => {
      element.hidden = false;
    });
    document.querySelectorAll("[data-participant-time]").forEach((element) => {
      element.hidden = true;
    });
    document.querySelectorAll("a[data-course-link]").forEach((link) => {
      const destination = new URL(link.getAttribute("href"), window.location.href);
      destination.searchParams.set("tryb", "prowadzacy");
      link.href = destination.href;
    });
  }

  const menuButton = document.querySelector("[data-menu-toggle]");
  const mobileNavigation = document.getElementById("mobile-navigation");

  if (menuButton && mobileNavigation) {
    const closeMenu = (returnFocus = false) => {
      mobileNavigation.hidden = true;
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Otwórz nawigację");
      document.body.classList.remove("menu-open");
      if (returnFocus) menuButton.focus();
    };

    menuButton.addEventListener("click", () => {
      const willOpen = mobileNavigation.hidden;
      mobileNavigation.hidden = !willOpen;
      menuButton.setAttribute("aria-expanded", String(willOpen));
      menuButton.setAttribute("aria-label", willOpen ? "Zamknij nawigację" : "Otwórz nawigację");
      document.body.classList.toggle("menu-open", willOpen);
    });

    mobileNavigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => closeMenu());
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !mobileNavigation.hidden) {
        closeMenu(true);
      }
    });

    window.matchMedia("(min-width: 1051px)").addEventListener("change", (event) => {
      if (event.matches) closeMenu();
    });
  }

  if (document.body.dataset.page === "home") {
    const moduleSection = document.getElementById("modul-1");
    const introLink = document.querySelector("[data-nav-intro]");
    const moduleLink = document.querySelector("[data-nav-module]");
    let currentSection = "intro";
    let scrollFrame = null;

    const updateSectionNavigation = () => {
      scrollFrame = null;
      const moduleVisible = moduleSection.getBoundingClientRect().top <= window.innerHeight * 0.45;
      const nextSection = moduleVisible ? "module" : "intro";
      if (nextSection === currentSection) return;
      currentSection = nextSection;
      document.querySelectorAll("[data-intro-only]").forEach((element) => {
        element.hidden = moduleVisible;
      });
      document.querySelectorAll("[data-module-only]").forEach((element) => {
        element.hidden = !moduleVisible;
      });
      introLink.classList.toggle("is-current", !moduleVisible);
      moduleLink.classList.toggle("is-current", moduleVisible);
      if (moduleVisible) {
        introLink.removeAttribute("aria-current");
        moduleLink.setAttribute("aria-current", "location");
      } else {
        moduleLink.removeAttribute("aria-current");
        introLink.setAttribute("aria-current", "location");
      }
    };

    const scheduleSectionNavigation = () => {
      if (scrollFrame === null) {
        scrollFrame = window.requestAnimationFrame(updateSectionNavigation);
      }
    };

    window.addEventListener("scroll", scheduleSectionNavigation, { passive: true });
    window.addEventListener("resize", scheduleSectionNavigation);
    window.addEventListener("hashchange", scheduleSectionNavigation);
    scheduleSectionNavigation();
  }

  if (!presenterMode) return;

  const timer = document.querySelector("[data-timer]");
  if (!timer) return;

  const durationMs = 25 * 60 * 1000;
  const storageKey = "prototypowanie-ai-modul-1-timer";
  const display = timer.querySelector("[data-timer-display]");
  const status = timer.querySelector("[data-timer-status]");
  const toggleButton = timer.querySelector("[data-timer-toggle]");
  const resetButton = timer.querySelector("[data-timer-reset]");

  const initialState = () => ({
    remainingMs: durationMs,
    deadlineMs: null,
    phase: "ready",
  });

  const saveState = (state) => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(state));
    } catch {
      // The timer still works in memory when storage is unavailable.
    }
  };

  const loadState = () => {
    try {
      const stored = JSON.parse(window.localStorage.getItem(storageKey));
      if (
        stored &&
        Number.isFinite(stored.remainingMs) &&
        stored.remainingMs >= 0 &&
        stored.remainingMs <= durationMs &&
        ["ready", "running", "paused", "finished"].includes(stored.phase) &&
        (stored.phase !== "running" || Number.isFinite(stored.deadlineMs))
      ) {
        return stored;
      }
    } catch {
      // Invalid or unavailable storage starts a fresh local timer.
    }
    return initialState();
  };

  let timerState = loadState();

  const remainingNow = () => {
    if (timerState.phase === "running") {
      return Math.max(0, timerState.deadlineMs - Date.now());
    }
    return timerState.remainingMs;
  };

  const updateStatus = (message) => {
    if (status.textContent !== message) status.textContent = message;
  };

  const render = () => {
    let remainingMs = remainingNow();
    if (timerState.phase === "running" && remainingMs === 0) {
      timerState = { remainingMs: 0, deadlineMs: null, phase: "finished" };
      saveState(timerState);
    }

    const totalSeconds = Math.ceil(remainingMs / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    display.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    display.setAttribute("datetime", `PT${totalSeconds}S`);
    timer.dataset.phase = timerState.phase;

    if (timerState.phase === "running") {
      toggleButton.textContent = "Wstrzymaj";
      toggleButton.disabled = false;
      updateStatus("Odliczanie trwa");
    } else if (timerState.phase === "paused") {
      toggleButton.textContent = "Wznów";
      toggleButton.disabled = false;
      updateStatus("Odliczanie wstrzymane");
    } else if (timerState.phase === "finished") {
      toggleButton.textContent = "Czas minął";
      toggleButton.disabled = true;
      updateStatus("Czas modułu minął");
    } else {
      toggleButton.textContent = "Start";
      toggleButton.disabled = false;
      updateStatus("Gotowy do rozpoczęcia");
    }
  };

  toggleButton.addEventListener("click", () => {
    if (timerState.phase === "running") {
      const remainingMs = remainingNow();
      timerState = {
        remainingMs,
        deadlineMs: null,
        phase: remainingMs > 0 ? "paused" : "finished",
      };
    } else if (timerState.phase === "ready" || timerState.phase === "paused") {
      timerState = {
        remainingMs: timerState.remainingMs,
        deadlineMs: Date.now() + timerState.remainingMs,
        phase: "running",
      };
    }
    saveState(timerState);
    render();
  });

  resetButton.addEventListener("click", () => {
    timerState = initialState();
    saveState(timerState);
    render();
  });

  window.addEventListener("storage", (event) => {
    if (event.key === storageKey) {
      timerState = loadState();
      render();
    }
  });

  document.addEventListener("visibilitychange", render);
  render();
  window.setInterval(render, 500);
})();
