```javascript
const { expect } = require('chai');

describe('SauceDemo Login Page', () => {
    // URL of the application under test
    const BASE_URL = 'https://www.saucedemo.com/v1/';

    it('should load the login page successfully', async () => {
        // Step 1: Navigate to the SauceDemo login page
        await browser.url(BASE_URL);

        // Assert that the login form is displayed
        const loginForm = await $('#login_button_container');
        await expect(await loginForm.isDisplayed()).to.be.true;

        // Assert page title
        const title = await browser.getTitle();
        await expect(title).to.equal('Swag Labs');

        // Assert presence of username and password fields
        const usernameInput = await $('#user-name');
        const passwordInput = await $('#password');
        await expect(await usernameInput.isDisplayed()).to.be.true;
        await expect(await passwordInput.isDisplayed()).to.be.true;

        // Assert presence of login button
        const loginButton = await $('#login-button');
        await expect(await loginButton.isDisplayed()).to.be.true;
    });
});
```