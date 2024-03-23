const {
  User,
  Budget,
  SelectedVeg,
  SelectedFish,
  SelectedMeat,
  SelectedBeverage,
  SelectedFrozenFood,
  ExpensesTotal,
} = require("../models");
let selectedVegController = require("./selectedVegController");
let selectedFishController = require("./selectedFishController");
let selectedBeveragesController = require("./selectedBeveragesController");
let selectedFrozenFoodController = require("./selectedFrozenFoodController");
let selectedMeatController = require("./selectedMeatController");

//TODO: BUDGET EDITING OF CONFIGURATIONS NEEDS TO BE DONE

//function to get budgets
async function getBudgets(req, res) {
  try {
    console.log("User:", req.user.id);

    const user = await User.findByPk(req.user.id, {
      include: [
        {
          model: Budget,
          include: [
            SelectedVeg,
            SelectedFish,
            SelectedMeat,
            ExpensesTotal,
            SelectedBeverage,
            SelectedFrozenFood,
          ],
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
    const vegetables = req.body.Vegetables || [];
    const fish = req.body.Fish || [];
    const meat = req.body.Meat || [];
    const beverages = req.body.Beverages || [];
    const frozenfood = req.body.FrozenFood || [];
    //const transport=req.body.Transport || [];

    let VegMessages = [];
    let FishMessages = [];
    let MeatMessages = [];
    let FrozenFoodMessages = [];
    let BeveragesMessages = [];

    // Update the vegetables if provided
    if (vegetables.length > 0) {
      VegMessages = await selectedVegController.updateVeg(
        vegetables,
        userBudget
      );
    }

    // Update the fish if provided
    if (fish.length > 0) {
      FishMessages = await selectedFishController.updateFish(fish, userBudget);
    }

    // Update the meat if provided
    if (meat.length > 0) {
      MeatMessages = await selectedMeatController.updateMeat(meat, userBudget);
    }

    // Update the beverages if provided
    if (beverages.length > 0) {
      BeveragesMessages = await selectedBeveragesController.updateBeverage(
        beverages,
        userBudget
      );
    }

    // Update the frozen food if provided
    if (frozenfood.length > 0) {
      FrozenFoodMessages =
        await selectedFrozenFoodController.updateSelectedFrozenFood(
          frozenfood,
          userBudget
        );
    }

    // Send a success response after all updates are completed
    return res.status(200).json({
      message: "Budget updated successfully",
      VegMessages,
      FishMessages,
      MeatMessages,
      BeveragesMessages,
      FrozenFoodMessages,
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
    const {
      budgetname,
      receiveAlerts,
      amountForBudget,
      spentBudget,
      monthlyIncome,
    } = req.body;

    // Create the budget associated with the user
    const budget = await Budget.create({
      budgetName: budgetname,
      receiveAlerts: receiveAlerts,
      amountForBudget: amountForBudget,
      spentBudget: spentBudget,
      monthlyIncome: monthlyIncome,
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
