const { SelectedVeg, Budget } = require("../models");

const selectedVegController = {
  addVeg: async (req, res) => {
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
  },
};

module.exports = selectedVegController;
