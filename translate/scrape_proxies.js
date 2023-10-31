const puppeteer = require('puppeteer');

const getProxies = async () => {
    // Start a Puppeteer session with:
    // - a visible browser (`headless: false` - easier to debug because you'll see the browser in action)
    // - no default viewport (`defaultViewport: null` - website page will in full width and height)
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    });

    const page = await browser.newPage();


    await page.goto("https://free-proxy-list.net/", {
        waitUntil: "domcontentloaded",
    });

    const proxies = await page.evaluate(() => {
        const tds = Array.from(document.querySelectorAll('td'));
        return tds.map(td => td.innerText);
    }
    );

    const ips = proxies.filter((element, index) => {
        return index % 8 === 0;
    });

    const ports = proxies.filter((element, index) => {
        return index % 8 === 1;
    }
    );

    const proxiesList = ips.map((element, index) => {
        return element + ":" + ports[index];
    }
    );

    await browser.close();
    return proxiesList;

};

module.exports = getProxies;