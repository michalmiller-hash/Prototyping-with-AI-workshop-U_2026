(() => {
  "use strict";

  const presenterMode = new URLSearchParams(window.location.search).get("tryb") === "prowadzacy";

  const hrefWithMode = (href) => {
    if (!presenterMode) return href;
    const destination = new URL(href, window.location.href);
    destination.searchParams.set("tryb", "prowadzacy");
    return destination.href;
  };

  if (presenterMode) {
    document.body.classList.add("is-presenter");
    document.querySelectorAll("[data-presenter-only]").forEach((element) => {
      element.hidden = false;
    });
    document.querySelectorAll("[data-participant-time]").forEach((element) => {
      element.hidden = true;
    });
    document.querySelectorAll("a[data-course-link]").forEach((link) => {
      link.href = hrefWithMode(link.getAttribute("href"));
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
      if (event.key === "Escape" && !mobileNavigation.hidden) closeMenu(true);
    });

    window.matchMedia("(min-width: 1051px)").addEventListener("change", (event) => {
      if (event.matches) closeMenu();
    });
  }

  if (document.body.dataset.page === "home") {
    const sections = [...document.querySelectorAll("[data-course-section]")];
    const introLink = document.querySelector("[data-nav-intro]");
    const moduleLinks = [...document.querySelectorAll("[data-nav-module]")];
    const previousLinks = [...document.querySelectorAll("[data-home-prev]")];
    const nextLinks = [...document.querySelectorAll("[data-home-next]")];
    let currentIndex = -1;
    let scrollFrame = null;

    const setStepLink = (links, targetIndex, direction) => {
      const disabled = targetIndex < 0 || targetIndex >= sections.length;
      links.forEach((link) => {
        link.classList.toggle("step-link-disabled", disabled);
        link.setAttribute("aria-disabled", String(disabled));
        if (!disabled) {
          link.href = hrefWithMode(`#${sections[targetIndex].id}`);
          link.innerHTML = direction === "previous"
            ? '<span aria-hidden="true">←</span> Poprzedni'
            : 'Następny <span aria-hidden="true">→</span>';
        }
      });
    };

    const updateSectionNavigation = () => {
      scrollFrame = null;
      let nextIndex = 0;
      const threshold = window.innerHeight * 0.45;
      sections.forEach((section, index) => {
        if (section.getBoundingClientRect().top <= threshold) nextIndex = index;
      });
      if (nextIndex === currentIndex) return;
      currentIndex = nextIndex;

      introLink.classList.toggle("is-current", currentIndex === 0);
      if (currentIndex === 0) introLink.setAttribute("aria-current", "location");
      else introLink.removeAttribute("aria-current");

      moduleLinks.forEach((link) => {
        const active = Number(link.dataset.navModule) === currentIndex;
        link.classList.toggle("is-current", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });

      setStepLink(previousLinks, currentIndex - 1, "previous");
      setStepLink(nextLinks, currentIndex + 1, "next");
    };

    const scheduleSectionNavigation = () => {
      if (scrollFrame === null) scrollFrame = window.requestAnimationFrame(updateSectionNavigation);
    };

    [...previousLinks, ...nextLinks].forEach((link) => {
      link.addEventListener("click", (event) => {
        if (link.getAttribute("aria-disabled") === "true") event.preventDefault();
      });
    });

    window.addEventListener("scroll", scheduleSectionNavigation, { passive: true });
    window.addEventListener("resize", scheduleSectionNavigation);
    window.addEventListener("hashchange", scheduleSectionNavigation);
    scheduleSectionNavigation();
  }

  if (!presenterMode) return;

  document.querySelectorAll("[data-timer]").forEach((timer) => {
    const durationMinutes = Number(timer.dataset.duration);
    const moduleNumber = timer.dataset.moduleNumber;
    const durationMs = durationMinutes * 60 * 1000;
    const storageKey = `prototypowanie-ai-modul-${moduleNumber}-timer`;
    const display = timer.querySelector("[data-timer-display]");
    const status = timer.querySelector("[data-timer-status]");
    const toggleButton = timer.querySelector("[data-timer-toggle]");
    const resetButton = timer.querySelector("[data-timer-reset]");

    const initialState = () => ({ remainingMs: durationMs, deadlineMs: null, phase: "ready" });

    const saveState = (state) => {
      try {
        window.localStorage.setItem(storageKey, JSON.stringify(state));
      } catch {
        // Timer nadal działa w pamięci, jeśli zapis lokalny jest niedostępny.
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
        ) return stored;
      } catch {
        // Nieprawidłowy zapis uruchamia nowy timer.
      }
      return initialState();
    };

    let timerState = loadState();
    const remainingNow = () => timerState.phase === "running"
      ? Math.max(0, timerState.deadlineMs - Date.now())
      : timerState.remainingMs;

    const render = () => {
      const remainingMs = remainingNow();
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
        status.textContent = "Odliczanie trwa";
      } else if (timerState.phase === "paused") {
        toggleButton.textContent = "Wznów";
        toggleButton.disabled = false;
        status.textContent = "Odliczanie wstrzymane";
      } else if (timerState.phase === "finished") {
        toggleButton.textContent = "Czas minął";
        toggleButton.disabled = true;
        status.textContent = "Czas modułu minął";
      } else {
        toggleButton.textContent = "Start";
        toggleButton.disabled = false;
        status.textContent = "Gotowy do rozpoczęcia";
      }
    };

    toggleButton.addEventListener("click", () => {
      if (timerState.phase === "running") {
        const remainingMs = remainingNow();
        timerState = { remainingMs, deadlineMs: null, phase: remainingMs > 0 ? "paused" : "finished" };
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
  });
})();
