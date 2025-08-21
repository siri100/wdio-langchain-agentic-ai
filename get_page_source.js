// get_page_source.js
const { remote } = require("webdriverio");
const { openBrowser } = require("./open_browser");

(async () => {
  const url = process.argv[2];
  const timeout = parseInt(process.argv[3], 10) || 5000;
  if (!url) {
    console.error("Usage: node get_page_source.js <url> [timeout]");
    process.exit(1);
  }

  const browser = await openBrowser();
  try {
    await browser.url(url);
    await browser.pause(timeout); // Wait for page to load
    const html = await browser.getPageSource();
    console.log(html);
  } catch (e) {
    console.error(`Error: ${e.message}`);
  }

})();
