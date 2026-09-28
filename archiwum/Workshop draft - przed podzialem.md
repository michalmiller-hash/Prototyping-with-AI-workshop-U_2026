# Pierwszy szkic warsztatu: prototypowanie wspomagane przez AI

> **Status:** wersja robocza do omówienia. Treści oznaczone jako **Źródło** streszczają materiały z repozytorium. **Propozycja warsztatowa** oznacza decyzję dydaktyczną, szablon lub przykład zaproponowany na potrzeby tego szkicu, nie zatwierdzoną metodę ani wynik badań.

## 1. Przegląd źródeł i założenia

### Najważniejsze wnioski ze źródeł

- **Prototyp służy do podjęcia decyzji.** Zaczynamy od pytania, które ma pomóc rozstrzygnąć. Źródło rozróżnia prototypy koncepcyjne (eksplorowanie rozwiązań), projektowe (doprecyzowanie i uzgodnienie kierunku), badawcze (sprawdzenie reakcji i zachowania użytkowników) oraz techniczne (sprawdzenie wykonalności). Cel nie jest tym samym co poziom wierności UI. Prototyp może być interaktywny i dopracowany wizualnie, a nadal nie być gotowym produktem. (Źródło: *Raw/AI Prototyping/4. The New Product Development Lifecycle.md*, „Prototypes are decision-making tools”, „Concept prototypes”, „Design prototypes”, „Research prototypes”, „Technical prototypes”, „Where prototypes fall short”.)
- **„Thinking through making” jest tu koncepcją, nie metodą prowadzenia zajęć.** Kontekst projektu wskazuje tę ideę jako teorię: tworzenie zewnętrznego artefaktu może ujawnić założenia i pomóc podjąć decyzję. Materiały repozytorium wspierają ją przez ujęcie prototypu jako narzędzia decyzyjnego i eksploracyjnego, ale nie zawierają osobnej, ustandaryzowanej metody o tej nazwie. Zajęcia są zorganizowane wokół efektów uczenia się i ćwiczeń, nie wokół „thinking through making”. (Źródło: kontekst projektu; interpretacja na podstawie „The New Product Development Lifecycle” i *Raw/Articles/Prototypes Are the New PRDs.md*, „Exploration”.)
- **Jakość wyniku zależy od dobranego kontekstu.** Materiały wyróżniają kontekst funkcjonalny (zachowanie), wizualny (układ i język wizualny) oraz danych (struktura i przykładowa treść). Kontekst należy dobierać do pytania i etapu; nie każdy prototyp potrzebuje wszystkich szczegółów ani integracji z prawdziwymi usługami. (Źródło: *Raw/AI Prototyping/6. Context Engineering for Prototyping.md*, „What your prototyping tool needs to know”, „Functional context”, „Visual context”, „Data context”; *Raw/AI Prototyping/7. Defining Your Product Context.md*, „Project knowledge”, „Design system”.)
- **Interakcja składa się z działań i zmian stanu.** Opis samej funkcji może nie wyjaśniać, co ją uruchamia, co ulega zmianie ani co widzi użytkownik. Przy bardziej złożonych interakcjach źródło proponuje najpierw określić wymagane zachowania, podjąć decyzje projektowe, przygotować dane, przekazać je narzędziu, a potem iterować i sprawdzić wynik. Przypadki źródłowe pokazują, co można prototypować, ale nie dowodzą, że AI samo podejmuje dobre decyzje ani że każda interakcja wymaga wysokiej wierności. (Źródło: *Raw/AI Prototyping/6. Context Engineering for Prototyping.md*, „Functional context”; *Raw/Test complex interactions/Test Complex Interactions Earlier with AI Prototyping.md*, „How to Prototype Complex Interfaces with AI”, „You Still Make the Design Decisions”, opis przypadku.)
- **Rozumienie struktury ma służyć precyzyjnemu wskazaniu zmiany.** Przegląd komponentów, danych, głównego widoku i plików może pomóc zawęzić miejsce poprawki; początkujący nie musi rozumieć każdej linijki. Przykłady struktury w źródłach dotyczą konkretnych narzędzi i stosu webowego, dlatego w warsztacie traktujemy je jako model myślowy, nie gwarancję podobnego układu w każdym narzędziu. (Źródło: *Raw/AI Prototyping/8. Software Architecture for Non-Technical Builders.md*, „The frontend”, „React components”, „The file structure”, „What this means for your prototyping”; *Raw/AI Prototyping/2. From Prompt to Prototype in Minutes.md*, „Code View”.)
- **Debugowanie wymaga dowodów i ponownego sprawdzenia.** Warto opisać kroki odtworzenia, oczekiwany wynik, rzeczywisty wynik i dostępny dowód, a następnie wprowadzać ograniczoną poprawkę i ponowić próbę. Po kilku nieudanych próbach źródło zachęca do zmiany taktyki, cofnięcia do stabilnej wersji lub przebudowy. (Źródło: *Raw/AI Prototyping/9. Debugging Your Prototypes.md*, „The debugging ladder”, „Describe the problem to the AI”, „The core workflow: copy, paste, fix”, „The three-strike rule”, „Managing versions”, „When to start over”.)
- **TokenOps to w źródle zestaw praktyk zarządzania zużyciem tokenów i kredytów AI.** Obejmuje m.in. dobór modelu i wysiłku do zadania, planowanie, ograniczanie nieistotnego kontekstu, unikanie zbędnych rund rozmowy oraz używanie skryptu zamiast LLM do powtarzalnego przetwarzania danych. Źródło podaje również szacunkowe procenty, ale nie opisuje warunków pomiaru; nie przenosimy tych liczb na warsztat ani nie obiecujemy oszczędności. Nie każde narzędzie prototypowe ujawnia porównywalne zużycie. (Źródło: *Raw/TokenOPS/TokenOPS - AI Coding Centre (1).md*, „Principles”, „Avoid infinite sessions”, „Point the agent to the right place”.)
- **Repozytorium nie definiuje zatwierdzonego Skill prototypowania ani kanonicznej listy zasad.** Plik *Raw/Prototyping skill/(MM) AI prototyping skill.md* zawiera propozycję trybów i wymiarów prototypowania. Może być materiałem do krytycznej rozmowy, ale nie dowodzi, że taki podział jest standardem. Prototypowy Skill i lista zasad w tym szkicu są propozycjami do wypracowania.
- **Luki źródłowe:** *Raw/AI Prototyping/1. Intro.md* i *Raw/AI Prototyping/13. Spec = prompts.md* nie zawierają użytecznej treści. Materiały skupiają się na aplikacjach webowych i opisują funkcje nazwanych narzędzi, które mogą się zmienić. Nie określają narzędzia dostępnego na warsztacie ani jego limitów, cennika czy sposobu cofania zmian. Materiały o testowaniu z klientami podkreślają potrzebę pytań badawczych i obserwacji, ale warsztat nie ma czasu ani danych, by przeprowadzić walidację produktu z klientami. (Źródło: wskazane pliki; *Raw/AI Prototyping/14. Testing Prototypes With Customers.md*, „Start with the question, not the prototype”, „Observe more than you talk”.)

### Wymagania, założenia i propozycje

**Wymagania z kontekstu projektu**

- 6 uczestników, bez wymaganego doświadczenia programistycznego, z podstawowym doświadczeniem w narzędziach AI.
- 4,5 godziny łącznie, w tym przerwy; materiały dla uczestników po polsku.
- Praca indywidualna na komputerze z dostępnym narzędziem do prototypowania wspomaganego przez AI.
- Każdy wybiera gatunek muzyczny i samodzielnie decyduje o celu, treści i funkcjach swojej aplikacji. Nie ma wspólnego briefu produktowego.
- Celem jest ćwiczenie powtarzalnego procesu prototypowania i podejmowania decyzji, nie stworzenie dopracowanego produktu.
- Każde ćwiczenie stosuje technikę modułu do elementu lub pytania wybranego przez danego uczestnika. Nie narzucamy funkcji, ekranów, przepływu użytkownika ani końcowej zawartości aplikacji.
- Można używać danych przykładowych i symulowanych usług. Rzeczywiste integracje nie są wymagane.

**Jawne założenia robocze**

- 270 minut obejmuje otwarcie, osiem modułów, dwie przerwy i zamknięcie. Agenda pokazuje przykładowe godziny startu; można je przesunąć bez zmiany długości bloków.
- Przyjmuję, że prowadzący zapewni wcześniej wybrane narzędzie oraz działający dostęp dla wszystkich. Nazwa narzędzia nie została podana, więc instrukcje są narzędziowo neutralne, a demo nie zależy od konkretnej funkcji interfejsu.
- Przyjmuję, że każdy uczestnik rozpoczyna od pustego projektu albo może założyć jego kopię. Jeśli narzędzie nie zapewnia historii wersji, uczestnik zachowuje zrzut ekranu, prompt i krótką notatkę jako punkt odniesienia.
- Forma sali i sposób współdzielenia pracy nie zostały wskazane. Nie wymagamy wspólnej tablicy ani dodatkowej aplikacji; krótkie przykłady można zebrać ustnie lub w notatce prowadzącego.
- Nie zakładam, że uczestnicy będą prezentować gotowe aplikacje lub testować je z klientami. Uczą się technik na własnej pracy; pokaz i wymiana są dobrowolne.
- Używamy danych przykładowych lub syntetycznych. Przed warsztatem prowadzący sprawdza zasady danych wybranego narzędzia oraz sposób tworzenia kopii lub wycofywania zmian.

## 2. Opis warsztatu

### Cel i efekty uczenia się

Po warsztacie uczestnik będzie umiał przygotować materiał, który pozwala mu wykazać, że potrafi:

| Efekt | Jak uczestnik go pokaże |
|---|---|
| Dobrać rodzaj i wierność prototypu do pytania | Karta pytania, celu prototypu, wierności i zakresu z modułu 2 |
| Przygotować użyteczny kontekst do zadania | Krótki brief z dobranymi informacjami funkcjonalnymi, wizualnymi i o danych z modułu 3 |
| Opisać interakcję przez działanie, stan, przejście i rezultat | Tabela stanów oraz próba działania wybranego elementu z modułu 4 |
| Rozpoznać strukturę potrzebną do ograniczonej zmiany | Mapa elementu projektu lub sprawdzona hipoteza, gdzie go szukać, z modułu 5 |
| Świadomie zarządzać kontekstem, zakresem generowania i iteracją | Uzasadniony zakres prośby, zapisane wersje i raport z poprawki z modułów 3, 5 i 6 |
| Zmienić prototyp i wyjaśnić, co poprawiła zmiana | Porównanie wersji sprzed i po zmianie oraz krótki wniosek z modułu 6 |
| Zebrać powtarzalną metodę pracy | Lista zasad i robocza instrukcja dla AI z modułu 8 |

### Wspólny projekt praktyczny

Każda osoba wybiera gatunek muzyczny i buduje aplikację związaną z tym gatunkiem. Uczestnik sam ustala, do czego aplikacja służy, co zawiera i jakie decyzje chce w niej przećwiczyć. Gatunek daje wspólny punkt odniesienia; nie jest briefem produktowym. Przykład Genre Discovery w źródle może być inspiracją, ale nie staje się zadaniem dla grupy.

Praca rozwija jedną aplikację w kolejnych modułach. Uczestnik zachowuje początkowy punkt odniesienia i wprowadza zmiany według własnych decyzji. Aplikacja nie jest oceniana pod względem kompletności, estetyki ani gotowości do wdrożenia. Jeśli integracja lub dane spowalniają naukę, można zastąpić je symulacją.

### Agenda: 270 minut

| Blok | Czas | Minuty |
|---|---:|---:|
| Otwarcie: cel, narzędzie, zasady pracy i wybór gatunku | 09:00–09:15 | 15 |
| 1. Myślenie przez tworzenie w pracy z AI | 09:15–09:40 | 25 |
| 2. Rodzaje i wierność prototypów | 09:40–10:05 | 25 |
| 3. Przygotowanie kontekstu | 10:05–10:40 | 35 |
| Przerwa | 10:40–10:50 | 10 |
| 4. Interakcje poza statycznym ekranem | 10:50–11:25 | 35 |
| 5. Struktura prototypu i zakres zmiany | 11:25–11:50 | 25 |
| 6. Debugowanie, ukierunkowana poprawka i porównanie | 11:50–12:25 | 35 |
| Przerwa | 12:25–12:35 | 10 |
| 7. Skill prototypowania z AI a zasady | 12:35–13:00 | 25 |
| 8. Synteza: roboczy Skill i lista zasad | 13:00–13:20 | 20 |
| Zamknięcie: samoocena i następny krok | 13:20–13:30 | 10 |
| **Razem** | **09:00–13:30** | **270** |

### Efekty a moduły

Moduł 1 przygotowuje do uczenia się przez prototyp i zachowania wersji bazowej. Moduł 2 wspiera dobór typu i wierności. Moduły 3–4 wspierają kontekst oraz opis zachowania. Moduły 5–6 wspierają lokalizowanie i ograniczanie zmian, debugowanie, sprawdzanie oraz porównanie. Moduły 7–8 zamieniają doświadczenia w metodę do ponownego użycia.

**Treści podstawowe:** rozróżnianie celu i wierności, wybór kontekstu, opis stanów, ograniczanie zakresu, sprawdzanie wyniku, zachowanie wersji, zasady i instrukcja dla AI.

**Opcjonalne rozszerzenia:** sprawdzenie układu w dodatkowym rozmiarze ekranu, załączenie szkicu lub inspiracji wizualnej, konsultacja wyniku w parze, dodatkowa runda poprawki. Prowadzący pomija je, jeśli uczestnik potrzebuje więcej czasu na podstawowy rezultat.

## 3. Szkice modułów

### Moduł 1. Myślenie przez tworzenie w pracy z AI

**Cel i obserwowalny efekt.** Uczestnik formułuje pytanie, które chce rozjaśnić przez prototypowanie, tworzy pierwszą wersję własnej aplikacji muzycznej i zapisuje, jaką decyzję pomógł mu podjąć lub jakie założenie ujawnił artefakt.

**Czas: 25 minut** — teoria 5, demonstracja 4, ćwiczenie 13, refleksja 3.

**Źródła.** *Raw/AI Prototyping/4. The New Product Development Lifecycle.md*, „Prototypes are decision-making tools”, „Concept prototypes”; *Raw/Articles/Prototypes Are the New PRDs.md*, „Exploration”. **Interpretacja:** „thinking through making” jest koncepcją projektową z kontekstu warsztatu. Źródła uzasadniają rolę prototypu jako narzędzia do myślenia i decyzji, lecz nie definiują osobnej procedury o tej nazwie.

**Dla uczestników — teoria na slajd.**

> Prototypowanie to sposób uczenia się przez tworzenie i oglądanie możliwego rozwiązania. Zacznij od pytania: „Co chcę zrozumieć lub zdecydować?”. Zbuduj tylko tyle, ile potrzeba, by zobaczyć własne założenia. Potem porównaj zamiar z tym, co faktycznie powstało.

**Notatki dla prowadzącego.** Idea nie oznacza, że trzeba szybko kodować ani że każda niejasność wymaga aplikacji. Chodzi o przeniesienie pomysłu z wyobraźni do zewnętrznego artefaktu, z którym można wejść w interakcję, dostrzec pominięcia i podjąć kolejny krok. AI skraca część wykonawczą, ale to uczestnik wybiera problem, cel, kompromis i kryterium użyteczności. Podkreśl różnicę między „mam aplikację” a „wiem więcej, bo sprawdziłem określone założenie”. Pierwszy prototyp może być niekompletny; źródła przestrzegają przed myleniem połysku z gotowością produktu.

**Zadanie praktyczne — pierwsza wersja i pytanie.**

- **Punkt wyjścia:** własny wybór gatunku oraz własny pomysł na przeznaczenie i zawartość aplikacji. Nie podawaj grupie wspólnego pomysłu ani wymaganych funkcji.
- **Kroki:** (1) Zapisz jedno pytanie lub założenie dotyczące własnego pomysłu. (2) Poproś narzędzie o pomoc w przygotowaniu pierwszej, możliwie prostej wersji tego pomysłu; jeśli cel albo ważna decyzja są niejasne, poleć mu najpierw zadać pytanie zamiast samodzielnie dopowiadać zakres. (3) Obejrzyj rezultat i zanotuj jedną rzecz, którą łatwiej teraz ocenić. (4) Zapisz wersję bazową lub zrób zrzut ekranu.
- **Rezultat przed końcem ćwiczenia:** pierwsza wersja aplikacji, karta z pytaniem oraz jedno zdanie o tym, co prototyp pomógł zobaczyć.
- **Samoocena:** Czy pytanie dotyczy mojego pomysłu? Czy zachowałem jego pierwszy stan? Czy potrafię nazwać decyzję, która jest teraz łatwiejsza? Aplikacja nie musi być ukończona ani działać w każdym szczególe.

**TokenOps.** Wąskie pytanie i mała pierwsza wersja mogą ograniczyć ilość nieistotnego generowania. Samo tworzenie i obserwowanie może jednak ujawnić brakujące informacje, które będą wymagały kolejnych prób. Źródła nie podają pomiaru dla takiej praktyki w warsztacie; nie obiecujemy oszczędności.

**Dobra praktyka.** Najpierw nazwij decyzję, potem wybierz, co zbudować.

**Refleksja i przejście.** Co stało się widoczne dopiero po wygenerowaniu pierwszej wersji? Teraz uczestnik dobierze prototyp do pytania, zanim doda szczegóły.

### Moduł 2. Rodzaje i wierność prototypów

**Cel i obserwowalny efekt.** Uczestnik dobiera rodzaj prototypu, poziom wierności i zakres do własnego pytania oraz zapisuje, jaki dowód chce uzyskać.

**Czas: 25 minut** — teoria 6, demonstracja 4, ćwiczenie 12, refleksja 3.

**Źródła.** *Raw/AI Prototyping/4. The New Product Development Lifecycle.md*, „Concept prototypes”, „Design prototypes”, „Research prototypes”, „Technical prototypes”, „Where prototypes fall short”; *Raw/AI Prototyping/2. From Prompt to Prototype in Minutes.md*, „What’s Missing (and Why That’s Fine)”; *Raw/Test complex interactions/Test Complex Interactions Earlier with AI Prototyping.md*, „Don’t Fall for the Fidelity Trap”.

**Dla uczestników — teoria na slajd.**

> Dobierz prototyp do pytania. Prototyp koncepcyjny pomaga eksplorować alternatywy, projektowy doprecyzować kierunek, badawczy obserwować zachowanie lub reakcję, a techniczny sprawdzić wykonalność. Wierność UI i zakres to osobne decyzje. Wysoka wierność nie oznacza gotowości do wdrożenia.

**Notatki dla prowadzącego.** Cztery kategorie opisują cel, nie cztery obowiązkowe etapy ani prostą skalę jakości. Prototyp techniczny może nie mieć interfejsu; koncepcyjny może celowo upraszczać dane; badawczy potrzebuje wystarczającej wiarygodności, by odpowiedzieć na konkretne pytanie, lecz nie powinien udawać produkcji. „Low-fi/high-fi” są skrótami poziomu dopracowania wizualnego i interakcyjnego. Dodatkowy wymiar to zakres: cała usługa, część doświadczenia lub pojedynczy element. Plik *Raw/Prototyping skill/(MM) AI prototyping skill.md* również oddziela zakres od celu i wierności, ale jest to propozycja autora, nie zatwierdzony standard. Zwróć uwagę na „fidelity trap”: obserwatorzy mogą uznać dopracowany prototyp za gotowy produkt.

**Zadanie praktyczne — dopasuj prototyp do pytania.**

- **Punkt wyjścia:** karta pytania z modułu 1 i aktualny stan własnej aplikacji.
- **Kroki:** (1) Wybierz, czy teraz eksplorujesz alternatywy, doprecyzowujesz kierunek, sprawdzasz zachowanie/reakcję czy wykonalność. (2) Wybierz potrzebny poziom wierności oraz zakres. (3) Dopisz jedno kryterium: po czym poznasz, że prototyp dostarczył informacji do pytania. (4) Poproś AI o kolejną zmianę tylko w granicach swojego wyboru; możesz też zdecydować, że obecna wersja już odpowiada na pytanie.
- **Rezultat:** karta decyzji z celem, wiernością, zakresem, kryterium i ewentualną zmianą własnego projektu.
- **Samoocena:** Czy wybrałem typ ze względu na pytanie? Czy oddzieliłem cel od dopracowania UI? Czy nie uznaję wyglądu za dowód gotowości produktu?

**TokenOps.** Dopasowanie zakresu i wierności może ograniczyć niepotrzebne generowanie szczegółów; eksplorowanie kilku wariantów może z kolei zwiększyć liczbę generowanych wersji. To kompromis zależny od narzędzia i zadania. Brak pomiarów dla tego ćwiczenia.

**Dobra praktyka.** Wybierz najmniejszy zakres i poziom wierności, które pozwolą odpowiedzieć na pytanie.

**Refleksja i przejście.** Jaką wiedzę uczestnik już ma, a czego AI musiałoby się domyślić? To prowadzi do przygotowania kontekstu.

### Moduł 3. Przygotowanie kontekstu

**Cel i obserwowalny efekt.** Uczestnik przygotowuje krótki, uporządkowany kontekst do zadania w swojej aplikacji i potrafi wyjaśnić, które informacje są niezbędne dla tego zadania.

**Czas: 35 minut** — teoria 8, demonstracja 5, ćwiczenie 18, refleksja 4.

**Źródła.** *Raw/AI Prototyping/6. Context Engineering for Prototyping.md*, „What is context engineering?”, „Functional context”, „Visual context”, „Data context”, „Pulling it all together”; *Raw/AI Prototyping/7. Defining Your Product Context.md*, „Project knowledge”, „Design system”, „Maintaining your context over time”. Przykład muzyczny w źródle jest tylko przykładem techniki; nie jest briefem dla uczestników.

**Dla uczestników — teoria na slajd.**

> Kontekst to informacje, które pomagają AI wykonać konkretne zadanie. Dobierz je do celu: zachowanie i ograniczenia (funkcjonalne), wygląd lub odniesienie (wizualne), oraz dane i ich strukturę (danych). Uporządkuj je tak, by wiadomo było, co jest wymaganiem, przykładem, a co pozostaje otwarte.

**Notatki dla prowadzącego.** Prompt jest jednym elementem szerszego kontekstu, na który mogą składać się wcześniejsze ustalenia, pliki i załączniki. W ćwiczeniu nie chodzi o jak najdłuższą specyfikację. Uczestnik wybiera kontekst potrzebny do własnego pytania. Kontekst funkcjonalny wyjaśnia zadanie i zachowanie; wizualny może składać się z opisu, szkicu, zrzutu lub referencji; kontekst danych określa kształt oraz reprezentatywne przykłady. Jeśli któryś rodzaj nie jest potrzebny, uczestnik ma to jawnie zaznaczyć, zamiast tworzyć sztuczną treść. Rzeczywiste dane nie są wymagane. Nie należy wgrywać danych osobowych ani poufnych; przed warsztatem trzeba sprawdzić politykę wybranego narzędzia. Źródło zaleca szczegółowość, a TokenOps zwraca uwagę na higienę kontekstu. Łączymy te wskazówki tak: kompletność względem zadania, nie maksymalna objętość.

**Zadanie praktyczne — spakuj niezbędny kontekst.**

- **Punkt wyjścia:** wybrany przez uczestnika element, pytanie lub niepewność związana z jego aplikacją; decyzja o celu/wierności z modułu 2.
- **Kroki:** przygotuj krótki brief z polami:
  1. **Cel i pytanie:** czego chcę się dowiedzieć?
  2. **Funkcjonalne:** co ma się wydarzyć w wybranym zakresie i jakie ograniczenie jest ważne?
  3. **Wizualne:** jaki opis, szkic, zrzut albo inna referencja jest przydatna? Jeśli żadna, zaznacz dlaczego.
  4. **Dane:** jakie przykładowe informacje i relacje są potrzebne? Dodaj mały, syntetyczny przykład albo zaznacz, że dane nie są potrzebne.
  5. **Granice i niewiadome:** czego nie rozstrzygnięto i co AI powinno najpierw dopytać?
  Następnie usuń informacje niezwiązane z zadaniem, przekaż brief AI i użyj go do przygotowania własnej zmiany lub następnego kroku. Zachowaj brief.
- **Rezultat:** krótki kontekst oraz jeden wynik pracy nad własnym projektem.
- **Samoocena:** Czy AI wie, jaki jest cel? Czy rozumie zachowanie i granice? Czy opis wizualny i dane są użyteczne albo jawnie pominięte? Czy oddzieliłem fakty od założeń?

**TokenOps.** Trafny kontekst może ograniczyć zgadywanie i rundy doprecyzowujące, ale jego dołączenie zwiększa liczbę tokenów wejściowych. Nie dołączaj dużych zbiorów danych, gdy wystarczy schemat lub mała próbka. Źródło TokenOps zaleca zarządzanie kontekstem; nie mierzy wpływu tego szablonu na koszt prototypu.

**Dobra praktyka.** Daj AI kontekst wystarczający do zadania, a zbędny zostaw poza bieżącą prośbą.

**Refleksja i przejście.** Który element kontekstu najbardziej zmienił jakość decyzji AI? Następnie opiszemy zachowanie, zamiast ograniczać się do wyglądu.

### Moduł 4. Interakcje poza statycznym ekranem

**Cel i obserwowalny efekt.** Uczestnik zapisuje wybrane przez siebie zachowanie jako działanie, stan przed, zmianę/przejście i oczekiwany rezultat; testuje je na własnym prototypie.

**Czas: 35 minut** — teoria 7, demonstracja 6, ćwiczenie 18, refleksja 4.

**Źródła.** *Raw/AI Prototyping/6. Context Engineering for Prototyping.md*, „Functional context”; *Raw/Test complex interactions/Test Complex Interactions Earlier with AI Prototyping.md*, „How to Prototype Complex Interfaces with AI”; *Raw/AI Prototyping/14. Testing Prototypes With Customers.md*, „Start with the question, not the prototype”, „Observe more than you talk”.

**Dla uczestników — teoria na slajd.**

> Opisz interakcję jako sekwencję: działanie użytkownika → stan przed → zmiana → rezultat widoczny dla użytkownika. Dodaj stan pusty, oczekiwanie lub błąd, jeśli ma znaczenie dla pytania. Sprawdź zachowanie w prototypie; sam opis ekranu nie potwierdza, że interakcja działa.

**Notatki dla prowadzącego.** Statyczny ekran pomaga rozmawiać o widocznym układzie, ale nie pokazuje reakcji systemu na działanie. Prosta tabela zachowania jest narzędziem ćwiczeniowym, nie wymogiem dla każdego zadania w pracy. Nie każ uczestnikom opisywać wszystkich przypadków brzegowych: wybierają jeden istotny dla własnego pytania. Studia przypadków z materiału o interfejsach złożonych ilustrują, że większa interaktywność może ujawnić zachowania nieobecne w statycznym makiecie; autor ostrzega, by nie traktować pojedynczego przypadku jako kontrolowanego dowodu przewagi metody. Jeśli pokazujesz przykład, użyj neutralnego schematu A→B, a nie wspólnej funkcji dla aplikacji muzycznych. W czasie testu uczestnik opisuje, co zrobił i co zobaczył; nie sugerujemy, że to test z klientem.

**Zadanie praktyczne — opisz i uruchom wybraną interakcję.**

- **Punkt wyjścia:** element lub pytanie wybrane przez uczestnika oraz kontekst z modułu 3.
- **Kroki:** (1) Wybierz jedną interakcję z własnego projektu. (2) Uzupełnij tabelę dla co najmniej jednego przejścia: działanie użytkownika, stan przed, oczekiwana zmiana, rezultat widoczny. Jeśli istotne, dodaj jeden stan brzegowy. (3) Poproś AI o wdrożenie lub korektę tylko tego zachowania. (4) Uruchom prototyp, wykonaj scenariusz i zanotuj rzeczywisty rezultat.
- **Rezultat:** tabela z co najmniej jednym przejściem oraz notatka, czy zachowanie udało się zaobserwować.
- **Samoocena:** Czy opisuję działanie, a nie samą nazwę funkcji? Czy wiem, co powinno być widoczne po działaniu? Czy przetestowałem prototyp, zamiast przyjąć zapewnienie AI?

| Działanie użytkownika | Stan przed | Zmiana lub przejście | Oczekiwany rezultat | Stan brzegowy (opcjonalnie) |
|---|---|---|---|---|
| [własny wybór] | [własny opis] | [własny opis] | [własny opis] | [własny wybór] |

**TokenOps.** Określenie jednej interakcji i jej wyniku może ograniczyć niepotrzebne zmiany w pozostałych częściach prototypu oraz kosztowne poprawki wynikające z niejasności. Dodanie ważnych stanów brzegowych może zwiększyć zakres generowania; wybieraj je według pytania. Nie ma pomiarów oszczędności.

**Dobra praktyka.** Dla każdej ważnej interakcji określ stan przed i widoczny rezultat.

**Refleksja i przejście.** Co było trudniejsze: opisanie zmiany czy zaobserwowanie jej? Aby poprawiać wynik, trzeba jeszcze wiedzieć, gdzie w projekcie wprowadzić zmianę.

### Moduł 5. Struktura prototypu i zakres zmiany

**Cel i obserwowalny efekt.** Uczestnik wskazuje element swojego prototypu, który odpowiada wybranej zmianie, oraz przygotowuje ograniczoną prośbę o zmianę z kryterium sprawdzenia.

**Czas: 25 minut** — teoria 6, demonstracja 5, ćwiczenie 11, refleksja 3.

**Źródła.** *Raw/AI Prototyping/8. Software Architecture for Non-Technical Builders.md*, „The frontend”, „React components”, „The file structure”, „Walking through the UI”, „What this means for your prototyping”; *Raw/AI Prototyping/2. From Prompt to Prototype in Minutes.md*, „Code View”.

**Dla uczestników — teoria na slajd.**

> Nie musisz znać całego kodu, by ograniczyć zmianę. Ustal, czy dotyczy wyglądu, zachowania, treści czy danych. Następnie wskaż widoczny element lub — jeśli możesz — nazwę jego komponentu/pliku. Poproś o plan i zmianę w tym zakresie, a potem sprawdź, co jeszcze się zmieniło.

**Notatki dla prowadzącego.** Frontend to część widoczna i obsługiwana przez użytkownika; komponenty są powtarzalnymi elementami, a główny plik często składa je w widok. Dane mogą znajdować się osobno. To uproszczony model z rozdziału o aplikacji React; narzędzie może wygenerować inny stos i strukturę. Nie uczymy terminologii dla niej samej. Uczestnik zaczyna od widoku i zachowania: „ten element”, „ten tekst”, „ta zmiana stanu”. Jeśli narzędzie pokazuje pliki, AI może wskazać prawdopodobne miejsce, ale to hipoteza do sprawdzenia. Poproś model najpierw o plan; uczestnik decyduje, czy wprowadzić ograniczoną poprawkę.

**Zadanie praktyczne — znajdź miejsce zmiany i ogranicz jej zakres.**

- **Punkt wyjścia:** wybrany element z modułu 4 lub inna własna część aplikacji, którą uczestnik chce zmienić.
- **Kroki:** (1) Opisz element z perspektywy użytkownika i rodzaj zmiany: wygląd, zachowanie, treść lub dane. (2) Poproś narzędzie o wskazanie miejsca w projekcie i krótkie wyjaśnienie; jeśli jest widok plików, porównaj odpowiedź z tym, co widzisz. (3) Zapisz granice: co ma się zmienić i co powinno pozostać takie samo. (4) Poproś o plan bez wdrażania, a następnie o jedną ograniczoną zmianę. (5) Sprawdź kryterium oraz sąsiedni element, jeśli jest dostępny.
- **Rezultat:** mapa albo sprawdzona hipoteza miejsca zmiany, treść ograniczonej prośby i zapis tego, co uczestnik sprawdził.
- **Samoocena:** Czy wskazałem konkretny element? Czy AI wyjaśniło, co planuje? Czy obejrzałem też obszar, który miał pozostać bez zmian?

**TokenOps.** Lokalizowanie elementu i zawężenie poprawki mogą zmniejszyć ilość kodu lub treści generowanych poza zadaniem. Rozpoznanie struktury może wymagać dodatkowego kontekstu lub inspekcji. Sama modularność nie gwarantuje niższego zużycia ani kosztu; źródło nie przedstawia takiego pomiaru.

**Dobra praktyka.** Wskaż element, granicę zmiany i sposób jej sprawdzenia.

**Refleksja i przejście.** Czy zmiana została ograniczona tak, jak zakładałeś? Teraz zastosujemy dowody do diagnozowania problemu i porównania wersji.

### Moduł 6. Debugowanie i ukierunkowana poprawka

**Cel i obserwowalny efekt.** Uczestnik opisuje problem za pomocą odtwarzalnych kroków i dowodu, wprowadza jedną celowaną poprawkę lub istotną zmianę w wybranym elemencie, a następnie porównuje wynik z punktem odniesienia i wyjaśnia, co poprawiła.

**Czas: 35 minut** — teoria 7, demonstracja 5, ćwiczenie 19, refleksja 4.

**Źródła.** *Raw/AI Prototyping/9. Debugging Your Prototypes.md*, „The debugging ladder”, „Describe the problem to the AI”, „The core workflow: copy, paste, fix”, „The three-strike rule”, „Managing versions”, „When to start over”, „How to rebuild effectively”; uzupełniająco *Raw/AI Prototyping/14. Testing Prototypes With Customers.md*, „Observe more than you talk”.

**Dla uczestników — teoria na slajd.**

> Zanim poprawisz, odtwórz problem. Zapisz kroki, oczekiwany i rzeczywisty wynik oraz dowód, np. zrzut ekranu lub komunikat. Zachowaj działającą wersję. Poproś o diagnozę, gdy przyczyna jest niejasna, wprowadzaj ograniczoną zmianę i powtórz test.

**Notatki dla prowadzącego.** Debugowanie nie zaczyna się od prośby „napraw wszystko”. Uczestnik ma rozróżnić obserwację („po kroku 2 element nie pojawia się”) od interpretacji („AI źle napisało logikę”). Jeśli można, odtwarza problem ponownie. Oprócz widocznego zachowania pomocne mogą być komunikaty konsoli, ale zależą od narzędzia i nie są warunkiem ćwiczenia. Zachowanie wersji bazowej umożliwia porównanie lub cofnięcie zmiany. Materiał opisuje „three-strike rule”: po trzech nieudanych próbach warto zmienić taktykę, przywrócić stabilną wersję albo przebudować prostszy fragment. Nie nakłaniaj do powtarzania trzech prób w ograniczonym czasie. Jeśli projekt działa, uczestnik może odnaleźć niespójność względem własnego kryterium lub wybrać element, którego zachowanie pozostaje niepewne; nie każ mu sztucznie psuć projektu.

**Zadanie praktyczne — udokumentuj, zmień i porównaj.**

- **Punkt wyjścia:** zapisany punkt odniesienia z wcześniejszego modułu oraz wybrany przez uczestnika rezultat lub zachowanie, które chce sprawdzić.
- **Kroki:** (1) Odtwórz problem albo sprawdź wybrane kryterium. (2) Zapisz kroki, wynik oczekiwany, wynik rzeczywisty i dowód. (3) Zachowaj aktualną wersję. (4) Jeśli przyczyna jest niejasna, poproś AI najpierw o diagnozę bez zmiany. Potem poproś o jedną ograniczoną poprawkę; jeśli większy zakres jest uzasadniony, uczestnik wyjaśnia dlaczego. (5) Uruchom ten sam scenariusz ponownie i sprawdź sąsiednie zachowanie, o ile jest dostępne. (6) Porównaj wersje: co się zmieniło, co poprawiło względem pytania i czego nadal nie wiadomo.
- **Rezultat:** raport problemu lub testu, zachowany stan „przed”, zmieniony stan „po” oraz krótki wniosek oparty na zaobserwowanym wyniku. Jeśli naprawa się nie uda, dowód i następny krok też są poprawnym rezultatem ćwiczenia.
- **Samoocena:** Czy ktoś inny mógłby odtworzyć opisany problem? Czy porównałem faktyczne zachowanie? Czy potrafię wyjaśnić, co poprawiła zmiana i czego prototyp nadal nie dowodzi?

**TokenOps.** Reprodukcja, dowód, zachowana wersja i wąska poprawka mogą ograniczyć zgadywanie oraz serię przypadkowych prób. Zrzuty, logi i diagnoza zwiększają kontekst, a więc mogą zwiększyć zużycie wejściowe. Po kilku nieudanych próbach lepiej zmienić strategię niż ponawiać podobne polecenia. To prawdopodobne mechanizmy, nie gwarantowane oszczędności.

**Dobra praktyka.** Zmieniaj po jednej rzeczy i testuj ponownie według tych samych kroków.

**Refleksja i przejście.** Który dowód pomógł odróżnić problem od przypuszczenia? Jak zapisać metodę tak, by można ją było wykorzystać w kolejnym projekcie?

### Moduł 7. Skill prototypowania z AI a zasady

**Cel i obserwowalny efekt.** Uczestnik rozróżnia ogólną zasadę pracy od instrukcji dla AI oraz przygotowuje po jednym przykładzie każdego rodzaju na podstawie własnych doświadczeń z warsztatu.

**Czas: 25 minut** — teoria 7, demonstracja 4, ćwiczenie 11, refleksja 3.

**Źródła.** *Raw/Prototyping skill/(MM) AI prototyping skill.md*, „Proponowane tryby”, „Reguła wyboru trybu” — materiał roboczy, nie zatwierdzony standard. *Raw/TokenOPS/TokenOPS - AI Coding Centre (1).md*, „Principles”. Repozytorium nie zawiera formalnej definicji Skill prototypowania z AI ani zamkniętej listy zasad; definicje poniżej są **propozycją warsztatową**.

**Dla uczestników — teoria na slajd.**

> Zasada mówi, jak podejmować dobre decyzje w prototypowaniu, niezależnie od konkretnego narzędzia. Skill to instrukcja wielokrotnego użytku dla AI: kiedy ją stosować, o co dopytać, jakie kroki wykonać, czego nie dopowiadać i jak sprawdzić wynik. Skill może wykorzystywać zasady, ale nie jest ich listą.

**Notatki dla prowadzącego.** Ponieważ źródła nie ustanawiają tu terminologii, przedstaw ją jako roboczą umowę na warsztat. **Zasada** jest krótka, stabilna, skierowana do człowieka podejmującego decyzję; może brzmieć „dopasuj zakres prototypu do pytania”. **Instrukcja/Skill** operacjonalizuje zachowanie AI: poproś o cel i pytanie, ustal brakujące ograniczenia, zaproponuj zakres, zmieniaj wybrany element, pokaż plan i podaj sposób weryfikacji. Zasada może być ujęta w Skill, ale sama z siebie nie mówi, kiedy AI ma dopytać ani jaki rezultat zwrócić. Skill powinien być krótki, możliwy do edycji i niezależny od nieznanych możliwości narzędzia. Istniejący plik proponuje rozdzielenie celu, wierności i zakresu; można zapytać grupę, czy ten podział jest użyteczny w ich pracy, zamiast przedstawiać go jako nakaz. Nie zakładaj, że instrukcja musi być opublikowana jako plik techniczny; prompt lub notatka wystarczy na wersję warsztatową.

**Zadanie praktyczne — przepisz doświadczenie na dwa formaty.**

- **Punkt wyjścia:** własne notatki, zasada z dowolnego modułu lub trudność zaobserwowana podczas pracy.
- **Kroki:** (1) Sformułuj jedno zdanie, które jest zasadą i obowiązywałoby także przy innym narzędziu. (2) Zapisz osobno instrukcję dla AI, która pozwoli zastosować tę zasadę: kiedy użyć, o co dopytać, jaki ograniczony krok wykonać i jak sprawdzić wynik. (3) Oznacz fragmenty zależne od funkcji konkretnego narzędzia jako opcjonalne. (4) Poproś AI o zastosowanie roboczej instrukcji do własnego pytania i popraw ją, jeśli model dopowie niezamówiony zakres.
- **Rezultat:** para „zasada” i „instrukcja dla AI” oraz obserwacja, czy instrukcja pomogła modelowi zachować cel i granice zadania.
- **Samoocena:** Czy zasada jest zrozumiała bez wskazania jednego produktu? Czy instrukcja wymienia kroki i kontrolę wyniku? Czy model ma zapytać, gdy brakuje ważnej decyzji?

**TokenOps.** Krótka, dobrze dobrana instrukcja może ograniczyć powtarzanie tych samych wyjaśnień; jej napisanie i dopasowanie ma koszt, a niepotrzebne szczegóły zwiększają kontekst. Użyteczność i oszczędność trzeba sprawdzić w narzędziu, jeśli pokazuje takie dane. Repozytorium nie mierzy efektu ponownego użycia Skill w prototypowaniu.

**Dobra praktyka.** Zasada kieruje decyzją; Skill przekłada ją na powtarzalne działanie AI.

**Refleksja i przejście.** Którą część instrukcji można wykorzystać w wielu narzędziach, a która wymaga dostosowania? W module 8 zbierzemy praktyki w wersję roboczą.

### Moduł 8. Synteza: roboczy Skill i lista zasad

**Cel i obserwowalny efekt.** Uczestnik pomaga zebrać warsztatowe dobre praktyki w listę zwięzłych zasad oraz współtworzy roboczy Skill prototypowania z AI z wejściem, procedurą i kontrolą wyniku.

**Czas: 20 minut** — teoria 4, demonstracja 3, ćwiczenie 10, refleksja 3.

**Źródła.** Podsumowania i praktyki modułów 1–7. Uzupełniająco: *Raw/TokenOPS/TokenOPS - AI Coding Centre (1).md*, „Principles”; *Raw/Spec-Driven Development (SDD) — best practices (so far)/Spec-Driven Development (SDD) — best practices (so far).md*, „Balanced level of detail”, „Acceptance criteria”. To **propozycja warsztatowa** stworzyć dwa wyniki robocze; źródła nie definiują formatu ani nie zatwierdzają ich treści.

**Dla uczestników — teoria na slajd.**

> Dobra zasada pomaga wybierać, a dobra instrukcja dla AI pozwala powtarzać wybrany sposób pracy. Zbieramy tylko praktyki, które pomogły w konkretnym zadaniu. Zapisujemy je krótko i sprawdzamy, czy można je zastosować w następnym prototypie.

**Notatki dla prowadzącego.** Zamknij cykl: pytanie → dobór celu i wierności → kontekst → interakcja → ograniczona zmiana → obserwacja → decyzja o kolejnym kroku. To synteza tematów warsztatu, nie nowa metodologia potwierdzona w źródłach. Zbierz po jednym krótkim wniosku od chętnych; sześć osób pozwala na rundę głosów, ale nie wymagaj długich prezentacji ani sprawdzania każdego artefaktu. Zasady powinny być krótkie i niezależne od marki narzędzia. Skill powinien zawierać warunki użycia, pytania do użytkownika, kroki, granice, sposób weryfikacji oraz zachowanie w razie niepowodzenia. Nie zamieniaj go w długi formularz ani instrukcję budowania konkretnego produktu. To wersja do dalszego omówienia, nie standard organizacji.

**Zadanie praktyczne — zbierz praktyki do dwóch wersji roboczych.**

- **Punkt wyjścia:** dobre praktyki z końców modułów i indywidualne artefakty uczestników.
- **Kroki:** (1) Każdy wybiera jedną zasadę, która pomogła mu w pracy. (2) Prowadzący zbiera powtórzenia i łączy je w krótką listę; grupa może zaproponować korekty, ale nie głosuje nad „poprawnością” aplikacji. (3) Uzupełnijcie wspólny szkic Skill: **kiedy użyć**, **o co dopytać przed zmianą**, **jak użyć kontekstu i ograniczyć zakres**, **jak sprawdzić wynik**, **co zrobić, gdy nie działa**. (4) Przeczytajcie instrukcję i usuńcie powtórzenia albo wymogi zależne od niepotwierdzonego narzędzia.
- **Rezultat:** robocza lista zasad prototypowania wspomaganego przez AI oraz wersja 0.1 Skill do dalszego przeglądu. Każdy uczestnik zapisuje jedną rzecz, którą przetestuje w swojej następnej pracy.
- **Samoocena:** Czy zasady są krótkie i wielokrotnego użytku? Czy Skill mówi AI, co zrobić i jak sprawdzić rezultat? Czy nie wymyśla uczestnikowi celu ani funkcji aplikacji?

**TokenOps.** Zebrane zasady mogą pomóc ograniczyć powtarzanie decyzji i zbędny kontekst w następnych zadaniach, ale przygotowanie, utrzymanie i stosowanie Skill także wymaga czasu i tokenów. Krótsza instrukcja nie zawsze da lepszy wynik; skuteczność oraz koszt zależą od narzędzia i zadania. Warsztat nie mierzy oszczędności.

**Dobra praktyka.** Zachowaj to, co pomaga podjąć i sprawdzić następną decyzję.

**Refleksja i przejście.** Co należy przetestować lub uzgodnić przed użyciem Skill w prawdziwym projekcie?

### Materiał roboczy do syntezy

Poniższe zasady są propozycją do wybrania, przeredagowania lub odrzucenia podczas warsztatu; nie są ustaleniami repozytorium ani obowiązkową checklistą.

1. Zacznij od decyzji lub pytania, które chcesz rozstrzygnąć.
2. Dobierz cel, wierność i zakres prototypu do tego pytania.
3. Podaj kontekst istotny dla zadania i oznacz niewiadome.
4. Opisz ważne interakcje przez działania, stany, przejścia i widoczne rezultaty.
5. Ogranicz prośbę do wybranej zmiany i zachowaj stabilną wersję.
6. Sprawdź wynik na kryterium i rzeczywistym zachowaniu, nie na deklaracji AI.
7. Gdy kolejne próby nie pomagają, zmień taktykę lub uprość prototyp.
8. Oddziel to, co prototyp pokazuje, od tego, czego nie potwierdza.

**Szkic instrukcji/Skill v0.1 — propozycja do wspólnego redagowania**

~~~text
Pomagaj mi prototypować, aby odpowiedzieć na moje pytanie, a nie aby domyślnie budować gotowy produkt.

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
[uczestnik wpisuje własną treść]

Kryterium sprawdzenia:
[uczestnik wpisuje własną treść]
~~~

## 4. Uwagi do omówienia i ryzyka realizacyjne

1. **Wybór narzędzia:** przed warsztatem trzeba wskazać narzędzie, sprawdzić dostęp, możliwość tworzenia kopii/historii, podgląd zachowania oraz politykę danych. Materiał źródłowy nie ustala, które narzędzie jest dostępne.
2. **Czas na konfigurację:** agenda przeznacza 15 minut na otwarcie i kontrolę dostępu. Jeśli rejestracja, płatności lub instalacja wymagają więcej, należy je wykonać przed warsztatem; w przeciwnym razie ograniczy to ćwiczenia.
3. **Kompromis między szerokością a głębokością:** osiem tematów mieści się w 270 minutach tylko jako wprowadzenie z krótkimi próbami. Uczestnicy zabiorą wzorce pracy i wersje robocze artefaktów, nie ekspercki poziom biegłości.
4. **Wydajność narzędzia:** generowanie może trwać lub wynik może wymagać kilku iteracji. Prowadzący pilnuje, by uczestnik zachował artefakt opisujący decyzję i kryterium, nawet jeśli nie zdąży ukończyć zmiany.
5. **TokenOps i koszty:** źródło zawiera szacunkowe twierdzenia o procentowych oszczędnościach bez opisanego protokołu pomiaru. Nie są one używane jako cele warsztatu ani obietnice. Jeśli grupa chce uczyć się pomiaru, trzeba osobno ustalić narzędzie i dostęp do danych o zużyciu.
6. **Skill i zasady:** należy omówić, czy końcowe wyniki mają pozostać roboczym promptem i listą dobrych praktyk, czy po warsztacie zostaną formalnie rozwinięte jako instrukcja dla konkretnego narzędzia. Repozytorium tego nie rozstrzyga.
7. **Walidacja produktu:** ćwiczenia warsztatowe nie są badaniem z klientami. Własne kliknięcie potwierdza działanie w prototypie, ale nie dowodzi wartości produktu ani zachowania klientów.
8. **Charakter źródeł:** materiały przedstawiają edukacyjne przykłady i przypadki, często związane z konkretnym narzędziem. Demo trzeba dostosować do rzeczywiście dostępnego środowiska i nie przypisywać nieudokumentowanych właściwości produktom.
9. **Możliwe rozszerzenia po warsztacie:** testowanie z użytkownikami (*14. Testing Prototypes With Customers*), integracje API (*10. Using APIs in Your Prototypes*), trwałość danych i uwierzytelnianie (*11. Data Persistence and Authentication*) albo przekazanie prototypu zespołowi (*15. Handing Prototypes Off to Design & Engineering*). Są poza podstawową agendą, bo wymagają dodatkowego czasu i nie są konieczne do ćwiczenia procesu.

## 5. Kontrola spójności szkicu

- **Czas:** agenda ma 270 minut, w tym 20 minut przerw, 15 minut otwarcia i 10 minut zamknięcia. Osiem modułów zajmuje 225 minut.
- **Zależności:** pytanie poprzedza wybór prototypu; dobór celu poprzedza kontekst; kontekst poprzedza opis interakcji; rozpoznanie miejsca zmiany poprzedza poprawkę; wersja bazowa istnieje przed porównaniem.
- **Swoboda wyboru:** uczestnik ustala cel i zawartość aplikacji. Zadania wskazują technikę, materiał wejściowy i rezultat, ale nie narzucają pomysłu produktowego, funkcji, ekranów, przepływu ani wyniku aplikacji.
- **Rezultaty ćwiczeń:** każde ćwiczenie kończy się artefaktem lub obserwacją do samodzielnej weryfikacji. Prowadzący nie musi kontrolować indywidualnie pracy każdej osoby.
- **Tok nauki:** jedna aplikacja rozwija się w kolejnych modułach; wersja początkowa pozwala porównać późniejszą, ukierunkowaną zmianę.
- **Rozdział treści:** teoria dla uczestników jest krótka, a notatki dla prowadzącego wyjaśniają pojęcia, zastosowanie i ograniczenia.
- **TokenOps:** każdy moduł opisuje możliwy mechanizm wpływu i kompromis, bez wymyślania pomiarów ani gwarantowania oszczędności.
- **Status źródeł:** treści źródłowe są nazwane plikiem i sekcją; ćwiczenia, definicja warsztatowego Skill i lista dobrych praktyk pozostają jawnie oznaczone jako propozycje.

