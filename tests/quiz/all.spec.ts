import { test, expect, Page } from '@playwright/test';
import { assertCorrectAnswer, assertIncorrectAnswer, testVisible } from 'tests/utils/helpers';

async function moveToNextPage(page: Page) {
    await page.getByRole('button', { name: 'Next' }).click();
}

test('Quiz Page Navigation Tests', async ({ page }) => {
    await page.goto('/quiz');

    /**
     * View port
     */
    await expect(page.getByRole('button', { name: 'Toggle Dark Mode' })).toBeInViewport();
    await expect(page.getByRole('link', { name: 'Blog' })).toBeInViewport();
    await expect(page.getByRole('link', { name: 'Quiz', exact: true })).toBeInViewport();

    // Opening a Quiz
    await page.getByRole('link').filter({ hasText: 'React is Just Javascript Quiz' }).click();

    // First question
    await expect(page.getByRole('button', { name: 'Submit' })).toBeDisabled();
    await page.locator('label').filter({ hasText: 'Hello React' }).click();
    await expect(page.getByRole('button', { name: 'Submit' })).toBeEnabled();
    await page.getByRole('button', { name: 'Submit' }).click();
    await assertIncorrectAnswer(page);
    await testVisible(page.getByText('There are no magic here.'));
    await moveToNextPage(page);

    await page.locator('label').filter({ hasText: '<div>Hello World</div>' }).click();
    await page.getByRole('button', { name: 'Submit' }).click();
    await assertCorrectAnswer(page);
    await moveToNextPage(page);

    await page
        .locator('label')
        .filter({ hasText: 'React.createElement("h1", null, "Hello World")' })
        .click();
    await page.getByRole('button', { name: 'Submit' }).click();
    await assertCorrectAnswer(page);
    await moveToNextPage(page);

    await page
        .locator('label')
        .filter({ hasText: /^Valid$/ })
        .click();
    await page.getByRole('button', { name: 'Submit' }).click();
    await assertCorrectAnswer(page);
    await moveToNextPage(page);

    await page
        .locator('label')
        .filter({ hasText: /^Valid$/ })
        .click();
    await page.getByRole('button', { name: 'Submit' }).click();
    await assertCorrectAnswer(page);
    await moveToNextPage(page);

    await page
        .locator('label')
        .filter({ hasText: /^Valid$/ })
        .click();
    await page.getByRole('button', { name: 'Submit' }).click();
    await assertIncorrectAnswer(page);

    await page.getByRole('button', { name: 'Show Results' }).click();
    await testVisible(page.getByText('Quiz Results'));
    await testVisible(page.getByRole('cell', { name: '67 %' }));

    await page.getByRole('button', { name: 'Report a correction or Provide feedback' }).click();
    await testVisible(page.getByText('I promise to respond as early as I can 😄'));

    await page.getByRole('button', { name: 'Restart Quiz' }).click();
    await testVisible(page.getByText('Question 1 of 6'));
    await page.locator('label').filter({ hasText: 'undefined' }).click();
    await page.getByRole('button', { name: 'Submit' }).click();
    await assertIncorrectAnswer(page);
});
