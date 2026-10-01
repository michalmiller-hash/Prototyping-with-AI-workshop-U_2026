---
number: 3
slug: modul-3
title: "Przygotowanie kontekstu"
duration: 35
tags: modules
permalink: false
slides:
  - title: "Kontekst to więcej niż pojedyncze polecenie"
    content: |-
      Narzędzie może korzystać z bieżącego polecenia, wcześniejszej rozmowy, informacji o projekcie, plików, referencji wizualnych i dostępnych funkcji.

      Inżynieria kontekstu polega na dobieraniu tych informacji do konkretnego celu.
    sources:
      - "Raw/AI Prototyping/6. Context Engineering for Prototyping.md — What is context engineering?"
  - title: "Kontekst może opisywać cel, wygląd i dane"
    content: |-
      | Wymiar | Co pomaga wyjaśnić? | Przykład materiału |
      |---|---|---|
      | Funkcjonalny | Cel, zachowanie, warunki i ograniczenia | Opis reguł lub kryterium |
      | Wizualny | Wygląd, hierarchię i układ | Referencja, szkic lub zrzut |
      | Danych | Kształt i treść informacji | Struktura pól lub mała próbka |

      Do jednego zadania nie zawsze potrzebne są wszystkie trzy wymiary.
    sources:
      - "Raw/AI Prototyping/6. Context Engineering for Prototyping.md — Functional context; Visual context; Data context"
  - title: "Oddziel ustalenia od tego, czego jeszcze nie wiadomo"
    content: |-
      Niedopowiedziana informacja może skłonić AI do samodzielnego zgadywania. Proponowane oznaczenia warsztatowe pomagają nazwać status informacji:

      - **Ustalono** — wymaganie lub decyzja.
      - **Przykład** — materiał pomocniczy, który można zastąpić.
      - **Założenie** — tymczasowy wybór bez potwierdzenia.
      - **Otwarte** — decyzja wymagająca doprecyzowania.
    sources:
      - "Objaśnienie warsztatowe: kategorie ustalone / przykład / założenie / otwarte porządkujące status informacji."
  - title: "Użyteczny kontekst jest kompletny względem celu, niekoniecznie długi"
    content: |-
      Zbyt mało informacji pozostawia ważne decyzje domysłom. Nadmiar materiału może rozpraszać uwagę od bieżącej zmiany.

      Wartość kontekstu zależy od jego związku z zadaniem. Informacja niepotrzebna do bieżącego pytania może zostać pominięta.
    sources:
      - "Raw/AI Prototyping/6. Context Engineering for Prototyping.md — What is context engineering?; What your prototyping tool needs to know"
      - "Raw/AI Prototyping/7. Defining Your Product Context.md — Project knowledge"
  - title: "Próbka danych i prywatność też są częścią kontekstu"
    content: |-
      Zamiast danych z produkcji można użyć syntetycznej próbki, jeśli odpowiada pytaniu. Prawdziwa baza ani integracja nie są automatycznie potrzebne.

      Danych osobowych i poufnych nie należy przekazywać narzędziu bez odpowiedniej zgody i zabezpieczeń. Objętość przekazywanego kontekstu może wpływać na użycie tokenów, ale sam krótszy kontekst nie gwarantuje konkretnej oszczędności.
    sources:
      - "Raw/AI Prototyping/6. Context Engineering for Prototyping.md — Data context; Raw/Test complex interactions/Test Complex Interactions Earlier with AI Prototyping.md — How to Prototype Complex Interfaces with AI"
      - "Project context: AI-assisted prototyping workshop.md — TokenOps"
---
