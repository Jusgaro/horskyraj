# Dokumentacia Semestrálneho Projektu -- Horsky Raj

## 1. Popis a Ciele Weboveho Projektu

### 1.1 Zadanie
Cielom semestrálneho projektu bolo vytvorit webovú stránku pre fiktivny podnik -- penzion a turisticke centrum **Horsky Raj** so sidlom vo Vysokych Tatrach. Webová stránka mala splnat poziadavky na moderny, responzivny a SEO-optimalizovany web s minimalnou technickou specifikaciou (5 HTML stránok, CSS framework + custom CSS, jQuery + custom JS, fotogaléria, robots.txt, sitemap.xml).

### 1.2 Cielova Skupina
Hlavnou cielovou skupinou su domaci a zahraniční turisti hladajuci ubytovanie vo Vysokych Tatrach, rodiny s detmi, pary a firemni klienti pre teambuildingy.

### 1.3 Pouzite Technologie
- HTML5 so semantickymi elementmi (main, article, section, nav, aside, header, footer)
- CSS3 s custom properties, grid layoutom, flexboxom a media queries
- Bootstrap 5.3.3 ako CSS framework (CDN)
- jQuery 3.7.1 (CDN) pre galeriovne filtre a animacie
- Vanilla JavaScript pre lightbox, formular, navigaciu a lazy loading
- JSON-LD strukturovane data (Organization/LodgingBusiness schema)
- Open Graph meta tagy

---

## 2. Strucny Popis Webovych Stránok

### URL Adresa
**https://horskyraj.sk** (alebo skutocna domena po nasadeni)

### Prehled Stránok

| Subor | Nazov | Popis |
|-------|-------|-------|
| index.html | Domov | Hlavna strana s uvitacim textom, 5 obrazkami, CTA elementmi |
| o-nas.html | O nas | Pribeh firmy, hodnoty, tym (250+ slov) |
| sluzby.html | Sluzby | Detailny popis 5 sluzieb s popismi |
| fotogaleria.html | Fotogaleria | 24 obrazkov v dvoch velkostiach s lightboxom a filtrami |
| kontakt.html | Kontakt | Kontaktny formular, Google Maps embed, kontaktne udaje |

---

## 3. Postup Optimalizacie

### 3.1 Minifikacia CSS a JS
Zdrojove subory (style.css, main.js) boli minifikovane pomocou nastrojov csscompressor a jsmin do suborov style.min.css a main.min.js. Vysledky:
- style.css: 14 174 B -> style.min.css: 9 754 B (uspora 31 %)
- main.js: 9 936 B -> main.min.js: 6 145 B (uspora 38 %)

### 3.2 Lazy Loading
Vsetky obrazky okrem hero sekcie (above-the-fold) maju atribut `loading="lazy"`. Ako fallback pre starsie prehliadace je implementovany IntersectionObserver v main.js.

### 3.3 Critical CSS
Na hlavnej strane (index.html) je kriticke CSS pre above-the-fold obsah (header, hero, navigacia) vlozene inline v tagu `<style>` v `<head>`, co eliminuje render-blocking pre prvy vizuálny obsah.

### 3.4 Prevencia CLS (Cumulative Layout Shift)
Vsetky `<img>` elementy maju explicitne `width` a `height` atributy, co prehliadacu umoznuje vyhradit priestor este pred nacitanim obrazka.

### 3.5 Preconnect
Pre externe zdroje (Bootstrap CDN, Google Fonts) su pouzite `<link rel="preconnect">` tagy, ktore urychlia nadviazanie spojenia.

---

## 4. Vysledky PageSpeed Insights

### 4.1 Pred Optimalizaciou

[PLACEHOLDER: Sem vlozit screenshot PageSpeed Insights PRED optimalizaciou]

- Performance: ___
- Accessibility: ___
- Best Practices: ___
- SEO: ___
- FCP: ___s

### 4.2 Po Optimalizacii

[PLACEHOLDER: Sem vlozit screenshot PageSpeed Insights PO optimalizacii]

- Performance: ___
- Accessibility: ___
- Best Practices: ___
- SEO: ___
- FCP: ___s

### 4.3 Porovnanie
Hlavne zlepsenia po optimalizacii:
- [PLACEHOLDER: Popis zlepseni FCP, LCP, CLS]

---

## 5. Postup Propojenia s Google Search Console

### Krok 1: Registracia
Navstivte https://search.google.com/search-console a prihlaste sa Google uctom.

[PLACEHOLDER: Screenshot prihlasenia do GSC]

### Krok 2: Pridanie Nehnutelnosti
Kliknite na "Pridat nehnutelnost" a zadajte URL webu.

[PLACEHOLDER: Screenshot pridania URL]

### Krok 3: Overenie Vlastnictva
Vybrali sme metodu overenia cez HTML subor / DNS zaznam.

[PLACEHOLDER: Screenshot overenia]

### Krok 4: Odoslanie Sitemap
V sekcii "Sitemapy" zadajte `https://horskyraj.sk/sitemap.xml` a odosli te.

[PLACEHOLDER: Screenshot odoslania sitemapy]

### Krok 5: Potvrdenie Indexacie
Po odoslani sitemapy GSC zobrazi stav spracovania.

[PLACEHOLDER: Screenshot potvrdenia]

---

## 6. Postup Propojenia s Google Analytics (GA4)

### Krok 1: Vytvorenie Uctu
Navstivte https://analytics.google.com a vytvorte novy ucet.

[PLACEHOLDER: Screenshot vytvorenia uctu]

### Krok 2: Vytvorenie Nehnutelnosti
Zadajte nazov webu, casove pasmo a menu.

[PLACEHOLDER: Screenshot konfiguracie]

### Krok 3: Ziskanie Measurement ID
Skopirujte Measurement ID (G-XXXXXXXXXX).

[PLACEHOLDER: Screenshot Measurement ID]

### Krok 4: Implementacia Tracking Kodu
Vlozenie GA4 snippetu do `<head>` vsetkych HTML stránok.

[PLACEHOLDER: Screenshot kodu v HTML]

### Krok 5: Overenie Funkčnosti
Otvorte web a skontrolujte v GA4 Real-Time sekciu, ci sa zaznamenavaju navstevy.

[PLACEHOLDER: Screenshot real-time dat]

---

## 7. Vysledky Indexacie a Vyhladavania (po 10-14 Dnoch)

### 7.1 Stav Indexacie v GSC

[PLACEHOLDER: Screenshot pokrytia stranok v GSC po 10-14 dnoch]

- Pocet indexovanych stranok: ___
- Chyby indexacie: ___

### 7.2 Vyhladavanie Klucovych Slov

Testovane klucove slova:
- "penzion Vysoke Tatry"
- "ubytovanie Tatry"
- "turisticke centrum Poprad"
- "horsky penzion"
- "dovolenka Vysoke Tatry"

[PLACEHOLDER: Screenshot vysledkov vyhladavania v Google pre jednotlive klucove slova]

### 7.3 Vykon v Google Search Console

[PLACEHOLDER: Screenshot sekcie Vykon (Performance) v GSC]

- Celkovy pocet zobrazeni: ___
- Celkovy pocet kliknuti: ___
- Priemerna pozicia: ___

---

## 8. Záver

Projekt splna vsetky poziadavky semestrálneho zadania. Webová stránka je responzivna, SEO-optimalizovana, obsahuje 5 prepojenych HTML stránok, fotogaleriu s 24 obrazkami, minifikovane CSS a JS subory, robots.txt, sitemap.xml a je pripravena na integraciu s Google Search Console a Google Analytics.

---

*Autor: [Meno Studenta]*
*Datum: Marec 2026*
