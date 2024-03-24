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

const getExpensesForDateRange = async (req, res) => {
  try {
    // Get the current date
    const currentDate = new Date();

    // Calculate the start date (9 days before the current date)
    const startDate = new Date(currentDate);
    startDate.setDate(startDate.getDate() - 9);

    const userId = req.user.id;

    let totalExpensesByDay = {};

    // Iterate over each day within the range
    for (
      let date = new Date(startDate);
      date <= currentDate;
      date.setDate(date.getDate() + 1)
    ) {
      // Calculate the start and end of the current date
      const startOfDay = new Date(date);
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date(date);
      endOfDay.setHours(23, 59, 59, 999);

      // Find expenses for the current date in the ExpensesTotal table
      const expenses = await ExpensesTotal.findAll({
        where: {
          budgetId: userId,
          createdAt: {
            [Op.gte]: startOfDay,
            [Op.lt]: endOfDay,
          },
        },
      });

      // Calculate total expenses for the current date
      let totalExpenses = 0;
      expenses.forEach((expense) => {
        totalExpenses += expense.totalExpenses;
      });

      // Store total expenses for the current date
      totalExpensesByDay[date.toISOString().split("T")[0]] = totalExpenses;
    }

    // Send the response back to the user
    res.json({
      description: `Expenses for each day over the last 10 days`,
      totalExpensesByDay,
    });
  } catch (error) {
    // Handle any errors and return an error response
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  createExpensesTotal,
  getExpensesForDate,
  getExpensesForDateRange,
};
