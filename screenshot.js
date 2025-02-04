const puppeteer = require('puppeteer');

async function generateScreenshot(pageUrl) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    try {
        console.log(`Navigating to: ${pageUrl}`);
        await page.goto(pageUrl, { waitUntil: 'networkidle2' });

        console.log('Taking a screenshot');
        await page.screenshot({ path: 'screenshot.png', fullPage: true });

        console.log(`Screenshot saved as 'screenshot.png'`);
    } catch (error) {
        console.error(`Failed to navigate to: ${pageUrl} - ${error.message}`);
    } finally {
        await browser.close();
        console.log('Browser closed');
    }
}

// Example usage:
const pageUrl = 'https://socialbu.com/developers/docs';
generateScreenshot(pageUrl);
