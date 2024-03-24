const ipAddress = "192.168.1.6";
import { useState } from "react";

const useTrackerFunctions = () => {
  const [weeklyExpenseData, setWeeklyExpenseData] = useState({});

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

      setWeeklyExpenseData(WeeklyExpenseData);
    } catch (error) {
      // Handle any errors
      console.error("Error:", error.message);
    }
  };

  return {
    getAmountArrayFromExpenses,
    weeklyExpenseData,
  };
};

export default useTrackerFunctions;
