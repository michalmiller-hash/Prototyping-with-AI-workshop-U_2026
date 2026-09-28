# Plan MVP strony szkolenia

> **Status:** plan pierwszej wersji strony. Zakres opiera się na [kontekście strony](<Kontekst strony internetowej szkolenia.md>) i obejmuje wprowadzenie, wspólną nawigację oraz kompletny moduł 1 z podstroną. Moduły 2–8 są widoczne w nawigacji jako kolejne etapy kursu.

## Cel MVP

Pierwsza wersja ma pokazać, jak uczestnik korzysta z kursu podczas zajęć: otwiera udostępniony link, czyta wprowadzenie, przechodzi do modułu 1 i w razie potrzeby otwiera jego rozwinięcie. Prowadzący widzi ten sam materiał i steruje 25-minutowym timerem na swoim urządzeniu. Ten jeden moduł ma ustalić wzorzec treści, układu i nawigacji dla pozostałych siedmiu.

## Zakres stron i widoków

| Adres lub widok | Zawartość | Główna czynność |
|---|---|---|
| `/` | Przyklejona górna belka, wprowadzenie, nawigacja po ośmiu modułach i sekcja modułu 1 | Przeczytanie celu kursu i przejście do pierwszego modułu |
| `/#modul-1` | Bezpośredni odnośnik do sekcji modułu 1 na stronie głównej | Szybki powrót do skrótu modułu |
| `/moduly/modul-1` | Rozwinięta teoria i pełny opis zadania modułu 1 | Pogłębienie tematu podczas zajęć lub po nich |
| `/?tryb=prowadzacy` i odpowiedni adres podstrony | Wariant tych samych widoków z przyciskami timera | Uruchomienie, wstrzymanie, wznowienie i reset odliczania |

Treści modułów 2–8 nie powstają w MVP. Nawigacja pokazuje ich numery i nazwy, ale oznacza je jako „w przygotowaniu”; nie prowadzi do pustych sekcji ani podstron. Po dodaniu kolejnego modułu jego pozycja stanie się aktywnym odnośnikiem.

## Wprowadzenie na stronie głównej

Wprowadzenie zajmuje krótki blok przed modułem 1. Zawiera:

- tytuł „Prototypowanie wspomagane przez AI”;
- jednozdaniowy cel: uczestnicy uczą się podejmować decyzje projektowe przez budowanie, obserwowanie i poprawianie prototypów;
- informację o czasie warsztatu: 4,5 godziny;
- informację o sposobie pracy: indywidualna aplikacja związana z samodzielnie wybranym gatunkiem muzycznym;
- krótką instrukcję korzystania ze strony: skrót modułu jest na stronie głównej, a link „Czytaj więcej” otwiera rozwinięcie; ćwiczenia wykonuje się poza stroną;
- wyraźne przejście do modułu 1.

Tekst wprowadzenia ma być zwięzły i zrozumiały bez znajomości programowania. Nie sugeruje jednego pomysłu na aplikację ani wymaganej funkcji.

## Wspólna nawigacja

Jedna przyklejona belka działa tak samo na stronie głównej i na podstronie modułu 1. Zawiera nazwę kursu prowadzącą do początku strony, dostęp do listy modułów oraz sterowanie „Poprzedni” i „Następny” zależne od aktualnego miejsca. Na desktopie lista może używać numerów 1–8 z pełnymi nazwami dostępnymi w etykietach. Na telefonie otwiera ją przycisk menu z opisem i widocznym stanem rozwinięcia.

Na stronie głównej pozycja 1 prowadzi do `#modul-1`. Na podstronie modułu 1 prowadzi do niej odnośnik w tej samej belce. „Poprzedni” z modułu 1 prowadzi do wprowadzenia; „Następny” będzie aktywny dopiero po dodaniu modułu 2. Pozycje 2–8 pokazują tytuły i status, ale nie są fałszywymi linkami. Przyklejona belka nie zasłania nagłówka po przejściu do kotwicy.

## Moduł 1 na stronie głównej

Sekcja ma identyfikator `modul-1`, wyraźną granicę względem wprowadzenia i na desktopie zajmuje w przybliżeniu jeden viewport. Przy mniejszej wysokości ekranu oraz na telefonie rośnie wraz z treścią. Zawiera:

1. Numer, tytuł „Myślenie przez tworzenie w pracy z AI” i czas **25 minut**.
2. Cel: sformułować pytanie, które prototyp ma pomóc rozjaśnić.
3. Sedno teorii: prototypowanie pomaga zobaczyć własne założenia; warto zbudować tylko tyle, ile potrzeba do obserwacji i decyzji.
4. Skrót zadania: wybierz gatunek muzyczny i własny pomysł na aplikację, zapisz jedno pytanie, przygotuj prostą pierwszą wersję, zanotuj obserwację i zachowaj wersję bazową.
5. Oczekiwany rezultat: pierwszy prototyp, pytanie i jedno zdanie o tym, co artefakt pomógł zobaczyć.
6. Dobrą praktykę: „Najpierw nazwij decyzję, potem wybierz, co zbudować”.
7. Link „Czytaj więcej o module 1” prowadzący do podstrony.
8. Informację o czasie modułu; w trybie prowadzącego także bieżący timer i przyciski sterowania.

Sekcja przedstawia zadanie do wykonania w narzędziu uczestnika. Nie zawiera pól odpowiedzi, formularzy ani zapisu postępów.

## Podstrona modułu 1

Podstrona rozwija treść z sekcji głównej i może być czytana samodzielnie. Jej kolejność:

1. Tytuł, cel i czas modułu.
2. Wyjaśnienie „myślenia przez tworzenie”: artefakt pomaga ujawnić pominięte założenia i podjąć kolejną decyzję.
3. Rola człowieka i AI: AI pomaga szybko uzyskać widoczną wersję; uczestnik określa pytanie, zakres i sposób oceny rezultatu.
4. Prosta pętla pracy: pytanie → artefakt → obserwacja → porównanie z oczekiwaniem → następna decyzja.
5. Pełny opis ćwiczenia: punkt wyjścia, cztery kroki ze szkicu warsztatu, oczekiwany rezultat i krótkie pytania do samodzielnej oceny.
6. Jednozdaniowe podsumowanie dobrej praktyki.

Treść korzysta z modułu 1 w materiałach uczestnika i ze szkicu warsztatu. Nie przenosi na stronę notatek dla prowadzącego ani odnośników do plików źródłowych z repozytorium.

## Timer i tryb prowadzącego

Timer modułu 1 ma wartość początkową `25:00`. W zwykłym widoku uczestnik widzi informację „25 minut”. W trybie prowadzącego widoczny jest licznik oraz przyciski **Start**, **Wstrzymaj/Wznów** i **Reset**. Start działa dopiero po świadomym kliknięciu. Po upływie czasu licznik zatrzymuje się na `00:00` i pokazuje czytelny komunikat końca czasu.

Prowadzący otwiera wariant strony z parametrem `?tryb=prowadzacy`; uczestnikom udostępnia zwykły adres bez tego parametru. Przejście na podstronę i powrót zachowują tryb prowadzącego. Stan timera pozostaje w przeglądarce prowadzącego i trwa przy przejściu między stroną główną a podstroną. Odliczanie liczy rzeczywisty upływ czasu także wtedy, gdy karta jest w tle. Nie ma synchronizacji licznika między urządzeniami: uczestnicy widzą bieżące odliczanie na ekranie prowadzącego lub w udostępnionej prezentacji. Osoba otwierająca tryb prowadzącego w innej przeglądarce może uruchomić tylko własny, lokalny licznik.

## Wygląd i dostępność

MVP stosuje istniejący mikrodesign system: białe i jasne tła, grafitowy tekst, pomarańczowy akcent, Open Sans z krojem systemowym jako zastępczym, cienkie obramowania i duże odstępy. Na stronie głównej moduł 1 otrzymuje wyraźną sekcję, a podstrona węższą kolumnę do czytania.

Nawigacja, linki i przyciski timera mają widoczny fokus i działają z klawiatury. Menu mobilne jest opisane dla technologii wspomagających. Koniec odliczania jest komunikowany tekstem, bez polegania wyłącznie na kolorze. Licznik nie ogłasza każdej sekundy czytnikowi ekranu. Układ nie wymusza poziomego przewijania ani przycinania treści.

## Proponowana realizacja

Pierwszą wersję można zbudować jako lekką stronę statyczną: dwie strony HTML, wspólny arkusz CSS i niewielki skrypt JavaScript dla menu oraz timera. Treść i parametry modułów warto trzymać w jednym uporządkowanym miejscu, tak aby dodanie modułów 2–8 nie wymagało przebudowy nawigacji. Adres podstrony powinien działać także po otwarciu bezpośredniego linku.

Kolejność prac:

1. Przygotować wspólną belkę, widok mobilny i strukturę adresów.
2. Wstawić wprowadzenie oraz listę ośmiu modułów ze statusem dostępności.
3. Opracować sekcję i podstronę modułu 1 na podstawie materiałów kursu.
4. Dodać lokalny timer i wariant prowadzącego.
5. Przejrzeć dwa widoki na desktopie i telefonie oraz przejścia między nimi.

## Kryteria gotowości MVP

- Udostępniony adres strony głównej pokazuje wprowadzenie, wspólną belkę i sekcję modułu 1.
- Bezpośredni link do `/#modul-1` i do `/moduly/modul-1` otwiera właściwą treść.
- Nawigacja pokazuje wszystkie osiem modułów; moduł 1 działa, a pozostałe są wyraźnie oznaczone jako przygotowywane.
- Podstrona modułu 1 zawiera rozwiniętą teorię, pełny opis ćwiczenia i dobrą praktykę, bez pól do wypełniania oraz linków do wewnętrznych źródeł.
- W trybie prowadzącego timer zaczyna od `25:00`, można go zatrzymać, wznowić i zresetować, a przejście na podstronę zachowuje tryb i nie gubi odliczania.
- Zwykły link dla uczestników nie pozwala sterować timerem prowadzącego.
- Treść pozostaje czytelna na desktopie i telefonie; przyklejona belka nie zasłania celu nawigacji.
