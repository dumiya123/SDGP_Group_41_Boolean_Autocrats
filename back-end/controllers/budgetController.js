const { User, Budget } = require('../models');

//TODO: BUDGET EDITING OF CONFIGURATIONS NEEDS TO BE DONE

//function to get budgets
async function getBudgets(req, res) {
    try {
        console.log('User:', req.user.id);

        const user = await User.findByPk(req.user.id, {
            include: [Budget],
        });

        if (!user) {
            return res.status(404).json({
                error: 'User not found',
            });
        }

        if (!user.Budget) {
            return res.status(200).json({
                data: {
                    user,
                    message: 'No budget found for the user',
                },
            });
        }

        return res.status(200).json({
            data: user,
        });
    } catch (error) {
        console.error('Error in getBudgets:', error);
        return res.status(500).json({
            error: 'Internal Server Error',
        });
    }
}

//function to create budget
async function createBudget(req, res) {
    try {
        const userId = req.user.id; // Get the user ID from the JWT token
        console.log('User ID:', userId);

        // Check if the user exists
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({
                error: 'User not found',
            });
        }

        // Extract the necessary data from req.body
        const { budgetname, receiveAlerts, totalAmount, remainingAmount } = req.body;

        // Create the budget associated with the user
        const budget = await Budget.create({
            budgetname: budgetname,
            receiveAlerts: receiveAlerts,
            totalAmount: totalAmount,
            remainingAmount: remainingAmount,
            budgetId: userId, // Set the userId to associate the budget with the user
        });

        return res.status(201).json({
           
            message: 'Budget created successfully',
        });
    } catch (error) {
        console.error('Error in createBudget:', error);
        return res.status(500).json({
            error: 'Internal Server Error',
        });
    }
}


module.exports = {
    getBudgets,
    createBudget
};
