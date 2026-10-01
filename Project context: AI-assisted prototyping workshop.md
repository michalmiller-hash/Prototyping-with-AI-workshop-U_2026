# Kontekst projektu: warsztat prototypowania wspomaganego przez AI

## Cel

Repozytorium zawiera edukacyjne materiały źródłowe i będzie miejscem,
w którym powstanie warsztat poświęcony prototypowaniu wspomaganemu przez AI.

Warsztat uczy uczestników, jak wykorzystywać AI do eksplorowania pomysłów,
budowania interaktywnych prototypów, oceniania ich działania i wprowadzania
przemyślanych usprawnień.

Celem nie jest samo wygenerowanie dopracowanej aplikacji. Uczestnicy mają
poznać powtarzalny proces podejmowania decyzji projektowych, dostarczania
AI użytecznego kontekstu, analizowania rezultatów i korygowania problemów.

„Prototypowanie wspomagane przez AI” oznacza wykorzystywanie AI w procesie
prototypowania. Sama prototypowana aplikacja nie musi zawierać funkcji AI.

## Uczestnicy i warunki organizacyjne

- Docelowi uczestnicy: [6 osób.]
- Oczekiwana znajomość programowania: [brak].
- Oczekiwane doświadczenie w pracy z narzędziami AI: [podstawowy].
- Czas trwania warsztatu:[4.5 godziny]
- Forma prowadzenia: prezentacja modułów; zadania projektowane w osobnym etapie; praca indywidualna.
- Dostępne narzędzia i środowisko techniczne: narzedzie do prototypowania z AI, komputer.
- Język materiałów dla uczestników: [polski.]

Potwierdzone ograniczenia traktuj jako wymagania. Gdy brakuje informacji,
przyjmuj jawne założenia robocze zamiast po cichu dopowiadać szczegóły.

## Materiały źródłowe

Wykorzystuj materiały edukacyjne z tego repozytorium jako główne źródła
treści kursu.

Przed przygotowaniem materiałów przejrzyj dostępne źródła i wskaż pojęcia,
metody, przykłady oraz zasady, które są istotne dla warsztatu.

Układaj kurs wokół efektów uczenia się i wymaganych wcześniej umiejętności,
a nie według kolejności lub liczby plików źródłowych.

Dla każdego modułu wskaż odpowiednie pliki źródłowe, a tam, gdzie to możliwe,
także ich sekcje. Nie wymyślaj źródeł ani nie sugeruj, że przejrzano materiały,
do których nie było dostępu.

Wyraźnie odróżniaj treści oparte na źródłach od proponowanych ćwiczeń,
przykładów, interpretacji i dodatkowych objaśnień.

Wskazuj istotne luki i sprzeczności. Nie rozstrzygaj ich po cichu w sposób,
który zmieniałby założoną metodykę.

## Efekty uczenia się

Po warsztacie uczestnicy powinni umieć:

- Dobrać rodzaj i poziom wierności prototypu do konkretnego pytania
  projektowego.
- Przygotować użyteczny kontekst do zadania związanego z prototypowaniem
  wspomaganym przez AI.
- Opisać interakcję przez działania użytkownika, stany, przejścia
  i oczekiwane rezultaty.
- Rozpoznać na tyle dobrze strukturę prototypu, by określić, gdzie należy
  wprowadzić zmianę, i ograniczyć jej zakres.
- Świadomie podejmować decyzje dotyczące kontekstu, zakresu generowania
  i nakładu pracy na kolejne iteracje.
- Przebudować lub istotnie zmienić prototyp z użyciem poznanych technik
  oraz wyjaśnić, co poprawiły.
- Wyjaśnić, jak zasady i wielokrotnego użytku instrukcje mogą wspierać powtarzalny proces pracy.

## Podejście dydaktyczne

„Thinking through making” („myślenie przez tworzenie”) jest teoretyczną
koncepcją projektową omawianą podczas warsztatu. Nie jest metodą prowadzenia
warsztatu ani zasadą organizującą jego zajęcia.

### Prezentacja modułów

Moduł jest grupą slajdów stanowiących główną treść wyświetlaną uczestnikom.
Nie jest skrótem, który odsyła do osobnej teorii. Każdy slajd przedstawia
jedną myśl w sposób zrozumiały bez zakładania, że uczestnik przeczytał
dodatkowy materiał. Złożone pojęcie może zajmować kilka kolejnych slajdów,
jeśli każdy z nich wnosi osobny, czytelny krok wyjaśnienia.

Układaj slajdy tak, by moduł prowadził przez zagadnienie: od potrzebnego
kontekstu, przez objaśnienie pojęć lub mechanizmu, po ograniczenia i wnioski
przydatne dla uczestnika. Dobieraj formę do myśli: tekst, porównanie, sekwencję,
tabelę lub schemat. Nie wymuszaj tej samej liczby slajdów ani takiego samego
układu dla każdego modułu.

W pierwszym etapie twórz wyłącznie treść prezentacji. Nie dodawaj do slajdów
instrukcji ćwiczeń, punktów wyjścia, kroków zadania, oczekiwanych artefaktów
ani pytań samooceny. Zadania są osobnym elementem warsztatu i zostaną
zaprojektowane później; nie powinny z góry wyznaczać zakresu ani kolejności
treści slajdów. Na tym etapie nie twórz też odrębnych, pogłębionych materiałów
uczestnika ani równoległej wersji „do poczytania”.

Czas 270 minut pozostaje ramą całego spotkania. Zachowuj obecne czasy modułów
jako robocze sloty agendy, ale nie dziel ich teraz na teorię, ćwiczenie,
demonstrację ani refleksję. Taki podział będzie można ustalić, gdy osobno
powstaną zadania i pełna agenda.

Tam, gdzie uzasadnia to omawiana teoria, wyjaśnij, jak dana technika może
ograniczyć zużycie tokenów i koszty — na przykład przez zawężenie kontekstu
lub zakresu polecenia, uniknięcie zbędnego generowania albo zmniejszenie
liczby iteracji naprawczych. Opisz mechanizm i jego kompromisy; nie wymyślaj
pomiarów oszczędności ani nie gwarantuj ich określonej wysokości bez dowodów.

## Kolejność tematów

Poniższa kolejność jest punktem wyjścia:

1. Myślenie przez tworzenie w kontekście pracy z AI.
2. Rodzaje i wierność prototypów oraz pytania, na które pomagają odpowiedzieć.
3. Przygotowywanie kontekstu do prototypowania.
4. Interakcje wykraczające poza statyczne ekrany.
5. Struktura prototypu i jej wpływ na efektywność pracy z AI.
6. Debugowanie i ukierunkowane poprawki.
7. Różnica między zasadą pracy a wielokrotnego użytku instrukcją dla AI.
8. Zasady i powtarzalny proces prototypowania wspomaganego przez AI.

Możesz zaproponować zmianę tej kolejności, jeśli uzasadniają ją wymagane
wcześniej umiejętności lub spójność ćwiczeń. Krótko wyjaśnij istotne zmiany.
Mozesz zaproponować jak uzupełnić wiedzę.

Omawiaj architekturę oprogramowania tylko w zakresie potrzebnym do praktycznych
decyzji podczas warsztatu. Nie przekształcaj go w ogólny kurs inżynierii
oprogramowania.

Określ zakres pojęcia „TokenOps” na podstawie materiałów źródłowych. Wyjaśnij,
w jaki sposób techniki stosowane na warsztacie mogą wpływać na zużycie tokenów
i koszty, odróżniając prawdopodobne mechanizmy od zmierzonych oszczędności.
Nie twierdź, że sama lepsza architektura gwarantuje niższe koszty, ani nie
wymyślaj wyników pomiarów.

## Wspólny projekt praktyczny

Każdy uczestnik wybiera gatunek muzyczny i buduje związaną z nim aplikację.
Nie ma wspólnego briefu produktowego, określonej potrzeby użytkownika ani
wymaganego zestawu funkcji czy przepływów. Uczestnicy sami decydują, co
znajdzie się w ich aplikacji i do czego będzie służyć.

Aplikacja jest wspólnym kontekstem dla całego warsztatu, ale slajdy nie mogą
zakładać, że uczestnik zbudował konkretną funkcję, ekran lub przepływ.
Końcowa zawartość ani jakość aplikacji nie definiują sukcesu. Zadania będą
projektowane osobno i mogą później odwołać się do aplikacji uczestnika,
nie zmieniając z góry głównej treści modułów.

Uczestnicy mogą korzystać z przykładowych danych i symulowanych usług;
prawdziwe integracje nie są wymagane, chyba że dana technika wyraźnie
ich potrzebuje. To ograniczenie dotyczy również późniejszych zadań.
