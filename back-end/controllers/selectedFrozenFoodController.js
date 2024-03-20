const { SelectedFrozenFood, Budget } = require("../models");
const expensesTotalController = require("./expensesTotalController");

const addSelectedFrozenFood = async (req, res) => {
  try {
    const { foodName, price, imgSrc, quantity, unitPrice } = req.body;

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

    // Check if a frozen food with the given foodName already exists
    let existingFrozenFood = await SelectedFrozenFood.findOne({
      where: {
        foodName,
        budgetId: userBudget.budgetId,
      },
    });

    if (existingFrozenFood) {
      // If it exists, update the quantity and total price
      const newQuantity = existingFrozenFood.quantity + parsedQuantity;

      // Update the values
      existingFrozenFood = await existingFrozenFood.update({
        quantity: newQuantity,
        totalPrice: unitPrice * newQuantity, // Update the total price as well
      });

      return res.status(200).json(existingFrozenFood);
    }

    // If it doesn't exist, create a new frozen food
    const newFrozenFood = await SelectedFrozenFood.create({
      foodName,
      price,
      budgetId: userBudget.budgetId,
      quantity: parsedQuantity, // Ensure parsed quantity is used
      totalPrice: unitPrice * parsedQuantity,
      unitPrice,
      imgSrc,
    });

    return res.status(201).json(newFrozenFood);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateSelectedFrozenFood = async (foods, userBudget) => {
  let totalFoodPriceAtTime = 0; // Initialize as a number
  try {
    let messages = [];

    // Iterate over each food in the request
    for (const food of foods) {
      const { foodName, totalPrice } = food;

      // Find the frozen food by name and budgetId
      const frozenFood = await SelectedFrozenFood.findOne({
        where: {
          foodName,
          budgetId: userBudget.budgetId,
        },
      });

      if (frozenFood) {
        // If the food already exists in the user's budget, update the spent amount
        const newSpentAmount = frozenFood.spentAmount + parseFloat(totalPrice);


        // Update the frozen food's spent amount
        if (frozenFood.totalPrice - newSpentAmount >= 0) {
          await frozenFood.update({ spendedAmount: newSpentAmount });

          // If food is successfully processed, add a success message
          messages.push(
            `'${foodName}' spending amount is updated in the budget`
          );

          totalFoodPriceAtTime += parseFloat(totalPrice);
        } else {
          // If there is not enough money left, add an error message
          messages.push(`There is no money left for '${foodName}'.`);
        }
      } else {
        // If the food doesn't exist, add an error message
        messages.push(`Please add '${foodName}' to your budget first.`);
      }
    }

    // Create expenses total for frozen foods
    await expensesTotalController.createExpensesTotal(
      "Frozen Foods",
      totalFoodPriceAtTime,
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

const getBudgetIdsByFoodName = async function (foodName) {
  try {
    // Query the FrozenFood table based on the given food name
    const frozenFoods = await SelectedFrozenFood.findAll({
      where: { foodName: foodName },
    });

    console.log(frozenFoods); // Verify that frozenFoods contains the expected data

    // Extract the budgetId from each frozen food and return an array of budgetIds
    const budgetIds = frozenFoods.map(
      (frozenFood) => frozenFood.dataValues.budgetId
    );
    console.log("budgetIds", budgetIds); // Verify that budgetIds contains the expected data

    return budgetIds;
  } catch (error) {
    console.error("Error while fetching budget IDs:", error);
    throw new Error("Failed to fetch budget IDs");
  }
};

module.exports = { addSelectedFrozenFood, updateSelectedFrozenFood, getBudgetIdsByFoodName };
