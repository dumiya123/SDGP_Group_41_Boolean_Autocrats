import { useEffect, useState } from "react";

const useCarouselData = () => {
  const [carouselData, setCarouselData] = useState([]);

  const ipAddress = "192.168.1.13";

  const getExpenseData = async () => {
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

      const expenseData = [
        {
          expenseType: "Vegetables",
          topIconName: "nutrition",
          setBudget: data.Budget.SelectedVegs[0]?.totalPrice.toString() || "0",
          spentAmount: data.Budget.SelectedVegs.reduce(
            (total, item) => total + item.spendedAmount,
            0
          ).toString(),
        },
        {
          expenseType: "Fish",
          topIconName: "fish",
          setBudget:
            data.Budget.SelectedFishes[0]?.totalPrice.toString() || "0",
          spentAmount: data.Budget.SelectedFishes.reduce(
            (total, item) => total + item.spendedAmount,
            0
          ).toString(),
        },
        {
          expenseType: "Meat",
          topIconName: "pizza",
          setBudget: data.Budget.SelectedMeats[0]?.totalPrice.toString() || "0",
          spentAmount: data.Budget.SelectedMeats.reduce(
            (total, item) => total + item.spendedAmount,
            0
          ).toString(),
        },
        {
          expenseType: "Beverages",
          topIconName: "beer",
          setBudget:
            data.Budget.SelectedBeverages[0]?.totalPrice.toString() || "0",
          spentAmount: data.Budget.SelectedBeverages.reduce(
            (total, item) => total + item.spendedAmount,
            0
          ).toString(),
        },
        {
          expenseType: "Frozen foods",
          topIconName: "snow",
          setBudget:
            data.Budget.SelectedFrozenFoods[0]?.totalPrice.toString() || "0",
          spentAmount: data.Budget.SelectedFrozenFoods.reduce(
            (total, item) => total + item.spendedAmount,
            0
          ).toString(),
        },
        {
          expenseType: "Transports",
          topIconName: "train",
          setBudget:
            data.Budget.SelectedTransports[0]?.totalPrice.toString() || "0",
          spentAmount: data.Budget.SelectedTransports.reduce(
            (total, item) => total + item.spendedAmount,
            0
          ).toString(),
        },
      ];

      setCarouselData(expenseData);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return {
    getExpenseData,
    carouselData,
  };
};

export default useCarouselData;
