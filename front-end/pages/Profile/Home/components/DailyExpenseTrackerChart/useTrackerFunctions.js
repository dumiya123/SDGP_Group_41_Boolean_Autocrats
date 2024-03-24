import { useState } from "react";

const useTrackerFunctions = () => {
  const [weeklyExpenseData, setWeeklyExpenseData] = useState({});

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

      console.log(response, "this");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Extract expenses details from the response
      const { totalExpensesByDay } = await response.json();
      console.log(totalExpensesByDay, "look here");

      // Extract amounts for each day
      const amounts = Object.values(totalExpensesByDay);
      console.log(amounts, "amounts");

      // Construct WeeklyExpenseData object
      const WeeklyExpenseData = {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        datasets: [
          {
            data: amounts,
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
