---
number: 7
module_slug: modul-7
title: "Skill prototypowania z AI a zasady"
tags: materials
permalink: false
---

### Dwa różne rodzaje wskazówek

**Zasada** jest ogólną regułą kierującą decyzją człowieka. Przenosi się między projektami i narzędziami. Przykład: „Dopasuj zakres prototypu do pytania”.

**Skill prototypowania z AI** to w tym materiale robocza, wielokrotnego użytku instrukcja dla AI, która opisuje sposób postępowania przy określonej klasie zadań. Może wskazywać, kiedy zadać pytanie, jaki plan przygotować, jakie ograniczenia zachować i jak sprawdzić rezultat.

| Zasada | Instrukcja/Skill |
|---|---|
| Kieruje decyzją | Opisuje powtarzalne działanie AI |
| Zwykle jest krótka i ogólna | Zawiera warunki, kroki i oczekiwany rezultat |
| Może dotyczyć dowolnego narzędzia | Może wymagać dostosowania do narzędzia |
| Przykład: „Sprawdź zmianę na kryterium” | „Po zmianie pokaż kroki, które mam wykonać, i nie twierdź, że wynik jest zweryfikowany przed próbą” |

Repozytorium zawiera szkic Skill z proponowanymi trybami, ale nie definiuje oficjalnego standardu dla tego kursu. Dlatego powyższe rozróżnienie jest **propozycją warsztatową**, zgodną z celem projektu: stworzyć wielokrotnego użytku instrukcję oraz oddzielną listę zasad.

### Co powinna zawierać użyteczna instrukcja

Wersja robocza może określać:

1. **Kiedy ją stosować:** jakiego typu zadaniu pomaga?
2. **Jakie informacje zebrać:** cel, pytanie, kryterium, potrzebny kontekst.
3. **Jak postępować:** planować, podzielić pracę i zmieniać ograniczony zakres.
4. **Czego nie robić:** nie wymyślać brakującego celu ani nie dodawać niezamówionych funkcji.
5. **Jak sprawdzić wynik:** wskazać scenariusz, kryterium lub dowód.
6. **Co zrobić, gdy nie działa:** zebrać dowody, cofnąć, uprościć lub zaproponować inną taktykę.

Instrukcja nie powinna udawać, że każde narzędzie ma ten sam interfejs. Jeśli wymienia operację specyficzną dla aplikacji, oznacz ją jako wariant do dostosowania.

### Utrzymuj rozdział, ale pozwól zasadom wejść do Skill

Zasada może być jednym z fundamentów Skill. Nie trzeba jej przepisywać w wielu miejscach. Zasady pomagają człowiekowi rozstrzygnąć „co jest ważne?”, a Skill pomaga modelowi działać według ustalonego sposobu pracy. Jedno nie zastępuje drugiego.

**Praktyczna wskazówka.** Gdy zdanie zaczyna się od „zawsze wybierz…” albo „najpierw ustal…”, sprawdź, czy jest ogólną zasadą. Gdy określa, co AI ma zrobić, o co dopytać i jaki wynik zwrócić, jest bliższe instrukcji.

**Źródła:** *„AI prototyping skill”* — „Proponowane tryby”, „Reguła wyboru trybu” (materiał roboczy); *„TokenOPS - AI Coding Centre”* — „Principles”. Definicje i przykłady w tym module są propozycją warsztatową, nie kanoniczną definicją repozytorium.
