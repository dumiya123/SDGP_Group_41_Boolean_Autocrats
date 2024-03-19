const deepEqual = require("deep-equal");
const dataUtility = require("../helperFunctions/utilityData");
const { diff } = require("deep-object-diff");
let selectedVegController = require("../controllers/selectedVegController");
let selectedFishController = require("../controllers/selectedFishController");
let notificationController = require("../controllers/notificationController");

async function priceAlert(DATA_FILE_PATH, TEST_DATA_FILE_PATH) {
  try {
    const json1 = await dataUtility.loadDataFromFile(DATA_FILE_PATH);
    const json2 = await dataUtility.loadDataFromFile(TEST_DATA_FILE_PATH);

    const isEqual = deepEqual(normalizeJson(json1), normalizeJson(json2));

    if (isEqual) {
      console.log("Prices have not been changed");
    } else {
      console.log("Prices have been changed");

      const differences = diff(json1, json2);

      let changedProducts = getChangedProducts(differences, json1, json2);
      console.log("changedProducts:", changedProducts.length);

      for (const product of changedProducts) {
        if (product.category === "vegetables") {
          await handleVegetableChange(product, json2);
        } else if (product.category === "fish") {
          await handleFishChange(product, json2);
        }
      }
    }
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

  for (const category in differences) {
    if (Object.hasOwnProperty.call(differences, category)) {
      for (const item in differences[category]) {
        if (Object.hasOwnProperty.call(differences[category], item)) {
          const name1 = json1[category]?.[item]?.name || "Undefined";
          const name2 = json2[category]?.[item]?.name || "Undefined";
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
          const priceDifference = newPrice - oldPrice;
          const changeType = priceDifference > 0 ? "increased" : "decreased";

          if (name1 === name2 && oldPrice !== newPrice) {
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

  return changedItems;
}

const DATA_FILE_PATH = "../categoryData.json";
const TEST_DATA_FILE_PATH = "../categoryDataTest.json";
priceAlert(DATA_FILE_PATH, TEST_DATA_FILE_PATH);

module.exports = priceAlert;
