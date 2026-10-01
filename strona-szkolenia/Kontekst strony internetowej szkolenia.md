# Kontekst strony internetowej szkolenia

> **Status:** strona prezentuje główną treść warsztatu w ośmiu modułach. Tytuły
> i czasy są roboczą agendą; w razie zmiany należy zsynchronizować tę stronę,
> stronę szkolenia i kontekst projektu.

## Cel strony

Strona prowadzi uczestnika przez warsztat „Prototypowanie wspomagane przez AI”.
Strona główna jest prezentacją: zawiera wprowadzenie oraz osiem sekcji modułów,
a każda sekcja składa się z osobnych slajdów. Moduł jest głównym nośnikiem
treści, nie skrótem odsyłającym do teorii na innej podstronie.

Każdy slajd przekazuje jedną myśl w sposób zrozumiały w kontekście prezentacji.
Złożone zagadnienie może zajmować kilka slajdów. Długość sekcji modułu wynika
z liczby i formy potrzebnych slajdów; nie należy ograniczać jej do jednego
ekranu ani usuwać ważnych objaśnień tylko po to, by zmieścić całą sekcję w
widoku.

Na tym etapie strona zawiera wyłącznie treść prezentacji. Zadania będą
projektowane osobno i nie wyznaczają zakresu slajdów. Pogłębione materiały
uczestnika mogą powstać później, w osobnym etapie.

## Uczestnicy i kontekst warsztatu

- Warsztat trwa 4,5 godziny, w tym otwarcie, osiem modułów, przerwy i zamknięcie.
- Uczestnicy nie muszą umieć programować; mają podstawowe doświadczenie z narzędziami AI.
- Każdy pracuje indywidualnie i sam wybiera gatunek muzyczny, pomysł oraz przeznaczenie swojej aplikacji.
- Nie zakładaj wspólnego briefu, funkcji, ekranów ani przepływów użytkownika.
- Aplikacja jest kontekstem warsztatu i służy ćwiczeniu technik, a nie ocenie produktu.
- Materiały są po polsku. Polecenia i pojęcia angielskie można podać w nawiasie, jeśli ułatwiają pracę z narzędziem.

## Struktura informacji

### Strona główna

Strona `/` zawiera:

1. **Wprowadzenie** — nazwę warsztatu, ramę czasową i kontekst pracy.
2. **Nawigację po modułach** — odnośniki do ośmiu sekcji na stronie.
3. **Osiem sekcji modułów** — tytuł, pełną sekwencję slajdów i timer modułu.
4. **Agenda** — zawiera także otwarcie, przerwy i zamknięcie całego spotkania.

Slajdy w module są wyraźnie odseparowane wizualnie i czytane w kolejności.
Nawigacja prowadzi między wprowadzeniem i modułami; nie musi sterować
pojedynczymi slajdami. Treść nie jest przycinana do jednego viewportu.
Na telefonie slajdy układają się pionowo i przewija się je zwyczajnie.

### Aktywny model treści

Każdy moduł ma jeden plik źródłowy: `src/content/moduly/modul-XX.md`.
Frontmatter przechowuje numer, slug, tytuł, roboczy czas oraz tablicę slajdów.
Każdy slajd ma tytuł i treść Markdown. Opcjonalne pole `sources` przechowuje
odniesienia redakcyjne; nie renderuj go w widoku uczestnika.

Treść slajdu może używać akapitów, list, tabel i cytatów, jeśli forma pomaga
zrozumieć jego myśl. Nie twórz obowiązkowych pól „cel”, „kluczowa myśl”,
„sposób pokazania” i „przejście” dla każdego slajdu. To opcjonalne narzędzia
redakcyjne, nie wymagany schemat pliku.

### Poza zakresem bieżącej wersji

- Nie twórz oddzielnych podstron z rozwiniętą teorią ani odnośników „czytaj więcej”.
- Nie dodawaj do aktywnych modułów instrukcji zadań, ćwiczeń, oczekiwanych artefaktów, rezultatów ani samooceny.
- Nie umieszczaj w widoku uczestnika notatek prowadzącego, bibliografii redakcyjnej ani lokalizacji plików źródłowych.
- Nie dodawaj funkcji formularzy, zapisywania odpowiedzi ani oceny aplikacji uczestnika.

Poprzednie pliki rozwiniętych materiałów są zachowane w
`archiwum/materialy-uczestnika-przed-ukladem-slajdowym/` wyłącznie jako
odniesienie historyczne. Nie wczytują się do kolekcji strony.

## Moduły i robocze czasy

| Moduł | Czas |
|---|---:|
| 1. Myślenie przez tworzenie | 25 min |
| 2. Rodzaje i wierność prototypów | 25 min |
| 3. Przygotowanie kontekstu | 35 min |
| 4. Interakcje poza statycznym ekranem | 35 min |
| 5. Struktura prototypu i zakres zmiany | 25 min |
| 6. Debugowanie i ukierunkowana poprawka | 35 min |
| 7. Skill prototypowania z AI a zasady | 25 min |
| 8. Zasady i powtarzalny proces prototypowania z AI | 20 min |

Łączna rama spotkania to nadal 270 minut. Powyższe czasy są roboczymi slotami
agendy. Nie rozpisuj ich w obecnym etapie na teorię, demonstrację, ćwiczenie
ani refleksję.

## Timer

Timer pokazuje pełny czas przypisany modułowi. Sterowanie należy do prowadzącego:
może uruchomić, wstrzymać, wznowić i zresetować odliczanie. Timer nie startuje
samoczynnie. Czas pozostaje zapisany lokalnie w przeglądarce prowadzącego.
Uczestnicy widzą przydzielony czas modułu; bieżące odliczanie mogą śledzić na
ekranie prowadzącego lub w udostępnionym widoku.

## Kierunek wizualny i zachowanie

Strona korzysta z [Mikro design systemu — Kohorta 1](<Mikro design system — Kohorta 1.md>):
jasne tło, grafitowa typografia, pomarańczowy akcent, czytelna hierarchia,
przestrzeń i proste karty z delikatnym obramowaniem. Zachowaj responsywność,
widoczny fokus klawiatury, semantyczne elementy HTML i preferencję ograniczonego
ruchu.

Zaprojektuj wspólny komponent slajdu, który dobrze prezentuje tytuł oraz różne
rodzaje treści Markdown. Dobieraj hierarchię i szerokość do treści; nie stosuj
jednego układu tabeli, cytatu czy listy do każdego slajdu.

## Założenia i granice treści

- Kontekst warsztatu opisuje [plik kontekstu projektu](<Project context: AI-assisted prototyping workshop.md>).
- Materiał źródłowy dobieraj z `Raw/`; w metadanych slajdu zapisuj konkretny plik i sekcję, gdy są dostępne.
- Nie umieszczaj tych metadanych w widoku uczestnika.
- Nie zakładaj konkretnego dostawcy narzędzia do prototypowania.
- Opisując TokenOps, wyjaśniaj mechanizmy i kompromisy. Nie obiecuj oszczędności tokenów ani kosztów bez pomiarów.
- Oddzielaj twierdzenia ze źródeł od interpretacji i propozycji warsztatowych. Nazwij braki lub sprzeczności zamiast po cichu ich rozstrzygać.
