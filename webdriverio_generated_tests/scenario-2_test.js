```javascript
describe('SauceDemo Login Page', () => {
    it('should open the SauceDemo login page', async () => {
        // Navigate to the SauceDemo login page
        await browser.url('https://www.saucedemo.com/v1/');

        // Verify the URL is correct
        await expect(browser).toHaveUrl('https://www.saucedemo.com/v1/');

        // Verify the login button is displayed
        const loginButton = await $('#login-button');
        await expect(loginButton).toBeDisplayed();
    });
});
```