// @ts-check
const { defineConfig, devices } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

// Miljön har redan en förinstallerad Chromium under PLAYWRIGHT_BROWSERS_PATH.
// Vi pekar Playwright direkt på binären så vi slipper ladda ner en ny.
function resolveChromium() {
  const root = process.env.PLAYWRIGHT_BROWSERS_PATH || '/opt/pw-browsers';
  try {
    const dir = fs.readdirSync(root).find((d) => d.startsWith('chromium-'));
    if (dir) {
      const bin = path.join(root, dir, 'chrome-linux', 'chrome');
      if (fs.existsSync(bin)) return bin;
    }
  } catch (_) {
    /* faller tillbaka på Playwrights standardupplösning */
  }
  return undefined;
}

const executablePath = resolveChromium();

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : [['list']],
  use: {
    baseURL: 'http://127.0.0.1:4173',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        ...(executablePath ? { launchOptions: { executablePath } } : {}),
      },
    },
  ],
  // Servera den statiska sidan lokalt under testkörningen.
  webServer: {
    command: 'python3 -m http.server 4173 --bind 127.0.0.1',
    url: 'http://127.0.0.1:4173',
    reuseExistingServer: !process.env.CI,
    timeout: 30 * 1000,
  },
});
