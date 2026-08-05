# LNP Elservice

Statisk landningssida (en enda `index.html`) för LNP Elservice – certifierad
elektriker i Stockholm och Nynäshamn.

## Tester

Sidan testas med [Playwright](https://playwright.dev/). Testerna serverar
`index.html` lokalt och kör mot en riktig webbläsare – alla externa nätverksanrop
(t.ex. till `formsubmit.co`) mockas så att sviten är snabb och fungerar offline.

```bash
npm install      # installerar @playwright/test
npm test         # kör hela testsviten
npm run test:report   # öppnar HTML-rapporten efter en körning
```

### Vad som täcks

| Fil | Täcker |
| --- | --- |
| `tests/smoke.spec.js` | Sidladdning, titel/språk, viktiga sektioner, SEO-metatagg, döda ankarlänkar, telefonlänk |
| `tests/nav.spec.js` | Mobilmenyns öppna/stäng-beteende |
| `tests/form.spec.js` | Offertformuläret: validering, korrekt payload, framgångs-/fel-UI, honeypot-spamfälla |
| `tests/unit.spec.js` | Rena funktioner `buildPayload` och `isSuccess` (exponerade via `window.LNP`) |

Formulärlogiken i `index.html` är uppdelad i rena, testbara funktioner
(`buildPayload`, `isSuccess`) som både körningskoden och enhetstesterna använder.
