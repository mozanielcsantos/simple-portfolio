const { defineConfig } = require('@playwright/test');

const webServerCommand =
  process.platform === 'win32'
    ? 'npx serve . -l 3000'
    : 'python3 -m http.server 3000';

module.exports = defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'http://127.0.0.1:3000',
    headless: true
  },
  webServer: {
    command: webServerCommand,
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: true
  }
});