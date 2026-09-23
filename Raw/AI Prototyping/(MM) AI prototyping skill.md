Tak, ale z jedną ważną korektą: te cztery pojęcia nie opisują wyłącznie kolejnych etapów. Opisują trzy różne wymiary prototypowania:

|Wymiar|Opcje|
|---|---|
|Cel|eksploracja alternatyw albo walidacja konkretnego rozwiązania|
|Wierność UI|low-fi albo high-fi|
|Zakres|cały przepływ albo pojedynczy komponent|

Dlatego „prototyp komponentu” nie powinien być czwartym etapem po high-fi. To raczej tryb zakresu, który może być połączony z low-fi albo high-fi, np. „high-fi prototyp komponentu z mikroanimacją”.

Moja rekomendacja: jeden główny skill `ai-prototyping` z czterema trybami pracy, zamiast czterech całkowicie niezależnych skills.

Struktura mogłaby wyglądać tak:

```
ai-prototyping
├── wspólne design principles
├── wybór trybu prototypowania
├── prototyp eksploracyjny
├── prototyp low-fi
├── prototyp high-fi
└── prototyp komponentu
```

Jeden skill ograniczy powielanie zasad i ryzyko konfliktów. Jest to szczególnie ważne, ponieważ skills i inne pliki instrukcji mogą wpływać na zachowanie agenta, a niejasne lub sprzeczne instrukcje mogą zmienić jego decyzje albo zatrzymać pracę. [Oficjalna dokumentacja OpenAI](https://developers.openai.com/api/docs/guides/latest-model)

### Proponowane tryby

#### Prototyp eksploracyjny

Lepsza nazwa niż „inspiracyjny”, ponieważ precyzyjniej wskazuje cel: eksplorowanie przestrzeni rozwiązań.

Agent powinien:

- przygotować kilka wyraźnie różnych kierunków;
- różnicować strukturę, model interakcji i hierarchię informacji;
- unikać kosmetycznych wariantów tego samego rozwiązania;
- opisać, czym różnią się poszczególne kierunki;
- nie rozbudowywać każdego wariantu do pełnego produktu.

Ten tryb służy dywergencji i wyborowi kierunku.

#### Prototyp low-fi

Agent powinien:

- skupić się na architekturze informacji i głównym przepływie;
- używać neutralnej, stonowanej kolorystyki;
- ograniczyć funkcje do niezbędnego minimum;
- pokazać podstawowe stany i najważniejsze decyzje użytkownika;
- nie dodawać brandingu, ozdobników ani dodatkowej narracji.

Ten tryb służy sprawdzeniu, czy rozwiązanie jest zrozumiałe.

#### Prototyp high-fi

Agent powinien:

- korzystać ze wskazanego design systemu;
- używać realistycznych danych i treści;
- odwzorować responsywność, stany i kluczowe interakcje;
- uwzględnić zachowania istotne dla użytkownika;
- nadal respektować zasadę minimalnego zakresu.

High-fi oznacza wysoką wierność wizualną i interakcyjną. Nie oznacza automatycznie pełnego produktu.

#### Prototyp komponentu

Agent powinien:

- ograniczyć zakres do jednego komponentu lub fragmentu interfejsu;
- zdefiniować jego stany, przejścia i zachowania;
- skupić się na jakości interakcji, np. mikroanimacji, hoverze, focusie, błędzie czy przejściu;
- uwzględnić dostępność i zachowanie przy ograniczeniu ruchu;
- nie budować reszty produktu, jeśli nie jest potrzebna do demonstracji komponentu.

Ten tryb może działać jako nakładka:

- `low-fi + komponent` — gdy testujemy strukturę komponentu;
- `high-fi + komponent` — gdy testujemy finalny wygląd i mikrointerakcję.

### Reguła wyboru trybu

Skill powinien rozpoznawać tryb na podstawie intencji użytkownika:

- „pokaż różne kierunki”, „zaproponuj alternatywy” → prototyp eksploracyjny;
- „szkic”, „wireframe”, „architektura informacji”, „MVP” → prototyp low-fi;
- „design system”, „finalny UI”, „realistyczny interfejs” → prototyp high-fi;
- „komponent”, „mikrointerakcja”, „animacja”, „stan przycisku” → prototyp komponentu jako ograniczenie zakresu.

Gdy użytkownik nie określi trybu, domyślnie wybrałbym low-fi dla nowych koncepcji. To najlepiej wspiera przyjętą przez Ciebie zasadę: najpierw użyteczny rdzeń, potem warstwy.