---
number: 3
module_slug: modul-3
title: "Przygotowanie kontekstu"
tags: materials
permalink: false
---

### Kontekst to coś więcej niż pojedynczy prompt

Narzędzie otrzymuje polecenie, ale może też korzystać z wcześniejszej rozmowy, informacji zapisanych w projekcie, plików, referencji wizualnych i dostępnych funkcji. Projektowanie tego zestawu informacji pod konkretne zadanie nazywamy inżynierią kontekstu.

Lepszy kontekst nie oznacza automatycznie dłuższego promptu. Ważne jest, aby model wiedział, co ma osiągnąć, jak ma się zachować wynik, jakie materiały są istotne i gdzie nie powinien zgadywać. Zbyt skąpy kontekst zostawia decyzje domysłom. Zbyt obszerny może utrudnić skupienie na bieżącej zmianie i zwiększać ilość przetwarzanej treści.

### Trzy rodzaje kontekstu

| Rodzaj | Co wyjaśnia | Możliwe materiały |
|---|---|---|
| Funkcjonalny | Cel, zachowanie, warunki i ograniczenia | Opis zadania, reguły, kryterium sprawdzenia |
| Wizualny | Wygląd, hierarchię i układ | Referencja, zrzut, szkic, wireframe, opis |
| Danych | Kształt i treść informacji pokazywanych w prototypie | Schemat pól, relacje, mały zestaw przykładów |

Nie zawsze potrzebujesz wszystkich trzech. Jeżeli zadanie dotyczy struktury informacji, szczegółowa próbka danych może być przydatna. Jeżeli pytanie dotyczy wyłącznie logiki przejścia, kontekst wizualny może nie być potrzebny. Zaznaczenie „nie dotyczy” jest lepsze niż dopisywanie informacji bez celu.

### Fakty, założenia i decyzje

AI może potraktować niedopowiedziany szczegół jako zaproszenie do samodzielnego wyboru. Oznacz więc rodzaj informacji:

- **Ustalono:** wymaganie, które uczestnik już zdecydował.
- **Przykład:** pomocnicza treść, która może zostać zastąpiona.
- **Założenie:** tymczasowy wybór, którego prawdziwość nie została potwierdzona.
- **Otwarte:** decyzja, której AI nie powinno podejmować bez pytania.

Krótki kontekst może wyglądać tak:

| Pole | Pytanie pomocnicze |
|---|---|
| Cel | Po co wykonuję tę zmianę? |
| Zachowanie | Co ma się wydarzyć i w jakich warunkach? |
| Wizualne | Czy wygląd ma znaczenie dla bieżącego pytania? |
| Dane | Jakie informacje są niezbędne do realistycznej próby? |
| Granice | Czego nie zmieniać? |
| Niewiadome | O co AI powinno dopytać? |
| Kryterium | Po czym rozpoznam wynik? |

### Dane i prywatność

Przykładowe dane powinny pasować do zadania i przedstawiać potrzebne przypadki. W prototypie często wystarczy mała syntetyczna próbka; nie trzeba integrować prawdziwej bazy. Jeśli rozważasz użycie danych z pracy, sprawdź zasady organizacji oraz politykę narzędzia. Nie umieszczaj danych osobowych ani poufnych w narzędziu bez odpowiedniej zgody i zabezpieczeń.

**Wniosek ze źródeł:** kontekst funkcjonalny, wizualny i danych pomaga lepiej określić, co budować. **Objaśnienie dydaktyczne:** optymalny kontekst jest kompletny względem zadania, ale niekoniecznie obszerny.

**Praktyczna wskazówka.** Przed wysłaniem polecenia podkreśl jedną informację, która najbardziej pomoże AI, i usuń jedną, która nie ma związku z bieżącym pytaniem.

**Źródła:** *„Context Engineering for Prototyping”* — „What is context engineering?”, „Functional context”, „Visual context”, „Data context”; *„Defining Your Product Context”* — „Project knowledge”, „Design system”, „Maintaining your context over time”.
