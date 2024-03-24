const dataUtility = require("../helperFunctions/utilityData");
const fs = require("fs");

const DATA_FILE_PATH = "categoryData.json";

async function filterCategory(req, res) {
  try {
    // Load category data from file
    const categoryData = await dataUtility.loadDataFromFile(DATA_FILE_PATH);

    if (!categoryData) {
      res.status(400).json({ error: "Data not available" });
      return;
    }

    const category = req.body.category;
    if (category && categoryData[category]) {
      res.json(categoryData[category]);
    } else {
      res.status(400).json({ error: "Invalid category or data not available" });
    }
  } catch (error) {
    console.error("Error during filtering category:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = { filterCategory };
