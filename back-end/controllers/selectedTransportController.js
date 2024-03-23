const { SelectedTransport, Budget } = require("../models"); // Import the SelectedTransport model

const addTransport = async (req, res) => {
  try {
    const { transportDescription, totalPrice } = req.body;
    const userId = req.user.id;

    // Find the user's budget
    const userBudget = await Budget.findOne({
      where: { userId },
    });

    if (!userBudget) {
      return res.status(404).json({ message: "User budget not found." });
    }

    // Create a new transport item
    const newTransportItem = await SelectedTransport.create({
      transportDescription,
      totalPrice,
      spentAmount: 0,
      budgetId: userBudget.budgetId,
    });

    return res.status(201).json(newTransportItem);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { addTransport };
