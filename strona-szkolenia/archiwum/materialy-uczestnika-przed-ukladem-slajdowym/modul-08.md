---
number: 8
module_slug: modul-8
title: "Synteza: roboczy Skill i lista zasad"
tags: materials
permalink: false
---

### Złóż proces wokół decyzji

Powtarzalna metoda nie oznacza, że za każdym razem trzeba wypełnić długi szablon. Oznacza, że umiesz rozpoznać ważne pytanie, dobrać odpowiednią technikę, obserwować wynik i zdecydować, co dalej. Przy prostym zadaniu wystarczy kilka zdań. Przy większym ryzyku przydadzą się dokładniejsze kryteria i zapis wersji.

~~~text
1. Jaką decyzję chcę podjąć?
2. Jaki prototyp dostarczy potrzebnej informacji?
3. Jaki kontekst musi znać AI?
4. Które zachowanie lub element chcę zobaczyć?
5. Jak ograniczę zmianę?
6. Jak sprawdzę rezultat?
7. Czego się dowiedziałem i jaki jest następny krok?
~~~

Nie każdy krok musi być osobnym promptem. Niektóre decyzje możesz podjąć przed rozpoczęciem pracy. W innych sytuacjach lepiej zatrzymać model i dopytać, zanim wygeneruje dalszą część prototypu.

### Zasady do wykorzystania

Poniższa lista jest propozycją zebraną z tematów warsztatu. Traktuj ją jako materiał do krytycznej adaptacji, nie niezmienny standard:

1. Zacznij od decyzji lub pytania, które chcesz rozstrzygnąć.
2. Dobierz cel, wierność i zakres prototypu do tego pytania.
3. Podaj kontekst istotny dla zadania i oznacz niewiadome.
4. Opisz ważne interakcje przez działania, stany, przejścia i widoczne rezultaty.
5. Ogranicz prośbę do wybranej zmiany i zachowaj stabilną wersję.
6. Sprawdź wynik na kryterium i rzeczywistym zachowaniu, nie na deklaracji AI.
7. Gdy kolejne próby nie pomagają, zmień taktykę lub uprość prototyp.
8. Oddziel to, co prototyp pokazuje, od tego, czego nie potwierdza.

### Wersja robocza Skill do dalszej edycji

Poniższy tekst jest propozycją instrukcji. W zależności od narzędzia może pozostać promptem, plikiem kontekstu projektu albo zostać przełożony na funkcję instrukcji wielokrotnego użytku.

~~~text
Pomagaj mi prototypować, aby odpowiedzieć na moje pytanie, a nie aby
domyślnie budować gotowy produkt.

1. Ustal mój cel, pytanie i kryterium sprawdzenia.
   Jeśli brakuje decyzji wpływającej na zakres, zapytaj; nie wymyślaj jej.
2. Zaproponuj cel prototypu, potrzebną wierność i zakres.
   Krótko wyjaśnij wybór.
3. Użyj kontekstu potrzebnego do bieżącego zadania.
   Oddziel zachowanie, odniesienia wizualne, dane, ograniczenia i założenia.
4. Przed większą zmianą pokaż krótki plan.
   Zmieniaj wyłącznie wybrany przeze mnie element lub zakres.
5. Po zmianie wskaż, co zostało zmienione, i podaj kroki weryfikacji.
   Nie uznawaj pracy za sprawdzoną, dopóki nie obejrzymy zachowania.
6. Jeśli problem nie ustępuje po kilku różnych próbach, podsumuj dowody
   i zaproponuj cofnięcie, uproszczenie albo nową wersję do porównania.
7. Zachowuj moje decyzje, nazwane granice i otwarte pytania.
   Nie dodawaj funkcji ani ekranów, o które nie prosiłem.

Pytanie / element do pracy:
[uzupełnij własną treścią]

Kryterium sprawdzenia:
[uzupełnij własną treścią]
~~~

### Jak utrzymywać metodę przydatną

Po warsztacie sprawdź instrukcję na innym zadaniu. Zwróć uwagę, czy model:

- dopytuje o kluczowe braki zamiast wymyślać wymagania;
- stosuje kontekst powiązany z zadaniem;
- zmienia wskazany zakres;
- podaje konkretne kroki weryfikacji;
- oddziela wynik zaobserwowany od własnej deklaracji.

Jeśli Skill staje się długi lub zawiera sprzeczne instrukcje, usuń duplikaty i przenieś szczegóły do materiału uzupełniającego. Jeśli element zależy od konkretnego narzędzia, opisz wariant zamiast przedstawiać go jako regułę dla wszystkich. Nie zakładaj, że sama instrukcja obniża koszty: jej wpływ trzeba ocenić w konkretnym narzędziu i zadaniu.

**Praktyczna wskazówka.** Po każdej iteracji zapisz najważniejszą decyzję i dowód, który ją uzasadnił. Z czasem aktualizuj zasady na podstawie doświadczenia.

**Źródła:** synteza materiałów z modułów 1–7; *„TokenOPS - AI Coding Centre”* — „Principles”; *„Spec-Driven Development — best practices (so far)”* — „Balanced level of detail”, „Acceptance criteria”. Lista zasad i Skill są propozycjami warsztatowymi.
