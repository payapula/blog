import { defineConfig, devices } from '@playwright/test';
import siteConfig from 'configs/site-configs';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

const IS_DEV_MODE = false;

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    testDir: './tests',
    expect: {
        /**
         * Adding a slightly less strict assertion to make sure that the screenshot matches
         * https://github.com/basarat/demo-playwright-vrt/blob/main/playwright.config.ts
         */
        toHaveScreenshot: { threshold: 0.2, maxDiffPixelRatio: 0.2 },
        timeout: 10000
    },
    /* Run tests in files in parallel */
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: process.env.CI ? 'github' : IS_DEV_MODE ? 'html' : 'list',
    ...(process.env.CI || IS_DEV_MODE
        ? {
              webServer: {
                  command: 'npm run build && npm run start',
                  port: 3001
              }
          }
        : {}),
    use: {
        // headless: false,
        baseURL:
            IS_DEV_MODE || process.env.CI ? 'http://localhost:3001/' : siteConfig.general.siteUrl,
        // baseURL: 'http://localhost:3001/',
        // baseURL: siteConfig.general.siteUrl,
        trace: IS_DEV_MODE ? 'on' : 'on-first-retry'
    },

    /* Configure projects for major browsers */
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
            testIgnore: /mobile.*(test|spec)\.(js|ts|mjs)/
        },

        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
            testIgnore: /(mobile|chrome).*(test|spec)\.(js|ts|mjs)/
        },

        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
            testIgnore: /(mobile|chrome).*(test|spec)\.(js|ts|mjs)/
        },

        /* Test against mobile viewports. */
        {
            name: 'Mobile Chrome',
            use: { ...devices['Pixel 5'] },
            testMatch: /mobile.*(test|spec)\.(js|ts|mjs)/
        },
        {
            name: 'Mobile Safari',
            use: { ...devices['iPhone 12'] },
            testMatch: /mobile.*(test|spec)\.(js|ts|mjs)/
        }
    ]
});
