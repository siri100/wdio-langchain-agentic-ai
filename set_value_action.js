// set_value_action.js
const { remote } = require("webdriverio");
const { openBrowser } = require("./open_browser");

(async () => {
  const elementSelector = process.argv[2];
  const value = process.argv[3];
  const timeout = parseInt(process.argv[4], 10) || 5000;
  if (!elementSelector || !value) {
    console.error(
      "Usage: node set_value_action.js <elementSelector> <value> [timeout]"
    );
    process.exit(1);
  }

  const browser = await openBrowser();


  try {
    const element = await browser.$(elementSelector);
    await browser.waitUntil(async () => await element.isExisting(), {
      timeout,
    });
    await element.scrollIntoView();
    await element.setValue(value);
    console.log(`Set value for element: ${elementSelector}`);
  } catch (e) {
    console.error(`Error: ${e.message}`);
  }

  await browser.pause(1000);

})();
