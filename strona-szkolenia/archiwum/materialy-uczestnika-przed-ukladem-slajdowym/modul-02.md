---
number: 2
module_slug: modul-2
title: "Rodzaje i wierność prototypów"
tags: materials
permalink: false
---

### 1. Koszt kształtował kolejność pracy

W klasycznym modelu zespoły najpierw przygotowywały tańsze artefakty — opis, szkic lub projekt ekranu — a dopiero później inwestowały w działające oprogramowanie. Każdy kolejny artefakt miał pozwolić lepiej ocenić kierunek przed następnym wydatkiem. To był sposób ograniczania ryzyka kosztownej pomyłki, a nie uniwersalna recepta na kolejność projektowania.

W materiale źródłowym ten proces jest opisany jako przejście od specyfikacji i makiet do projektów wizualnych, prototypów, minimalnego produktu (MVP) i pełnego produktu. Traktuj go jako uproszczony model historycznego przepływu, nie obowiązkową sekwencję.

AI może obniżyć wysiłek potrzebny do przygotowania niektórych działających wersji. Dzięki temu prototyp może pojawić się wcześniej — podczas eksploracji, uzgadniania kierunku lub sprawdzania zachowania. Tempo i koszt nadal zależą od zadania, narzędzia i potrzebnej jakości. Wcześniejszy prototyp nie zwalnia z nazwania pytania ani oceny tego, czego rezultat faktycznie dowodzi.

Dlatego warto rozwijać prototypowanie jako umiejętność doboru: nie po to, by budować coś przy każdej okazji, lecz by rozpoznać, kiedy działający artefakt pomoże się czegoś dowiedzieć, porównać kierunki lub wyjaśnić pomysł.

**Najpierw nazwij decyzję.** Nie zaczynaj od „co zbudować?”, tylko od „czego nie wiem i co chcę rozstrzygnąć?”. Prototyp jest użyteczny wtedy, gdy dostarcza materiału do konkretnej decyzji.

### 2. Rodzaj prototypu odpowiada na inne pytanie

| Rodzaj | Pytanie | Na czym się koncentruje |
|---|---|---|
| **Koncepcyjny** | Który kierunek warto dalej eksplorować? | Porównanie kilku uproszczonych wariantów, zanim wybierzesz jeden. |
| **Projektowy** | Jak ma działać i wyglądać wybrany kierunek? | Szczegóły oraz kluczowe zachowania potrzebne do uzgodnienia rozwiązania. |
| **Badawczy** | Jak ludzie rozumieją rozwiązanie i jak z niego korzystają? | Wiarygodne doświadczenie, które pozwala obserwować zachowanie bez zbędnych rozpraszaczy. |
| **Techniczny** | Czy istotny element da się zbudować i jak będzie działał? | Sprawdzenie konkretnego ryzyka technicznego; interfejs może nie być potrzebny. |

To cztery cele, nie cztery obowiązkowe etapy. Możesz wrócić do eksploracji po informacji zwrotnej, użyć więcej niż jednego rodzaju albo uznać, że obecny prototyp już odpowiada na pytanie.

**Koncepcyjny — eksploruj, gdy rozwiązanie jest niejasne.** Zestaw kilka kierunków i zostaw miejsce na ich porównanie. Szkic, uproszczony przepływ lub przykładowe dane mogą wystarczyć. Dopracowanie wyglądu zwykle nie pomaga jeszcze rozstrzygnąć, który pomysł warto rozwijać.

**Projektowy — doprecyzuj, gdy kierunek został wybrany.** Pokaż szczegóły ważne dla rozmowy, zwłaszcza kluczowe interakcje. Prototyp może wyjaśnić, jak doświadczenie ma działać, ale nie zastępuje kontekstu strategicznego, uzasadnienia, celów ani kryteriów sukcesu, które opisuje specyfikacja produktu.

**Badawczy — przygotuj doświadczenie do obserwacji.** Wygląd, działanie i dane powinny być wiarygodne na tyle, by nie odciągały uwagi od badanego zachowania. Użyj danych przykładowych lub symulowanych, jeśli wystarczą do pytania. W tym warsztacie prawdziwe integracje i dane produkcyjne nie są wymagane.

**Techniczny — wyizoluj ryzyko wykonalności.** Sprawdź, czy ważny mechanizm może działać w potrzebny sposób. Test może odbywać się bez ekranu i skupiać na wyniku, wydajności lub zachowaniu systemu. Przy złożonym ryzyku warto włączyć osobę z kompetencjami inżynierskimi.

### 3. Cel, wierność i zakres to osobne wybory

Nie istnieje jedna skala, na której prototyp przechodzi od „słabego” do „dobrego”. **Cel** mówi, jakiej decyzji służy. **Wierność** mówi, jak realistyczne muszą być wybrane cechy. **Zakres** określa, jak duży fragment rozwiązania obejmuje.

| Wymiar | Co wybierasz? | Pytanie pomocnicze |
|---|---|---|
| Cel | Decyzję lub niewiadomą | Co chcę rozjaśnić? |
| Wierność wyglądu | Podobieństwo wizualne | Czy wygląd musi przypominać zamierzony produkt? |
| Wierność interakcji | Realizm zachowania | Które działania i odpowiedzi systemu muszą zadziałać? |
| Wierność danych | Realizm treści | Czy przykładowe dane wystarczą, by odtworzyć użycie? |
| Zakres | Wielkość testowanego fragmentu | Czy potrzebuję elementu, przepływu, większej części aplikacji, czy samego testu technicznego? |

Te wybory mogą łączyć się na różne sposoby: mały element może być dopracowany wizualnie; cały przepływ może pozostać szkicowy; test techniczny może nie mieć interfejsu. Wybierz tylko te cechy, które są potrzebne, by uzyskać wiarygodną obserwację do danego pytania.

Przykładowa reguła zapisu: **„Potrzebuję prototypu [rodzaj], o [wierności wybranych cech] i [zakresie], ponieważ chcę sprawdzić [pytanie].”** Możesz ją zastosować bez przebudowywania całej aplikacji.

### 4. Prototyp ma granice

- **Bez pytania łatwo dopracować niewłaściwą odpowiedź.** Sam fakt, że da się coś szybko zbudować, nie mówi jeszcze, czy rozwiązuje ważny problem. Jeśli problem lub założenie są niejasne, wróć do ich nazwania.
- **Dopracowany wygląd może wyglądać na dowód dojrzałości.** Prototyp nie dowodzi sam z siebie, że rozwiązanie ma wartość dla użytkownika, zostało potwierdzone w badaniu albo jest gotowe do wdrożenia. Wcześnie wybrana wysoka wierność może też utrudnić porównanie innych kierunków.
- **Prototyp i specyfikacja odpowiadają na różne potrzeby.** Prototyp dobrze pokazuje, co ma się dziać; opis produktu nadal może być potrzebny do wyjaśnienia, dlaczego to budujemy, jakie cele wspiera i po czym ocenimy rezultat.
- **Wynik AI nie musi być zgodny co do piksela ani powtarzalny.** Nawet z kontekstem systemu projektowego prototyp może wymagać korekty. Gdy dokładność wizualna jest krytyczna, przygotuj osobny przegląd i dopracowanie.
- **Prototyp nie jest automatycznie kodem produkcyjnym.** AI może uprościć integracje, pominąć ograniczenia istniejącego systemu lub nie poradzić sobie ze złożonym mechanizmem. Ustal, kiedy potrzebna jest pomoc inżynierska i oddziel test prototypu od decyzji o wdrożeniu.

### 5. Kultura prototypowania rozwija się przez praktykę

Niższy koszt tworzenia wersji próbnych może poszerzyć grono osób, które eksplorują pomysły i pokazują je innym. Nie usuwa to potrzeby pracy nad strategią, doświadczeniem użytkownika, techniczną wykonalnością ani jakością produkcyjną. Wspólna eksploracja ułatwia rozmowę; odpowiedzialność i specjalistyczna wiedza nadal są potrzebne.

Materiał źródłowy proponuje kilka praktyk wspierających taką zmianę:

- **Ćwicz regularnie.** Narzędzie nie zastąpi prób; nieudana iteracja też może ujawnić, czego brakuje.
- **Prototypuj z celem.** Przed rozpoczęciem nazwij pytanie i zdecyduj, jakiej obserwacji szukasz.
- **Zostaw miejsce na eksperyment.** Nie każda wersja będzie użyteczna. Ważne, by można było ją ocenić i wyciągnąć z niej wniosek.
- **Wspieraj współpracę i naukę.** Uzgodnij, kto wnosi wiedzę produktową, projektową i techniczną oraz kiedy prototyp powinien przejść w dalsze opracowanie. Zarezerwuj przestrzeń na kolejne próby; celem nie jest perfekcyjny wynik za pierwszym razem.

**Reguła do własnej aplikacji:** zapisz pytanie, wybierz cel prototypu, wskaż które cechy muszą być wiarygodne, ogranicz zakres do potrzebnego fragmentu i zanotuj, co chcesz zaobserwować. Jeśli obecna wersja wystarcza, kolejna iteracja nie jest wymagana.

<!-- Źródła redakcyjne: plik przekazany przez użytkownika „Moduł 2: Rodzaje i wierność prototypów” (sekcje 1–4) oraz Raw/AI Prototyping/4. The New Product Development Lifecycle.md („The constraint that shaped everything”, „Prototypes are decision-making tools”, cztery typy prototypów, „Where prototypes fall short”, „Building a prototyping culture”). -->
