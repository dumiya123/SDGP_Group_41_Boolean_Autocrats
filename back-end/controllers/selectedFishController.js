const { SelectedFish, Budget } = require("../models");
const expensesTotalController = require("./expensesTotalController");

const addFish = async (req, res) => {
  try {
    const { fishName, price, imgSrc, quantity, unitPrice } = req.body;

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

    // Check if a selected fish with the given fishName already exists
    let existingSelectedFish = await SelectedFish.findOne({
      where: {
        fishName,
        budgetId: userBudget.budgetId,
      },
    });

    if (existingSelectedFish) {
      // If it exists, update the quantity and total price
      const newQuantity = existingSelectedFish.quantity + parsedQuantity;

      // Update the values
      existingSelectedFish = await existingSelectedFish.update({
        quantity: newQuantity,
        totalPrice: unitPrice * newQuantity, // Update the total price as well
      });

      return res.status(200).json(existingSelectedFish);
    }

    // If it doesn't exist, create a new selected fish
    const newSelectedFish = await SelectedFish.create({
      fishName,
      price,
      budgetId: userBudget.budgetId,
      quantity: parsedQuantity, // Ensure parsed quantity is used
      totalPrice: unitPrice * parsedQuantity,
      unitPrice,
      imgSrc,
    });

    return res.status(201).json(newSelectedFish);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateFish = async (fishes, userBudget) => {
  let totalFishPriceAtTime = 0; // Initialize as a number
  try {
    let messages = [];

    // Iterate over each fish in the request
    for (const fish of fishes) {
      const { fishName, totalPrice } = fish;

      // Find the selected fish by name and budgetId
      const selectedFish = await SelectedFish.findOne({
        where: {
          fishName,
          budgetId: userBudget.budgetId,
        },
      });

      if (selectedFish) {
        // If the fish already exists in the user's budget, update the spent amount
        const newSpentAmount =
          selectedFish.spendedAmount + parseFloat(totalPrice);

        // Update the selected fish's spent amount
        if (selectedFish.totalPrice - newSpentAmount >= 0) {
          await selectedFish.update({ spendedAmount: newSpentAmount });

          // If fish is successfully processed, add a success message
          messages.push(
            `'${fishName}' spending amount is updated in the budget`
          );

          totalFishPriceAtTime += parseFloat(totalPrice);
        } else {
          // If there is not enough money left, add an error message
          messages.push(`There is no money left for '${fishName}'.`);
        }
      } else {
        // If the fish doesn't exist, add an error message
        messages.push(`Please add '${fishName}' to your budget first.`);
      }
    }

    // Create expenses total for fishes
    await expensesTotalController.createExpensesTotal(
      "Fishes",
      totalFishPriceAtTime,
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

const getBudgetIdsByFishName = async function (fishName) {
  try {
    // Query the SelectedFish table based on the given fish name
    const selectedFishes = await SelectedFish.findAll({
      where: { fishName: fishName },
    });

    console.log(selectedFishes); // Verify that selectedFishes contains the expected data

    // Extract the budgetId from each selected fish and return an array of budgetIds
    const budgetIds = selectedFishes.map(
      (selectedFish) => selectedFish.dataValues.budgetId
    );
    console.log("budgetIds", budgetIds); // Verify that budgetIds contains the expected data

    return budgetIds;
  } catch (error) {
    console.error("Error while fetching budget IDs:", error);
    throw new Error("Failed to fetch budget IDs");
  }
};

module.exports = { addFish, updateFish, getBudgetIdsByFishName };
