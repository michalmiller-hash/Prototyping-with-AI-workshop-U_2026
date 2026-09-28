# Materiały uczestnika: prototypowanie wspomagane przez AI

> **Materiał po warsztacie.** Każdy moduł zawiera krótką wersję przeznaczoną pierwotnie na slajd, zachowaną z pliku „Workshop draft.md”, oraz wersję rozwiniętą do samodzielnego czytania i wracania do pojęć po szkoleniu. Rozwinięcia dodają kontekst i przykłady; nie zmieniają swobody wyboru celu i zawartości własnej aplikacji muzycznej.

## Jak korzystać z materiałów

Wersja „na slajd” ma być krótkim przypomnieniem jednej myśli. Wersja rozwinięta objaśnia pojęcia, pokazuje relacje między nimi i wskazuje ograniczenia. Czytaj ją wtedy, gdy przygotowujesz kolejną iterację albo chcesz przypomnieć sobie, dlaczego dana technika ma znaczenie.

W treści rozróżniam:

- **Wniosek ze źródła** — podsumowanie materiałów wskazanych na końcu modułu.
- **Objaśnienie dydaktyczne** — dodatkowy sposób wyjaśnienia pojęcia lub przykład, który pomaga zastosować wniosek. Nie jest cytatem ani osobnym ustaleniem źródła.
- **Praktyczna wskazówka** — możliwy do przetestowania sposób działania. Dopasuj go do własnego pytania, projektu i narzędzia.

Przykłady opisują techniki w sposób ogólny. Nie definiują obowiązkowej funkcji, ekranu ani przepływu dla aplikacji uczestnika.

## Mapa warsztatowej metody

**Objaśnienie dydaktyczne — skrót całego procesu**

Pytanie → dobór prototypu → kontekst → opis zachowania → wskazanie miejsca zmiany → poprawka → sprawdzenie → decyzja o następnym kroku

To pętla, a nie sekwencja, którą trzeba zawsze wykonać w całości. Jeśli pytanie jest już jasne, nie trzeba wracać do jego formułowania. Jeśli zachowanie nie wymaga interakcji, można pominąć jej implementację. Warto jednak wiedzieć, jaką decyzję podejmujesz, jaki rezultat obserwujesz i czego ten rezultat nie potwierdza.

---

## Moduł 1. Myślenie przez tworzenie w pracy z AI

### Wersja z „Workshop draft.md” — teoria na slajd

> Prototypowanie to sposób uczenia się przez tworzenie i oglądanie możliwego rozwiązania. Zacznij od pytania: „Co chcę zrozumieć lub zdecydować?”. Zbuduj tylko tyle, ile potrzeba, by zobaczyć własne założenia. Potem porównaj zamiar z tym, co faktycznie powstało.

### Wersja rozszerzona

#### Prototyp to narzędzie myślenia

Pomysł istniejący tylko w głowie łatwo wydaje się kompletny. Kiedy opiszesz go, naszkicujesz albo uruchomisz, musisz rozstrzygnąć szczegóły: co użytkownik widzi, co może zrobić, jak system reaguje i jakie informacje są potrzebne. Właśnie wtedy często ujawniają się założenia, których wcześniej nie było widać.

„Thinking through making” oznacza w tym warsztacie myślenie poprzez tworzenie i oglądanie zewnętrznej reprezentacji pomysłu. Nie oznacza obowiązku pisania kodu ani budowania pełnej aplikacji. Artefaktem może być szkic, fragment interfejsu, prosty prototyp albo symulacja. Wartość artefaktu zależy od tego, czy pomaga podjąć decyzję.

**Wniosek ze źródła:** materiały opisują prototyp jako narzędzie do eksploracji, komunikowania pomysłu i podejmowania decyzji, nie jako produkt sam w sobie. Idea „thinking through making” jest koncepcją omawianą podczas warsztatu, a nie osobną, standaryzowaną metodą z repozytorium.

#### Rola AI i rola człowieka

Narzędzie AI może szybko przełożyć opis na widoczną wersję. Może też wypełnić luki własnymi domysłami. Płynny, dopracowany wynik nie jest dowodem, że przyjęte założenia są prawdziwe. Człowiek nadal wybiera:

- jakie pytanie warto sprawdzić;
- które rozwiązanie chce zobaczyć;
- jaki poziom szczegółu wystarczy;
- co uzna za obserwację, a co za wniosek;
- jaki ma być następny krok.

Praktyczna różnica:

| Pytanie kontrolne | Co sprawdza |
|---|---|
| „Co udało się wygenerować?” | Rezultat wykonania |
| „Co teraz wiem lub mogę zdecydować?” | Wartość poznawczą prototypu |
| „Czego nadal nie wiem?” | Granice tego, co prototyp potwierdza |

Sam fakt, że prototyp działa na ekranie, nie dowodzi, że użytkownicy go chcą, że potrafią się nim posłużyć ani że produkt można bezpiecznie wdrożyć. Każde z tych pytań wymaga odpowiedniego dowodu.

#### Pętla uczenia się

**Objaśnienie dydaktyczne — schemat do ponownego użycia**

~~~text
Pytanie lub założenie
        ↓
Najmniejszy przydatny artefakt
        ↓
Obserwacja: co faktycznie widzę lub mogę zrobić?
        ↓
Porównanie z oczekiwaniem
        ↓
Wniosek i kolejna decyzja
        ↺
~~~

„Najmniejszy” nie znaczy „najprostszy za wszelką cenę”. Oznacza: nie dodawaj elementów, które nie są potrzebne do uzyskania informacji z bieżącego kroku. Jeśli pytanie dotyczy zachowania, sam obraz może nie wystarczyć. Jeśli chodzi o ogólny kierunek, szczegółowa symulacja danych może być zbędna.

**Praktyczna wskazówka.** Przed otwarciem narzędzia dokończ zdanie: „Po tej iteracji chcę lepiej zrozumieć…”. Po pracy dokończ drugie: „Na podstawie tego prototypu mogę stwierdzić…, ale nie mogę jeszcze stwierdzić…”.

**Źródła:** [„The New Product Development Lifecycle”](<Raw/AI Prototyping/4. The New Product Development Lifecycle.md>) — „Prototypes are decision-making tools”, „Concept prototypes”; [„Prototypes Are the New PRDs”](<Raw/Articles/Prototypes Are the New PRDs.md>) — „Exploration”.

---

## Moduł 2. Rodzaje i wierność prototypów

### Wersja z „Workshop draft.md” — teoria na slajd

> Dobierz prototyp do pytania. Prototyp koncepcyjny pomaga eksplorować alternatywy, projektowy doprecyzować kierunek, badawczy obserwować zachowanie lub reakcję, a techniczny sprawdzić wykonalność. Wierność UI i zakres to osobne decyzje. Wysoka wierność nie oznacza gotowości do wdrożenia.

### Wersja rozszerzona

#### Najpierw pytanie, potem poziom dopracowania

Słowo „prototyp” może oznaczać różne rzeczy. Jeden służy do porównania pomysłów, inny do uzgodnienia szczegółów doświadczenia, jeszcze inny do obserwacji użytkowników albo sprawdzenia ryzyka technicznego. Dlatego najpierw określ, jaką decyzję chcesz podjąć.

| Rodzaj prototypu | Pytanie, któremu może służyć | Na czym się koncentruje |
|---|---|---|
| Koncepcyjny | Który kierunek warto dalej eksplorować? | Alternatywy; wczesne wersje mogą być uproszczone |
| Projektowy | Jak dokładnie ma działać lub wyglądać wybrany kierunek? | Szczegóły interfejsu i kluczowe zachowania |
| Badawczy | Jak ludzie reagują na rozwiązanie lub jak z niego korzystają? | Wiarygodność potrzebna do obserwacji, realistyczny kontekst |
| Techniczny | Czy rozwiązanie jest wykonalne w ważnym aspekcie? | Ryzyko techniczne; interfejs może nie być potrzebny |

**Wniosek ze źródła:** są to cele prototypowania, nie cztery obowiązkowe etapy. Wybór zależy od pytania. Prototyp techniczny może być testem bez interfejsu, a koncepcyjny może celowo pomijać szczegóły.

#### Cel, wierność i zakres to różne wymiary

Wierność mówi, jak blisko prototyp przypomina docelowe doświadczenie. Zakres mówi, jaką część rozwiązania obejmuje. Cel mówi, do czego ma posłużyć. Nie należy zlewać tych wyborów w jedną skalę „od słabego do dobrego”.

| Wymiar decyzji | Przykładowe pytania |
|---|---|
| Cel | Co chcę rozstrzygnąć: kierunek, zachowanie, reakcję, wykonalność? |
| Wierność wizualna | Jak podobny do zamierzonego wyglądu musi być artefakt? |
| Wierność interakcji | Które działania i odpowiedzi systemu muszą działać? |
| Wierność danych | Czy przykładowa treść musi realistycznie wspierać użycie? |
| Zakres | Czy potrzebuję całości, fragmentu, pojedynczego elementu czy testu technicznego? |

Można więc stworzyć mały, dopracowany wizualnie element; duży, szkicowy przepływ; lub techniczny test, który nie ma interfejsu. Wysoka wierność w jednym wymiarze nie oznacza wysokiej wierności we wszystkich pozostałych.

#### Wierność jako dopasowanie, nie ocena

Większa szczegółowość wymaga czasu i może odciągnąć uwagę od pytania. Mniejsza szczegółowość może z kolei nie wystarczyć do obserwacji konkretnego zachowania. Wybierz poziom, który pozwala uzyskać użyteczny sygnał:

- Gdy eksplorujesz alternatywy, pozostaw miejsce na różne interpretacje.
- Gdy doprecyzowujesz wybrany kierunek, dodaj szczegóły ważne dla uzgodnienia.
- Gdy obserwujesz zachowanie, zadbaj o interakcję i treść wystarczające do wiarygodnej próby.
- Gdy sprawdzasz wykonalność, skup się na technicznym ryzyku, nie na dekoracji.

Dopracowany prototyp może wywoływać „pułapkę wierności”: ludzie uznają go za gotowy produkt, choć może zawierać uproszczenia, błędne założenia albo imitowane usługi. Oznaczaj, co jest realne, a co zasymulowane.

**Praktyczna wskazówka.** Zapisz wybór w jednym zdaniu: „Potrzebuję [rodzaj] prototypu, o [wierności] i [zakresie], ponieważ chcę sprawdzić [pytanie]”.

**Źródła:** [„The New Product Development Lifecycle”](<Raw/AI Prototyping/4. The New Product Development Lifecycle.md>) — sekcje o czterech rodzajach prototypów i „Where prototypes fall short”; [„From Prompt to Prototype in Minutes”](<Raw/AI Prototyping/2. From Prompt to Prototype in Minutes.md>) — „What’s Missing (and Why That’s Fine)”; [„Test Complex Interactions Earlier with AI Prototyping”](<Raw/Test complex interactions/Test Complex Interactions Earlier with AI Prototyping.md>) — „Don’t Fall for the Fidelity Trap”.

---

## Moduł 3. Przygotowanie kontekstu

### Wersja z „Workshop draft.md” — teoria na slajd

> Kontekst to informacje, które pomagają AI wykonać konkretne zadanie. Dobierz je do celu: zachowanie i ograniczenia (funkcjonalne), wygląd lub odniesienie (wizualne), oraz dane i ich strukturę (danych). Uporządkuj je tak, by wiadomo było, co jest wymaganiem, przykładem, a co pozostaje otwarte.

### Wersja rozszerzona

#### Kontekst to coś więcej niż pojedynczy prompt

Narzędzie otrzymuje polecenie, ale może też korzystać z wcześniejszej rozmowy, informacji zapisanych w projekcie, plików, referencji wizualnych i dostępnych funkcji. Projektowanie tego zestawu informacji pod konkretne zadanie nazywamy inżynierią kontekstu.

Lepszy kontekst nie oznacza automatycznie dłuższego promptu. Ważne jest, aby model wiedział, co ma osiągnąć, jak ma się zachować wynik, jakie materiały są istotne i gdzie nie powinien zgadywać. Zbyt skąpy kontekst zostawia decyzje domysłom. Zbyt obszerny może utrudnić skupienie na bieżącej zmianie i zwiększać ilość przetwarzanej treści.

#### Trzy rodzaje kontekstu

| Rodzaj | Co wyjaśnia | Możliwe materiały |
|---|---|---|
| Funkcjonalny | Cel, zachowanie, warunki i ograniczenia | Opis zadania, reguły, kryterium sprawdzenia |
| Wizualny | Wygląd, hierarchię i układ | Referencja, zrzut, szkic, wireframe, opis |
| Danych | Kształt i treść informacji pokazywanych w prototypie | Schemat pól, relacje, mały zestaw przykładów |

Nie zawsze potrzebujesz wszystkich trzech. Jeżeli zadanie dotyczy struktury informacji, szczegółowa próbka danych może być przydatna. Jeżeli pytanie dotyczy wyłącznie logiki przejścia, kontekst wizualny może nie być potrzebny. Zaznaczenie „nie dotyczy” jest lepsze niż dopisywanie informacji bez celu.

#### Fakty, założenia i decyzje

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

#### Dane i prywatność

Przykładowe dane powinny pasować do zadania i przedstawiać potrzebne przypadki. W prototypie często wystarczy mała syntetyczna próbka; nie trzeba integrować prawdziwej bazy. Jeśli rozważasz użycie danych z pracy, sprawdź zasady organizacji oraz politykę narzędzia. Nie umieszczaj danych osobowych ani poufnych w narzędziu bez odpowiedniej zgody i zabezpieczeń.

**Wniosek ze źródeł:** kontekst funkcjonalny, wizualny i danych pomaga lepiej określić, co budować. **Objaśnienie dydaktyczne:** optymalny kontekst jest kompletny względem zadania, ale niekoniecznie obszerny.

**Praktyczna wskazówka.** Przed wysłaniem polecenia podkreśl jedną informację, która najbardziej pomoże AI, i usuń jedną, która nie ma związku z bieżącym pytaniem.

**Źródła:** [„Context Engineering for Prototyping”](<Raw/AI Prototyping/6. Context Engineering for Prototyping.md>) — „What is context engineering?”, „Functional context”, „Visual context”, „Data context”; [„Defining Your Product Context”](<Raw/AI Prototyping/7. Defining Your Product Context.md>) — „Project knowledge”, „Design system”, „Maintaining your context over time”.

---

## Moduł 4. Interakcje poza statycznym ekranem

### Wersja z „Workshop draft.md” — teoria na slajd

> Opisz interakcję jako sekwencję: działanie użytkownika → stan przed → zmiana → rezultat widoczny dla użytkownika. Dodaj stan pusty, oczekiwanie lub błąd, jeśli ma znaczenie dla pytania. Sprawdź zachowanie w prototypie; sam opis ekranu nie potwierdza, że interakcja działa.

### Wersja rozszerzona

#### Interfejs jest zachowaniem, nie tylko obrazem

Zrzut ekranu pokazuje jeden moment. Nie mówi sam z siebie, co stanie się po kliknięciu, wpisaniu tekstu, zmianie wyboru ani po wystąpieniu błędu. Interaktywność pozwala obserwować przejście między momentami.

Do opisania zachowania użyj czterech elementów:

1. **Działanie:** co robi użytkownik?
2. **Stan przed:** co system pokazuje lub wie przed działaniem?
3. **Zmiana:** jaka reguła lub reakcja zachodzi?
4. **Rezultat:** co użytkownik widzi lub może zrobić po zmianie?

~~~text
działanie użytkownika
        ↓
stan początkowy
        ↓
reguła / reakcja systemu
        ↓
stan końcowy widoczny dla użytkownika
~~~

Przydatna tabela:

| Działanie | Stan przed | Zmiana | Rezultat widoczny |
|---|---|---|---|
| [działanie wybrane przez autora prototypu] | [stan] | [co się zmienia] | [co zobaczy użytkownik] |

#### Stany brzegowe

Samo „szczęśliwe zakończenie” nie zawsze wystarcza. Pomyśl, które dodatkowe warunki są ważne dla pytania:

- **Pusty:** brak treści, wyników lub wcześniejszych działań.
- **Ładowanie:** system jeszcze pracuje.
- **Sukces:** działanie przyniosło oczekiwany skutek.
- **Błąd:** działanie nie mogło zostać wykonane.
- **Nieaktywne:** elementu nie można teraz użyć.
- **Częściowy wynik:** część informacji jest dostępna, a część nie.

Nie trzeba modelować wszystkich tych stanów w każdym prototypie. Wybierz te, które wpływają na doświadczenie lub na odpowiedź na twoje pytanie.

#### Interaktywność a cel badania

Jeśli pytanie dotyczy wyglądu pierwszego wrażenia, statyczny obraz może wystarczyć. Jeśli chcesz zobaczyć, jak ktoś radzi sobie z interakcją, prototyp musi pozwolić na tę interakcję. Jeśli zachowanie jest złożone, opisz istotne przejścia i przypadki brzegowe, zamiast oczekiwać, że AI samo odgadnie wszystkie reguły.

Interaktywny prototyp nadal nie zastępuje badania z użytkownikami. Samodzielne kliknięcie pomaga sprawdzić, czy prototyp realizuje zapisaną regułę. Nie mówi jeszcze, czy klienci rozumieją rozwiązanie lub go potrzebują. Materiały o testowaniu podkreślają, by rozpoczynać od pytania i obserwować działanie zamiast podpowiadać odpowiedzi.

**Praktyczna wskazówka.** Po każdej istotnej zmianie wykonaj przynajmniej jeden scenariusz i nazwij rezultat, który faktycznie zobaczyłeś. Nie uznawaj odpowiedzi AI „gotowe” za test.

**Źródła:** [„Context Engineering for Prototyping”](<Raw/AI Prototyping/6. Context Engineering for Prototyping.md>) — „Functional context”; [„Test Complex Interactions Earlier with AI Prototyping”](<Raw/Test complex interactions/Test Complex Interactions Earlier with AI Prototyping.md>) — „How to Prototype Complex Interfaces with AI”; [„Testing Prototypes With Customers”](<Raw/AI Prototyping/14. Testing Prototypes With Customers.md>) — „Start with the question, not the prototype”, „Observe more than you talk”.

---

## Moduł 5. Struktura prototypu i zakres zmiany

### Wersja z „Workshop draft.md” — teoria na slajd

> Nie musisz znać całego kodu, by ograniczyć zmianę. Ustal, czy dotyczy wyglądu, zachowania, treści czy danych. Następnie wskaż widoczny element lub — jeśli możesz — nazwę jego komponentu/pliku. Poproś o plan i zmianę w tym zakresie, a potem sprawdź, co jeszcze się zmieniło.

### Wersja rozszerzona

#### Ucz się rozpoznawać części, nie zapamiętywać kod

W wielu aplikacjach webowych widoczny interfejs składa się z mniejszych elementów. Powtarzalny element — na przykład ogólny typ karty, przycisku lub nagłówka — może występować w wielu miejscach. Widok główny łączy elementy, dane dostarczają treść, a style wpływają na wygląd. Konkretne narzędzia mogą organizować projekt inaczej; to model pomocniczy, nie uniwersalna mapa wszystkich aplikacji.

| Część projektu | Co może obejmować | Pytanie, które pomaga zadać |
|---|---|---|
| Widok lub komponent | Widoczny element i jego zachowanie | Który element chcę zmienić? |
| Dane | Treści, rekordy i ich relacje | Czy problem dotyczy treści, czy wyglądu? |
| Style | Kolory, układ, typografia, odstępy | Czy to zmiana wizualna? |
| Logika lub stan | Reakcja systemu na działania | Jaka reguła ma się zmienić? |
| Plik główny lub układ projektu | Sposób łączenia elementów | Gdzie element jest używany? |

Nie musisz umieć czytać całego kodu. Pomaga już rozróżnienie, czy poprawka dotyczy treści, wyglądu, zachowania, czy danych. Jeśli widzisz nazwy plików, użyj ich jako wskazówki. Jeśli ich nie widzisz, opisz element na podstawie tego, co można zaobserwować.

#### Lokalna zmiana zmniejsza niejednoznaczność

Ogólna prośba, taka jak „popraw aplikację”, pozostawia wiele decyzji modelowi. Precyzyjniejsza prośba określa:

- **Miejsce:** który widoczny element lub obszar?
- **Intencję:** co ma się poprawić?
- **Granice:** czego nie ruszać?
- **Kryterium:** jak sprawdzisz, że zmiana osiągnęła cel?

Poproszenie najpierw o plan daje możliwość sprawdzenia, czy AI zrozumiało zakres. Odpowiedź AI o lokalizacji pliku traktuj jako hipotezę. Sprawdź ją, jeśli narzędzie umożliwia wgląd w strukturę. Zmiana wspólnego komponentu może mieć wpływ w wielu miejscach — po jej wprowadzeniu sprawdź te miejsca, które mogą być nią dotknięte.

#### Zakres zmiany a zakres prototypu

W module 2 decydujesz, jak szeroki ma być prototyp potrzebny do pytania. Tutaj określasz, gdzie i jak w istniejącym projekcie wprowadzić jedną zmianę. To podobne, lecz odrębne decyzje: mały prototyp może wymagać poprawy, która dotyczy kilku połączonych elementów; duży prototyp może wymagać tylko zmiany jednej treści.

**Praktyczna wskazówka.** Zanim poprosisz o modyfikację, zapisz: „Zmień [element], aby [cel]. Pozostaw [granice] bez zmian. Sprawdzę to przez [kryterium]”.

**Źródła:** [„Software Architecture for Non-Technical Builders”](<Raw/AI Prototyping/8. Software Architecture for Non-Technical Builders.md>) — „The frontend”, „React components”, „The file structure”, „Walking through the UI”, „What this means for your prototyping”; [„From Prompt to Prototype in Minutes”](<Raw/AI Prototyping/2. From Prompt to Prototype in Minutes.md>) — „Code View”.

---

## Moduł 6. Debugowanie i ukierunkowana poprawka

### Wersja z „Workshop draft.md” — teoria na slajd

> Zanim poprawisz, odtwórz problem. Zapisz kroki, oczekiwany i rzeczywisty wynik oraz dowód, np. zrzut ekranu lub komunikat. Zachowaj działającą wersję. Poproś o diagnozę, gdy przyczyna jest niejasna, wprowadzaj ograniczoną zmianę i powtórz test.

### Wersja rozszerzona

#### Opisz problem tak, by można go było odtworzyć

„Nie działa” nie mówi, w którym momencie pojawia się problem ani co powinno się stać. Dobry opis rozdziela fakty od wyjaśnienia przyczyny. Zapisz:

| Element raportu | Co wpisać |
|---|---|
| Kontekst | Jaki element lub wersję sprawdzasz? |
| Kroki | Co dokładnie zrobiłeś, w jakiej kolejności? |
| Oczekiwany wynik | Co miało się wydarzyć? |
| Rzeczywisty wynik | Co się stało zamiast tego? |
| Dowód | Co możesz pokazać: ekran, komunikat, obserwację? |

Zaobserwowane „po wykonaniu działania lista nie uległa zmianie” jest faktem. „Przyczyną jest niepoprawny komponent” to hipoteza. Oddzielając je, możesz poprosić AI o zbadanie prawdopodobnej przyczyny bez wymuszania z góry jednego rozwiązania.

#### Poprawiaj kontrolowanie

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

#### Kiedy zmienić taktykę

Źródło opisuje regułę trzech nieudanych prób: gdy podobne poprawki nie rozwiązują problemu, przejdź do innego podejścia. Możesz:

- cofnąć się do stabilnej wersji;
- poprosić o wyjaśnienie struktury lub diagnozę zamiast kolejnej zmiany;
- zawęzić problem;
- uprościć fragment prototypu;
- zbudować nową wersję na podstawie ustaleń z poprzedniej.

Nie trzeba czekać na trzy próby, jeśli widać, że kolejne polecenie tylko powtarza tę samą taktykę. Reguła pomaga przerwać pętlę, nie zachęca do wydawania kolejnych poleceń bez nowej informacji.

#### Poprawa nie jest tym samym co dowód

Jeśli zmiana działa w twoim scenariuszu, możesz powiedzieć, że prototyp teraz zachowuje się zgodnie z tym kryterium. Nie możesz na tej podstawie stwierdzić, że wszyscy użytkownicy zrozumieją rozwiązanie ani że aplikacja będzie działać w produkcji.

**Praktyczna wskazówka.** Przed zmianą zachowaj punkt odniesienia. Po zmianie sprawdź to samo kryterium, którego użyłeś przed poprawką.

**Źródła:** [„Debugging Your Prototypes”](<Raw/AI Prototyping/9. Debugging Your Prototypes.md>) — „The debugging ladder”, „Describe the problem to the AI”, „The core workflow: copy, paste, fix”, „The three-strike rule”, „Managing versions”, „When to start over”, „How to rebuild effectively”; [„Testing Prototypes With Customers”](<Raw/AI Prototyping/14. Testing Prototypes With Customers.md>) — „Observe more than you talk”.

---

## Moduł 7. Skill prototypowania z AI a zasady

### Wersja z „Workshop draft.md” — teoria na slajd

> Zasada mówi, jak podejmować dobre decyzje w prototypowaniu, niezależnie od konkretnego narzędzia. Skill to instrukcja wielokrotnego użytku dla AI: kiedy ją stosować, o co dopytać, jakie kroki wykonać, czego nie dopowiadać i jak sprawdzić wynik. Skill może wykorzystywać zasady, ale nie jest ich listą.

### Wersja rozszerzona

#### Dwa różne rodzaje wskazówek

**Zasada** jest ogólną regułą kierującą decyzją człowieka. Przenosi się między projektami i narzędziami. Przykład: „Dopasuj zakres prototypu do pytania”.

**Skill prototypowania z AI** to w tym materiale robocza, wielokrotnego użytku instrukcja dla AI, która opisuje sposób postępowania przy określonej klasie zadań. Może wskazywać, kiedy zadać pytanie, jaki plan przygotować, jakie ograniczenia zachować i jak sprawdzić rezultat.

| Zasada | Instrukcja/Skill |
|---|---|
| Kieruje decyzją | Opisuje powtarzalne działanie AI |
| Zwykle jest krótka i ogólna | Zawiera warunki, kroki i oczekiwany rezultat |
| Może dotyczyć dowolnego narzędzia | Może wymagać dostosowania do narzędzia |
| Przykład: „Sprawdź zmianę na kryterium” | „Po zmianie pokaż kroki, które mam wykonać, i nie twierdź, że wynik jest zweryfikowany przed próbą” |

Repozytorium zawiera szkic Skill z proponowanymi trybami, ale nie definiuje oficjalnego standardu dla tego kursu. Dlatego powyższe rozróżnienie jest **propozycją warsztatową**, zgodną z celem projektu: stworzyć wielokrotnego użytku instrukcję oraz oddzielną listę zasad.

#### Co powinna zawierać użyteczna instrukcja

Wersja robocza może określać:

1. **Kiedy ją stosować:** jakiego typu zadaniu pomaga?
2. **Jakie informacje zebrać:** cel, pytanie, kryterium, potrzebny kontekst.
3. **Jak postępować:** planować, podzielić pracę i zmieniać ograniczony zakres.
4. **Czego nie robić:** nie wymyślać brakującego celu ani nie dodawać niezamówionych funkcji.
5. **Jak sprawdzić wynik:** wskazać scenariusz, kryterium lub dowód.
6. **Co zrobić, gdy nie działa:** zebrać dowody, cofnąć, uprościć lub zaproponować inną taktykę.

Instrukcja nie powinna udawać, że każde narzędzie ma ten sam interfejs. Jeśli wymienia operację specyficzną dla aplikacji, oznacz ją jako wariant do dostosowania.

#### Utrzymuj rozdział, ale pozwól zasadom wejść do Skill

Zasada może być jednym z fundamentów Skill. Nie trzeba jej przepisywać w wielu miejscach. Zasady pomagają człowiekowi rozstrzygnąć „co jest ważne?”, a Skill pomaga modelowi działać według ustalonego sposobu pracy. Jedno nie zastępuje drugiego.

**Praktyczna wskazówka.** Gdy zdanie zaczyna się od „zawsze wybierz…” albo „najpierw ustal…”, sprawdź, czy jest ogólną zasadą. Gdy określa, co AI ma zrobić, o co dopytać i jaki wynik zwrócić, jest bliższe instrukcji.

**Źródła:** [„AI prototyping skill”](<Raw/Prototyping skill/(MM) AI prototyping skill.md>) — „Proponowane tryby”, „Reguła wyboru trybu” (materiał roboczy); [„TokenOPS - AI Coding Centre”](<Raw/TokenOPS/TokenOPS - AI Coding Centre (1).md>) — „Principles”. Definicje i przykłady w tym module są propozycją warsztatową, nie kanoniczną definicją repozytorium.

---

## Moduł 8. Synteza: roboczy Skill i lista zasad

### Wersja z „Workshop draft.md” — teoria na slajd

> Dobra zasada pomaga wybierać, a dobra instrukcja dla AI pozwala powtarzać wybrany sposób pracy. Zbieramy tylko praktyki, które pomogły w konkretnym zadaniu. Zapisujemy je krótko i sprawdzamy, czy można je zastosować w następnym prototypie.

### Wersja rozszerzona

#### Złóż proces wokół decyzji

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

#### Zasady do wykorzystania

Poniższa lista jest propozycją zebraną z tematów warsztatu. Traktuj ją jako materiał do krytycznej adaptacji, nie niezmienny standard:

1. Zacznij od decyzji lub pytania, które chcesz rozstrzygnąć.
2. Dobierz cel, wierność i zakres prototypu do tego pytania.
3. Podaj kontekst istotny dla zadania i oznacz niewiadome.
4. Opisz ważne interakcje przez działania, stany, przejścia i widoczne rezultaty.
5. Ogranicz prośbę do wybranej zmiany i zachowaj stabilną wersję.
6. Sprawdź wynik na kryterium i rzeczywistym zachowaniu, nie na deklaracji AI.
7. Gdy kolejne próby nie pomagają, zmień taktykę lub uprość prototyp.
8. Oddziel to, co prototyp pokazuje, od tego, czego nie potwierdza.

#### Wersja robocza Skill do dalszej edycji

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

#### Jak utrzymywać metodę przydatną

Po warsztacie sprawdź instrukcję na innym zadaniu. Zwróć uwagę, czy model:

- dopytuje o kluczowe braki zamiast wymyślać wymagania;
- stosuje kontekst powiązany z zadaniem;
- zmienia wskazany zakres;
- podaje konkretne kroki weryfikacji;
- oddziela wynik zaobserwowany od własnej deklaracji.

Jeśli Skill staje się długi lub zawiera sprzeczne instrukcje, usuń duplikaty i przenieś szczegóły do materiału uzupełniającego. Jeśli element zależy od konkretnego narzędzia, opisz wariant zamiast przedstawiać go jako regułę dla wszystkich. Nie zakładaj, że sama instrukcja obniża koszty: jej wpływ trzeba ocenić w konkretnym narzędziu i zadaniu.

**Praktyczna wskazówka.** Po każdej iteracji zapisz najważniejszą decyzję i dowód, który ją uzasadnił. Z czasem aktualizuj zasady na podstawie doświadczenia.

**Źródła:** synteza materiałów z modułów 1–7; [„TokenOPS - AI Coding Centre”](<Raw/TokenOPS/TokenOPS - AI Coding Centre (1).md>) — „Principles”; [„Spec-Driven Development — best practices (so far)”](<Raw/Spec-Driven Development (SDD) — best practices (so far)/Spec-Driven Development (SDD) — best practices (so far).md>) — „Balanced level of detail”, „Acceptance criteria”. Lista zasad i Skill są propozycjami warsztatowymi.

---

## Glosariusz

| Pojęcie | Znaczenie w tych materiałach |
|---|---|
| Prototyp | Uproszczony artefakt pomagający odpowiedzieć na pytanie, zakomunikować pomysł lub sprawdzić zachowanie |
| Wierność | Stopień podobieństwa prototypu do zamierzonego doświadczenia, rozpatrywany osobno dla wyglądu, interakcji i danych |
| Zakres | Część rozwiązania objęta prototypem lub zmianą |
| Kontekst | Informacje, materiały i ograniczenia udostępnione AI dla konkretnego zadania |
| Stan | Sytuacja interfejsu lub systemu przed albo po działaniu |
| Przejście | Zmiana stanu wywołana działaniem lub warunkiem |
| Dowód | Obserwacja, zrzut lub komunikat, który pozwala sprawdzić rezultat |
| TokenOps | Zestaw praktyk zarządzania kontekstem, wysiłkiem modelu i użyciem tokenów/kredytów AI, opisany w materiale TokenOPS |
| Zasada | Ogólna reguła pomagająca człowiekowi podejmować decyzje |
| Skill prototypowania z AI | Roboczo: wielokrotnego użytku instrukcja dla AI, opisująca warunki, kroki i weryfikację zadania |

## Źródła i zakres

Materiały źródłowe w repozytorium służą jako podstawa merytoryczna modułów. Wersje rozwinięte zawierają również objaśnienia i organizację dydaktyczną zaproponowane na potrzeby samodzielnej nauki. W szczególności definicja Skill, lista zasad i schemat całego procesu są propozycjami warsztatowymi. Przykłady z repozytorium są ilustracjami, nie obowiązkowymi pomysłami na aplikację.

