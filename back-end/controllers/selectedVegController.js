const { SelectedVeg, Budget } = require("../models");
let expensesTotalController = require("./expensesTotalController");

// Define the addVeg function using async syntax
const addVeg = async (req, res) => {
  try {
    const { vegName, price, imgSrc, quantity, unitPrice } = req.body;

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

    // Check if a selected vegetable with the given vegName already exists
    let existingSelectedVeg = await SelectedVeg.findOne({
      where: {
        vegName,
        budgetId: userBudget.budgetId,
      },
    });

    if (existingSelectedVeg) {
      // If it exists, update the quantity and total price
      const newQuantity = existingSelectedVeg.quantity + parsedQuantity;

      // Update the values
      existingSelectedVeg = await existingSelectedVeg.update({
        quantity: newQuantity,
        totalPrice: unitPrice * newQuantity, // Update the total price as well
      });

      return res.status(200).json(existingSelectedVeg);
    }

    // If it doesn't exist, create a new selected vegetable
    const newSelectedVeg = await SelectedVeg.create({
      vegName,
      price,
      budgetId: userBudget.budgetId,
      quantity: parsedQuantity, // Ensure parsed quantity is used
      totalPrice: unitPrice * parsedQuantity,
      unitPrice,
      imgSrc,
    });

    return res.status(201).json(newSelectedVeg);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateVeg = async (vegetables, userBudget) => {
  let totalVegPriceAtTime = 0; // Initialize as a number
  try {
    let messages = [];

    // Iterate over each vegetable in the request
    for (const veg of vegetables) {
      const { vegName, totalPrice } = veg;

      // Find the selected vegetable by name and budgetId
      const selectedVeg = await SelectedVeg.findOne({
        where: {
          vegName,
          budgetId: userBudget.budgetId,
        },
      });

      // Convert totalPrice to number and add it

      if (selectedVeg) {
        // If the vegetable already exists in the user's budget, update the spent amount
        const newSpentAmount =
          selectedVeg.spendedAmount + parseFloat(totalPrice);

        console.log("totalPrice:", selectedVeg.totalPrice);
        console.log("totalPriceToBeSPend:", totalPrice);
        console.log("newSpentAmount:", newSpentAmount);

        // Update the selected vegetable's spent amount
        if (selectedVeg.totalPrice - newSpentAmount >= 0) {
          await selectedVeg.update({ spendedAmount: newSpentAmount });

          // If vegetable is successfully processed, add a success message
          messages.push(
            `'${vegName}' spending amount is updated in the budget`
          );

          totalVegPriceAtTime += parseFloat(totalPrice);
        } else {
          // If there is not enough money left, add an error message
          messages.push(`There is no money left for '${vegName}'.`);
        }
      } else {
        // If the vegetable doesn't exist, add an error message
        messages.push(`Please add '${vegName}' to your budget first.`);
      }
    }
    expensesTotalController.createExpensesTotal(
      "Vegetables",
      totalVegPriceAtTime,
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

// Export the addVeg and updateVeg functions
module.exports = { addVeg, updateVeg };
