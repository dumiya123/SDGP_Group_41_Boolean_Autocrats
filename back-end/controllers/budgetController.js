const {
  User,
  Budget,
  SelectedVeg,
  SelectedFish,
  ExpensesTotal,
} = require("../models");
let selectedVegController = require("./selectedVegController");
let selectedFishController = require("./selectedFishController");

//TODO: BUDGET EDITING OF CONFIGURATIONS NEEDS TO BE DONE

//function to get budgets
async function getBudgets(req, res) {
  try {
    console.log("User:", req.user.id);

    const user = await User.findByPk(req.user.id, {
      include: [
        {
          model: Budget,
          include: [SelectedVeg, SelectedFish, ExpensesTotal],
          // Include SelectedVeg model through Budget association
        },
      ],
    });

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    if (!user.Budget) {
      return res.status(200).json({
        data: {
          user,
          message: "No budget found for the user",
        },
      });
    }

    return res.status(200).json({
      data: user,
    });
  } catch (error) {
    console.error("Error in getBudgets:", error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
}

async function updateBudget(req, res) {
  try {
    const userId = req.user.id;

    // Find the user's budget
    const userBudget = await Budget.findOne({
      where: { userId },
    });

    if (!userBudget) {
      return res.status(404).json({ message: "User budget not found." });
    }

    // Getting the products from the request
    const vegetables = req.body.Vegetables;
    const fish = req.body.Fish;

    let VegMessages = [];
    let FishMessages = [];

    console.log("Vegetables:", vegetables);
    console.log("Fish:", fish);

    // Update the vegetables by using the updateVeg function in selectedVegController
    if (!vegetables || vegetables.length === 0) {
      return res.status(400).json({ message: "No vegetable data provided." });
    } else {
      VegMessages = await selectedVegController.updateVeg(
        vegetables,
        userBudget
      );
    }

    // Update the fish by using the updateFish function in selectedFishController
    if (!fish || fish.length === 0) {
      return res.status(400).json({ message: "No fish data provided." });
    } else {
      FishMessages = await selectedFishController.updateFish(fish, userBudget);
    }

    // Send a success response after all updates are completed
    return res.status(200).json({
      message: "Budget updated successfully",
      VegMessages,
      FishMessages,
    });
  } catch (error) {
    console.error("Error in updateBudget:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

//function to create budget
async function createBudget(req, res) {
  try {
    const userId = req.user.id; // Get the user ID from the JWT token
    console.log("User ID:", userId);

    // Check if the user exists
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    // Extract the necessary data from req.body
    const { budgetname, receiveAlerts, totalAmount, remainingAmount } =
      req.body;

    // Create the budget associated with the user
    const budget = await Budget.create({
      budgetname: budgetname,
      receiveAlerts: receiveAlerts,
      totalAmount: totalAmount,
      remainingAmount: remainingAmount,
      userId: userId, // Set the userId to associate the budget with the user
    });

    return res.status(201).json({
      message: "Budget created successfully",
    });
  } catch (error) {
    console.error("Error in createBudget:", error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
}

module.exports = {
  getBudgets,
  createBudget,
  updateBudget,
};
