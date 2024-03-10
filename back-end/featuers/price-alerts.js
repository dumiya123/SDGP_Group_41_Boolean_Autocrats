// priceAlert.js
const deepEqual = require('deep-equal');
const dataUtility = require('../helperFunctions/utilityData');
const { diff } = require('deep-object-diff');

async function priceAlert() {
    try {
        const json1 = await dataUtility.loadDataFromFile('categoryData.json');
        const json2 = await dataUtility.loadDataFromFile('categoryDataTest.json');

        const isEqual = deepEqual(json1, json2);

        if (isEqual) {
            console.log('Prices have not been changedcc');
        } else {
            console.log('Prices have been changed \n');
            console.log('\n');

            const differences = diff(json1, json2);
            
            console.log('Differences:', formatDifferences(differences, json1, json2));// in here this should send respnse to notification page

            //move updatedPrices to categoryData.json
            dataUtility.moveTestDataToCategoryData('categoryDataTest.json', 'categoryData.json');
        }
    } catch (error) {
        console.error('Error during price alert:', error);
    }
}

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

module.exports = priceAlert;
