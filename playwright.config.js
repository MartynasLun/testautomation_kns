// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  use: {
    screenshot: 'on',
    headless: false,
        viewport: { width: 1680, height: 920 },
            launchOptions: {
            slowMo: 150,
        },
  },
};

module.exports = config;