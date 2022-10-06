const { test, expect } = require("@playwright/test");

// run tests in headful mode so you can see the browser
test.use({ headless: false, slowMo: 1000 });

test("my first test", async ({ page }) => {
  // go to Netflix.com
  await page.goto("https://www.netflix.com");

  // assert page title appears
  await expect(page.locator('[data-uia="hero-title"]')).toHaveText(
    "Unlimited movies, TV shows, and more."
  );
});

// ADD YOUR TESTS HERE!
test("Verify Netflix does not allow login with an invalid email/password", async ({ page }) => {
  await page.goto("https://www.netflix.com/login");
  await page.locator('[data-uia="login-field"]').fill("username");
  await page.locator('[data-uia="password-field"]').fill("password");
  await page.click('[data-uia="login-submit-button"]');
  await expect(page.locator('[data-uia="text"]')).toHaveText(
    "Sorry, we can't find an account with this email address. Please try again or create a new account."
  );
});
