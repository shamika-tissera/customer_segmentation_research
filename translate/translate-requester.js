const translate = require('@vitalets/google-translate-api');
const HttpProxyAgent = require('http-proxy-agent');
const ProxyScrapper = require('./scrape_proxies.js');
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

let proxies = getProxies();

let proxyIndex = 0;

var agent = new HttpProxyAgent.HttpProxyAgent('http://' + proxies[proxyIndex]);
agent = new HttpProxyAgent.HttpProxyAgent('http://34.142.51.21');

const translateTrier = (sentence) => {
    console.log(sentence)
    translate.translate(sentence, {
        to: 'en',
        fetchOptions: agent
    }).then(res => {
        console.log("dsdsdsds");
        console.log(res.text);
        // return res.text;
    }).catch(err => {
        console.error(err);

        if (err.name === 'TooManyRequestsError') {
            // retry with another proxy agent
            if (proxyIndex < 15) {
                proxyIndex++;
                agent = new HttpProxyAgent.HttpProxyAgent('http://' + proxies[proxyIndex]);
                translateTrier();
            }
        }
    });
}

translateTrier('So uma peça que veio rachado mas tudo bem rs');

// module.exports = translateTrier;
