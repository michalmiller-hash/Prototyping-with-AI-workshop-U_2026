# Strona szkolenia

Strona jest generowana z plików Markdown przy użyciu Eleventy. Treść modułów można redagować bez zmieniania HTML-a.

## Gdzie edytować treść

Każdy moduł ma dwa pliki:

- `src/content/moduly/modul-XX.md` — cel, czas, pełne zadanie, rezultat i dobra praktyka na stronie głównej;
- `src/content/materialy/modul-XX.md` — rozwinięta teoria wyświetlana pod adresem `/materials/modul-X/`.

Strona z materiałami zawiera pogłębienie teorii i link powrotny do odpowiedniego modułu na stronie głównej.

Treść pomiędzy liniami `---` na początku krótkiego pliku steruje elementami o ustalonej strukturze. Zwykła treść Markdown w pliku rozszerzonym tworzy nagłówki, akapity, listy, tabele i bloki kodu.

Nie edytuj plików w `_site`. Są generowane ponownie przy każdym uruchomieniu komendy budującej.

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

Strona będzie dostępna pod adresem <http://localhost:8000/>. Eleventy obserwuje pliki i po zapisaniu Markdowna automatycznie przebudowuje oraz odświeża stronę.

Jeśli pod tym adresem działa jeszcze wcześniejszy serwer uruchomiony poleceniem `python3 -m http.server`, zatrzymaj go najpierw skrótem `Control C`, a następnie uruchom `npm start`.

Tryb prowadzącego jest dostępny pod adresem <http://localhost:8000/?tryb=prowadzacy>. Każdy moduł ma osobny timer, a jego stan pozostaje zapisany lokalnie w przeglądarce.

Zatrzymaj serwer skrótem `Control C`.

## Jednorazowe wygenerowanie strony

```sh
npm run build
```

Gotowe pliki statyczne powstaną w katalogu `_site`. Można opublikować zawartość tego katalogu na dowolnym hostingu statycznym.

## Struktura projektu

```text
src/
├── _data/          dane wspólne strony
├── _includes/      szablon strony i element timera
├── assets/         style oraz JavaScript
├── content/
│   ├── moduly/     krótkie treści ośmiu modułów
│   └── materialy/  rozwinięcia ośmiu modułów
├── index.njk       strona główna
└── module.njk      wspólny szablon podstron modułów
```

Poprzednia, ręcznie napisana wersja HTML znajduje się w `archiwum/strona-statyczna-przed-generatorem` i nie jest używana przy budowaniu strony.
