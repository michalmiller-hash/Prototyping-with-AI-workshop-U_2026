# Pierwszy szkic warsztatu: prototypowanie wspomagane AI

> **Status:** szkic do przeglądu. Założenia o odbiorcach, narzędziach i czasie nie są potwierdzonymi wymaganiami. Materiał uczestnika jest oznaczony jako „Dla uczestników”; uwagi dla prowadzącego i źródła pozostają osobno.

## 1. Przegląd źródeł i założenia

### Co wynika ze źródeł

- Prototyp ma pomagać podjąć decyzję i zdobyć wiedzę, a nie udawać gotowy produkt. Źródła rozróżniają prototypy koncepcyjne, projektowe, badawcze i techniczne według celu; nie należy utożsamiać wysokiej wierności z gotowością do wdrożenia. (*The New Product Development Lifecycle*, „Prototypes are decision-making tools”, „Concept prototypes”, „Design prototypes”, „Research prototypes”, „Technical prototypes”; *From Prompt to Prototype in Minutes*, „What’s Missing (and Why That’s Fine)”).
- Użyteczny wynik AI zależy od kontekstu funkcjonalnego, wizualnego i danych, a nie od samej długości promptu. (*Context Engineering for Prototyping*, „What your prototyping tool needs to know”, „Functional context”, „Visual context”, „Data context”, „Build a Music Genre Discovery Feature”; *Defining Your Product Context*, „Project knowledge”, „Design system: making prototypes look like your product”).
- Interakcję warto opisać jako czynność, zmianę stanu i wynik widoczny dla użytkownika. Kod i architektura są przydatne na tyle, na ile pomagają wskazać zakres zmiany. (*From Prompt to Prototype in Minutes*, „Code View”; *Software Architecture for Non-Technical Builders*, „The frontend”, „React components”, „Inside a real prototype”).
- Debugowanie zaczyna się od odtworzenia i precyzyjnego opisu problemu, użycia widocznych dowodów, a następnie ograniczonej poprawki. Źródło zaleca po 2–3 nieudanych próbach zmianę taktyki, cofnięcie do działającej wersji lub rozpoczęcie od nowa. (*Debugging Your Prototypes*, „The debugging ladder”, „The core workflow: copy, paste, fix”, „The three-strike rule”, „Managing versions”, „How to rebuild effectively”).
- Testowanie powinno zaczynać się od pytania badawczego; należy obserwować działania użytkownika, a nie podpowiadać mu rozwiązanie. (*Testing Prototypes With Customers*, „Start with the question, not the prototype”, „Observe more than you talk”, „Desirability testing”, „Usability testing”).
- Materiał TokenOPS proponuje zarządzanie wysiłkiem, planowanie, ograniczanie kontekstu, korzystanie ze skryptów i właściwy dobór modelu. Podane tam procentowe oszczędności nie mają w pliku opisu pomiaru; szkic nie traktuje ich jako gwarantowanych wyników. (*TokenOPS - AI Coding Centre*, „Principles”).
- Istnieją materiały o specyfikacji i prototypowaniu złożonych interakcji. Pusty plik „13. Spec = prompts.md” nie wnosi dostępnej treści. Roboczy skill prototypowania proponuje rozdzielać cel, wierność UI i zakres; jest to przydatna propozycja, ale nie zatwierdzona metodologia. (*Spec-Driven Development (SDD) — best practices (so far)*, „Balanced level of detail”, „Separate ‘what’ from ‘how’”, „Acceptance criteria”; *Test Complex Interactions Earlier with AI Prototyping*, „How to Prototype Complex Interfaces with AI”; *(MM) AI prototyping skill*, „Proponowane tryby”).

### Potwierdzone wymagania a propozycje

**Potwierdzone w kontekście projektu:** język materiału dla uczestników nie został wskazany; warsztat ma przebiegać w cyklu „określ intencję → zbuduj lub zmień → sprawdź zachowanie → wyciągnij wniosek → zdecyduj o następnym kroku”; osiem podanych tematów jest punktem wyjścia; wspólny projekt dotyczy aplikacji związanej z wybranym gatunkiem muzyki; należy zachować wczesną wersję do porównania; preferowane są mock data i symulacje; nie budujemy ani nie zmieniamy witryny kursu.

**Założenia robocze tego szkicu:** 6 godzin łącznie z przerwami, warsztat stacjonarny, praca indywidualna, grupa 8–16 osób, początkujący lub średnio zaawansowani w pracy produktowej/projektowej, podstawowa swoboda w przeglądarce, bez wymogu znajomości kodu; uczestnicy mają dostęp do jednego zatwierdzonego narzędzia AI do budowy interfejsów z podglądem i możliwością cofnięcia zmian. Materiał dla uczestników jest po polsku. Nazwy przycisków mogą różnić się między narzędziami.

**Ograniczenia i decyzje:** przed warsztatem organizator musi wybrać konkretne narzędzie, sprawdzić konta i dostęp, oraz ustalić zasady użycia AI/danych. Aplikacja będzie samodzielną makietą z lokalnym stanem i danymi przykładowymi — bez prawdziwego logowania, API, streamingu ani zapisu do wspólnej bazy.

### Ważna luka metodologiczna

W źródłach typ prototypu opisuje się raz według celu (np. koncepcja lub badanie), innym razem według wierności i zakresu. Dla nauczania rozdzielam te wymiary: **cel** (eksploracja czy walidacja), **wierność** (low-fi czy high-fi) i **zakres** (pełny przepływ czy komponent). Nie zakładam, że są to kolejne szczeble jednej skali. To uzgodnienie dydaktyczne do zatwierdzenia.

## 2. Opis warsztatu

### Profil, przygotowanie i rezultaty

**Profil uczestnika (propozycja):** osoby pracujące nad produktami cyfrowymi — produkt, design, badania, operacje lub rozwój biznesu — które chcą szybciej sprawdzać decyzje przez działający prototyp. Doświadczenie programistyczne nie jest wymagane.

**Przygotowanie:** laptop z aktualną przeglądarką, dostęp do wybranego narzędzia, wybrany gatunek muzyczny oraz możliwość otwarcia/udostępnienia projektu. Nie używać danych osobowych ani poufnych. Prowadzący dostarcza brief, zestaw przykładowych danych i kartę testu.

**Rezultaty uczenia się:** na koniec uczestnik potrafi:

1. Wybrać cel, wierność i zakres prototypu stosownie do pytania projektowego.
2. Przygotować krótki kontekst: użytkownik, potrzeba, scenariusz, zachowanie, ograniczenia, kierunek wizualny i dane.
3. Opisać interakcję przez działanie użytkownika, stan początkowy, zmianę i oczekiwany rezultat.
4. Odszukać element lub obszar projektu, którego dotyczy mała zmiana, i ograniczyć jej zakres.
5. Odtworzyć problem, poprosić o poprawkę opartą na dowodach i zweryfikować zachowanie.
6. Świadomie zarządzać kontekstem, zakresem generowania i liczbą iteracji.
7. Zachować wczesną wersję i przebudować ten sam scenariusz, porównując efekt oraz sposób pracy.
8. Sformułować własny powtarzalny proces i wyjaśnić, czego prototyp nie dowodzi.

### Brief wspólnego projektu

**Aplikacja „Odkrywaj brzmienia”** pomaga osobie, która chce znaleźć muzykę pasującą do nastroju, ale nie zna nazw wykonawców ani podgatunków. Użytkownik wybiera jeden gatunek (np. jazz, punk, ambient, hip-hop), przegląda 4–6 przykładowych albumów lub wykonawców, zapisuje interesujące znalezisko na krótkiej liście i wraca do listy.

**Główne pytanie warsztatowe:** czy sposób prezentacji rekomendacji pomaga użytkownikowi wybrać i zapisać interesujące znalezisko?

**Przepływy:** (1) wybrać lub zmienić gatunek, (2) przeglądać rekomendacje i otworzyć szczegół, (3) zapisać/odznaczyć pozycję i odnaleźć ją na liście zapisanych. Dane są wymyślone, lecz wiarygodne; „zapis” utrzymuje się tylko w trakcie sesji prototypu, chyba że użyte narzędzie zapewnia prosty lokalny stan.

**Zakres minimalny:** jedna strona lub prosty układ z rekomendacjami i zapisanymi pozycjami; 4 elementy danych; 2 gatunki; stan pusty lub potwierdzenie zapisu; działające kliknięcia. Nie budować katalogu, odtwarzacza audio, kont, prawdziwych rekomendacji, płatności ani backendu. Personalizacja gatunku, tekstów i nastroju wizualnego nie zmienia przepływów.

### Agenda 6-godzinna

| Czas | Moduł | Czas modułu |
|---|---|---:|
| 09:30–09:50 | 1. Myślenie przez tworzenie | 20 min |
| 09:50–10:20 | 2. Dobór rodzaju i wierności prototypu | 30 min |
| 10:20–11:05 | 3. Kontekst i pierwsza wersja | 45 min |
| 11:05–11:15 | Przerwa | 10 min |
| 11:15–11:55 | 4. Interakcja: działania, stany, przejścia | 40 min |
| 11:55–12:30 | 5. Struktura projektu i celowane zmiany | 35 min |
| 12:30–13:00 | Przerwa obiadowa | 30 min |
| 13:00–13:40 | 6. Debugowanie i weryfikacja | 40 min |
| 13:40–14:45 | 7. Przebudowa i porównanie | 65 min |
| 14:45–14:55 | Przerwa | 10 min |
| 14:55–15:30 | 8. Powtarzalny proces i zamknięcie | 35 min |
| | **Razem** | **360 min** |

## 3. Moduły

### Moduł 1. Myślenie przez tworzenie

**Cel i obserwowalny rezultat:** uczestnik zamienia ogólny pomysł na pytanie, na które może odpowiedzieć mały prototyp. **Czas:** 20 min — teoria 10, demonstracja 0, ćwiczenie 5, refleksja 5.

**Źródła:** *The New Product Development Lifecycle*, „Prototypes are decision-making tools”; *From Prompt to Prototype in Minutes*, „What’s Missing (and Why That’s Fine)”.

**Dla uczestników — pojęcie:** Prototyp jest narzędziem myślenia i podejmowania decyzji. Nie musi działać jak gotowy produkt. Wybierz jedno pytanie i zbuduj tylko to, co pomoże uzyskać odpowiedź. Pracuj w pętli: określ intencję → zbuduj lub zmień → sprawdź → zastanów się, czego się dowiedziałeś → wybierz następny krok.

**Przykład:** zamiast „zbuduj aplikację muzyczną” zapytaj: „Czy słuchacz potrafi porównać trzy rekomendacje i wybrać jedną do zapisania?”

**Start i materiały:** brief „Odkrywaj brzmienia”, kartka/notatka. **Instrukcja:** indywidualnie zapisz (1) kto ma problem, (2) co chce zrobić, (3) jaką decyzję pomoże podjąć prototyp, (4) czego celowo nie zbudujesz. Zapisz jedno pytanie, które da się sprawdzić kliknięciem lub krótką obserwacją.

**Artefakt i weryfikacja:** jedno pytanie projektowe i zakres w jednym zdaniu. Kryterium: pytanie wskazuje zachowanie użytkownika i możliwą obserwację, nie listę funkcji.

**Trudności / prowadzący:** uczestnicy mogą zacząć od funkcji lub narzędzia. Poproś o dokończenie zdania „Po zobaczeniu tego prototypu zdecyduję, czy…”. Nie oceniaj jakości pomysłu muzycznego.

**Refleksja i przejście:** Co chcesz wiedzieć, czego jeszcze nie wiesz? Jaki najmniejszy prototyp mógłby pomóc? W następnym module dobierzemy formę prototypu do pytania.

### Moduł 2. Rodzaj, wierność i zakres prototypu

**Cel i rezultat:** uczestnik uzasadnia trzy osobne wybory: cel, wierność, zakres. **Czas:** 30 min — teoria 10, demonstracja 5, ćwiczenie 10, refleksja 5.

**Źródła:** *The New Product Development Lifecycle*, „Concept prototypes”, „Design prototypes”, „Research prototypes”, „Technical prototypes”; *(MM) AI prototyping skill*, „Proponowane tryby” (traktować jako roboczą propozycję).

**Dla uczestników — pojęcie:** Cel prototypu mówi, jaką decyzję wspiera (np. eksplorować kierunki albo sprawdzić konkretny przepływ). Wierność mówi, jak bardzo interfejs przypomina zamierzony wygląd i zachowanie. Zakres mówi, czy tworzysz cały przepływ czy tylko fragment. To różne wybory: możesz sprawdzić high-fi komponent albo low-fi przepływ. High-fi nie znaczy „gotowe do wdrożenia”.

**Demonstracja:** pokaż kartę rekomendacji jako (a) szkic szary do sprawdzenia hierarchii informacji oraz (b) dopracowaną kartę z okładką do sprawdzenia atrakcyjności i czytelności. Zapytaj, jak zmieniłoby się pytanie dla każdego wariantu.

**Start i materiały:** pytanie z modułu 1, macierz wyboru: cel / wierność / zakres. **Instrukcja:** wybierz po jednej opcji dla każdego wymiaru. Dla tego warsztatu wybierz cel „sprawdzić zrozumiałość wyboru i zapisu”, wierność „wystarczająca, by rozpoznać elementy”, zakres „pełny krótki przepływ”. Zapisz jeden powód dla każdego wyboru i jedną rzecz, której prototyp nie będzie dowodził.

**Artefakt i weryfikacja:** wypełniona macierz; uczestnik potrafi uzasadnić dopasowanie każdego wymiaru do pytania.

**Trudności / prowadzący:** nie przedstawiaj low-fi → high-fi jako obowiązkowej drabiny; nie sugeruj, że wyższa wierność daje lepszą odpowiedź niezależnie od pytania. Jeśli uczestnik chce komponent, zapytaj, czy pełny przepływ jest konieczny dla jego pytania.

**Refleksja i przejście:** Co byłoby stratą czasu w prototypie dla twojego pytania? Teraz przygotujemy kontekst, który ograniczy domysły narzędzia.

### Moduł 3. Kontekst i pierwsza wersja

**Cel i rezultat:** uczestnik przygotowuje brief dla AI i zachowuje działającą wersję bazową. **Czas:** 45 min — teoria 8, demonstracja 7, ćwiczenie 25, refleksja 5.

**Źródła:** *Context Engineering for Prototyping*, „What your prototyping tool needs to know”, „Functional context”, „Visual context”, „Data context”; *Defining Your Product Context*, „Project knowledge”, „Design system: making prototypes look like your product”; *From Prompt to Prototype in Minutes*, „Using variations for brainstorming”.

**Dla uczestników — pojęcie:** Podaj AI minimum kontekstu niezbędnego do dobrego wyniku: użytkownika i potrzebę, główny przepływ, zachowania, dane przykładowe, kierunek wizualny oraz ograniczenia. Ustal, co ma być prawdziwą interakcją, a co może być symulowane. Krótki prompt może być skuteczny, jeśli nie zostawia kluczowych decyzji bez odpowiedzi.

**Demonstracja:** porównaj prompt „Zbuduj świetną aplikację muzyczną” z briefem: „Dla słuchacza szukającego nowego ambientu pokaż 4 fikcyjne albumy z nazwą, krótkim opisem i nastrojem; filtr gatunku zmienia listę; przycisk Zapisz dodaje pozycję do listy zapisanych; bez logowania i API; spokojna, czytelna prezentacja”. Wskaż, które braki promptu pierwszego AI musi zgadywać.

**Start i materiały:** brief projektu, konto/narzędzie, szablon briefu poniżej. **Instrukcja dla uczestnika:** (1) Wstaw wybrany gatunek i nazwę fikcyjnego użytkownika. (2) Napisz pytanie projektowe i jeden scenariusz. (3) Wypisz 4 przykładowe rekordy: wykonawca/album, opis, nastrój. (4) Wskaż 2–3 zasady wizualne. (5) Określ działające zachowania i wyłączenia zakresu. (6) Wklej brief do narzędzia i wygeneruj pierwszą wersję. (7) Kliknij przez główny przepływ, zanotuj jeden fakt i nazwij/zachowaj tę wersję „baseline”. Jeśli narzędzie oferuje warianty, wygeneruj dwa różne kierunki i wybierz jeden przed budową; nie jest to cel sam w sobie.

**Szablon briefu:** „Użytkownik: __. Potrzeba: __. Pytanie do sprawdzenia: __. Scenariusz: wybiera __, przegląda __, zapisuje __. Interfejs musi pokazać: __. Zachowania: __. Dane przykładowe: __. Kierunek wizualny: __. Nie buduj: __. Sukces sprawdzę, gdy: __.”

**Artefakt i weryfikacja:** krótki brief i zachowana baza. Kryteria: widoczne co najmniej 4 rekomendacje, filtr lub wybór gatunku, działanie zapisu, jasne ograniczenia; uczestnik potrafi odtworzyć scenariusz. Niedziałający element zapisuje jako obserwację, nie maskuje go.

**Trudności / prowadzący:** generowanie może potrwać lub narzędzie da inny układ. Zmniejsz liczbę rekordów i doprecyzuj kryterium, zamiast dodawać funkcje. Przy problemach z dostępem zapewnij przygotowany projekt startowy i poproś uczestnika o wykonanie kolejnych iteracji w parze/notatce.

**Refleksja i przejście:** Co narzędzie dopowiedziało za ciebie? Jakiego kontekstu zabrakło? Zanim dodamy funkcje, opiszmy dokładnie ich stany.

### Moduł 4. Interakcje: działania, stany i przejścia

**Cel i rezultat:** uczestnik zapisuje zachowanie jako prostą tabelę stanów i przejść, a następnie uruchamia co najmniej jeden scenariusz. **Czas:** 40 min — teoria 8, demonstracja 7, ćwiczenie 20, refleksja 5.

**Źródła:** *Context Engineering for Prototyping*, „Functional context”; *Test Complex Interactions Earlier with AI Prototyping*, „How to Prototype Complex Interfaces with AI”; *Testing Prototypes With Customers*, „Usability testing”.

**Dla uczestników — pojęcie:** Interfejs nie jest tylko ekranem. Opisz: co robi użytkownik, jaki stan widzi przed działaniem, co się zmienia i jaki rezultat powinien zobaczyć. Dla każdego kluczowego działania określ także ważny stan brzegowy, np. brak zapisanych pozycji.

**Przykład:** działanie „Zapisz album” → przed: album niezapisany, przycisk „Zapisz” → po: album widoczny w „Mojej liście”, przycisk pokazuje „Zapisano”; powtórne kliknięcie usuwa z listy.

**Start i materiały:** baseline i karta zachowania. **Instrukcja:** uzupełnij tabelę dla (1) zmiany gatunku, (2) otwarcia szczegółu, (3) zapisania i usunięcia pozycji. Dodaj stan pusty listy. Poproś AI o wdrożenie jednego przepływu naraz z zakazem zmiany pozostałych ekranów. Sprawdź ręcznie wszystkie wiersze.

| Działanie | Stan przed | Zmiana | Oczekiwany rezultat |
|---|---|---|---|
| Zmiana gatunku | lista rekomendacji dla gatunku A | wybór B | lista pokazuje elementy gatunku B |
| Zapis | element niezapisany | kliknięcie „Zapisz” | pojawia się na liście zapisanych |
| Usunięcie | element zapisany | kliknięcie „Usuń” | znika z listy |
| Pusta lista | brak zapisanych elementów | otwarcie listy | komunikat zachęca do odkrywania |

**Artefakt i weryfikacja:** tabela i działające minimum dwa przepływy. Weryfikator odczytuje wiersz, a uczestnik demonstruje przed/po bez wyjaśniania poza interfejsem.

**Trudności / prowadzący:** niespójne nazwy przycisków i stanów często prowadzą do niejednoznaczności. Poproś o odróżnienie działania od efektu wizualnego. Jeśli AI buduje zbyt wiele, ogranicz zadanie do jednego przejścia.

**Refleksja i przejście:** Które zachowanie było trudne do opisania? Jakie założenie ujawnił klik? W kolejnym module znajdziemy miejsce, gdzie taka zmiana powinna być wprowadzona.

### Moduł 5. Struktura projektu i kontrola zakresu

**Cel i rezultat:** uczestnik potrafi opisać element prototypu, którego dotyczy poprawka, i wybrać wąski zakres żądania. **Czas:** 35 min — teoria 10, demonstracja 10, ćwiczenie 10, refleksja 5.

**Źródła:** *From Prompt to Prototype in Minutes*, „Code View”; *Software Architecture for Non-Technical Builders*, „The frontend: what users see and touch”, „React components”, „The file structure”, „Walking through the UI”.

**Dla uczestników — pojęcie:** Nie musisz umieć programować. Wystarczy rozpoznać, że widok, karta, filtr czy przycisk mogą być osobnymi elementami o określonej odpowiedzialności. Kiedy użyjesz ich nazwy i wskażesz, czego nie zmieniać, AI ma mniej miejsca na niezamierzone poprawki. Sprawdź nazwy w podglądzie struktury lub poproś narzędzie o wskazanie odpowiedzialnego elementu — traktuj odpowiedź jako hipotezę.

**Demonstracja:** pokaż żądanie „popraw wygląd aplikacji” w porównaniu z „w karcie rekomendacji zwiększ kontrast etykiety nastroju; nie zmieniaj układu listy ani działania przycisku Zapisz”. Jeśli dostępny jest podgląd plików, wskaż nazwę komponentu i pokaż, gdzie karta jest używana.

**Start i materiały:** wersja bazowa po module 4, lista 1–2 problemów wizualnych lub związanych z zachowaniem. **Instrukcja:** wybierz jedno usprawnienie (np. etykieta informująca o zapisaniu jest mało widoczna); znajdź odpowiedni element interfejsu; poproś AI najpierw o wskazanie miejsca/komponentu i zaproponowanie planu bez wprowadzania zmian; następnie poproś o jedną ograniczoną poprawkę; zapisz, których elementów nie zmieniać. Powtórz scenariusz i sprawdź, czy sąsiednie zachowanie pozostało bez zmian.

**Artefakt i weryfikacja:** krótka prośba zawierająca cel, miejsce zmiany, wyraźne ograniczenie i sprawdzalny rezultat. Uczestnik pokazuje znaleziony element i potwierdza, że sąsiedni przepływ nadal działa.

**Trudności / prowadzący:** nie wymagaj od początkujących czytania dużej ilości kodu; wystarczy zaznaczenie elementu w widoku, wyszukanie komponentu lub pytanie do AI. Jeśli nazwa wygenerowanego elementu jest nieznana, opisz go na podstawie interfejsu i poproś AI o wskazanie odpowiednika w projekcie.

**Refleksja i przejście:** Co pomogło dokładniej wskazać miejsce zmiany? Czy AI dotknęło szerszego zakresu? Teraz użyjemy dowodów i kontrolowanych poprawek, aby naprawiać błędy.

### Moduł 6. Debugowanie i weryfikacja

**Cel i rezultat:** uczestnik odtwarza błąd, formułuje celowaną prośbę o naprawę i potwierdza wynik na kryteriach. **Czas:** 40 min — teoria 8, demonstracja 7, ćwiczenie 20, refleksja 5.

**Źródła:** *Debugging Your Prototypes*, „The debugging ladder”, „Describe the problem to the AI”, „Using the browser console”, „Asking the AI to investigate”, „The three-strike rule”, „Managing versions”; *Spec-Driven Development*, „Acceptance criteria”.

**Dla uczestników — pojęcie:** Zacznij od konkretu: krok do odtworzenia, oczekiwany rezultat, rzeczywisty rezultat i dowód (zrzut ekranu lub błąd). Zapisz działającą wersję przed eksperymentem. Najpierw poproś o diagnozę, gdy przyczyna jest niejasna; zmieniaj jedną rzecz, potem powtórz kryterium. Po kilku nieudanych próbach cofnij się lub zmień podejście.

**Demonstracja:** prowadzący przygotowuje (lub odtwarza) prosty błąd: po „Zapisz” karta nie trafia na listę. Modelowy raport: „Otwórz album X → kliknij Zapisz → oczekiwane: X pojawia się w Mojej liście; rzeczywiste: liczba się zmienia, ale karta nie pokazuje się. Sprawdź najpierw, czy lista odczytuje ten sam stan. Nie zmieniaj wyglądu ani filtrowania”.

**Start i materiały:** własny prototyp z jednym wykrytym problemem (jeśli wszystko działa, prowadzący daje przygotowany scenariusz usterki), kryteria modułu 4, wersja bazowa/ostatni stabilny stan. **Instrukcja:** (1) Odtwórz problem dwa razy. (2) Zanotuj kroki, oczekiwanie, rezultat i dowód. (3) Zachowaj wersję. (4) Poproś AI o diagnozę bez zmian lub o jedną określoną poprawkę. (5) Zastosuj ją. (6) Ponownie wykonaj scenariusz błędu i jeden sąsiedni scenariusz. (7) Jeśli dwie próby nie pomogą, cofnij, uprość zachowanie lub poproś o wyjaśnienie struktury zamiast dodawać kolejne poprawki.

**Artefakt i weryfikacja:** raport błędu oraz przejście z oczekiwanym zachowaniem albo zapisany, konkretny następny krok. Kryterium: potwierdzono naprawę i sprawdzono sąsiednią interakcję; nie uznawaj komunikatu AI „naprawione” za weryfikację.

**Trudności / prowadzący:** uczestnicy mogą wkleić jedynie „nie działa” lub zaakceptować zmianę bez kliknięcia. Dopytaj o reprodukcję i widoczny wynik. Zależnie od narzędzia konsola może być niedostępna; zrzut/obserwacja również są dowodami.

**Refleksja i przejście:** Jaki dowód najbardziej pomógł? Kiedy należało przestać próbować poprawiać? Zachowaliśmy już wersję i kryteria — teraz porównamy iterację z przebudową.

### Moduł 7. Przebudowa tego samego scenariusza

**Cel i rezultat:** uczestnik tworzy nową, uproszczoną wersję tego samego przepływu, porównuje ją z baseline i wyjaśnia usprawnienie w decyzjach lub procesie. **Czas:** 65 min — teoria 8, demonstracja 7, ćwiczenie 45, refleksja 5.

**Źródła:** *Debugging Your Prototypes*, „When to start over”, „How to rebuild effectively”, „First, ask: Is this complexity essential?”; *The New Product Development Lifecycle*, „Where prototypes fall short”; *Testing Prototypes With Customers*, „Know when to stop”.

**Dla uczestników — pojęcie:** Przebudowa nie oznacza dodania większej liczby funkcji. Jeśli obecna struktura utrudnia uzyskanie odpowiedzi, można odtworzyć ten sam scenariusz, wykorzystując zdobytą wiedzę. Porównuj przydatność prototypu do pytania, działanie interakcji, spójność i łatwość wprowadzania kontrolowanych zmian. Ten sam scenariusz pozwala porównać zarówno wynik, jak i sposób pracy.

**Demonstracja:** porównaj początkowy brief bez opisu stanów z krótką, poprawioną instrukcją, która określa kolejność działań, przykładowe dane, kryteria i wyłączenia. Pokaż, że nowa aplikacja zachowuje ten sam scenariusz (wybór → przeglądanie → zapis), ale pomija zbędną opcję.

**Start i materiały:** zachowana wersja bazowa, pierwotny brief, tabela stanów, zapisane problemy i wnioski. **Instrukcja dla uczestnika:** (1) Ponownie sformułuj pytanie i zapisz, czego nauczyła cię pierwsza wersja. (2) Zachowaj ten sam gatunek i scenariusz, ale wybierz jeden element do uproszczenia lub poprawy. (3) Przygotuj brief: użytkownik, scenariusz, dane, stany, kryteria oraz elementy wyłączone z zakresu. (4) Utwórz nowy projekt lub osobną kopię; zachowaj wersję bazową. (5) Pracuj krokami: lista rekomendacji → jedno działające przejście → weryfikacja → poprawki wizualne. (6) Sprawdź te same kryteria na ekranie desktopowym i mobilnym, jeśli podgląd na to pozwala. (7) Wypełnij poniższą tabelę. Opcjonalnie: poproś współpracownika o wykonanie zadania bez podpowiedzi.

| Kryterium porównania | Wersja bazowa | Nowa wersja |
|---|---|---|
| Ile kroków potrzeba, aby wybrać i zapisać pozycję? | | |
| Czy dodawanie i usuwanie działa? | | |
| Czy stan po kliknięciu jest zrozumiały? | | |
| Jak łatwo wprowadzić jedną ograniczoną poprawkę? | | |
| Czego dowiedzieliśmy się o użytkowniku lub rozwiązaniu? | | |

**Artefakt i weryfikacja:** niezależna nowa wersja i porównanie. Kryteria: ten sam scenariusz użytkownika, działające główne działania, porównanie według stałych kryteriów, wskazanie co najmniej jednej decyzji, która usprawniła projekt lub iterację. Nie oceniaj liczby funkcji, szybkości generowania ani gotowości do wdrożenia.

**Trudności / prowadzący:** 45 minut nie wystarczy na cały produkt, dlatego ogranicz zadanie do jednego przepływu i czterech rekordów danych. Jeśli narzędzie działa wolno, pozwól prototypować jeden stan lub kluczowy komponent. Jeśli uczestnik nie może faktycznie przebudować projektu, niech przygotuje gotowy do użycia brief i szkic przepływu; odnotuj, że ogranicza to ocenę samego rezultatu.

**Refleksja i przejście:** Co poprawiło się w aplikacji, a co w sposobie formułowania zadania? Jaki kompromis został wybrany? W ostatnim module zapiszemy proces, który pozwoli powtórzyć te decyzje w kolejnym projekcie.

### Moduł 8. Powtarzalny proces pracy

**Cel i rezultat:** uczestnik przygotowuje krótką instrukcję do kolejnego zadania prototypowego i sprawdza, czy obejmuje ona cykl uczenia się. **Czas:** 35 min — teoria 5, demonstracja 0, ćwiczenie 20, refleksja 10.

**Źródła:** *TokenOPS - AI Coding Centre*, „Principles”; *Spec-Driven Development*, „Balanced level of detail”, „Acceptance criteria”; *(MM) AI prototyping skill*, „Proponowane tryby” (nie traktować jako gotowej, zatwierdzonej instrukcji).

**Dla uczestników — pojęcie:** TokenOps w tym warsztacie oznacza świadome zarządzanie kontekstem, rozmiarem zadania i iteracjami: zaplanowanie kolejnego kroku, dostarczenie istotnych materiałów, ograniczenie zakresu generowania, sprawdzenie wyniku i decyzję, kiedy zakończyć lub zacząć od nowa. Źródło TokenOPS opisuje też inne techniki (dobór modelu, skrypty, pomiar użycia), ale bez porównywalnych warunków nie deklarujemy oszczędności tokenów. Sama uporządkowana struktura nie dowodzi niższych kosztów.

**Praktyczna instrukcja — „Przekaż kolejne zadanie AI”:**

1. Jakie pytanie użytkownika chcemy rozstrzygnąć?
2. Jakiego rodzaju prototyp jest potrzebny: jaki cel, wierność i zakres?
3. Jaki jest najważniejszy scenariusz, jego stany i przejścia?
4. Jaki kontekst jest niezbędny: potrzeba użytkownika, kierunek wizualny, przykładowe dane, ograniczenia?
5. Co dokładnie poprosić o zbudowanie lub zmianę? Czego nie ruszać?
6. Według jakich obserwowalnych kryteriów sprawdzę działanie?
7. Którą wersję bazową lub migawkę zachowam i jaki będzie następny krok?
8. Czego się dowiedziałem, czego prototyp nie dowodzi i czy kontynuować pracę?

**Start i materiały:** wszystkie artefakty z modułów i powyższy jednostronicowy szablon. **Instrukcja:** uzupełnij osiem pytań na podstawie swojego projektu, a następnie skreśl punkty, które nie są potrzebne w kolejnym zadaniu, i zapisz dlaczego. Przekaż instrukcję drugiej osobie: czy potrafi wskazać następny krok i sposób weryfikacji bez pytania o cel lub granice zadania? Popraw instrukcję. Na koniec zapisz jedną praktykę, którą będziesz stosować.

**Artefakt i weryfikacja:** indywidualna instrukcja i krótkie podsumowanie. Sprawdzenie rezultatów uczenia się: uczestnik pokazuje dobór celu/wierności/zakresu (R1), brief (R2), tabelę stanów (R3), miejsce małej poprawki (R4), zgłoszenie i weryfikację błędu (R5), sposób ograniczania kontekstu i zakresu (R6), porównanie wersji bazowej z przebudowaną (R7) oraz powtarzalną metodę (R8).

**Trudności / prowadzący:** nie zamieniaj karty w długi formularz wypełniany mechanicznie. Ma pomagać wybierać potrzebne pytania, a nie wydłużać każde polecenie. Zbierz opinię, czy wynik ma pozostać indywidualną instrukcją z checklistą, czy stać się formalnie przygotowanym AI Skill.

**Refleksja i zamknięcie:** Które założenie się zmieniło? Co zrobisz inaczej w następnej iteracji? Co było sygnałem, żeby przerwać? Którą część metody możesz przekazać współpracownikowi?

## 4. Uwagi do kolejnego przeglądu

### Nierozstrzygnięte kwestie

1. Kto dokładnie weźmie udział, jakie ma doświadczenie i jaka będzie wielkość grupy? Od tego zależą poziom trudności i potrzebne wsparcie.
2. Z jakiego narzędzia do prototypowania będą korzystać uczestnicy? Czy można tworzyć kopie lub przeglądać historię? Czy mają dostęp do kodu, czy tylko do narzędzi wizualnych? Agenda zakłada podobne funkcje jak w Bolt/Lovable/v0, ale nie wskazuje konkretnego produktu.
3. Czy warsztat odbędzie się stacjonarnie czy zdalnie, indywidualnie czy w parach? Wariant zdalny wymaga czasu na udostępnianie ekranu i rozwiązywanie problemów z dostępem.
4. Czy oficjalnie nazywać ten rezultat uczenia się „TokenOps” i uczyć dodatkowych tematów ze źródła (dobór modelu i poziomu wysiłku, skrypty, pomiar użycia)? Obecny szkic ogranicza ten temat do pracy w pętli prototypowania.
5. Końcowy artefakt wielokrotnego użytku: **propozycja na te zajęcia — praktyczna instrukcja z elastyczną checklistą**. Źródła nie rozstrzygają, czy rezultat ma być formalnie opublikowanym AI Skill. Istniejący plik skill może pomóc w dalszej pracy, ale wymaga redakcji; jego model trybów i sformułowania trzeba zatwierdzić przed włączeniem do kursu.

### Źródła i jakość materiałów

- `Raw/AI Prototyping/1. Intro.md` jest niemal pusty, a `Raw/AI Prototyping/13. Spec = prompts.md` pusty. Nie można na nich oprzeć wniosków.
- Materiały AI Prototyping używają angielskich nazw narzędzi i miejscami odnoszą się do funkcji konkretnych produktów, które mogą się zmienić. Przed publikacją należy sprawdzić, czy demonstracje odpowiadają wybranemu narzędziu.
- Materiał TokenOPS podaje szacunkowe oszczędności, ale nie zawiera protokołu pomiaru. Nie należy obiecywać oszczędności procentowych bez osobnej weryfikacji.
- Źródło o złożonych interfejsach wyraźnie zaznacza, że pojedynczy przypadek nie dowodzi przewagi jednej metody badawczej. W warsztacie ilustruje możliwość, a nie udowodniony efekt.
- Należy osobno zdecydować, czy kurs obejmie testy z prawdziwymi uczestnikami, API, uwierzytelnianie, trwały zapis danych i przekazywanie projektu zespołom inżynieryjnym. Nie wchodzą one w minimalny przepływ tego jednodniowego szkicu.

### Kontrola spójności i czasu

- **Czas:** 310 minut modułów + 50 minut przerw = 360 minut (09:30–15:30).
- **Zależności:** pytanie i cel poprzedzają wybór rodzaju prototypu; kontekst poprzedza generowanie; tabela zachowań poprzedza poprawki strukturalne i weryfikację; wersja bazowa jest zachowana przed iteracją/przebudową; porównanie używa tych samych kryteriów.
- **Postęp ćwiczeń:** wszystkie zadania rozwijają ten sam scenariusz użytkownika, a personalizacja ogranicza się do gatunku, danych i kierunku wizualnego.
- **Weryfikacja rezultatów:** każdy z ośmiu rezultatów ma konkretny artefakt lub demonstrację w module 8.
- **Ograniczenie czasu:** budowanie i debugowanie zależą od szybkości narzędzia. Minimalne kryteria powodzenia są celowo ograniczone do kilku interakcji; dodatkowe szczegóły są opcjonalne.

## 5. Wewnętrzne uwagi przed publikacją

Materiał oznaczony „Dla uczestników” jest przygotowany po polsku; przed publikacją należy wykonać końcową korektę językową. Źródła w repozytorium wskazuję nazwą pliku i sekcją. Strona internetowa nie jest tworzona.
