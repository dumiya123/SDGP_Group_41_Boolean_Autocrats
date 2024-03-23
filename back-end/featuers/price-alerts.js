const deepEqual = require("deep-equal");
const dataUtility = require("../helperFunctions/utilityData");
const { diff } = require("deep-object-diff");
let selectedVegController = require("../controllers/selectedVegController");
let selectedFishController = require("../controllers/selectedFishController");
let selectedBeveragesController = require("../controllers/selectedBeveragesController");
let notificationController = require("../controllers/notificationController");
let selectedMeatController = require("../controllers/selectedMeatController");

async function priceAlert(DATA_FILE_PATH, TEST_DATA_FILE_PATH) {
  try {
    // Load data from two JSON files
    const json1 = await dataUtility.loadDataFromFile(DATA_FILE_PATH);
    const json2 = await dataUtility.loadDataFromFile(TEST_DATA_FILE_PATH);

    // Check if the two JSON objects are equal after normalization
    const isEqual = deepEqual(normalizeJson(json1), normalizeJson(json2));

    // If the JSON objects are equal, it means the prices have not changed
    if (isEqual) {
      console.log("Prices have not been changed");
    } else {
      // If the JSON objects are not equal, it means the prices have changed
      console.log("Prices have been changed");

      // Find the differences between the two JSON objects
      const differences = diff(json1, json2);

      // Get the products that have changed
      let changedProducts = getChangedProducts(differences, json1, json2);
      console.log("changedProducts:", changedProducts.length);

      // For each changed product, handle the change based on the product category
      for (const product of changedProducts) {
        if (product.category === "vegetables") {
          await handleVegetableChange(product, json2);
        } else if (product.category === "fish") {
          await handleFishChange(product, json2);
        } else if (product.category === "meat") {
          await handleMeatChange(product, json2);
        } else if (product.category === "beverages") {
          await handleBeveragesChange(product, json2);
        }
      }
    }
    // If there is an error during the process, log the error
  } catch (error) {
    console.error("Error during price alert:", error);
  }
}

async function handleVegetableChange(product, json2) {
  const userIds = await selectedVegController.getBudgetIdsByVegName(
    product.productName
  );

  await sendNotificationsDb(userIds, product, json2);
}

async function handleFishChange(product, json2) {
  const userIds = await selectedFishController.getBudgetIdsByFishName(
    product.productName
  );

  await sendNotificationsDb(userIds, product, json2);
}

async function handleMeatChange(product, json2) {
  const userIds = await selectedMeatController.getBudgetIdsByMeatName(
    product.productName
  );

  await sendNotificationsDb(userIds, product, json2);
}

async function handleBeveragesChange(product, json2) {
  const userIds = await selectedBeveragesController.getBudgetIdsByBeverageName(
    product.productName
  );

  await sendNotificationsDb(userIds, product, json2);
}

async function sendNotificationsDb(userIds, product, json2) {
  for (const userId of userIds) {
    let notification = `Price of ${product.productName} has ${product.changeType} from ${product.oldPrice} to ${product.newPrice}`;

    notificationController.CreateNotification(userId, notification);
  }
}

function normalizeJson(json) {
  const normalizedJson = {};
  for (const category in json) {
    if (Object.hasOwnProperty.call(json, category)) {
      normalizedJson[category] = {};
      const items = json[category];
      Object.keys(items)
        .sort((a, b) => items[a].name.localeCompare(items[b].name))
        .forEach((key) => {
          normalizedJson[category][key] = items[key];
        });
    }
  }
  return normalizedJson;
}

function getChangedProducts(differences, json1, json2) {
  const changedItems = [];

  // Loop over each category in the differences object
  for (const category in differences) {
    // Check if the differences object has this category as its own property
    if (Object.hasOwnProperty.call(differences, category)) {
      // Loop over each item in the category
      for (const item in differences[category]) {
        // Check if the category object has this item as its own property
        if (Object.hasOwnProperty.call(differences[category], item)) {
          // Get the name of the item from both JSON objects, or set it to "Undefined" if it doesn't exist
          const name1 = json1[category]?.[item]?.name || "Undefined";
          const name2 = json2[category]?.[item]?.name || "Undefined";

          // Get the price of the item from both JSON objects, remove the "Rs " prefix and commas, convert it to a number, or set it to 0 if it doesn't exist
          const oldPrice =
            parseFloat(
              (json1[category]?.[item]?.price || "")
                .replace("Rs ", "")
                .replace(",", "")
            ) || 0;
          const newPrice =
            parseFloat(
              (json2[category]?.[item]?.price || "")
                .replace("Rs ", "")
                .replace(",", "")
            ) || 0;

          // Calculate the difference between the new price and the old price
          const priceDifference = newPrice - oldPrice;

          // Determine whether the price has increased or decreased
          const changeType = priceDifference > 0 ? "increased" : "decreased";

          // If the names of the items are the same and the prices are different
          if (name1 === name2 && oldPrice !== newPrice) {
            // Add the item to the changedItems array with its name, category, price difference, and change type
            changedItems.push({
              productName: name1,
              category: category,
              priceDifference: Math.abs(priceDifference),
              changeType: changeType,
            });
          }
        }
      }
    }
  }

  // Return the array of changed items
  return changedItems;
}

// priceAlert("../CategoryData.json", "../CategoryDataTest.json");

module.exports = priceAlert;
