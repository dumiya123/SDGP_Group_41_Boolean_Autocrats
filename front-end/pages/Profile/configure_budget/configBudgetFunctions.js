const ipAddress = "68.183.183.164";

export const sendBudgetDataToBackend = async (
  income,
  isAlertEnabled,
  expenses
) => {
  try {
    const response = await fetch(`http://${ipAddress}:8080/user/createBudget`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers if required
      },
      body: JSON.stringify({
        budgetName: income,
        receiveAlerts: isAlertEnabled ? 1 : 0,
        amountForBudget: parseFloat(expenses),
        spentBudget: 0,
        monthlyIncome: parseFloat(expenses),
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to create budget");
    }

    const data = await response.json();
    console.log(data); // Log the response from the backend
    return data; // Return the response data
  } catch (error) {
    console.error("Error creating budget:", error);
    throw error; // Rethrow the error to handle it in the component
  }
};
