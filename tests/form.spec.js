const { test, expect } = require('@playwright/test');

// End-to-end-tester för offertformuläret. Alla nätverksanrop till
// formsubmit.co mockas så testerna är snabba, deterministiska och offline.

const FORMSUBMIT = 'https://formsubmit.co/**';

async function fillValidForm(page) {
  await page.fill('#namn', 'Anna Andersson');
  await page.fill('#epost', 'anna@exempel.se');
  await page.fill('#tel', '070-123 45 67');
  await page.fill('#meddelande', 'Jag vill ha en offert på laddbox.');
}

test.beforeEach(async ({ page }) => {
  await page.goto('/index.html');
});

test('tomt formulär blockeras av validering och gör inget nätverksanrop', async ({ page }) => {
  let called = false;
  await page.route(FORMSUBMIT, (route) => {
    called = true;
    return route.fulfill({ json: { success: true } });
  });

  await page.click('#offertSubmit');

  // Native HTML5-validering ska stoppa inskicket.
  const namnValid = await page.$eval('#namn', (el) => el.checkValidity());
  expect(namnValid).toBe(false);
  expect(called).toBe(false);
});

test('ogiltig e-post blockeras', async ({ page }) => {
  await page.fill('#namn', 'Anna');
  await page.fill('#epost', 'inte-en-epost');
  await page.fill('#tel', '070');
  await page.fill('#meddelande', 'Hej');
  const emailValid = await page.$eval('#epost', (el) => el.checkValidity());
  expect(emailValid).toBe(false);
});

test('giltigt inskick postar rätt payload till formsubmit.co', async ({ page }) => {
  let body = null;
  await page.route(FORMSUBMIT, (route) => {
    body = route.request().postDataJSON();
    return route.fulfill({ json: { success: true } });
  });

  await fillValidForm(page);
  await page.click('#offertSubmit');

  await expect(page.locator('#formStatus')).toContainText('Tack!');
  expect(body).toMatchObject({
    namn: 'Anna Andersson',
    epost: 'anna@exempel.se',
    telefon: '070-123 45 67',
    meddelande: 'Jag vill ha en offert på laddbox.',
    foretag: '(ej angivet)',
    _template: 'table',
    _captcha: 'false',
  });
  expect(body._subject).toContain('Anna Andersson');
});

test('lyckat svar visar bekräftelse och nollställer formuläret', async ({ page }) => {
  await page.route(FORMSUBMIT, (route) => route.fulfill({ json: { success: true } }));

  await fillValidForm(page);
  await page.click('#offertSubmit');

  await expect(page.locator('#offertSubmit')).toContainText('Skickat');
  await expect(page.locator('#formStatus')).toContainText('Tack!');
  await expect(page.locator('#namn')).toHaveValue('');
});

test('nätverksfel visar fallback med telefon och e-post', async ({ page }) => {
  await page.route(FORMSUBMIT, (route) => route.abort());

  await fillValidForm(page);
  await page.click('#offertSubmit');

  const status = page.locator('#formStatus');
  await expect(status).toContainText('Kunde inte skicka');
  await expect(status.locator('a[href^="tel:"]')).toBeVisible();
  // Knappen ska återaktiveras så användaren kan försöka igen.
  await expect(page.locator('#offertSubmit')).toBeEnabled();
});

test('ifylld honeypot avbryter tyst utan nätverksanrop', async ({ page }) => {
  let called = false;
  await page.route(FORMSUBMIT, (route) => {
    called = true;
    return route.fulfill({ json: { success: true } });
  });

  await fillValidForm(page);
  // Boten fyller i det dolda _gotcha-fältet.
  await page.$eval('input[name="_gotcha"]', (el) => (el.value = 'jag-ar-en-bot'));
  await page.click('#offertSubmit');

  // Ge en eventuell fetch en chans att avfyras.
  await page.waitForTimeout(300);
  expect(called).toBe(false);
  // Ingen framgångstext ska visas.
  await expect(page.locator('#formStatus')).not.toContainText('Tack!');
});
