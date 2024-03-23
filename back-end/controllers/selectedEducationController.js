const { SelectedEducation, Budget } = require("../models"); // Import the SelectedTransport model

const addEducation = async (req, res) => {
  try {
    const { educationDescription, totalPrice } = req.body;
    const userId = req.user.id;

    // Find the user's budget
    const userBudget = await Budget.findOne({
      where: { userId },
    });

    if (!userBudget) {
      return res.status(404).json({ message: "User budget not found." });
    }

    // Create a new transport item
    const newEducationItem = await SelectedEducation.create({
      educationDescription,
      totalPrice,
      spentAmount: 0,
      budgetId: userBudget.budgetId,
    });

    return res.status(201).json(newEducationItem);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { addEducation };
