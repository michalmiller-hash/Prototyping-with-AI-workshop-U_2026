---
number: 4
module_slug: modul-4
title: "Interakcje poza statycznym ekranem"
tags: materials
permalink: false
---

### Interfejs jest zachowaniem, nie tylko obrazem

Zrzut ekranu pokazuje jeden moment. Nie mówi sam z siebie, co stanie się po kliknięciu, wpisaniu tekstu, zmianie wyboru ani po wystąpieniu błędu. Interaktywność pozwala obserwować przejście między momentami.

Do opisania zachowania użyj czterech elementów:

1. **Działanie:** co robi użytkownik?
2. **Stan przed:** co system pokazuje lub wie przed działaniem?
3. **Zmiana:** jaka reguła lub reakcja zachodzi?
4. **Rezultat:** co użytkownik widzi lub może zrobić po zmianie?

~~~text
działanie użytkownika
        ↓
stan początkowy
        ↓
reguła / reakcja systemu
        ↓
stan końcowy widoczny dla użytkownika
~~~

Przydatna tabela:

| Działanie | Stan przed | Zmiana | Rezultat widoczny |
|---|---|---|---|
| [działanie wybrane przez autora prototypu] | [stan] | [co się zmienia] | [co zobaczy użytkownik] |

### Stany brzegowe

Samo „szczęśliwe zakończenie” nie zawsze wystarcza. Pomyśl, które dodatkowe warunki są ważne dla pytania:

- **Pusty:** brak treści, wyników lub wcześniejszych działań.
- **Ładowanie:** system jeszcze pracuje.
- **Sukces:** działanie przyniosło oczekiwany skutek.
- **Błąd:** działanie nie mogło zostać wykonane.
- **Nieaktywne:** elementu nie można teraz użyć.
- **Częściowy wynik:** część informacji jest dostępna, a część nie.

Nie trzeba modelować wszystkich tych stanów w każdym prototypie. Wybierz te, które wpływają na doświadczenie lub na odpowiedź na twoje pytanie.

### Interaktywność a cel badania

Jeśli pytanie dotyczy wyglądu pierwszego wrażenia, statyczny obraz może wystarczyć. Jeśli chcesz zobaczyć, jak ktoś radzi sobie z interakcją, prototyp musi pozwolić na tę interakcję. Jeśli zachowanie jest złożone, opisz istotne przejścia i przypadki brzegowe, zamiast oczekiwać, że AI samo odgadnie wszystkie reguły.

Interaktywny prototyp nadal nie zastępuje badania z użytkownikami. Samodzielne kliknięcie pomaga sprawdzić, czy prototyp realizuje zapisaną regułę. Nie mówi jeszcze, czy klienci rozumieją rozwiązanie lub go potrzebują. Materiały o testowaniu podkreślają, by rozpoczynać od pytania i obserwować działanie zamiast podpowiadać odpowiedzi.

**Praktyczna wskazówka.** Po każdej istotnej zmianie wykonaj przynajmniej jeden scenariusz i nazwij rezultat, który faktycznie zobaczyłeś. Nie uznawaj odpowiedzi AI „gotowe” za test.

**Źródła:** *„Context Engineering for Prototyping”* — „Functional context”; *„Test Complex Interactions Earlier with AI Prototyping”* — „How to Prototype Complex Interfaces with AI”; *„Testing Prototypes With Customers”* — „Start with the question, not the prototype”, „Observe more than you talk”.
