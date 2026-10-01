# Strona szkolenia

Strona jest generowana z plików Markdown przy użyciu Eleventy. Strona główna
prezentuje osiem modułów; każdy moduł zawiera sekwencję slajdów, które są
główną treścią dla uczestników.

## Gdzie edytować treść

Każdy moduł ma jeden aktywny plik: `src/content/moduly/modul-XX.md`. Jego
frontmatter przechowuje numer, adres kotwicy, tytuł, roboczy czas modułu
i listę `slides`. Każdy slajd ma `title` oraz `content` zapisane w Markdown.
Opcjonalne pole `sources` służy redakcji i nie jest wyświetlane uczestnikom.

Przykład:

```yaml
slides:
  - title: "Tytuł przekazujący myśl slajdu"
    content: |-
      Treść slajdu w Markdown.
    sources:
      - "Raw/... — nazwa sekcji"
```

Moduł jest główną prezentacją, a nie skrótem do odrębnej teorii. Nie dodawaj
do plików modułów instrukcji zadań, rezultatów ćwiczeń ani samooceny. Zadania
powstaną osobno. Nie twórz na tym etapie pogłębionych podstron dla uczestników.
Poprzednia zawartość `src/content/materialy/` jest zachowana w
`archiwum/materialy-uczestnika-przed-ukladem-slajdowym/` jako materiał
historyczny i nie bierze udziału w budowaniu strony.

Nie edytuj plików w `_site`. Są generowane ponownie przy każdym uruchomieniu
komendy budującej.

## Lokalny podgląd

W Terminalu przejdź do katalogu strony:

```sh
cd '/Users/michal.miller/Prototyping with AI workshop U_2026/strona-szkolenia'
```

Przy pierwszym uruchomieniu lub po zmianie zależności wykonaj:

```sh
npm install
```

Uruchom podgląd:

```sh
npm start
```

Strona będzie dostępna pod adresem <http://localhost:8000/>. Eleventy
obserwuje pliki i po zapisaniu Markdowna automatycznie przebudowuje oraz
odświeża stronę.

Tryb prowadzącego jest dostępny pod adresem
<http://localhost:8000/?tryb=prowadzacy>. Każdy moduł ma osobny timer,
a jego stan pozostaje zapisany lokalnie w przeglądarce.

Zatrzymaj serwer skrótem `Control C`.

## Jednorazowe wygenerowanie strony

```sh
npm run build
```

Gotowe pliki statyczne powstaną w katalogu `_site`. Można opublikować
zawartość tego katalogu na dowolnym hostingu statycznym.

## Struktura projektu

```text
src/
├── _data/          dane wspólne strony
├── _includes/      wspólny szablon i element timera
├── assets/         style oraz JavaScript
├── content/
│   └── moduly/     aktywne slajdy ośmiu modułów
└── index.njk       strona główna z prezentacją modułów
```

Poprzednia, ręcznie napisana wersja HTML znajduje się w
`archiwum/strona-statyczna-przed-generatorem` i nie jest używana przy
budowaniu strony.
