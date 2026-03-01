# Horsky Raj -- Semestralni Webovy Projekt

Webova stranka fiktivneho penzionu a turistickeho centra **Horsky Raj** vo Vysokych Tatrach.

## Struktura Projektu

```
/
├── index.html              # Hlavna strana
├── o-nas.html              # O nas
├── sluzby.html             # Sluzby
├── fotogaleria.html        # Fotogaleria (24 obrazkov)
├── kontakt.html            # Kontakt s formularom a mapou
├── css/
│   ├── style.css           # Custom styly (zdrojovy)
│   └── style.min.css       # Custom styly (minifikovany)
├── js/
│   ├── main.js             # Custom JavaScript (zdrojovy)
│   └── main.min.js         # Custom JavaScript (minifikovany)
├── img/                    # Obrazky (placeholder z picsum.photos)
│   └── gallery/
│       ├── thumb/          # Nahlady (300px)
│       └── full/           # Velke obrazky (1200px)
├── robots.txt              # Instrukcie pre vyhladavace
├── sitemap.xml             # Mapa stranok
├── README.md               # Tento subor
└── dokumentacia.md         # Struktura PDF dokumentacie
```

## Technologie

- HTML5 (semanticke elementy, JSON-LD schema markup)
- CSS3 (custom properties, grid, flexbox, media queries)
- Bootstrap 5.3.3 (CDN)
- jQuery 3.7.1 (CDN)
- Vanilla JavaScript (lightbox, formular, menu, filtre galerie)

## Deploy na Webhosting

1. Nahrajte vsetky subory a priecinky na vas webhosting (FTP/SFTP alebo admin panel).
2. Uistite sa, ze korenovy adresar webhostingu odpoveda korenou tohto projektu (index.html je v koreni).
3. Ak pouzivate vlastnu domenu, upravte vsetky `https://horskyraj.sk` odkazy v HTML suboroch, sitemap.xml a robots.txt na vasu skutocnu domenu.

### Nahradenie Placeholder Obrazkov

Projekt pouziva sluzbu picsum.photos pre demostraticke obrazky. Pre produkcny deploy:
1. Stiahnite skutocne fotografie penzionu a okolia.
2. Optimalizujte ich (WebP format, komprimovany JPEG).
3. Vytvorte dve velkosti: nahlad (cca 300px sirka) a plna velkost (min. 800px sirka).
4. Nahradte URL adresy v HTML suboroch cestami k lokalnym suborom.

## Google Search Console -- Postup

1. Navstivte https://search.google.com/search-console
2. Prihlaste sa Google uctom.
3. Kliknite na "Pridat nehnutelnost" (Add Property) a zadajte URL vaseho webu.
4. Overte vlastnictvo domeny (odporucame metodu HTML subor alebo DNS zaznam).
5. Po overeni prejdite do sekcie "Sitemapy" a zadajte: `https://vasa-domena.sk/sitemap.xml`
6. Odoslete sitemapu a pockajte na indexaciu (zvycajne 2-7 dni).
7. Po 10-14 dnoch skontrolujte sekciu "Vykon" pre data o vyhladavani.

## Google Analytics (GA4) -- Postup

1. Navstivte https://analytics.google.com
2. Vytvorte novy ucet a nehnutelnost pre vas web.
3. Ziskajte Measurement ID (format G-XXXXXXXXXX).
4. V KAZDOM HTML subore odkomentujte GA4 snippet v sekcii pred `</body>` (v index.html) alebo pridajte nasledovny kod do `<head>` vsetkych stranok:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
</script>
```

5. Nahradte `G-XXXXXXXXXX` vasim skutocnym Measurement ID.
6. Po 24-48 hodinach by sa mali zacat zobrazovat data v Analytics.

## SEO Klucove Slova

- penzion Vysoke Tatry
- ubytovanie Tatry
- turisticke centrum Poprad
- horsky penzion
- dovolenka Vysoke Tatry
- turistika Tatry
- wellness Tatry
- ubytovanie Poprad

## Optimalizacia Rychlosti

- Minifikovane CSS (style.min.css) a JS (main.min.js)
- Lazy loading na vsetkych obrazkoch (okrem hero)
- Explicitne width/height atributy na obrazkoch (prevencia CLS)
- Preconnect pre externe CDN zdroje
- Critical CSS inline v `<head>` na hlavnej stranke
- Bootstrap a jQuery cez CDN s HTTP/2 benefitmi

## Autor

Semestralni projekt -- 2026
