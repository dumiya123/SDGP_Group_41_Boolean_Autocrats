const { SelectedVeg, Budget} = require('../models'); 

const selectedVegController = {
  addVeg: async (req, res) => {
    try {
      const { vegName, price ,imgSrc} = req.body;

      const userId = req.user.id;

      // Find the user's budget
      const userBudget = await Budget.findOne({
        where: { userId },
      });

      if (!userBudget) {
        return res.status(404).json({ message: 'User budget not found.' });
      }

      // Create a new selected vegetable
      const newSelectedVeg = await SelectedVeg.create({
        vegName,
        price,
        budgetId: userBudget.budgetId,
      });

      return res.status(201).json(newSelectedVeg);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  },
};

module.exports = selectedVegController;
