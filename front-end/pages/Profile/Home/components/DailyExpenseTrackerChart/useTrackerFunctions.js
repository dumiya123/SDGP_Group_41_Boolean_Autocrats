const ipAddress = "192.168.1.3";
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

      console.log(response, "this");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Extract expenses details from the response
      const { expensesDetails } = await response.json();

      // Map through expenses details and extract amounts
      const amountArray = expensesDetails.map((expense) => expense.amount);
      console.log(amountArray, "sas");

      // Create an array with 10 zeros
      let arrayToAdded = Array(10).fill("0");

      console.log(reversedAmountArray, "reverse");

      if (amountArray.length !== 0) {
        // Replace zeros in arrayToAdded with elements from reversedAmountArray
        amountArray.forEach((amount, index) => {
          arrayToAdded[index] = amount;
        });
      }
      console.log(arrayToAdded, "arrayToAdded");
      // Reverse the amountArray
      let reversedAmountArray = arrayToAdded.reverse();
      // Construct WeeklyExpenseData object
      const WeeklyExpenseData = {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        datasets: [
          {
            data: reversedAmountArray,
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
