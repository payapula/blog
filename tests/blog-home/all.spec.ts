import { test, expect } from '@playwright/test';

const TOTAL_BLOG_POSTS = 10;

test.describe('All Desktop Browsers', () => {
    test('Elements Visible on Page', async ({ page }) => {
        await page.goto('/blog');

        /**
         * Viewport
         */
        await expect(page.getByRole('button', { name: 'Toggle Dark Mode' })).toBeInViewport();
        await expect(page.getByRole('link', { name: 'Blog' })).toBeInViewport();
        await expect(page.getByRole('link', { name: 'Quiz' })).toBeInViewport();

        /**
         * Content Area
         */
        await expect(page.getByRole('heading', { name: 'Posts' })).toBeInViewport();
        await expect(page.getByPlaceholder('Search Posts')).toBeInViewport();

        /**
         * Number of blog posts
         *
         * Filter: https://playwright.dev/docs/locators#filter-by-childdescendant
         * API: https://playwright.dev/docs/api/class-locator#locator-filter
         */
        expect(page.getByRole('link').filter({ has: page.getByRole('heading') })).toHaveCount(
            TOTAL_BLOG_POSTS
        );

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

    test('Search Functionality', async ({ page }) => {
        test.slow();
        await page.goto('/blog');
        await page.getByPlaceholder('Search Posts').click();
        await page.getByPlaceholder('Search Posts').fill('just');
        await expect(
            page.getByRole('link').filter({ hasText: 'React is Just Javascript' })
        ).toBeInViewport();
        await expect(page.getByRole('link').filter({ has: page.getByRole('heading') })).toHaveCount(
            1
        );
        await page.getByPlaceholder('Search Posts').fill('');
        await expect(page.getByRole('link').filter({ has: page.getByRole('heading') })).toHaveCount(
            TOTAL_BLOG_POSTS
        );

        await page.getByPlaceholder('Search Posts').fill('posi');
        await expect(page.getByRole('link').filter({ has: page.getByRole('heading') })).toHaveCount(
            2
        );

        await page.getByPlaceholder('Search Posts').fill('');
        await expect(page.getByRole('link').filter({ has: page.getByRole('heading') })).toHaveCount(
            TOTAL_BLOG_POSTS
        );

        await page.getByPlaceholder('Search Posts').fill('posi');
        await expect(page.getByRole('link').filter({ has: page.getByRole('heading') })).toHaveCount(
            2
        );
        await page.getByRole('button', { name: 'Clear Search' }).click();
        await expect(page.getByRole('link').filter({ has: page.getByRole('heading') })).toHaveCount(
            TOTAL_BLOG_POSTS
        );

        /**
         * Invalid Search or Post not found case
         */
        await page.getByPlaceholder('Search Posts').fill('OOOOOOOOOO');
        await expect(page.getByRole('link').filter({ has: page.getByRole('heading') })).toHaveCount(
            TOTAL_BLOG_POSTS
        );
        await expect(
            page.getByText('🤷🏾‍♂️ No posts available with this search. Showing all posts... 🛠')
        ).toBeInViewport();

        // Clearning search via button do not show the error message
        await page.getByRole('button', { name: 'Clear Search' }).click();
        await expect(
            page.getByText('🤷🏾‍♂️ No posts available with this search. Showing all posts... 🛠')
        ).not.toBeInViewport();

        /**
         * Invalid Search or Post not found case
         */
        await page.getByPlaceholder('Search Posts').fill('OOOOOOOOOO');
        await expect(page.getByRole('link').filter({ has: page.getByRole('heading') })).toHaveCount(
            TOTAL_BLOG_POSTS
        );
        await expect(
            page.getByText('🤷🏾‍♂️ No posts available with this search. Showing all posts... 🛠')
        ).toBeInViewport();

        // Clearning search by user deleting the input do not show the error message
        await page.getByPlaceholder('Search Posts').fill('');
        await expect(
            page.getByText('🤷🏾‍♂️ No posts available with this search. Showing all posts... 🛠')
        ).not.toBeInViewport();
        await expect(page.getByRole('link').filter({ has: page.getByRole('heading') })).toHaveCount(
            TOTAL_BLOG_POSTS
        );
    });

    test('Dark Mode Testing', async ({ page }) => {
        await page.goto('/blog');

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

        await expect(body).toHaveCSS('color', 'rgb(255, 255, 255)');
        await expect(body).toHaveCSS('background-color', dark);
    });
});
