import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://white-moss-0f02f341e.2.azurestaticapps.net/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Cargo Manifest/);
});

test('has button', async ({ page }) => {
    await page.goto('https://white-moss-0f02f341e.2.azurestaticapps.net/');
  
    // Expect a title "to contain" a substring.
    const viewButton = await page.$$('button.search-button');
    await expect(viewButton).toBeTruthy();
  });

  test('has search fields', async ({ page }) => {
    await page.goto('https://white-moss-0f02f341e.2.azurestaticapps.net/');
  
    // Expect a title "to contain" a substring.
    const viewButton = await page.$$('.search-field');
    await expect(viewButton).toBeTruthy();
  });