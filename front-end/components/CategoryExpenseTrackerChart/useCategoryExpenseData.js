import { useEffect, useState } from "react";

const useCategoryExpenseData = () => {
  const [categoryExpenseData, setCategoryExpenseData] = useState({
    labels: [
      "Vegetables",
      "Fish",
      "Meat",
      "Beverages",
      "Frozen foods",
      "Transports",
    ],
    datasets: [
      {
        data: [0, 0, 0, 0, 0, 0, 0],
      },
    ],
  });

  const ipAddress = "192.168.1.13";

  const getCategoryData = async () => {
    try {
      const response = await fetch(`http://${ipAddress}:8080/user/getBudget`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const { data } = await response.json();

      const categories = [
        "SelectedVegs",
        "SelectedFishes",
        "SelectedMeats",
        "SelectedBeverages",
        "SelectedTransports",
        "SelectedFrozenFoods",
      ];
      const totalSpentAmounts = categories.map((category) => {
        const items = data.Budget[category];
        return items.reduce((total, item) => total + item.spendedAmount, 0);
      });

      const ExpenseData = {
        labels: [
          "Vegetables",
          "Fish",
          "Meat",
          "Beverages",
          "Frozen foods",
          "Transports",
        ],
        datasets: [
          {
            data: totalSpentAmounts || [0, 0, 0, 0, 0, 0, 0],
          },
        ],
      };

      setCategoryExpenseData(ExpenseData);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  return {
    getCategoryData,
    categoryExpenseData,
  };
};

export default useCategoryExpenseData;
