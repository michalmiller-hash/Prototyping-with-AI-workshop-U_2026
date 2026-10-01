---
number: 6
module_slug: modul-6
title: "Debugowanie i ukierunkowana poprawka"
tags: materials
permalink: false
---

### Opisz problem tak, by można go było odtworzyć

„Nie działa” nie mówi, w którym momencie pojawia się problem ani co powinno się stać. Dobry opis rozdziela fakty od wyjaśnienia przyczyny. Zapisz:

| Element raportu | Co wpisać |
|---|---|
| Kontekst | Jaki element lub wersję sprawdzasz? |
| Kroki | Co dokładnie zrobiłeś, w jakiej kolejności? |
| Oczekiwany wynik | Co miało się wydarzyć? |
| Rzeczywisty wynik | Co się stało zamiast tego? |
| Dowód | Co możesz pokazać: ekran, komunikat, obserwację? |

Zaobserwowane „po wykonaniu działania lista nie uległa zmianie” jest faktem. „Przyczyną jest niepoprawny komponent” to hipoteza. Oddzielając je, możesz poprosić AI o zbadanie prawdopodobnej przyczyny bez wymuszania z góry jednego rozwiązania.

### Poprawiaj kontrolowanie

Pętla debugowania może wyglądać tak:

~~~text
Zachowaj działającą wersję
        ↓
Odtwórz problem i zapisz dowody
        ↓
Ustal, co ma się zmienić
        ↓
Poproś o diagnozę lub jedną poprawkę
        ↓
Powtórz te same kroki
        ↓
Zachowaj, co zadziałało; cofnij lub zmień taktykę, gdy nie zadziałało
~~~

Po zmianie uruchom ponownie ten sam scenariusz. Jeśli poprawka mogła wpłynąć na sąsiednie zachowanie, sprawdź również ten obszar. To ważne, ponieważ poprawa w jednym miejscu może wprowadzić regresję w innym.

Wersja lub zrzut stanu „przed” jest punktem odniesienia. Jeśli narzędzie oferuje historię wersji, można wrócić do wcześniejszego stanu. Jeśli nie, zachowaj kopię, zrzut ekranu i treść istotnego polecenia.

### Kiedy zmienić taktykę

Źródło opisuje regułę trzech nieudanych prób: gdy podobne poprawki nie rozwiązują problemu, przejdź do innego podejścia. Możesz:

- cofnąć się do stabilnej wersji;
- poprosić o wyjaśnienie struktury lub diagnozę zamiast kolejnej zmiany;
- zawęzić problem;
- uprościć fragment prototypu;
- zbudować nową wersję na podstawie ustaleń z poprzedniej.

Nie trzeba czekać na trzy próby, jeśli widać, że kolejne polecenie tylko powtarza tę samą taktykę. Reguła pomaga przerwać pętlę, nie zachęca do wydawania kolejnych poleceń bez nowej informacji.

### Poprawa nie jest tym samym co dowód

Jeśli zmiana działa w twoim scenariuszu, możesz powiedzieć, że prototyp teraz zachowuje się zgodnie z tym kryterium. Nie możesz na tej podstawie stwierdzić, że wszyscy użytkownicy zrozumieją rozwiązanie ani że aplikacja będzie działać w produkcji.

**Praktyczna wskazówka.** Przed zmianą zachowaj punkt odniesienia. Po zmianie sprawdź to samo kryterium, którego użyłeś przed poprawką.

**Źródła:** *„Debugging Your Prototypes”* — „The debugging ladder”, „Describe the problem to the AI”, „The core workflow: copy, paste, fix”, „The three-strike rule”, „Managing versions”, „When to start over”, „How to rebuild effectively”; *„Testing Prototypes With Customers”* — „Observe more than you talk”.
