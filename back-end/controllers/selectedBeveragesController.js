const { SelectedBeverage, Budget } = require("../models");
const expensesTotalController = require("./expensesTotalController");

const addBeverage = async (req, res) => {
  try {
    const { beverageName, price, imgSrc, quantity, unitPrice } = req.body;

    const userId = req.user.id;

    // Ensure quantity is parsed as a number
    const parsedQuantity = parseInt(quantity);

    // Find the user's budget
    const userBudget = await Budget.findOne({
      where: { userId },
    });

    if (!userBudget) {
      return res.status(404).json({ message: "User budget not found." });
    }

    // Check if a selected beverage with the given beverageName already exists
    let existingSelectedBeverage = await SelectedBeverage.findOne({
      where: {
        beverageName,
        budgetId: userBudget.budgetId,
      },
    });

    if (existingSelectedBeverage) {
      // If it exists, update the quantity and total price
      const newQuantity = existingSelectedBeverage.quantity + parsedQuantity;

      // Update the values
      existingSelectedBeverage = await existingSelectedBeverage.update({
        quantity: newQuantity,
        totalPrice: unitPrice * newQuantity, // Update the total price as well
      });

      return res.status(200).json(existingSelectedBeverage);
    }

    // If it doesn't exist, create a new selected beverage
    const newSelectedBeverage = await SelectedBeverage.create({
      beverageName,
      price,
      budgetId: userBudget.budgetId,
      quantity: parsedQuantity, // Ensure parsed quantity is used
      totalPrice: unitPrice * parsedQuantity,
      unitPrice,
      imgSrc,
    });

    return res.status(201).json(newSelectedBeverage);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateBeverage = async (beverages, userBudget) => {
  let totalBeveragePriceAtTime = 0; // Initialize as a number
  try {
    let messages = [];

    // Iterate over each beverage in the request
    for (const beverage of beverages) {
      const { beverageName, totalPrice } = beverage;

      // Find the selected beverage by name and budgetId
      const selectedBeverage = await SelectedBeverage.findOne({
        where: {
          beverageName,
          budgetId: userBudget.budgetId,
        },
      });

      if (selectedBeverage) {
        // If the beverage already exists in the user's budget, update the spent amount
        const newSpentAmount =
          selectedBeverage.spentAmount + parseFloat(totalPrice);

        // Update the selected beverage's spent amount
        if (selectedBeverage.totalPrice - newSpentAmount >= 0) {
          await selectedBeverage.update({ spentAmount: newSpentAmount });

          // If beverage is successfully processed, add a success message
          messages.push(
            `'${beverageName}' spending amount is updated in the budget`
          );

          totalBeveragePriceAtTime += parseFloat(totalPrice);
        } else {
          // If there is not enough money left, add an error message
          messages.push(`There is no money left for '${beverageName}'.`);
        }
      } else {
        // If the beverage doesn't exist, add an error message
        messages.push(`Please add '${beverageName}' to your budget first.`);
      }
    }

    // Create expenses total for beverages
    await expensesTotalController.createExpensesTotal(
      "Beverages",
      totalBeveragePriceAtTime,
      userBudget.budgetId
    );

    // Return the messages array
    return { messages };
  } catch (error) {
    console.error(error);
    // Return an error message
    return { error: "Internal Server Error" };
  }
};

const getBudgetIdsByBeverageName = async function (beverageName) {
  try {
    // Query the SelectedBeverage table based on the given beverage name
    const selectedBeverages = await SelectedBeverage.findAll({
      where: { beverageName: beverageName },
    });

    // Extract the budgetId from each selected beverage and return an array of budgetIds
    const budgetIds = selectedBeverages.map(
      (selectedBeverage) => selectedBeverage.dataValues.budgetId
    );

    return budgetIds;
  } catch (error) {
    console.error("Error while fetching budget IDs:", error);
    throw new Error("Failed to fetch budget IDs");
  }
};

module.exports = { addBeverage, updateBeverage, getBudgetIdsByBeverageName };
