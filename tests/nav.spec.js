const { test, expect } = require('@playwright/test');

// Mobilmenyn syns först under 900px (se @media i index.html).
test.use({ viewport: { width: 390, height: 844 } });

test('menyknappen visas på mobil', async ({ page }) => {
  await page.goto('/index.html');
  await expect(page.locator('#menuBtn')).toBeVisible();
  // Menylistan är dold tills navet öppnas.
  await expect(page.locator('#nav ul').first()).toBeHidden();
});

test('menyknappen öppnar och stänger navigationen', async ({ page }) => {
  await page.goto('/index.html');
  const nav = page.locator('#nav');
  await page.locator('#menuBtn').click();
  await expect(nav).toHaveClass(/open/);
  await expect(page.locator('#nav ul').first()).toBeVisible();

  await page.locator('#menuBtn').click();
  await expect(nav).not.toHaveClass(/open/);
});

test('att klicka på en menylänk stänger menyn', async ({ page }) => {
  await page.goto('/index.html');
  const nav = page.locator('#nav');
  await page.locator('#menuBtn').click();
  await expect(nav).toHaveClass(/open/);

  await page.locator('#nav ul a', { hasText: 'Tjänster' }).click();
  await expect(nav).not.toHaveClass(/open/);
});
