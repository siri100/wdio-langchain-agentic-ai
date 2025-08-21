```javascript
const { expect } = require('chai');

describe('Cart Navigation', () => {
    it('should navigate to the cart page when cart icon is clicked', async () => {
        // Open the home page
        await browser.url('https://your-app-url.com'); // Replace with your app's URL

        // Wait for the cart icon to be displayed
        const cartIcon = await $('header .cart-icon'); // Update selector as needed
        await cartIcon.waitForDisplayed({ timeout: 5000 });

        // Click the cart icon
        await cartIcon.click();

        // Wait for the cart page to load (e.g., by checking for a unique element)
        const cartHeader = await $('h1=Your Cart'); // Update selector/text as needed
        await cartHeader.waitForDisplayed({ timeout: 5000 });

        // Assert that we are on the cart page
        expect(await cartHeader.isDisplayed()).to.be.true;
    });
});
```