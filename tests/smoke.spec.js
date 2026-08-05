const { test, expect } = require('@playwright/test');

// Grundläggande hälsokontroll av den statiska sidan.

test('sidan laddar med rätt titel och språk', async ({ page }) => {
  await page.goto('/index.html');
  await expect(page).toHaveTitle(/LNP Elservice/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'sv');
});

test('viktiga sektioner finns', async ({ page }) => {
  await page.goto('/index.html');
  for (const id of ['tjanster', 'om', 'sahar', 'kontakt']) {
    await expect(page.locator(`#${id}`)).toHaveCount(1);
  }
});

test('SEO-metataggar finns', async ({ page }) => {
  await page.goto('/index.html');
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    'content',
    /.{50,}/
  );
});

test('alla interna ankarlänkar pekar på befintliga element', async ({ page }) => {
  await page.goto('/index.html');
  // Utför uppslaget i webbläsaren där document.getElementById finns.
  const broken = await page.evaluate(() => {
    const hrefs = Array.from(document.querySelectorAll('a[href^="#"]'))
      .map((a) => a.getAttribute('href'))
      .filter((h) => h && h.length > 1);
    const unique = [...new Set(hrefs)];
    return {
      count: unique.length,
      missing: unique.filter((h) => !document.getElementById(h.slice(1))),
    };
  });
  expect(broken.count).toBeGreaterThan(0);
  expect(broken.missing, `döda ankare: ${broken.missing.join(', ')}`).toEqual([]);
});

test('telefonlänk finns', async ({ page }) => {
  await page.goto('/index.html');
  await expect(page.locator('a[href^="tel:"]').first()).toBeVisible();
});
