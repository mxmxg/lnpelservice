const { test, expect } = require('@playwright/test');

// Enhetstester för de rena funktionerna (window.LNP) som index.html exponerar.
// Körs i webbläsaren via page.evaluate så vi testar exakt den kod som skeppas.

test.beforeEach(async ({ page }) => {
  await page.goto('/index.html');
});

test.describe('buildPayload', () => {
  test('trimmar alla fält', async ({ page }) => {
    const payload = await page.evaluate(() =>
      window.LNP.buildPayload({
        namn: '  Anna Andersson  ',
        foretag: '  Acme AB ',
        epost: ' anna@exempel.se ',
        telefon: ' 070-123 45 67 ',
        meddelande: '  Behöver en laddbox.  ',
      })
    );
    expect(payload.namn).toBe('Anna Andersson');
    expect(payload.foretag).toBe('Acme AB');
    expect(payload.epost).toBe('anna@exempel.se');
    expect(payload.telefon).toBe('070-123 45 67');
    expect(payload.meddelande).toBe('Behöver en laddbox.');
  });

  test('sätter standardvärde för tomt företag', async ({ page }) => {
    const payload = await page.evaluate(() =>
      window.LNP.buildPayload({ namn: 'Bo', foretag: '   ' })
    );
    expect(payload.foretag).toBe('(ej angivet)');
  });

  test('bygger ämnesrad från namnet', async ({ page }) => {
    const payload = await page.evaluate(() =>
      window.LNP.buildPayload({ namn: '  Cecilia  ' })
    );
    expect(payload._subject).toBe('Ny förfrågan från hemsidan – Cecilia');
  });

  test('sätter formsubmit-metafält', async ({ page }) => {
    const payload = await page.evaluate(() => window.LNP.buildPayload({ namn: 'X' }));
    expect(payload._template).toBe('table');
    expect(payload._captcha).toBe('false');
  });

  test('kraschar inte på saknade fält', async ({ page }) => {
    const payload = await page.evaluate(() => window.LNP.buildPayload({}));
    expect(payload.namn).toBe('');
    expect(payload.epost).toBe('');
    expect(payload.foretag).toBe('(ej angivet)');
  });
});

test.describe('isSuccess', () => {
  test('true för boolean true', async ({ page }) => {
    expect(await page.evaluate(() => window.LNP.isSuccess({ success: true }))).toBe(true);
  });

  test('true för strängen "true"', async ({ page }) => {
    expect(await page.evaluate(() => window.LNP.isSuccess({ success: 'true' }))).toBe(true);
  });

  test('false för falskt/saknat svar', async ({ page }) => {
    expect(await page.evaluate(() => window.LNP.isSuccess({ success: false }))).toBe(false);
    expect(await page.evaluate(() => window.LNP.isSuccess({}))).toBe(false);
    expect(await page.evaluate(() => window.LNP.isSuccess(null))).toBe(false);
    expect(await page.evaluate(() => window.LNP.isSuccess({ success: 'false' }))).toBe(false);
  });
});
