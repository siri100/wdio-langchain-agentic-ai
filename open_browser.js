// open_browser.js
const { remote } = require("webdriverio");

async function openBrowser() {
  const browser = await remote({
    capabilities: { browserName: "chrome" },
  });
  return browser;
}

if (require.main === module) {
  (async () => {
    const browser = await openBrowser();
    console.log("Chrome browser opened.");
    await browser.pause(3000); 

  })();
}

module.exports = { openBrowser };
