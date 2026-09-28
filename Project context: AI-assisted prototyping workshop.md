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
- Forma prowadzenia: [czesc teoretyczna, zadanie praktyczna, praca indywidualna.]
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
- Zebrać poznane zasady w powtarzalną metodę pracy.

## Podejście dydaktyczne

„Thinking through making” („myślenie przez tworzenie”) jest teoretyczną
koncepcją projektową omawianą podczas warsztatu. Nie jest metodą prowadzenia
warsztatu ani zasadą organizującą jego zajęcia.

Każdy moduł oprzyj na zwięzłym, ale merytorycznym objaśnieniu teorii.
Zdefiniuj kluczowe pojęcia, wyjaśnij ich rolę w projektowaniu i prototypowaniu
wspomaganym przez AI oraz przekaż uczestnikom kontekst potrzebny do zrozumienia,
dlaczego i kiedy warto stosować omawiane techniki.

Po części teoretycznej zaproponuj praktyczne zadanie wykonywane w aplikacji,
którą uczestnik buduje. Każde zadanie powinno wykorzystywać techniki z danego
modułu i rozwijać lub zmieniać tę samą aplikację, tak aby projekt ewoluował
w trakcie warsztatu. Uczestnicy pracują samodzielnie. Zapewnij im czas na pracę,
a tam, gdzie to przydatne, także na krótką wymianę refleksji lub pokazanie
jednego czy dwóch przykładów. Prowadzący przekazuje materiał i przygotowuje
zadania, ale nie odpowiada za sprawdzanie pracy każdego uczestnika ani
ocenianie, czy zadanie zostało wykonane poprawnie.

Każdy moduł zakończ bardzo krótkim przypomnieniem kluczowych pojęć i praktyk.
Podsumowania powinny razem tworzyć zwięzłą listę dobrych praktyk na koniec
warsztatu. Szczegółowe objaśnienia pozostaw w odpowiednich modułach, aby
uczestnicy mogli do nich wrócić, jeśli będą chcieli dowiedzieć się więcej.

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
7. Omówienie czym jest skill a czym są prototyping principles z uyciam AI.
8. Zebranie best-practise oraz przemyśleń uczestników i opracowanie AI prototyping Skill oraz lista AI prototyping principles.

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

Aplikacja jest środkiem do ćwiczenia technik warsztatowych, a jej końcowa
zawartość ani jakość nie definiują sukcesu. Zadanie w każdym module powinno
zachęcać uczestnika do zastosowania konkretnej techniki we własnym projekcie,
dodania kolejnej warstwy lub wykonania iteracji. Opisz punkt wyjścia zadania
oraz zmianę lub materiał, nad którym uczestnik ma pracować, ale nie narzucaj
koncepcji jego aplikacji.

Uczestnicy mogą korzystać z przykładowych danych i symulowanych usług;
prawdziwe integracje nie są wymagane, chyba że dana technika wyraźnie
ich potrzebuje. Gdy jest to związane z omawianą techniką, ćwiczenia mogą
zachęcać do zachowywania kolejnych wersji lub porównywania iteracji.