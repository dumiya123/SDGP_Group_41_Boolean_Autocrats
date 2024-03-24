const ipAddress = "192.168.1.3";

// Function to call the endpoint and return the amount array
const getAmountArrayFromExpenses = async () => {
  console.log("sas up");
  try {
    // Make GET request to the endpoint
    const response = await fetch(
      `http://${ipAddress}:8080/user/getExpensesForDateRange`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Extract expenses details from the response
    const { expensesDetails } = await response.json();

    // Map through expenses details and extract amounts
    const amountArray = expensesDetails.map((expense) => expense.amount);
    console.log(amountArray, "sas");

    // Construct WeeklyExpenseData object
    const WeeklyExpenseData = {
      labels: ["1", "2", "3", "4", "5"],
      datasets: [
        {
          data: amountArray,
        },
      ],
      legend: ["Daily Expenses for the past 10 days"],
    };

    return WeeklyExpenseData;
  } catch (error) {
    // Handle any errors
    console.error("Error:", error.message);
    return []; // Return empty array in case of error
  }
};

module.exports = { getAmountArrayFromExpenses };
