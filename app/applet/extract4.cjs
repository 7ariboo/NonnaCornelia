const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://aliceblue-mule-357158.hostingersite.com/', { waitUntil: 'networkidle' });
  const text = await page.evaluate(() => document.body.innerText);
  console.log(text);
  await browser.close();
})();
