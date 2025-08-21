// click_action.js
const { remote } = require("webdriverio");
const { openBrowser } = require("./open_browser");

(async () => {
  const elementSelector = process.argv[2];
  const timeout = parseInt(process.argv[3], 10) || 5000;
  if (!elementSelector) {
    console.error("Usage: node click_action.js <elementSelector> [timeout]");
    process.exit(1);
  }

   const browser = await openBrowser();


  try {
    const element = await browser.$(elementSelector);
    await browser.waitUntil(async () => await element.isExisting(), {
      timeout,
    });
    await element.scrollIntoView();
    await element.click();
    console.log(`Clicked element: ${elementSelector}`);
  } catch (e) {
    console.error(`Error: ${e.message}`);
  }

  await browser.pause(1000);

})();
