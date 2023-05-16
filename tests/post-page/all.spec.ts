import { test, expect, Locator } from '@playwright/test';

test.describe('All Desktop Browsers', () => {
    async function testVisible(locator: Locator) {
        await expect(locator).toBeVisible();
    }

    test('Elements Visible on Page', async ({ page }) => {
        await page.goto('/blog/react-useeffect-flow');

        /**
         * Viewport
         */
        await expect(page.getByRole('button', { name: 'Toggle Dark Mode' })).toBeInViewport();
        await expect(page.getByRole('link', { name: 'Blog' })).toBeInViewport();
        await expect(page.getByRole('link', { name: 'Quiz' })).toBeInViewport();

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

    test('Markdown content', async ({ page }) => {
        await page.goto('/blog/react-useeffect-flow');

        /**
         * Header
         */
        await testVisible(page.getByRole('heading', { name: 'React useEffect Hook Flow' }));
        await testVisible(page.getByRole('img', { name: 'Waterfall' }));
        await testVisible(page.getByText('Photo ByJames Morden'));

        /**
         * Content
         */
        // Inline code
        await testVisible(page.getByRole('code').filter({ hasText: 'useEffect' }));
        // blockquote
        await testVisible(
            page.getByRole('blockquote').filter({
                hasText:
                    'If you are curious to know why the hooks are designed in this way, take a look a'
            })
        );

        /**
         * Images
         */
        await testVisible(page.getByRole('img', { name: 'Clean up function in useEffect' }));
        await testVisible(page.getByRole('img', { name: 'Multiple Return' }));
        await testVisible(page.getByRole('img', { name: 'Flow of Hooks', exact: true }));
        await testVisible(page.getByRole('img', { name: 'Flow of Hooks by donavon' }));

        /**
         * References/Thanks
         */
        await testVisible(page.getByRole('link', { name: 'Epic React by Kent.C.Dodds' }));
        await testVisible(
            page.getByRole('link', { name: 'A Complete Guide to useEffect by Dan Abramov' })
        );

        /**
         * External links
         */
        await testVisible(page.getByText("Let's Discuss On TwitterTwitter"));
        await testVisible(page.getByText('GitHubEdit this Post On GitHub'));
    });

    test('Screenshot Testing', async ({ page }) => {
        await page.goto('/blog/react-useeffect-flow');
        await expect(page).toHaveScreenshot('blog-page.png', { fullPage: true });
    });

    test('Dark Mode Testing', async ({ page }) => {
        await page.goto('/blog/react-useeffect-flow');

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
