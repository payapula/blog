import { Locator, Page, expect } from '@playwright/test';

export async function testVisible(locator: Locator) {
    await expect(locator).toBeVisible();
}

export async function assertCorrectAnswer(page: Page) {
    await testVisible(page.getByText('🎉 Correct 🎉'));
}

export async function assertIncorrectAnswer(page: Page) {
    await testVisible(page.getByText('❌ Incorrect ❌'));
}
