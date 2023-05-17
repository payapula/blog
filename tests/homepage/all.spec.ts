import { test, expect } from '@playwright/test';

test.describe('All Desktop Browsers', () => {
    test('Elements Visible on Page', async ({ page }) => {
        await page.goto('/');

        /**
         * Viewport
         */
        await expect(
            page.getByRole('heading', { name: "Hi, I'm Bharathi Kannan, Fullstack Web Developer" })
        ).toBeInViewport();
        await expect(
            page.getByText(
                "I'm a Tech enthusiast, who is interested in developing scalable and accessible w"
            )
        ).toBeInViewport();
        await expect(page.getByRole('link', { name: 'Download Resume' })).toBeInViewport();

        await expect(page.getByRole('button', { name: 'Toggle Dark Mode' })).not.toBeInViewport();
        await expect(page.getByRole('link', { name: 'Blog' })).toBeInViewport();
        await expect(page.getByRole('link', { name: 'Quiz' })).toBeInViewport();

        /**
         * Visible
         */
        await expect(page.getByRole('heading', { name: 'Recent Posts' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'View All' })).toBeVisible();
        await expect(
            page.getByRole('heading', { name: 'Previous Quote Favourite Quotes Next Quote' })
        ).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Technologies' })).toBeVisible();
        await expect(page.getByText('AWS Amplify')).toBeVisible();

        await expect(
            page.getByRole('heading', { name: 'Work Experience and Education' })
        ).toBeVisible();

        // Footer
        await expect(
            page.getByRole('button', { name: "Copy Bharathi Kannan's Email address" })
        ).toBeVisible();
        await expect(
            page.getByRole('link', { name: 'Open Twitter Profile of Bharathi Kannan' })
        ).toBeVisible();
        await expect(
            page.getByRole('link', { name: 'Open LinkedIn Profile of Bharathi Kannan' })
        ).toBeVisible();
        await expect(
            page.getByRole('link', { name: 'HeartOpen sourced on GithubHeart' })
        ).toBeVisible();
    });

    test('Dark Mode Testing', async ({ page }) => {
        await page.goto('/');

        const darkModeButton = page.getByRole('button', { name: 'Toggle Dark Mode' });
        await expect(darkModeButton).toBeInViewport();

        /**
         * Chakra toggles `body` element' CSS which are inherited so
         * selecting this by XPath.
         *
         * https://playwright.dev/docs/other-locators#xpath-locator
         */
        const body = page.locator('xpath=/html/body');

        const dark = 'rgb(26, 32, 44)';

        // color
        await expect(body).toHaveCSS('color', dark);
        await expect(body).toHaveCSS('background-color', 'rgb(255, 255, 255)');

        await darkModeButton.click();

        await expect(body).toHaveCSS('color', 'rgba(255, 255, 255, 0.92)');
        await expect(body).toHaveCSS('background-color', dark);
    });
});
