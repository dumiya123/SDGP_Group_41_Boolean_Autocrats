const puppeteer = require('puppeteer');

async function scrapeData() {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
    });

    const page = await browser.newPage();

   
    const categoryPageUrls = [
        { category: 'home', url: 'https://www.keellssuper.com/home' },
        { category: 'vegetables', url: 'https://www.keellssuper.com/product?cat=1&s=16' },
        { category: 'fruits', url: 'https://www.keellssuper.com/product?cat=1&s=6' },
        { category: 'meat', url: 'https://www.keellssuper.com/product?cat=1&s=12' },
        { category: 'fish', url: 'https://www.keellssuper.com/product?cat=1&s=4' },
        { category: 'beverages', url: 'https://www.keellssuper.com/product?cat=1&s=2' },
        { category: 'chilled', url: 'https://www.keellssuper.com/product?cat=1&s=3' },
        { category: 'frozenfood', url: 'https://www.keellssuper.com/product?cat=1&s=5' },
        { category: 'grocerry', url: 'https://www.keellssuper.com/product?cat=1&s=7' },
        { category: 'frozenfood', url: 'https://www.keellssuper.com/product?cat=1&s=5' },
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
                const productImage = card.querySelector('.product-card-image-container img').src;

                console.log(productImage);
        
                const product = { name: productName, price: productPrice, image: productImage };
                productData.push(product);
            }
        
            return productData;
        });

        // Store data in the corresponding category array
        categoryData[category] = data;
    }

    await browser.close();

    return categoryData;
}

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



module.exports = scrapeData;
