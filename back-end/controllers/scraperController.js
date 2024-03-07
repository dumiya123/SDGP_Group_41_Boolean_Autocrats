const fs = require('fs').promises;
const scrapeData = require('../web-scraper/scraper');

let categoryData = null;
let isScraping = false;

const DATA_FILE_PATH = 'categoryData.json';

async function saveCategoryDataToFile(data) {
    try {
        await fs.writeFile(DATA_FILE_PATH, JSON.stringify(data));
    } catch (error) {
        console.error('Error saving category data:', error);
    }
}

async function loadCategoryDataFromFile() {
    try {
        const data = await fs.readFile(DATA_FILE_PATH, 'utf-8');
        console.log('loading complete', data);
        return JSON.parse(data);
        

    } catch (error) {
        console.error('Error loading category data:', error);
        return null;
    }
}

async function scrapeDataKeels(req, res) {
    try {
        if (!isScraping) {
            isScraping = true;

            // Call your scraping function
            categoryData = await scrapeData();

            // Save scraped data to a file
            await saveCategoryDataToFile(categoryData);

            isScraping = false;
            res.json(categoryData);
        } else {
            res.status(400).json({ error: 'Scraping is already in progress' });
        }
    } catch (error) {
        isScraping = false;
        console.error('Error during scraping:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function filterCategory(req, res) {
    try {
        // Wait until scraping is complete
        while (isScraping) {
            await new Promise(resolve => setTimeout(resolve, 100));
        }

        // Load category data from file
        categoryData = await loadCategoryDataFromFile();

        if (categoryData) {
            let category = req.body.category;
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

module.exports = { scrapeDataKeels, filterCategory };
