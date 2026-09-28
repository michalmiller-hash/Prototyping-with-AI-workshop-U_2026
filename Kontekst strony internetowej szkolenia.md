# Kontekst strony internetowej szkolenia

> **Status:** brief do przygotowania strony dla uczestników. Nazwy modułów i czasy pochodzą z roboczego szkicu warsztatu i mogą się zmienić wraz z jego dalszym opracowaniem.

## Cel strony

Strona ma prowadzić uczestnika przez warsztat „Prototypowanie wspomagane przez AI”. Na jednej, łatwej do udostępnienia stronie prezentuje osiem modułów w kolejności zajęć. Każdy moduł ma własną, wyraźnie oddzieloną sekcję oraz timer z czasem przewidzianym w agendzie. Zwięzłe wprowadzenie i zadanie są dostępne od razu, a odnośnik prowadzi do podstrony z rozwinięciem teorii i pełną instrukcją ćwiczenia.

Strona jest materiałem wspierającym prowadzenie szkolenia i samodzielną pracę. Ma pomagać szybko odnaleźć temat, zrozumieć jego zastosowanie, wykonać zadanie i wrócić do pogłębionych informacji.

## Uczestnicy i kontekst warsztatu

- Warsztat trwa 4,5 godziny, w tym otwarcie, osiem modułów, przerwy i zamknięcie.
- Uczestnicy nie muszą umieć programować; mają podstawowe doświadczenie z narzędziami AI.
- Każdy pracuje indywidualnie na komputerze i korzysta z narzędzia do prototypowania wspomaganego przez AI.
- Każdy wybiera gatunek muzyczny i samodzielnie określa pomysł oraz przeznaczenie własnej aplikacji. Nie ma wspólnego briefu, wymaganych funkcji ani narzuconego przepływu użytkownika.
- Aplikacja uczestnika służy do ćwiczenia technik i rozwija się przez kolejne moduły. Jej kompletność ani poziom dopracowania nie są miarą powodzenia warsztatu.
- Materiały na stronie są po polsku. Polecenia i pojęcia angielskie można podać w nawiasie, jeśli ułatwiają pracę z narzędziem.

## Struktura informacji

### Strona główna kursu

Proponowana struktura strony `/`:

1. **Wprowadzenie** — nazwa warsztatu, krótki opis celu, czas trwania i wskazówka, jak korzystać ze strony.
2. **Nawigacja po modułach** — odnośniki do ośmiu sekcji na stronie. Na węższych ekranach nawigacja pozostaje łatwa w obsłudze.
3. **Osiem sekcji modułów** — ułożonych zgodnie z kolejnością agendy. Każda zawiera skrót treści, opis zadania, oczekiwany rezultat, timer i link do podstrony z rozwinięciem.
4. **Zamknięcie warsztatu** — przypomnienie praktyk z modułów oraz link do syntezy z modułu 8.

Każda sekcja modułu ma na desktopie zajmować w przybliżeniu jeden viewport. Aby utrzymać taką wysokość, na stronie głównej pokazujemy sedno teorii i opis zadania, a szczegółowe objaśnienia oraz pełny opis ćwiczenia przenosimy na podstronę modułu. Wysokość sekcji nie może ucinać treści: jeśli zawartość jest większa niż dostępny ekran, sekcja naturalnie się wydłuża. Na telefonie moduły układają się pionowo i przewijają się zwyczajnie, bez próby dopasowania całości do jednego ekranu.

### Podstrony modułów

Każdy moduł ma własny, bezpośrednio udostępnialny adres, np. `/moduly/modul-1`. Podstrona zawiera:

- cel modułu i krótkie przypomnienie jego kluczowej myśli;
- rozwinięte informacje dla uczestnika, w tym wyjaśnienie pojęć i tego, kiedy omawiana technika jest przydatna;
- opis zadania: punkt wyjścia, kolejne kroki i oczekiwany rezultat;
- krótką dobrą praktykę na koniec;
- timer pokazujący czas modułu, sterowany przez prowadzącego.

Strona pełni funkcję informacyjną, jak czytelny materiał kursowy. Uczestnik czyta treść i wykonuje zadanie poza stroną, w narzędziu do prototypowania lub we własnych notatkach. Strona nie zawiera formularzy, pól do wypełniania ani funkcji zapisywania odpowiedzi. Treści rozwinięte należy opracowywać na podstawie materiałów uczestnika. Notatki przeznaczone wyłącznie dla prowadzącego nie są częścią widoku uczestnika. Na stronie nie umieszczaj listy źródeł ani odnośników do plików w repozytorium; prowadzący dołączy adekwatną listę do materiałów samodzielnie.

Nawigacja jest jedna dla całego serwisu: przyklejona górna belka pozostaje dostępna podczas przewijania i przechodzenia między podstronami. Zawiera dostęp do listy modułów oraz nawigację do poprzedniego i następnego modułu, odpowiednio do miejsca, w którym znajduje się użytkownik. Nie dodawaj osobnych zestawów nawigacyjnych w treści każdej podstrony.

## Zawartość modułów

| Moduł | Czas | Skrót informacji na stronie głównej | Zadanie i rezultat |
|---|---:|---|---|
| 1. Myślenie przez tworzenie w pracy z AI | 25 min | Prototyp pomaga uczyć się przez tworzenie. Zacznij od pytania lub decyzji, którą chcesz rozjaśnić. | Zapisz pytanie, stwórz pierwszą wersję własnego pomysłu i zachowaj punkt odniesienia. Rezultat: prototyp bazowy i krótka notatka o tym, co stało się widoczne. |
| 2. Rodzaje i wierność prototypów | 25 min | Dobierz cel prototypu, jego wierność i zakres do pytania; to różne decyzje. | Wybierz cel, zakres i kryterium sprawdzenia. Rezultat: karta decyzji i, jeśli to potrzebne, odpowiednia zmiana własnego prototypu. |
| 3. Przygotowanie kontekstu | 35 min | Dobierz do zadania kontekst funkcjonalny, wizualny i dotyczący danych. Oddziel wymagania, założenia i niewiadome. | Przygotuj krótki kontekst do wybranego zadania i użyj go w pracy nad własnym projektem. Rezultat: brief kontekstu i wynik pracy. |
| 4. Interakcje poza statycznym ekranem | 35 min | Opisuj zachowanie przez działanie, stan przed, zmianę i widoczny rezultat. | Zapisz jedną interakcję, wprowadź lub popraw ją w prototypie i sprawdź jej zachowanie. Rezultat: opis przejścia i notatka z obserwacji. |
| 5. Struktura prototypu i zakres zmiany | 25 min | Rozpoznaj element, którego dotyczy zmiana, i jasno określ jej granice. | Wskaż element i rodzaj zmiany, uzgodnij plan, wykonaj ograniczoną poprawkę i sprawdź jej zasięg. Rezultat: mapa lub hipoteza miejsca zmiany i kryterium weryfikacji. |
| 6. Debugowanie i ukierunkowana poprawka | 35 min | Odtwórz problem, zapisz wynik oczekiwany i rzeczywisty, zachowaj wersję i sprawdź poprawkę. | Udokumentuj problem lub niepewne zachowanie, wprowadź celowaną zmianę i porównaj rezultat. Rezultat: zapis „przed i po” oraz wniosek oparty na obserwacji. |
| 7. Skill prototypowania z AI a zasady | 25 min | Zasada wspiera decyzje człowieka, a Skill przekłada sposób pracy na powtarzalną instrukcję dla AI. | Przygotuj przykład zasady i osobno instrukcję dla AI, która ją stosuje. Rezultat: para „zasada i instrukcja” oraz obserwacja z próby. |
| 8. Synteza: roboczy Skill i lista zasad | 20 min | Zbieraj praktyki, które pomogły w konkretnych zadaniach, i zapisuj je w formie do ponownego użycia. | Opracuj roboczą listę zasad i wersję 0.1 Skill prototypowania. Rezultat: dwa materiały do dalszej edycji i jeden następny krok uczestnika. |

Timer odlicza pełny czas danego modułu. Podział czasu na teorię, demonstrację, ćwiczenie i refleksję może być pokazany informacyjnie na podstronie.

## Timer

Timer pokazuje czas przypisany do modułu z agendy. Sterowanie nim należy wyłącznie do prowadzącego: w trybie prowadzącego dostępne są przyciski i bieżące odliczanie, a widok uczestnika na własnym urządzeniu pokazuje przydzielony czas modułu bez przycisków sterowania. Uczestnicy widzą bieżące odliczanie na ekranie prowadzącego lub w jego udostępnionym widoku.

- Prowadzący może uruchomić, wstrzymać, wznowić i zresetować odliczanie.
- Timer nie uruchamia się samoczynnie.
- Po dojściu do zera wyraźnie pokazuje koniec czasu; nie wymaga konta ani zewnętrznej usługi.
- Odliczanie pozostaje poprawne, gdy karta przeglądarki prowadzącego działa w tle. Przejście między stroną główną a podstroną modułu nie zeruje bieżącego timera.
- Sterowanie i odliczanie prowadzącego nie są synchronizowane między przeglądarkami osób, które niezależnie otwierają udostępniony link. Uczestnicy korzystający z własnych urządzeń widzą informację o czasie modułu; bieżące odliczanie widzą na ekranie prowadzącego lub w jego udostępnionym widoku.
- Przyciski sterowania w trybie prowadzącego są czytelne z klawiatury i na ekranie dotykowym. Zmiana co sekundę nie powinna powodować uciążliwego odczytywania całego licznika przez czytnik ekranu.

## Kierunek wizualny i zachowanie

Strona korzysta z [Mikro design systemu — Kohorta 1](<Mikro design system — Kohorta 1.md>): jasne tło, grafitowa typografia, pomarańczowy akcent, czytelna hierarchia, dużo oddechu oraz proste karty z delikatnym obramowaniem. Kolor akcentowy wyróżnia numer modułu, timer i główne odnośniki. Zachowujemy określoną w mikrodesign systemie responsywność, widoczny fokus klawiatury, semantyczne elementy HTML i preferencję ograniczonego ruchu.

Układ ma być spokojny i lekki. Najważniejsze treści są widoczne bez otwierania dodatkowych paneli. Nawigacja prowadzi do sekcji strony lub podstrony modułu; timer jest główną kontrolką interaktywną. Nie jest potrzebne rozbudowane środowisko aplikacyjne.

## Wymagania użytkowe

- Stronę i podstrony można otworzyć bez logowania i łatwo udostępnić przez link.
- Każdy moduł ma stabilny odnośnik, a bezpośrednio udostępniony adres podstrony otwiera właściwy materiał.
- Strona działa na desktopie i telefonie, nie tworzy poziomego przewijania i ma czytelną hierarchię treści.
- Uczestnik może szybko przejść do dowolnego modułu, wrócić do listy i otworzyć pogłębione informacje.
- Uczestnik korzysta z treści informacyjnie; zadania wykonuje poza stroną.
- Czytanie materiałów nie wymaga wysyłania danych uczestnika ani zapisywania wyników ćwiczeń.

## Założenia i granice treści

- Strona korzysta z agendy i zadań w [Pierwszym szkicu warsztatu](<Workshop draft.md>) oraz z teorii i materiałów ćwiczeniowych w [Materiałach uczestnika](<Materiały uczestnika - prototypowanie wspomagane przez AI.md>).
- Kontekst warsztatu opisuje [plik kontekstu projektu](<Project context: AI-assisted prototyping workshop.md>). Gatunek muzyczny jest punktem wyjścia uczestnika, a nie gotowym briefem narzuconym przez stronę.
- Strona nie zakłada konkretnego dostawcy narzędzia do prototypowania; instrukcje pozostają narzędziowo neutralne.
- Nie umieszczaj na stronie list źródeł ani odnośników do plików repozytorium. Prowadzący doda listę adekwatnych źródeł do materiałów we własnym zakresie.
- Wskazówki o wpływie technik na zużycie tokenów należy formułować jako możliwe mechanizmy i kompromisy, zgodnie z materiałami kursu. Nie obiecywać określonych oszczędności bez pomiarów.
- Roboczy szkic warsztatu jest źródłem treści, ale nie każda propozycja w nim zapisana jest zatwierdzonym standardem. Teorie oparte na źródłach należy odróżniać od propozycji warsztatowych.
