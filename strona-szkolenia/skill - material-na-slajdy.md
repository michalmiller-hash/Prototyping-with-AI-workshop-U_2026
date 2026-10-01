---
name: material-na-slajdy
description: >-
  Opracowuj treść prezentacji modułów warsztatu z materiałów źródłowych.
  Grupuj slajdy w moduły, dobieraj zakres i kolejność do celu komunikacyjnego,
  pisz treść dla uczestnika i zapisuj źródła redakcyjnie. Stosuj przy selekcji,
  syntezie i redakcji materiału warsztatowego. Nie traktuj modułu jako skrótu
  do osobnej teorii; zadania i pogłębione materiały są osobnymi etapami.
---

# Materiał na slajdy

## Zakres pracy

W tym warsztacie strona główna jest prezentacją, a każdy moduł jest grupą
slajdów stanowiących główną treść dla uczestników. Pracuj nad treścią, którą
uczestnik zobaczy na slajdzie. Nie twórz równoległego skrótu modułu i
rozwiniętej teorii na osobnej podstronie.

Zadania warsztatowe są oddzielnym strumieniem pracy. Nie dodawaj do slajdów
instrukcji, kroków ćwiczenia, oczekiwanych artefaktów, rezultatów ani pytań
samooceny. Nie projektuj treści slajdów pod założenie, że uczestnik wykona
konkretne zadanie. Osobne materiały pogłębione mogą powstać później, na
wyraźną prośbę.

`strona-szkolenia/style-guide.md` zawiera wskazówki redakcyjne dla tej
prezentacji. Projekt, czas, uczestników i stałe ograniczenia sprawdzaj w
`Project context: AI-assisted prototyping workshop.md` oraz `AGENTS.md`.

## 1. Rozpoznaj materiał i jego podstawę

Przejrzyj cały dostępny materiał w zakresie potrzebnym do decyzji o slajdach.
Pracuj wskazanymi przez użytkownika plikami lub pasującymi źródłami z `Raw/`;
nie czytaj całego katalogu bez potrzeby. Nie wnioskuj o treści pliku tylko z
nazwy lub nagłówków. Zapisuj konkretny plik i sekcję, na których opierasz
slajd.

Rozdzielaj:

- informację podaną w źródle;
- interpretację lub wniosek redakcyjny;
- propozycję dydaktyczną lub przykład.

Nie zwiększaj pewności twierdzenia. Zachowuj istotne warunki, ograniczenia,
jednostki i rozróżnienia. Sprzeczność lub brak w źródłach nazwij zamiast
rozstrzygać go po cichu. Nie twierdź, że zweryfikowano źródła, do których nie
było dostępu. Nie dodawaj researchu zewnętrznego do zwykłej redakcji; weryfikuj
zewnętrznie, gdy tego wymaga prośba, aktualność lub bezpieczeństwo.

## 2. Wybierz treść i kolejność

Ustal z bieżącej prośby i kontekstu, co uczestnik ma zrozumieć. Wybieraj
zagadnienia według ich związku z tematem, kosztu pominięcia, wartości
wyjaśniającej i odrębności. Nie przydzielaj miejsca proporcjonalnie do
długości źródła.

Buduj ciąg slajdów, który daje potrzebny kontekst, wyjaśnia pojęcia lub
mechanizmy, a następnie pokazuje ograniczenia i znaczenie tematu. To wskazówka
do komponowania, nie stały układ sekcji. Nie wymagaj dla każdego slajdu pól
„cel”, „kluczowa myśl”, „sposób pokazania” i „przejście dalej”; użyj takiej
notatki tylko wtedy, gdy faktycznie pomaga w danym przypadku.

Jeden slajd przekazuje jedną główną myśl. Jeśli zagadnienie jest złożone,
rozłóż je na kilka kolejnych slajdów, z których każdy wnosi czytelny krok.
Nie utożsamiaj pojedynczej myśli ze sztywnym limitem zdań ani punktów.

W warsztacie 270 minut jest ramą całego spotkania. Zachowuj aktualne czasy
modułów jako robocze sloty, ale nie dziel ich na teorię, ćwiczenia,
demonstrację i refleksję, dopóki użytkownik osobno nie ustali tych elementów.
Nie wyprowadzaj liczby slajdów mechanicznie z minut.

## 3. Napisz treść slajdu

Nadaj slajdowi tytuł i treść gotową do wyświetlenia uczestnikowi. Tytuł może
przekazywać wniosek, zadawać pytanie lub nazywać pojęcie, zależnie od funkcji
slajdu. Treść może wykorzystywać akapit, listę, tabelę, cytat lub prostą
sekwencję. Dobierz formę do relacji między informacjami; nie twórz dekoracji
bez funkcji.

Slajd powinien być zrozumiały bez ukrytych notatek. Wyjaśnij potrzebne pojęcie
i umieść krytyczne zastrzeżenie obok twierdzenia, którego dotyczy. Używaj
języka polskiego i terminów zgodnych w całym warsztacie. Nie dodawaj ćwiczeń,
instrukcji, zadań dla uczestnika, rezultatu do oddania ani samooceny.

## 4. Zapisz materiał w aktywnym formacie

Edytuj pliki `strona-szkolenia/src/content/moduly/modul-XX.md`. Każdy plik
przechowuje numer, slug, tytuł, roboczy czas modułu oraz tablicę `slides`.
Każdy slajd ma `title` i `content` w Markdown. Opcjonalne pole `sources`
zapisuje źródła redakcyjne; strona nie renderuje tego pola.

Przykład:

```yaml
slides:
  - title: "Prototyp może odpowiadać na różne pytania"
    content: |-
      Treść slajdu dla uczestnika w Markdown.
    sources:
      - "Raw/ścieżka-do-pliku.md — nazwa sekcji"
```

Nie zapisuj równoległej wersji „skrót” i „rozwinięcie”. Nie twórz teraz
podstron ani plików z pogłębioną teorią. Treści w archiwum są materiałem
historycznym, nie aktywnym źródłem wyświetlanej strony.

## 5. Sprawdź gotowy ciąg

Przeczytaj same tytuły w kolejności i sprawdź, czy prowadzą przez temat bez
przeskoku. Następnie sprawdź każdy slajd względem dostępnego źródła i
uczestnika:

- Czy przekazuje jedną główną myśl i jest zrozumiały w swoim miejscu?
- Czy ważny warunek lub ograniczenie pozostał widoczny?
- Czy odróżniono twierdzenie źródłowe od interpretacji?
- Czy forma pomaga zrozumieć treść?
- Czy w treści nie ma instrukcji zadania, oczekiwanego artefaktu ani samooceny?
- Czy źródło zapisano w metadanych, a nie w treści dla uczestnika?

Dla TokenOps opisuj mechanizm i kompromisy. Nie wymyślaj pomiarów ani
konkretnych oszczędności tokenów lub kosztów. Nie deklaruj wykonania kontroli,
której faktycznie nie przeprowadzono.
