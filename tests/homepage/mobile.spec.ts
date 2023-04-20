import { test, expect } from '@playwright/test';

test.describe('Mobile Browsers Only', () => {
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

        await expect(page.getByRole('button', { name: 'Toggle Dark Mode' })).toBeInViewport();

        /**
         * Menu is collapsed in Mobile devices and appears
         * when clicking Menu button
         */
        await expect(page.getByRole('link', { name: 'Blog' })).not.toBeInViewport();
        await expect(page.getByRole('link', { name: 'Quiz' })).not.toBeInViewport();

        await page.getByRole('button', { name: 'Menu Button' }).click();

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

        /**
         * Checking either one of the icons is visible
         *
         * Reason:
         * On ios, we are showing a link to open email client
         * On android, we are showing a button to copy email
         */
        const androidMailIcon = page.getByRole('button', {
            name: "Copy Bharathi Kannan's Email address"
        });
        const iOSMailIcon = page.getByRole('link', { name: 'Send Email to Bharathi Kannan' });

        const androidIcon = (await androidMailIcon.count()) > 0;
        const iosIcon = (await iOSMailIcon.count()) > 0;

        expect(!!androidIcon || !!iosIcon).toBeTruthy();
        expect(!!androidIcon && !!iosIcon).toBeFalsy();

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
});
