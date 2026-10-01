---
number: 5
slug: modul-5
title: "Struktura prototypu i zakres zmiany"
duration: 25
tags: modules
permalink: false
slides:
  - title: "Do ograniczenia zmiany nie trzeba znać całego kodu"
    content: |-
      Widoczny element aplikacji może łączyć widok, treść, dane i logikę. Wystarczy rozpoznać, czy temat dotyczy wyglądu, zachowania, treści czy danych, by lepiej określić obszar pracy.

      Struktura różni się między narzędziami; prosta mapa części jest pomocą w rozmowie, nie uniwersalnym modelem każdej aplikacji.
    sources:
      - "Raw/AI Prototyping/8. Software Architecture for Non-Technical Builders.md — The frontend; React components; The file structure"
  - title: "Precyzyjna zmiana wskazuje miejsce, intencję, granice i kryterium"
    content: |-
      | Element opisu | Co doprecyzowuje? |
      |---|---|
      | Miejsce | Który widoczny element lub obszar? |
      | Intencja | Co ma się poprawić? |
      | Granice | Czego zmiana ma nie naruszyć? |
      | Kryterium | Po czym rozpoznać oczekiwany rezultat? |

      Odpowiedź AI o lokalizacji pliku jest hipotezą, którą można sprawdzić, jeśli struktura projektu jest widoczna.
    sources:
      - "Raw/AI Prototyping/8. Software Architecture for Non-Technical Builders.md — Walking through the UI"
  - title: "Wspólny komponent może rozszerzyć zasięg poprawki"
    content: |-
      Powtarzalny element, na przykład przycisk lub karta, może pojawiać się w wielu miejscach. Zmiana wspólnego komponentu może więc wpłynąć na kilka ekranów.

      Zakres wpływu zależy od budowy projektu; po zmianie warto zwrócić uwagę na inne użycia tego samego elementu.
    sources:
      - "Raw/AI Prototyping/8. Software Architecture for Non-Technical Builders.md — React components"
  - title: "Zakres prototypu i zakres poprawki odpowiadają na różne pytania"
    content: |-
      Zakres prototypu mówi, jak duży fragment rozwiązania jest potrzebny do uzyskania informacji. Zakres zmiany dotyczy tego, gdzie i jak modyfikować istniejący projekt.

      Mały prototyp może wymagać zmiany kilku połączonych elementów; duży prototyp może wymagać tylko poprawki treści.
    sources:
      - "Raw/AI Prototyping/8. Software Architecture for Non-Technical Builders.md — What this means for your prototyping"
      - "plik użytkownika: Moduł 2: Rodzaje i wierność prototypów — sekcja 3"
  - title: "Węższy kontekst może ograniczyć niepotrzebne przetwarzanie"
    content: |-
      Mniejszy zestaw przesłanych informacji może oznaczać mniej tokenów wejściowych. To możliwy mechanizm, nie gwarantowany wynik. Zbyt wąski kontekst może ukryć potrzebne połączenie lub ograniczenie i prowadzić do błędów oraz kolejnych prób.

      Wpływ na liczbę tokenów i koszt zależy od narzędzia oraz zadania; bez pomiaru nie da się obiecać konkretnej oszczędności.
    sources:
      - "Raw/TokenOPS/TokenOPS - AI Coding Centre (1).md — Script instead of LLM; Context hygiene workflow"
      - "Project context: AI-assisted prototyping workshop.md — TokenOps"
---
