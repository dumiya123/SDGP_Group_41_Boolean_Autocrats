const deepEqual = require("deep-equal");
const dataUtility = require("../helperFunctions/utilityData");
const { diff } = require("deep-object-diff");

async function priceAlert() {
  try {
    const json1 = await dataUtility.loadDataFromFile("../categoryData.json");
    const json2 = await dataUtility.loadDataFromFile(
      "../categoryDataTest.json"
    );

    const isEqual = deepEqual(normalizeJson(json1), normalizeJson(json2));

    if (isEqual) {
      console.log("Prices have not been changed");
    } else {
      console.log("Prices have been changed");

      const differences = diff(json1, json2);
      console.log(formatDifferences(differences, json1, json2));
      // Send notification to the notification page
    }
  } catch (error) {
    console.error("Error during price alert:", error);
  }
}

function normalizeJson(json) {
  // Normalize the JSON by sorting items within each category alphabetically by product name
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

function formatDifferences(differences, json1, json2) {
  const formattedDifferences = [];

  for (const category in differences) {
    if (Object.hasOwnProperty.call(differences, category)) {
      for (const item in differences[category]) {
        if (Object.hasOwnProperty.call(differences[category], item)) {
          const name1 = json1[category]?.[item]?.name || "Undefined";
          const name2 = json2[category]?.[item]?.name || "Undefined";
          const oldPrice =
            parseFloat(
              json1[category]?.[item]?.price.replace("Rs ", "").replace(",", "")
            ) || 0;
          const newPrice =
            parseFloat(
              json2[category]?.[item]?.price.replace("Rs ", "").replace(",", "")
            ) || 0;
          const priceDifference = newPrice - oldPrice;

          if (name1 === name2 && oldPrice !== newPrice) {
            // Check if the name is the same and prices differ
            formattedDifferences.push(
              `Price of ${category} - ${name1}: ${
                json1[category]?.[item]?.price
              } to ${name2}: ${json2[category]?.[item]?.price} (${Math.abs(
                priceDifference
              )} Rs ${priceDifference >= 0 ? "higher" : "lower"})`
            );
          }
        }
      }
    }
  }

  return formattedDifferences.join("\n");
}
priceAlert();

module.exports = priceAlert;
