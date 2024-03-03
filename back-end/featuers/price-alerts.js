const fs = require('fs');
const deepEqual = require('deep-equal');
const { diff } = require('deep-object-diff');

const json1 = require('../categoryData.json');
const json2 = require('../categoryDataTest.json');

function compareJSONObjects(json1, json2) {
  const isEqual = deepEqual(json1, json2);

  if (isEqual) {
    console.log('JSON objects are identical.');
  } else {
    console.log('Prices have been changed \n');
    console.log('\n');

    // Find the specific differences
    const differences = diff(json1, json2);
    console.log('Differences:', formatDifferences(differences, json1, json2));
  }
}

// Function to format differences
function formatDifferences(differences, json1, json2) {
  const formattedDifferences = [];

  for (const category in differences) {
    if (Object.hasOwnProperty.call(differences, category)) {
      for (const item in differences[category]) {
        if (Object.hasOwnProperty.call(differences[category], item)) {
          const name1 = json1[category]?.[item]?.name || 'Undefined';
          const name2 = json2[category]?.[item]?.name || 'Undefined';
          const oldPrice = parseFloat(json1[category]?.[item]?.price?.replace(/[^\d.]/g, '') || 0);
          const newPrice = parseFloat(json2[category]?.[item]?.price?.replace(/[^\d.]/g, '') || 0);
          const priceDifference = newPrice - oldPrice;

          formattedDifferences.push(`Price of ${category} - ${name1}: ${json1[category]?.[item]?.price} to ${name2}: ${json2[category]?.[item]?.price} (${Math.abs(priceDifference)} Rs ${priceDifference >= 0 ? 'higher' : 'lower'})`);
        }
      }
    }
  }

  return formattedDifferences.join('\n');
}

// Call the comparison function
compareJSONObjects(json1, json2);
