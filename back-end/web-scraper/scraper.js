const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    });

    const page = await browser.newPage();

    const categoryPageUrls = [
       //can add more categories according to the need
        { category: 'keells_products', url: 'https://www.keellssuper.com/showcaseint/items/keells_products' },
        { category: 'fruits', url: 'https://www.keellssuper.com/product?cat=1&s=16' },

        
    ];

    const categoryData = {};

    for (const { category, url } of categoryPageUrls) {
        await page.goto(url);
        await page.waitForSelector('.product-card-container');

        // calling the autoScroll function to scroll to the bottom of the page when needed
        await autoScroll(page);

        const data = await page.evaluate(() => {
            let productData = [];
            const productCards = document.querySelectorAll('.product-card-container');

            for (const card of productCards) {
                const productName = card.querySelector('.product-card-name').textContent;
                const productPrice = card.querySelector('.product-card-final-price').textContent;

                const product = { name: productName, price: productPrice };
                productData.push(product);
            }

            return productData;
        });

        // Store data in the corresponding category array
        categoryData[category] = data;
    }

   
    const keelsData = categoryData['fruits'];
    console.log(JSON.stringify(keelsData, null, 2));

    await browser.close();
})();

// Function to scroll to the bottom of the page
async function autoScroll(page) {
    await page.evaluate(async () => {
        await new Promise((resolve) => {
            let totalHeight = 0;
            const distance = 100;
            const scrollInterval = setInterval(() => {
                const scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if (totalHeight >= scrollHeight) {
                    clearInterval(scrollInterval);
                    resolve();
                }
            }, 100);
        });
    });
}
