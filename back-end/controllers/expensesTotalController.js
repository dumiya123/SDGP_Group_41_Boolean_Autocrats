const { ExpensesTotal } = require("../models");
const { Op } = require("sequelize");

// Function to create expensesTotal
const createExpensesTotal = async (description, totalExpenses, budgetId) => {
  console.log(description);
  console.log(totalExpenses);
  console.log(budgetId);
  try {
    // Create expensesTotal directly with provided parameters
    const newExpensesTotal = await ExpensesTotal.create({
      description,
      totalExpenses,
      budgetId,
    });
    // Return the created expensesTotal
    return newExpensesTotal;
  } catch (error) {
    // Handle any errors and return an error response
    throw new Error(error.message);
  }
};

const getExpensesForDate = async (req, res) => {
  try {
    // Extract date from the request object
    const { date } = req.body;

    // Find expenses for the specified date in the ExpensesTotal table
    const expenses = await ExpensesTotal.findAll({
      where: {
        createdAt: {
          [Op.gte]: new Date(date), // Filter expenses created on or after the specified date
          [Op.lt]: new Date(new Date(date).getTime() + 24 * 60 * 60 * 1000), // Filter expenses created before the next day
        },
      },
    });

    // Calculate total expenses for the date
    let totalExpenses = 0;
    const expensesDetails = expenses.map((expense) => {
      totalExpenses += expense.totalExpenses;
      return {
        description: expense.description,
        amount: expense.totalExpenses,
      };
    });

    // Send the response back to the user
    res.json({
      description: `Expenses for ${date}`,
      expensesDetails,
      totalExpenses,
    });
  } catch (error) {
    // Handle any errors and return an error response
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createExpensesTotal, getExpensesForDate };
