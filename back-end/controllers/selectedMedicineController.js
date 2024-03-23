const { SelectedMedicine, Budget } = require("../models"); // Import the SelectedTransport model

const addMedicine = async (req, res) => {
  try {
    const { medicineDescription, totalPrice } = req.body;
    const userId = req.user.id;

    // Find the user's budget
    const userBudget = await Budget.findOne({
      where: { userId },
    });

    if (!userBudget) {
      return res.status(404).json({ message: "User budget not found." });
    }

    // Create a new transport item
    const newMedicineItem = await SelectedMedicine.create({
      medicineDescription,
      totalPrice,
      spentAmount: 0,
      budgetId: userBudget.budgetId,
    });

    return res.status(201).json(newMedicineItem);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { addMedicine };