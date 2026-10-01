---
number: 6
slug: modul-6
title: "Debugowanie i ukierunkowana poprawka"
duration: 35
tags: modules
permalink: false
slides:
  - title: "Opis problemu oddziela obserwację od wyjaśnienia"
    content: |-
      „Nie działa” nie wskazuje, co się wydarzyło. Opis przydatny do diagnozy rozróżnia fakty od hipotezy o przyczynie.

      | Typ informacji | Przykładowy zapis |
      |---|---|
      | Obserwacja | Po wskazanym działaniu widoczny stan pozostał bez zmian. |
      | Hipoteza | Przyczyna może leżeć w sposobie aktualizacji tego stanu. |
    sources:
      - "Raw/AI Prototyping/9. Debugging Your Prototypes.md — Describe the problem to the AI"
  - title: "Odtwarzalny raport wskazuje kontekst, kroki i wynik"
    content: |-
      Przydatny opis problemu zawiera:

      - **Kontekst:** który element lub wariant jest sprawdzany?
      - **Kroki:** co wydarzyło się po kolei?
      - **Oczekiwany wynik:** co miało się stać?
      - **Rzeczywisty wynik:** co się stało?
      - **Dowód:** co można zaobserwować lub pokazać?
    sources:
      - "Raw/AI Prototyping/9. Debugging Your Prototypes.md — Describe the problem to the AI"
  - title: "Kontrolowana poprawka zaczyna się od zachowania punktu odniesienia"
    content: |-
      **Zachowaj stan → odtwórz problem → ustal zmianę → zdiagnozuj lub popraw → powtórz te same kroki.**

      Porównanie tych samych scenariuszy pomaga zauważyć, co rzeczywiście się zmieniło. Jeśli poprawka może dotknąć sąsiednie zachowanie, ten obszar także może wymagać sprawdzenia.
    sources:
      - "Raw/AI Prototyping/9. Debugging Your Prototypes.md — The core workflow; Managing versions"
  - title: "Powtarzanie nieskutecznej taktyki to sygnał do zmiany podejścia"
    content: |-
      Po kolejnych próbach bez użytecznej zmiany można wrócić do stabilnej wersji, zawęzić problem, poprosić o diagnozę albo uprościć fragment prototypu.

      Reguła kilku prób pomaga przerwać pętlę. Nie oznacza, że trzeba czekać, jeśli już widać, że kolejne polecenie powtarza ten sam ruch bez nowych informacji.
    sources:
      - "Raw/AI Prototyping/9. Debugging Your Prototypes.md — The three-strike rule; When to start over"
      - "Objaśnienie redakcyjne: przerwanie powtarzanej taktyki nie wymaga czekania na ustaloną liczbę prób."
  - title: "Udana próba potwierdza kryterium w danym scenariuszu"
    content: |-
      Jeśli prototyp zachował się zgodnie z kryterium w odtworzonym scenariuszu, to jest informacja o tym zachowaniu w tej próbie.

      Nie dowodzi to, że każdy użytkownik zrozumie rozwiązanie ani że aplikacja będzie działać produkcyjnie.
    sources:
      - "Raw/AI Prototyping/9. Debugging Your Prototypes.md — The core workflow"
      - "Raw/AI Prototyping/14. Testing Prototypes With Customers.md — Start with the question, not the prototype"
---
