// navigate_to_url.js
const { remote } = require("webdriverio");
const { openBrowser } = require("./open_browser");

async function navigateBrowser(url) {

  const browser = await remote({
    capabilities: { browserName: "chrome" },
  });

  await browser.url(url);
  console.log(`Navigated to ${url}`);
  await browser.pause(3000);

}

if (require.main === module) {
  (async () => {
    const url = process.argv[2] || "https://www.google.com"; // take URL from CLI args
    await navigateBrowser(url);
  })();
}

module.exports = { navigateBrowser };
