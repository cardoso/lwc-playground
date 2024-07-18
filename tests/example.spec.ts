import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('LWC playground');
});


test('lightning-button functionality', async ({ page }) => {
  // Navigate to the page containing the lightning-button
  await page.goto('/');

  // Locate the lightning-button
  const button = page.locator('lightning-button');

  // Check if the button is visible
  await expect(button).toBeVisible();

  // Check the button's label
  await expect(button).toHaveText('Click me');
});