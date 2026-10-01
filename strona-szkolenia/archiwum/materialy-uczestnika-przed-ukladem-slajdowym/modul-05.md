---
number: 5
module_slug: modul-5
title: "Struktura prototypu i zakres zmiany"
tags: materials
permalink: false
---

### Ucz się rozpoznawać części, nie zapamiętywać kod

W wielu aplikacjach webowych widoczny interfejs składa się z mniejszych elementów. Powtarzalny element — na przykład ogólny typ karty, przycisku lub nagłówka — może występować w wielu miejscach. Widok główny łączy elementy, dane dostarczają treść, a style wpływają na wygląd. Konkretne narzędzia mogą organizować projekt inaczej; to model pomocniczy, nie uniwersalna mapa wszystkich aplikacji.

| Część projektu | Co może obejmować | Pytanie, które pomaga zadać |
|---|---|---|
| Widok lub komponent | Widoczny element i jego zachowanie | Który element chcę zmienić? |
| Dane | Treści, rekordy i ich relacje | Czy problem dotyczy treści, czy wyglądu? |
| Style | Kolory, układ, typografia, odstępy | Czy to zmiana wizualna? |
| Logika lub stan | Reakcja systemu na działania | Jaka reguła ma się zmienić? |
| Plik główny lub układ projektu | Sposób łączenia elementów | Gdzie element jest używany? |

Nie musisz umieć czytać całego kodu. Pomaga już rozróżnienie, czy poprawka dotyczy treści, wyglądu, zachowania, czy danych. Jeśli widzisz nazwy plików, użyj ich jako wskazówki. Jeśli ich nie widzisz, opisz element na podstawie tego, co można zaobserwować.

### Lokalna zmiana zmniejsza niejednoznaczność

Ogólna prośba, taka jak „popraw aplikację”, pozostawia wiele decyzji modelowi. Precyzyjniejsza prośba określa:

- **Miejsce:** który widoczny element lub obszar?
- **Intencję:** co ma się poprawić?
- **Granice:** czego nie ruszać?
- **Kryterium:** jak sprawdzisz, że zmiana osiągnęła cel?

Poproszenie najpierw o plan daje możliwość sprawdzenia, czy AI zrozumiało zakres. Odpowiedź AI o lokalizacji pliku traktuj jako hipotezę. Sprawdź ją, jeśli narzędzie umożliwia wgląd w strukturę. Zmiana wspólnego komponentu może mieć wpływ w wielu miejscach — po jej wprowadzeniu sprawdź te miejsca, które mogą być nią dotknięte.

### Zakres zmiany a zakres prototypu

W module 2 decydujesz, jak szeroki ma być prototyp potrzebny do pytania. Tutaj określasz, gdzie i jak w istniejącym projekcie wprowadzić jedną zmianę. To podobne, lecz odrębne decyzje: mały prototyp może wymagać poprawy, która dotyczy kilku połączonych elementów; duży prototyp może wymagać tylko zmiany jednej treści.

**Praktyczna wskazówka.** Zanim poprosisz o modyfikację, zapisz: „Zmień [element], aby [cel]. Pozostaw [granice] bez zmian. Sprawdzę to przez [kryterium]”.

**Źródła:** *„Software Architecture for Non-Technical Builders”* — „The frontend”, „React components”, „The file structure”, „Walking through the UI”, „What this means for your prototyping”; *„From Prompt to Prototype in Minutes”* — „Code View”.
