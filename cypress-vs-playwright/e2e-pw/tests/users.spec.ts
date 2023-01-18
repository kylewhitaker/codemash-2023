import { test, expect } from '@playwright/test';
import { getRandomInt } from '../support/utils';

test('Users: Admin create Registrar', async ({ page }) => {
  // Admin logs in
  await page.goto('http://localhost:3000');
  await page.locator('#email').fill('kylewhitaker51@gmail.com');
  await page.locator('#password').fill('CodeM@sh23');
  await page.locator('#submitAuth').click();

  // Go to Users page
  await expect(page).toHaveURL(/registrations/);
  await page.locator('#menu').click();
  await page.locator('#menu-users').click();

  // Click "Add new user"
  await expect(page).toHaveURL(/users/);
  await page.locator('#addUser').click();

  // Fill out form
  const id = getRandomInt(6);
  const lastName = `Registrar${id}`;
  const email = `e2etestdummy+${id}@gmail.com`;
  await page.locator('#radio-Registrar').click();
  await page.locator('#user-firstName').fill('Test');
  await page.locator('#user-lastName').fill(lastName);
  await page.locator('#user-email').fill(email);
  await page.locator('#submitUser').click();

  // Verify new Registrar user is added
  await page.locator('input[placeholder=Search]').fill(email);
  await expect(page.locator(`tbody tr td[value="Test ${lastName}"]`)).toBeVisible();
});
