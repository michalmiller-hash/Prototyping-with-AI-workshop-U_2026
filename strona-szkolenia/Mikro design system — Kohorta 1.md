# Mikro design system: Kohorta 1 — Second Brain w Allegro

Opis powstał na podstawie stylów, znaczników HTML i skryptu w pliku „Kohorta 1 — Second Brain w Allegro.html”. Zapisuje zaobserwowane reguły i wartości; nie zakłada istnienia osobnego pliku źródłowego ani systemu komponentów.

## Charakter wizualny

- Jasny, oszczędny interfejs oparty na białym tle, grafitowej typografii i pomarańczowym akcencie.
- Duże nagłówki i szerokie odstępy wyznaczają rytm strony; treść jest grupowana w pełnej szerokości sekcje i proste karty.
- Karty mają delikatne obramowania i zaokrąglone narożniki. Kolor akcentu wskazuje działania, numerację i elementy wyróżnione.
- Układ dostosowuje się do szerokości ekranu. Projekt korzysta z natywnego HTML, własnego CSS oraz krótkiego skryptu JavaScript.

## Kolory

| Rola | Wartość | Użycie |
|---|---|---|
| Tło podstawowe | `#ffffff` | Strona, nagłówek, większość kart |
| Tło alternatywne | `#fafaf9` | Naprzemienne sekcje |
| Powierzchnia | `#f4f4f5` | Etykiety, stan nieaktywny, drobne wyróżnienia |
| Tekst główny | `#18181b` | Nagłówki i mocny tekst |
| Grafit | `#3f3f46` | Tekst akapitów i nawigacji |
| Tekst drugorzędny | `#71717a` | Opisy, metadane, podpisy |
| Tekst przygaszony | `#a1a1aa` | Elementy nieaktywne |
| Linia | `#e4e4e7` | Separatory i obramowania |
| Linia mocna | `#d4d4d8` | Wyraźniejsze obramowania i separatory |
| Akcent | `#ff5a00` | Kropki, numery, fokus, elementy graficzne |
| Akcent mocny | `#c2410c` | Podstawowe przyciski i numery sesji |
| Akcent tekstowy | `#b83f00` | Tekst akcentowy na jasnym tle |
| Akcent jasny | `#fff2eb` | Baner i karty wyróżnione |
| Sukces | `#166534` | Zdefiniowany token; w przejrzanym arkuszu nie ma widocznego komponentu, który go używa |
| Tło sukcesu | `#f0fdf4` | Zdefiniowany token; w przejrzanym arkuszu nie ma widocznego komponentu, który go używa |

Przyciski mają dodatkowe kolory stanów: hover przycisku głównego `#9f3410`, hover ciemnego przycisku `#2c2c31`, a tekst białego przycisku głównego `#ffffff`.

## Typografia

- Krój: **Open Sans**, pobierany z Google Fonts; stos zastępczy: `system-ui`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, sans-serif.
- Nagłówki mają ujemny tracking `-0.025em`; są mocne i zwarte, z ciasnym interliniowaniem.
- Tekst bazowy używa grafitowego koloru, rozmiaru płynnego `clamp(0.98rem, 1.25vw, 1.1rem)` i interlinii `1.65`.

| Styl | Rozmiar | Grubość | Interlinia / uwagi |
|---|---:|---:|---|
| H1 | `clamp(3rem, 7.3vw, 6.8rem)` | 800 | `0.98`, maks. szerokość `12ch` |
| H2 | `clamp(1.8rem, 4vw, 3.6rem)` | 750 | `1.05` |
| H3 | `clamp(1.1rem, 1.7vw, 1.35rem)` | 700 | `1.25` |
| Tekst wprowadzający | `clamp(1.12rem, 1.8vw, 1.45rem)` | domyślna | `1.5` |
| Tekst mały | `0.88rem` | domyślna | `1.55` |
| Eyebrow | `0.72rem` | 800 | tracking `0.2em`, wersaliki |
| Etykieta daty | `0.68rem` | 800 | tracking `0.13em`, wersaliki |

Na ekranach od `1200px` H1 hero ma odrębną regułę: `clamp(4rem, 4.8vw, 4.4rem)`, pojedynczy wiersz i bez limitu szerokości.

## Siatka i odstępy

- Maksymalna szerokość głównej treści: `1180px` (`--content`).
- Maksymalna szerokość kolumny czytania: `68ch` (`--reading`).
- Marginesy boczne strony: `clamp(1.25rem, 5vw, 4rem)`.
- Odstęp pionowy sekcji: `clamp(5rem, 9vw, 9rem)`; na ekranach do `720px` ustawiony na `4.75rem`.
- Typowy odstęp między kartami i kolumnami siatki: `1rem`; w części siatek `0.85rem`.
- Promień kart: `12px`; przyciski i kontrolki: `8px`; małe etykiety: `6px`.
- Układy wykorzystują CSS Grid i Flexbox. Wiele wartości typografii, paddingów i odstępów skaluje się przez `clamp()`.

## Komponenty

### Nagłówek i nawigacja

- Przyklejony do górnej krawędzi (`position: sticky`), z półprzezroczystym białym tłem, rozmyciem tła `16px` i dolną linią.
- Wysokość obszaru nawigacji: minimum `4.75rem`, na mobile `4.25rem`.
- Nawigacja pozioma znika przy szerokości `1050px` i mniejszej; pojawia się przycisk menu o minimalnej wysokości `44px` oraz rozwijana lista linków.
- Menu mobilne zamyka się po wybraniu linku lub naciśnięciu Escape; stan jest komunikowany przez `aria-expanded`.

### Przyciski

- Minimalna wysokość `48px`, padding `0.75rem 1.15rem`, promień `8px`, grubość pisma `750`.
- **Primary:** tło `#c2410c`, biały tekst; hover zmienia tło na `#9f3410`.
- **Secondary:** białe tło, obramowanie `#d4d4d8`, tekst główny; hover przyciemnia obramowanie.
- **Dark:** tło `#18181b`, biały tekst; hover `#2c2c31`.
- **Disabled:** szare tło i tekst, brak interakcji wskaźnikiem.
- Hover podnosi przycisk o `1px`; przejścia trwają `160ms`.

### Karty

- Karty narzędzi, roadmapy, spotkań, wsparcia i rezultatów korzystają z białego tła, obramowania `1px solid #e4e4e7`, promienia `12px` i responsywnego paddingu.
- Wyróżnione karty i banery używają obramowania `2px solid #ff5a00` oraz tła `#fff2eb`.
- Karty prowadzących nie mają pełnej obwódki; portret jest okrągły, z pomarańczową ramką `2px`.
- Karty roadmappy stosują numer sesji w akcencie, datę jako małą etykietę wersalikami oraz dolny blok działań i osób odpowiedzialnych.

### Listy i informacja

- Listy wprowadzające i listy w kartach używają pomarańczowych kropek zamiast standardowych punktorów.
- Fakty i etapy kursu są przedstawiane jako kolumny oddzielone liniami, bez ciężkich kontenerów.
- FAQ korzysta z natywnego HTML `<details>` / `<summary>`; znak plus zmienia się w minus po rozwinięciu.
- Baner konfiguracji wyróżnia ważną informację jasnym pomarańczowym tłem i podwójną ramką akcentową.

## Responsywność

| Próg | Zmiany układu |
|---|---|
| Do `1050px` | Nawigacja zamienia się w menu mobilne; nagłówki sekcji przechodzą do jednej kolumny; część siatek zmniejsza liczbę kolumn do dwóch. |
| Do `900px` | Roadmapa przechodzi do dwóch kolumn; akcje roadmapy do dwóch kolumn, a blok nagrania zajmuje całą szerokość. |
| Do `720px` | Większość siatek staje się jednokolumnowa; fakty i rytm kursu zachowują uproszczony układ; hero traci minimalną wysokość ekranu. |
| Do `420px` | Przyciski w wierszu i akcje roadmapy układają się pionowo; portrety prowadzących mają szerokość `6.5rem`. |

## Interakcje i dostępność

- Widoczny fokus klawiatury: obrys `3px solid #ff5a00` z odsunięciem `4px`.
- Link „Przejdź do treści” jest ukryty poza ekranem do momentu uzyskania fokusu.
- Kliknięcie linku menu mobilnego zamyka menu; Escape zamyka je i przenosi fokus z powrotem na przycisk menu.
- Preferencja `prefers-reduced-motion: reduce` wyłącza płynne przewijanie i skraca animacje.
- Obrazy są blokowe i ograniczone do szerokości kontenera (`max-width: 100%`).
- FAQ zachowuje natywną obsługę klawiatury dzięki elementom `<details>` i `<summary>`.

## Zasady stosowania

1. Używaj bieli i jasnych neutralnych powierzchni jako podstawy; pomarańcz zostaw dla działań, wyróżnień i sygnałów nawigacyjnych.
2. Zachowuj wyraźną hierarchię nagłówków, ograniczoną szerokość tekstu i duży pionowy rytm sekcji.
3. Grupuj powiązane treści w proste karty z cienką linią i spójnym promieniem `12px`.
4. Buduj układy przez płynne siatki, które redukują liczbę kolumn na tabletach i telefonach.
5. Zachowuj widoczny fokus, semantyczne elementy HTML i obsługę ograniczenia ruchu.

## Granice opisu

Opis dotyczy tego, co można odczytać z dostarczonego HTML. Nie potwierdza osobnego systemu tokenów, komponentów w repozytorium ani procesu budowania strony. Dwa tokeny zielonego stanu są zdefiniowane w CSS, ale nie zostały użyte w widocznych regułach komponentów.
