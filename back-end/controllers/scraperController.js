// scraperController.js
const cron = require('node-cron');
const scrapeData = require('../web-scraper/scraper');
const deepEqual = require('deep-equal');
const dataUtility = require('../helperFunctions/utilityData');
const priceAlert = require('../featuers/price-alerts');
const fs = require('fs');

let isScraping = false;

const DATA_FILE_PATH = 'categoryData.json';
const TEST_DATA_FILE_PATH = 'categoryDataTest.json';

async function scrapeDataKeels() {
    try {
        if (!isScraping) {
            isScraping = true;

            const scrapedData = await scrapeData();

            await createTestDataFile(TEST_DATA_FILE_PATH);

            const existingData = await dataUtility.loadDataFromFile(DATA_FILE_PATH);

            if (!existingData) {
                await dataUtility.saveDataToFile(scrapedData, DATA_FILE_PATH);
                console.log('Scraped data written to categoryData.json');
            } else {
                await dataUtility.saveDataToFile(scrapedData, TEST_DATA_FILE_PATH);
                console.log('Scraped data written to categoryDataTest.json');
                priceAlert();

               
            }

            isScraping = false;
            console.log('Scraping completed successfully.');
        } else {
            console.log('Scraping is already in progress.');
        }
    } catch (error) {
        isScraping = false;
        console.error('Error during scraping:', error);
    }
}

cron.schedule('*/8 * * * *', async () => {
    await scrapeDataKeels();
});

async function filterCategory(req, res) {
    try {
        // Wait until scraping is complete
        while (isScraping) {
            await new Promise(resolve => setTimeout(resolve, 100));
        }

        // Load category data from file
        const categoryData = await dataUtility.loadDataFromFile(DATA_FILE_PATH);

        if (categoryData) {
            const category = req.body.category;
            if (category && categoryData[category]) {
                res.json(categoryData[category]);
            } else {
                res.status(400).json({ error: 'Invalid category or data not available' });
            }
        } else {
            res.status(400).json({ error: 'Data not available' });
        }
    } catch (error) {
        console.error('Error during filtering category:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function createTestDataFile(filePath) {
    try {
        // Check if the test data file already exists
        await fs.promises.access(filePath, fs.constants.F_OK);
    } catch (error) {
        // Create the test data file if it doesn't exist
        if (error.code === 'ENOENT') {
            await saveDataToFile({}, filePath);
            console.log(`Created ${filePath}`);
        } else {
            console.error('Error checking existence of test data file:', error);
        }
    }
}

module.exports = { scrapeDataKeels,filterCategory };
