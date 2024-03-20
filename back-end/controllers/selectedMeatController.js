const { SelectedMeat, Budget } = require("../models");
const expensesTotalController = require("./expensesTotalController");

const addMeat = async (req, res) => {
  try {
    const { meatName, price, imgSrc, quantity, unitPrice } = req.body;

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

    // Check if a selected meat with the given meatName already exists
    let existingSelectedMeat = await SelectedMeat.findOne({
      where: {
        meatName,
        budgetId: userBudget.budgetId,
      },
    });

    if (existingSelectedMeat) {
      // If it exists, update the quantity and total price
      const newQuantity = existingSelectedMeat.quantity + parsedQuantity;

      // Update the values
      existingSelectedMeat = await existingSelectedMeat.update({
        quantity: newQuantity,
        totalPrice: unitPrice * newQuantity, // Update the total price as well
      });

      return res.status(200).json(existingSelectedMeat);
    }

    // If it doesn't exist, create a new selected meat
    const newSelectedMeat = await SelectedMeat.create({
      meatName,
      price,
      budgetId: userBudget.budgetId,
      quantity: parsedQuantity, // Ensure parsed quantity is used
      totalPrice: unitPrice * parsedQuantity,
      unitPrice,
      imgSrc,
    });

    return res.status(201).json(newSelectedMeat);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateMeat = async (meats, userBudget) => {
  let totalMeatPriceAtTime = 0; // Initialize as a number
  try {
    let messages = [];

    // Iterate over each meat in the request
    for (const meat of meats) {
      const { meatName, totalPrice } = meat;

      // Find the selected meat by name and budgetId
      const selectedMeat = await SelectedMeat.findOne({
        where: {
          meatName,
          budgetId: userBudget.budgetId,
        },
      });

      if (selectedMeat) {
        // If the meat already exists in the user's budget, update the spent amount
        const newSpentAmount =
          selectedMeat.spentAmount + parseFloat(totalPrice);

        // Update the selected meat's spent amount
        if (selectedMeat.totalPrice - newSpentAmount >= 0) {
          await selectedMeat.update({ spentAmount: newSpentAmount });

          // If meat is successfully processed, add a success message
          messages.push(
            `'${meatName}' spending amount is updated in the budget`
          );

          totalMeatPriceAtTime += parseFloat(totalPrice);
        } else {
          // If there is not enough money left, add an error message
          messages.push(`There is no money left for '${meatName}'.`);
        }
      } else {
        // If the meat doesn't exist, add an error message
        messages.push(`Please add '${meatName}' to your budget first.`);
      }
    }

    // Create expenses total for meats
    await expensesTotalController.createExpensesTotal(
      "Meats",
      totalMeatPriceAtTime,
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

const getBudgetIdsByMeatName = async function (meatName) {
  try {
    // Query the SelectedMeat table based on the given meat name
    const selectedMeats = await SelectedMeat.findAll({
      where: { meatName: meatName },
    });

    console.log(selectedMeats); // Verify that selectedMeats contains the expected data

    // Extract the budgetId from each selected meat and return an array of budgetIds
    const budgetIds = selectedMeats.map(
      (selectedMeat) => selectedMeat.dataValues.budgetId
    );
    console.log("budgetIds", budgetIds); // Verify that budgetIds contains the expected data

    return budgetIds;
  } catch (error) {
    console.error("Error while fetching budget IDs:", error);
    throw new Error("Failed to fetch budget IDs");
  }
};

module.exports = { addMeat, updateMeat, getBudgetIdsByMeatName };
