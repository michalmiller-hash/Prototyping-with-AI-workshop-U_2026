---
number: 2
module_slug: modul-2
title: "Rodzaje i wierność prototypów"
tags: materials
permalink: false
---

### Najpierw pytanie, potem poziom dopracowania

Słowo „prototyp” może oznaczać różne rzeczy. Jeden służy do porównania pomysłów, inny do uzgodnienia szczegółów doświadczenia, jeszcze inny do obserwacji użytkowników albo sprawdzenia ryzyka technicznego. Dlatego najpierw określ, jaką decyzję chcesz podjąć.

| Rodzaj prototypu | Pytanie, któremu może służyć | Na czym się koncentruje |
|---|---|---|
| Koncepcyjny | Który kierunek warto dalej eksplorować? | Alternatywy; wczesne wersje mogą być uproszczone |
| Projektowy | Jak dokładnie ma działać lub wyglądać wybrany kierunek? | Szczegóły interfejsu i kluczowe zachowania |
| Badawczy | Jak ludzie reagują na rozwiązanie lub jak z niego korzystają? | Wiarygodność potrzebna do obserwacji, realistyczny kontekst |
| Techniczny | Czy rozwiązanie jest wykonalne w ważnym aspekcie? | Ryzyko techniczne; interfejs może nie być potrzebny |

**Wniosek ze źródła:** są to cele prototypowania, nie cztery obowiązkowe etapy. Wybór zależy od pytania. Prototyp techniczny może być testem bez interfejsu, a koncepcyjny może celowo pomijać szczegóły.

### Cel, wierność i zakres to różne wymiary

Wierność mówi, jak blisko prototyp przypomina docelowe doświadczenie. Zakres mówi, jaką część rozwiązania obejmuje. Cel mówi, do czego ma posłużyć. Nie należy zlewać tych wyborów w jedną skalę „od słabego do dobrego”.

| Wymiar decyzji | Przykładowe pytania |
|---|---|
| Cel | Co chcę rozstrzygnąć: kierunek, zachowanie, reakcję, wykonalność? |
| Wierność wizualna | Jak podobny do zamierzonego wyglądu musi być artefakt? |
| Wierność interakcji | Które działania i odpowiedzi systemu muszą działać? |
| Wierność danych | Czy przykładowa treść musi realistycznie wspierać użycie? |
| Zakres | Czy potrzebuję całości, fragmentu, pojedynczego elementu czy testu technicznego? |

Można więc stworzyć mały, dopracowany wizualnie element; duży, szkicowy przepływ; lub techniczny test, który nie ma interfejsu. Wysoka wierność w jednym wymiarze nie oznacza wysokiej wierności we wszystkich pozostałych.

### Wierność jako dopasowanie, nie ocena

Większa szczegółowość wymaga czasu i może odciągnąć uwagę od pytania. Mniejsza szczegółowość może z kolei nie wystarczyć do obserwacji konkretnego zachowania. Wybierz poziom, który pozwala uzyskać użyteczny sygnał:

- Gdy eksplorujesz alternatywy, pozostaw miejsce na różne interpretacje.
- Gdy doprecyzowujesz wybrany kierunek, dodaj szczegóły ważne dla uzgodnienia.
- Gdy obserwujesz zachowanie, zadbaj o interakcję i treść wystarczające do wiarygodnej próby.
- Gdy sprawdzasz wykonalność, skup się na technicznym ryzyku, nie na dekoracji.

Dopracowany prototyp może wywoływać „pułapkę wierności”: ludzie uznają go za gotowy produkt, choć może zawierać uproszczenia, błędne założenia albo imitowane usługi. Oznaczaj, co jest realne, a co zasymulowane.

**Praktyczna wskazówka.** Zapisz wybór w jednym zdaniu: „Potrzebuję [rodzaj] prototypu, o [wierności] i [zakresie], ponieważ chcę sprawdzić [pytanie]”.

**Źródła:** *„The New Product Development Lifecycle”* — sekcje o czterech rodzajach prototypów i „Where prototypes fall short”; *„From Prompt to Prototype in Minutes”* — „What’s Missing (and Why That’s Fine)”; *„Test Complex Interactions Earlier with AI Prototyping”* — „Don’t Fall for the Fidelity Trap”.
