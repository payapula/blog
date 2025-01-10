import { test, expect } from '@playwright/test';

const checkIfElementVisible = async (element) => await expect(element).toBeVisible();

test.describe('Chrome Desktop Only', () => {
    test.use({
        viewport: { width: 1200, height: 900 }
    });
    test('Timeline component loads after user scrolls down', async ({ page }) => {
        await page.goto('/');

        await expect(
            page.getByRole('heading', { name: 'Work Experience and Education' })
        ).toBeVisible();

        // Ensure the experience cards are not yet visible
        await expect(
            page.getByRole('heading', { name: 'Lead Experience Engineer' })
        ).not.toBeVisible();

        // Scroll down to kick in Experience Cards
        await page.mouse.wheel(0, 3000);

        const firstSetOfExperience = [
            page.getByRole('heading', { name: 'Lead Experience Engineer' }),
            page.getByRole('heading', { name: 'Software Engineer' }),
            page.getByRole('heading', { name: 'Technical Lead IV' })
        ];

        for (const title of firstSetOfExperience) {
            await checkIfElementVisible(title);
        }

        // Scroll down to kick in Experience Cards
        await page.mouse.wheel(0, 4000);

        const nextSetOfExperience = [
            page.getByRole('heading', { name: 'Software Development Senior Analyst' }),
            page.getByRole('heading', { name: 'Programmer Analyst' }),
            page.getByRole('heading', { name: 'B.E Computer Science and Engineering' })
        ];

        for (const title of nextSetOfExperience) {
            await checkIfElementVisible(title);
        }
    });
});
