# Thinking-through-making & AI  
## Kiedy AI wspiera myślenie przez działanie, a kiedy je przerywa?

### Streszczenie

Generatywna AI wprowadza do projektowania paradoks. Z jednej strony drastycznie obniża koszt prototypowania, pozwala błyskawicznie materializować pomysły i może poszerzać przestrzeń eksploracji. Z drugiej strony ta sama zdolność może usunąć z procesu dokładnie te czynności, dzięki którym projektant dochodzi do nowych wniosków.

Problem nie sprowadza się więc do pytania:

> „Czy AI pomaga projektować?”

Znacznie ciekawsze z perspektywy HCI jest pytanie:

> **Kiedy AI staje się materiałem, za pomocą którego myślimy, a kiedy staje się maszyną dostarczającą odpowiedź, zanim zdążymy wykształcić własne rozumienie problemu?**

Thinking-through-making zakłada bowiem, że część wiedzy powstaje **w trakcie wykonywania pracy**, a nie przed jej rozpoczęciem. Szkic nie jest wyłącznie zapisem pomysłu. Prototyp nie jest wyłącznie reprezentacją rozwiązania. Pisanie nie jest wyłącznie czynnością służącą zapisaniu wcześniej uformowanej myśli. Działania te mogą być częścią samego procesu poznawczego.

Dlatego podstawową hipotezą tego raportu jest:

**Dobre AI creativity support tool nie powinno minimalizować całego wysiłku użytkownika. Powinno minimalizować wysiłek wykonawczy, jednocześnie zachowując wysiłek epistemiczny — działania potrzebne do odkrywania, rozumienia, porównywania i przeformułowywania problemu.**

---

# 1. Czym właściwie jest thinking-through-making?

Thinking-through-making można najprościej rozumieć jako **tworzenie wiedzy poprzez działanie na materiale lub reprezentacji**.

„Materiał” nie musi oznaczać gliny, drewna czy papieru. W pracy projektowej może nim być:

szkic, wireframe, tekst, diagram, kod, model 3D, prototyp interakcji, mapa procesu czy nawet układ karteczek na tablicy.

Donald Schön opisywał projektowanie jako *reflective conversation with materials*: projektant wykonuje ruch, obserwuje konsekwencje, sytuacja w pewien sposób „odpowiada”, a odpowiedź prowadzi do kolejnego ruchu. Projektowanie nie jest więc prostą realizacją gotowego planu znajdującego się w głowie projektanta. Rozumienie problemu i rozwiązanie rozwijają się razem w trakcie interakcji z powstającym artefaktem.

Schemat można przedstawić jako:

**intencja → działanie → artefakt → obserwacja → zaskoczenie → reinterpretacja → kolejne działanie**

Kluczowe są dwa elementy: **feedback** oraz **nieprzewidywalność**.

Robiąc coś, odkrywamy rzeczy, których nie bylibyśmy w stanie w pełni przewidzieć przed rozpoczęciem pracy.

---

# 2. Działanie jako element myślenia

Podobne zjawisko David Kirsh i Paul Maglio nazwali **epistemic action**.

W klasycznych badaniach nad grą Tetris zauważyli, że gracze wykonują ruchy, które z punktu widzenia osiągnięcia bezpośredniego celu wydają się zbędne: obracają element, po czym cofają obrót, przesuwają go, testują różne położenia.

Te ruchy nie służą bezpośrednio rozwiązaniu problemu.

Służą **łatwiejszemu myśleniu o problemie**.

Kirsh i Maglio rozróżniają więc:

| Rodzaj działania | Cel |
|---|---|
| pragmatic action | zmiana świata w celu wykonania zadania |
| epistemic action | zmiana świata po to, aby łatwiej coś zobaczyć, zrozumieć lub obliczyć |

Eksperymenty pokazały, że pewne problemy można rozwiązać szybciej i pewniej przez manipulowanie światem niż poprzez wykonywanie całej operacji mentalnie. Co ciekawe, wraz ze wzrostem umiejętności graczy część takich pozornie redundantnych działań może nawet rosnąć — ekspert wykorzystuje środowisko jako element systemu poznawczego.

To ma bardzo bezpośrednie konsekwencje dla projektowania.

Zmiana szerokości komponentu „żeby zobaczyć, jak będzie wyglądał”, zrobienie trzech szybkich szkiców, przesunięcie elementu, napisanie roboczego nagłówka czy stworzenie prymitywnego prototypu mogą wyglądać jak czynności wykonawcze.

W rzeczywistości są często **operacjami poznawczymi**.

---

# 3. Artefakt nie jest wyłącznie wynikiem myślenia

Research-through-Design rozwija tę intuicję jeszcze dalej. Artefakty projektowe mogą być nośnikami wiedzy: materializują określone rozumienie problemu i pozwalają sprawdzić konsekwencje tego rozumienia.

Dlatego warto odwrócić popularny model:

**thinking → making**

na model:

**thinking ↔ making**

Myślenie powoduje działanie, ale działanie produkuje nowe myślenie.

Z tej perspektywy szkic wykonany ręcznie nie musi być cenny dlatego, że ręczne rysowanie jest z definicji lepsze od generowania obrazu komputerowo. Jego wartość może wynikać z tego, że podczas tworzenia projektant musi podejmować serię drobnych decyzji:

co narysować najpierw,  
co pominąć,  
jak coś połączyć,  
co wygląda dziwnie,  
co wymaga poprawienia.

Każda z nich tworzy kolejną możliwość refleksji.

---

# 4. I właśnie tutaj pojawia się problem AI

Klasyczne narzędzie zazwyczaj pomaga użytkownikowi **wykonać ruch**.

Generatywna AI może natomiast samodzielnie wykonać całą sekwencję ruchów.

Polecenie:

**„Zaprojektuj ekran checkoutu.”**

może w kilka sekund prowadzić do kompletnej propozycji.

Interfejs przesuwa się wtedy z modelu:

**user action → system feedback → user action**

w stronę:

**user intent → AI completion → user evaluation**

To bardzo duża zmiana z perspektywy HCI.

Człowiek z **maker** staje się przede wszystkim **reviewerem**.

Nie musi już konstruować reprezentacji problemu. Otrzymuje ją z zewnątrz i zaczyna oceniać.

To nadal może wymagać myślenia — ale jest to **inny rodzaj myślenia**.

---

# 5. Cognitive offloading: odciążenie nie jest samo w sobie problemem

Psychologia poznawcza określa wykorzystywanie zewnętrznych narzędzi do zmniejszenia obciążenia umysłowego jako **cognitive offloading**. Może nim być zapisanie czegoś w notatniku, ustawienie przypomnienia, używanie kalkulatora albo manipulowanie obiektem zamiast mentalnego obracania go.

Offloading nie jest z natury negatywny.

Bez niego skomplikowana praca intelektualna byłaby często niemożliwa.

Problem pojawia się wtedy, gdy narzędzie przejmuje **operację, której wykonanie samo w sobie było częścią procesu uczenia się lub dochodzenia do rozwiązania**.

Można więc rozróżnić dwa rodzaje tarcia.

| Friction | Przykład | Czy AI powinno je redukować? |
|---|---|---|
| **mechanical friction** | formatowanie, przepisywanie, resize, powtarzalne operacje, boilerplate | zazwyczaj tak |
| **epistemic friction** | sformułowanie problemu, wybór założenia, stworzenie pierwszej reprezentacji, porównanie alternatyw | ostrożnie |

To rozróżnienie proponuję traktować jako jeden z centralnych modeli dla projektowania AI wspierającego twórczą pracę.

---

# 6. Problem „zbyt dobrej odpowiedzi”

Generatywna AI posiada wyjątkową właściwość: potrafi natychmiast wytworzyć reprezentację wyglądającą na znacznie bardziej dojrzałą niż aktualny poziom zrozumienia problemu przez użytkownika.

To może tworzyć **representation gap**:

**maturity of representation > maturity of thinking**

Pomysł jest jeszcze mglisty, ale obraz, tekst czy prototyp wygląda już jak rozwiązanie.

To istotne, ponieważ konkretna reprezentacja zaczyna działać jak kotwica.

Badanie zaprezentowane na CHI 2024 wykazało, że w zadaniu visual ideation osoby korzystające z generatora obrazów wykazywały większą fiksację na początkowym przykładzie oraz tworzyły mniej pomysłów, o mniejszej różnorodności i oryginalności niż grupa bazowa. Autorzy opisują również zjawisko *fixation displacement*: źródłem fiksacji może przestać być początkowy przykład, a stać się nim output AI.

Nie oznacza to jednak, że przykłady czy AI automatycznie pogarszają projektowanie. Metaanaliza wcześniejszych badań nad design fixation pokazuje bardziej złożony efekt: przykłady zmniejszały zakres eksplorowanych kategorii, ale w pewnych warunkach zwiększały jakość i nowość rozwiązań.

To niezwykle ważny wynik.

**Convergence nie jest błędem. Problemem jest premature convergence.**

---

# 7. AI może jednocześnie poprawić rezultat i pogorszyć proces eksploracji

Eksperyment Doshi i Hauser na 293 autorach krótkich opowiadań pokazał inną stronę zjawiska. Dostęp do pomysłów wygenerowanych przez AI zwiększał ocenianą kreatywność, jakość pisania i przyjemność z czytania, szczególnie u osób o niższych bazowych wynikach kreatywności.

Jednocześnie historie stworzone przy wsparciu AI stawały się bardziej podobne do siebie.

Oznacza to potencjalny paradoks:

**individual performance ↑  
collective diversity ↓**

AI może więc poprawiać lokalną jakość artefaktu, jednocześnie zawężając szerszą przestrzeń kulturowej eksploracji.

Z perspektywy produktu oznacza to, że „output quality” nie wystarcza do oceny creativity support tool.

---

# 8. AI zmienia również charakter krytycznego myślenia

Badanie CHI 2025 obejmujące 319 knowledge workers i 936 przykładów użycia GenAI wskazuje na podobną transformację.

Użytkownicy deklarowali znaczące zmniejszenie wysiłku w większości analizowanych aktywności poznawczych. Jednocześnie większa wiara w możliwości AI korelowała z mniejszym deklarowanym zaangażowaniem krytycznego myślenia.

Autorzy opisują trzy przesunięcia:

**information gathering → information verification**

**problem solving → AI response integration**

**task execution → task stewardship**

Człowiek niekoniecznie przestaje myśleć. Zaczyna wykonywać **inny rodzaj pracy poznawczej**.

To prowadzi do ważnego pytania:

> Czy chcemy, żeby użytkownik w danym momencie przede wszystkim umiał ocenić rozwiązanie, czy żeby sam nauczył się je skonstruować?

Odpowiedź zależy od celu produktu.

---

# 9. „Niedokończona AI” może być lepszym narzędziem myślenia

Szczególnie interesujących danych dostarcza badanie opublikowane w 2026 roku w *Information Systems Research*.

Badacze porównali wpływ tekstowych i wizualnych „konkretyzacji” pomysłów generowanych przez AI.

Tekst pozostawia więcej niedopowiedzeń. Obraz musi zazwyczaj określić wygląd, przestrzeń, formę, kontekst i wiele innych elementów, których użytkownik nie zdefiniował.

W eksperymencie tekstowe konkretyzacje zwiększyły kreatywność pomysłów o 18% względem konkretyzacji wizualnych, ale wymagały od użytkowników około 30% większego wysiłku. Autorzy interpretują to jako różnicę pomiędzy **augmentation** i **automation**.

Tekst pozostawiał „gaps” wymagające interpretacji.

Gotowy wizual narzucał więcej szczegółów i przesuwał użytkownika w stronę inspekcji gotowego rozwiązania. Efekt zależał również od dojrzałości pomysłu.

To bardzo mocno wspiera hipotezę thinking-through-making:

> **Niekompletność może być cechą dobrego interfejsu AI, a nie jego niedoskonałością.**

---

# 10. Kiedy AI wspiera thinking-through-making?

Najlepiej można to zobaczyć nie jako binarne „AI / bez AI”, ale jako problem **alokacji agency**.

| Wymiar | AI wspiera thinking-through-making | AI przerywa thinking-through-making |
|---|---|---|
| Timing | pojawia się po pierwszym ruchu użytkownika | generuje rozwiązanie przed pierwszą próbą |
| Granularność | odpowiada małym krokiem | generuje cały artefakt |
| Completeness | pozostawia niedopowiedzenia | wypełnia wszystkie luki |
| Divergence | pokazuje odległe kierunki | proponuje jeden „najlepszy” |
| Agency | użytkownik manipuluje materiałem | użytkownik wybiera „accept/reject” |
| Feedback | AI reaguje na artefakt użytkownika | AI zastępuje artefakt własnym |
| Reversibility | wspiera branching i eksperyment | prowadzi linearnie do finalnego outputu |
| Failure | pozwala zobaczyć konsekwencje błędu | usuwa błąd zanim użytkownik go doświadczy |
| Abstraction | odpowiada na poziomie problemu | przedwcześnie przechodzi do finalnej formy |

Najważniejsza zmienna może więc brzmieć:

### **How much of the next cognitive move does AI perform for the user?**

---

# 11. Thinking-through-making jako projektowanie pętli

Dobrym AI creativity support tool nie musi być system, który tworzy najlepszy artefakt po najmniejszej liczbie kroków.

Może być nim system, który tworzy **najbardziej produktywną sekwencję kroków poznawczych**.

Klasyczny chatbot jest zoptymalizowany głównie wokół:

**prompt → answer**

Ale proces twórczy wygląda raczej:

**frame → make → inspect → reframe → branch → compare → reject → modify → converge**

To oznacza, że podstawową jednostką interakcji w creativity-support AI nie powinna być zawsze **answer**.

Może nią być **move**.

AI wykonuje jeden ruch w procesie, po którym użytkownik wykonuje następny.

---

# 12. Paradoks desirable difficulty

Badania nad uczeniem się dostarczają dodatkowej analogii.

Klasyczny *generation effect* pokazuje, że informacje wygenerowane samodzielnie są często zapamiętywane lepiej niż informacje jedynie przeczytane.

Badania Manu Kapura nad *productive failure* pokazują natomiast, że wcześniejsza próba samodzielnego rozwiązania złożonego problemu — nawet zakończona niepowodzeniem — może w pewnych warunkach prowadzić do lepszego późniejszego zrozumienia i transferu niż natychmiastowe podanie prawidłowej metody.

Literatura dotycząca *desirable difficulties* szerzej pokazuje, że warunki zwiększające chwilowy wysiłek mogą czasami poprawiać długoterminowe uczenie się.

Nie należy automatycznie przenosić wyników edukacyjnych na projektowanie UX, ale mechanizm sugeruje bardzo ciekawą hipotezę:

> **System, który maksymalizuje performance użytkownika podczas jednej sesji, niekoniecznie maksymalizuje rozwój jego kompetencji.**

AI może więc produkować:

**better output now**

kosztem:

**less capability later**.

To powinno stać się osobnym przedmiotem badań longitudinal HCI.

---

# 13. Proponowany model: Epistemic Friction

Na podstawie tych badań proponuję pojęcie **epistemic friction** jako użytecznej ramy projektowej.

Nie chodzi o sztuczne utrudnianie produktu.

Chodzi o zachowanie tych momentów, w których wysiłek zmusza użytkownika do wytworzenia reprezentacji, dostrzeżenia zależności albo podjęcia decyzji.

Możemy myśleć o projektowaniu AI jako o zarządzaniu **friction budget**.

AI powinno agresywnie usuwać tarcie, które nie produkuje istotnego rozumienia:

formatowanie, przekształcanie danych, powtarzalne operacje, przepisywanie, mechaniczne wariantowanie.

Natomiast ostrożniej usuwać tarcie związane z:

formowaniem hipotez, framingiem problemu, tworzeniem pierwszych reprezentacji, wyborem kryteriów, interpretowaniem niejednoznaczności, porównywaniem alternatyw.

Z perspektywy UX można więc przeformułować tradycyjne:

**reduce friction**

na:

> **reduce operational friction, preserve epistemic friction.**

---

# 14. Cztery role AI

Dobór roli AI powinien zależeć od celu użytkownika i fazy procesu.

| | Divergence | Convergence |
|---|---|---|
| **Exploration / learning** | **Provocateur** — pytania, ograniczenia, kontrprzykłady | **Critic** — wskazywanie napięć i konsekwencji |
| **Production / delivery** | **Generator** — szeroki zestaw możliwości | **Executor** — automatyzacja i dopracowanie |

Największe ryzyko thinking-through-making pojawia się wtedy, gdy AI zachowuje się jak **Executor podczas wczesnej divergence**.

Czyli dokładnie wtedy, kiedy użytkownik jeszcze nie wie, co chce zrobić, system pokazuje mu bardzo przekonująco wyglądającą wersję tego, co mógłby zrobić.

---

# 15. Konkretne wzorce UX dla AI wspierającego making

Z powyższej analizy można wyprowadzić osiem zasad projektowych:

1. **User moves first.** W zadaniach eksploracyjnych poproś użytkownika o pierwszy szkic, hipotezę lub framing przed wygenerowaniem propozycji AI.
2. **Progressive assistance.** Stosuj drabinę pomocy: pytanie → wskazówka → przykład → fragment → pełna propozycja, zamiast natychmiastowego generowania kompletnego artefaktu.
3. **Generate directions, not solutions.** Na początku procesu generuj różne kierunki konceptualne, nie kilka wypolerowanych odmian tego samego rozwiązania.
4. **Prefer manipulable outputs.** Wynik AI powinien być materiałem, który można rozdzielać, przesuwać, odrzucać i modyfikować, a nie tylko zaakceptować.
5. **Preserve branching.** Historia pracy powinna wyglądać bardziej jak drzewo niż jak linearny chat. Cofanie się i eksplorowanie odgałęzień jest częścią procesu poznawczego.
6. **Match fidelity to maturity.** Im mniej dojrzały pomysł, tym bardziej abstrakcyjna powinna być odpowiedź AI. High-fidelity output powinien pojawiać się później.
7. **Ask AI to create difference.** Podczas divergence AI powinno aktywnie szukać odległych konceptów, kontrprzykładów i alternatywnych framingów zamiast optymalizować pierwszy pomysł.
8. **Automate execution after understanding.** Gdy problem i kierunek są już stabilne, AI może przejąć coraz większą część produkcji.

---

# 16. Możliwy nowy typ interfejsu: AI as material

Dominująca metafora interfejsu AI to dziś **rozmowa z inteligentnym agentem**.

Thinking-through-making sugeruje inną metaforę:

### **AI as material**

Materiał posiada właściwości.

Można na niego oddziaływać.

Odpowiada.

Czasami zachowuje się niezgodnie z oczekiwaniem.

Można go przekształcać.

Nie mówi projektantowi, co powinien zrobić — umożliwia mu odkrywanie tego poprzez manipulację.

Taki interfejs mógłby więc mniej przypominać:

> „Napisz prompt → otrzymaj gotową odpowiedź”

a bardziej:

> „Umieść pomysł w przestrzeni → rozciągnij go → zobacz konsekwencje → poproś AI o kontrpropozycję → połącz dwa elementy → odrzuć trzeci → cofnij się → porównaj gałęzie.”

W tym sensie przyszłością co-creative AI mogą być nie tyle **chatboty projektujące za człowieka**, ile **generative environments**, w których człowiek myśli poprzez manipulowanie generatywnym materiałem.

---

# 17. Jak można to zbadać eksperymentalnie?

To zagadnienie bardzo dobrze nadaje się do eksperymentu HCI.

Można porównać trzy warunki podczas tego samego otwartego zadania projektowego:

| Condition | Model pracy |
|---|---|
| A — Human only | standardowe narzędzie bez generowania |
| B — AI answer-first | możliwość natychmiastowego wygenerowania rozwiązania |
| C — AI scaffolded-making | AI podaje fragmenty, pytania, kontrprzykłady i reaguje na artefakty użytkownika |

Samo ocenienie końcowego projektu byłoby niewystarczające.

Należałoby mierzyć również **proces**.

Szczególnie interesujące metryki to liczba eksplorowanych kierunków, liczba samodzielnie wytworzonych reprezentacji, branching, liczba cofnięć, stopień podobieństwa rozwiązań między uczestnikami, udział elementów pochodzących bezpośrednio z pierwszego outputu AI, deklarowana agency i ownership oraz zdolność późniejszego rozwiązania podobnego problemu bez AI.

Ostatnia metryka jest szczególnie ciekawa.

Pozwala rozdzielić:

**performance with AI**

od:

**capability acquired while using AI**.

---

# 18. Hipotezy badawcze

Z przeglądu literatury wynikają co najmniej cztery mocne hipotezy.

**H1 — Premature completion hypothesis**

Im wcześniej AI dostarczy wysoko dopracowaną reprezentację, tym mniejsza będzie liczba samodzielnych transformacji problemu wykonanych przez użytkownika.

**H2 — Representation maturity hypothesis**

Optymalny poziom szczegółowości outputu AI powinien zależeć od dojrzałości konceptu użytkownika. Przy niedojrzałych konceptach zbyt szczegółowa reprezentacja zwiększy ryzyko przejęcia framingu przez AI.

**H3 — Epistemic friction hypothesis**

System usuwający część mechanicznego wysiłku, ale zachowujący konieczność generowania i oceniania kluczowych reprezentacji, może zapewnić lepszy balans między jakością finalnego rezultatu a agency i uczeniem się użytkownika.

**H4 — Process–performance trade-off**

AI answer-first może osiągnąć lepsze wyniki w krótkoterminowych metrykach jakości i czasu, podczas gdy scaffolded AI może prowadzić do większej różnorodności eksploracji, większego poczucia autorstwa i lepszego transferu kompetencji do kolejnych zadań.

---

# 19. Najważniejszy problem HCI

Wczesne HCI bardzo często próbowało minimalizować liczbę kroków koniecznych do wykonania zadania.

W systemach generatywnych ta zasada przestaje być uniwersalna.

Jeżeli:

**liczba kroków = koszt**

to mniej kroków oznacza lepszy UX.

Jeżeli jednak:

**część kroków = proces poznawczy**

to usunięcie kroków może oznaczać usunięcie części myślenia.

Dlatego w przypadku creativity support systems bardziej odpowiednią metryką może nie być:

**How quickly did the user reach an answer?**

ale:

**What did the interaction allow the user to discover before reaching the answer?**

---

# 20. Wniosek

Thinking-through-making daje bardzo użyteczną perspektywę do analizy relacji człowiek–AI.

Nie prowadzi ona do wniosku, że należy ograniczać AI albo preferować manualną pracę.

Prowadzi do bardziej subtelnego wniosku:

> **Automatyzacja jest najbardziej wartościowa tam, gdzie praca jest kosztem. Jest znacznie bardziej problematyczna tam, gdzie wykonywanie pracy jest jednocześnie sposobem wytwarzania wiedzy.**

Dlatego zasadniczym problemem projektowym przyszłych systemów AI może nie być stworzenie systemu, który potrafi wykonać więcej za użytkownika.

Może nim być stworzenie systemu, który potrafi rozpoznać:

### **których rzeczy nie powinien jeszcze zrobić za użytkownika.**

Najciekawszą ambicją dla Human–AI Interaction byłoby więc odejście od modelu:

**AI that gives answers**

w kierunku:

**AI that creates conditions for thinking.**

W takim modelu generatywna AI nie zastępuje thinking-through-making.

Staje się jego nowym materiałem.

---

## Kluczowa literatura

Donald Schön, *Designing as Reflective Conversation with the Materials of a Design Situation* (1992) — fundament traktowania projektowania jako iteracyjnej rozmowy z powstającym artefaktem.

David Kirsh & Paul Maglio, *On Distinguishing Epistemic from Pragmatic Action* (1994) — koncepcja działania jako elementu procesu poznawczego.

Evan Risko & Sam Gilbert, *Cognitive Offloading* (2016) — model przenoszenia części operacji poznawczych do środowiska i narzędzi.

John Zimmerman, Jodi Forlizzi & Shelley Evenson, *Research Through Design as a Method for Interaction Design Research in HCI* (2007) — artefakt jako sposób wytwarzania i komunikowania wiedzy projektowej.

Wadinambiarachchi et al., *The Effects of Generative AI on Design Fixation and Divergent Thinking* (CHI 2024) — eksperymentalne dane dotyczące fiksacji podczas ideation z GenAI.

Doshi & Hauser, *Generative AI enhances individual creativity but reduces the collective diversity of novel content* (Science Advances, 2024) — poprawa części indywidualnych rezultatów przy jednoczesnym wzroście podobieństwa rezultatów.

Lee et al., *The Impact of Generative AI on Critical Thinking* (CHI 2025) — zmiana charakteru wysiłku poznawczego knowledge workers korzystających z GenAI.

Gordetzki et al., *Agency Configurations in Generative AI Ideation* (Information Systems Research, 2026) — szczególnie istotne badanie pokazujące zależność między stopniem konkretyzacji reprezentacji przez AI, agency człowieka, wysiłkiem i kreatywnością.

Manu Kapur, *Productive Failure* — literatura pozwalająca rozpatrywać krótkoterminowy wysiłek i niepowodzenie jako potencjalny element rozwoju rozumienia, a nie wyłącznie UX friction.