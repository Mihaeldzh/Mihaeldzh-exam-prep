const { test, expect } = require('@playwright/test');

test('Check header', async ({ page }) => {
    await page.goto('http://localhost:8090'); 
    const homeLink = await page.$('body > h1');
    const text = await homeLink.textContent();
    expect(text).toBe('My Grades');
  });
  