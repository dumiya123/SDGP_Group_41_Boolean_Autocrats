// scraperController.js
const cron = require("node-cron");
const scrapeData = require("../web-scraper/scraper");
const deepEqual = require("deep-equal");
const dataUtility = require("../helperFunctions/utilityData");
const priceAlert = require("../featuers/price-alerts");
const fs = require("fs");

let isScraping = false;

const DATA_FILE_PATH = "categoryData.json";
const TEST_DATA_FILE_PATH = "categoryDataTest.json";

async function scrapeDataKeels() {
  let timeoutId; // Variable to hold the timeout ID
  const TIMEOUT_DURATION = 600000; // Timeout duration in milliseconds (10 minutes)
  const NAVIGATION_TIMEOUT = 60000; // New navigation timeout in milliseconds (60 seconds)

  const requiredCategories = [
    "home",
    "vegetables",
    "fruits",
    "meat",
    "fish",
    "beverages",
    "chilled",
    "frozenfood",
  ];

  try {
    if (!isScraping) {
      isScraping = true;
      console.log("Scraping started...");

      // Set a timeout to limit the duration of the scraping process
      timeoutId = setTimeout(() => {
        throw new Error("Scraping process timed out.");
      }, TIMEOUT_DURATION);

      // Scrape data with increased navigation timeout
      let scrapedData = await scrapeData({
        navigationTimeout: NAVIGATION_TIMEOUT,
      });

      // Check if all required categories are present in the scraped data
      const scrapedCategories = Object.keys(scrapedData);
      const missingCategories = requiredCategories.filter(
        (category) => !scrapedCategories.includes(category)
      );

      if (missingCategories.length > 0) {
        console.log(
          `Missing categories: ${missingCategories.join(
            ", "
          )}. Scraping again...`
        );
        await scrapeDataKeels(); // Scraping again if any category is missing
        return; // Exit function to avoid saving incomplete data
      }

      // Save scraped data to the appropriate file
      const existingData = await dataUtility.loadDataFromFile(DATA_FILE_PATH);
      if (!existingData) {
        await dataUtility.saveDataToFile(scrapedData, DATA_FILE_PATH);
        console.log("Scraped data written to categoryData.json");
      } else {
        createTestDataFile(TEST_DATA_FILE_PATH);
        await dataUtility.saveDataToFile(scrapedData, TEST_DATA_FILE_PATH);
        priceAlert();
        console.log("Scraped data written to categoryDataTest.json");
      }

      // Clear the timeout since scraping completed successfully
      clearTimeout(timeoutId);

      console.log("Scraping completed successfully.");
    } else {
      console.log("Scraping is already in progress.");
    }
  } catch (error) {
    // Clear the timeout if an error occurs during scraping
    clearTimeout(timeoutId);
    console.error("Error during scraping:", error);
  } finally {
    // Reset the flag in both success and error cases
    isScraping = false;
  }
}


cron.schedule("*/10 * * * *", async () => {
  await scrapeDataKeels();
});

async function filterCategory(req, res) {
  try {
    // Load category data from file
    const categoryData = await dataUtility.loadDataFromFile(DATA_FILE_PATH);

    if (!categoryData) {
      while (isScraping) {
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
    }
    // Wait until scraping is complete

    if (categoryData) {
      const category = req.body.category;
      if (category && categoryData[category]) {
        res.json(categoryData[category]);
      } else {
        res
          .status(400)
          .json({ error: "Invalid category or data not available" });
      }
    } else {
      res.status(400).json({ error: "Data not available" });
    }
  } catch (error) {
    console.error("Error during filtering category:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function createTestDataFile(filePath) {
  try {
    // Check if the test data file already exists
    await fs.promises.access(filePath, fs.constants.F_OK);
  } catch (error) {
    // Create the test data file if it doesn't exist
    if (error.code === "ENOENT") {
      await dataUtility.saveDataToFile({}, filePath);
      console.log(`Created ${filePath}`);
    } else {
      console.error("Error checking existence of test data file:", error);
    }
  }
}

module.exports = { scrapeDataKeels, filterCategory };
