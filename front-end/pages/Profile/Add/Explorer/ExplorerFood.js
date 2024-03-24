import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import CardComponent from "../../../../components/CategoryCard/Card";
import { useNavigation } from "@react-navigation/native";

const FoodItems = () => {
  const navigation = useNavigation();
  const [categoryData, setCategoryData] = useState([]);

  const ipAddress = "192.168.1.13";

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make API request to get budget data
        const response = await fetch(`http://${ipAddress}:8080/user/getBudget`);
        const data = await response.json();

        // Extract relevant data for categories from API response
        const selectedVegs = data.data.Budget.SelectedVegs || [];
        const selectedFishes = data.data.Budget.SelectedFishes || [];
        const selectedMeats = data.data.Budget.SelectedMeats || [];
        const selectedBeverages = data.data.Budget.SelectedBeverages || [];
        const selectedFrozenFood = data.data.Budget.SelectedBeverages || [];

        // Calculate total price and total spent for vegetables
        let totalPriceVeg = selectedVegs.reduce(
          (acc, veg) => acc + veg.totalPrice,
          0
        );
        let totalSpentVeg = selectedVegs.reduce(
          (acc, veg) => acc + veg.spendedAmount,
          0
        );

        // Calculate total price and total spent for fishes
        let totalPriceFish = selectedFishes.reduce(
          (acc, fish) => acc + fish.totalPrice,
          0
        );
        let totalSpentFish = selectedFishes.reduce(
          (acc, fish) => acc + fish.spendedAmount,
          0
        );

        // Calculate total price and total spent for meat
        let totalPriceMeat = selectedMeats.reduce(
          (acc, meat) => acc + meat.totalPrice,
          0
        );
        let totalSpentMeat = selectedMeats.reduce(
          (acc, meat) => acc + meat.spentAmount,
          0
        );

        // Calculate total price and total spent for beverages
        let totalPriceBeverages = selectedBeverages.reduce(
          (acc, beverage) => acc + beverage.totalPrice,
          0
        );
        let totalSpentBeverages = selectedBeverages.reduce(
          (acc, beverage) => acc + beverage.spentAmount,
          0
        );

        // Calculate total price and total spent for frozen food
        let totalPriceFrozenFood = selectedFrozenFood.reduce(
          (acc, food) => acc + food.totalPrice,
          0
        );
        let totalSpentFrozenFood = selectedFrozenFood.reduce(
          (acc, food) => acc + food.spentAmount,
          0
        );

        // Set category data
        setCategoryData([
          {
            category: "VEGETABLES",
            totalSpent: totalSpentVeg,
            totalPrice: totalPriceVeg,
            percentage:
              totalPriceVeg !== 0 ? (totalSpentVeg / totalPriceVeg) * 100 : 0,
          },
          {
            category: "FISH",
            totalSpent: totalSpentFish,
            totalPrice: totalPriceFish,
            percentage:
              totalPriceFish !== 0
                ? (totalSpentFish / totalPriceFish) * 100
                : 0,
          },
          {
            category: "MEAT",
            totalSpent: totalSpentMeat,
            totalPrice: totalPriceMeat,
            percentage:
              totalPriceMeat !== 0
                ? (totalSpentMeat / totalPriceMeat) * 100
                : 0,
          },
          {
            category: "BEVERAGES",
            totalSpent: totalSpentBeverages,
            totalPrice: totalPriceBeverages,
            percentage:
              totalPriceBeverages !== 0
                ? (totalSpentBeverages / totalPriceBeverages) * 100
                : 0,
          },
          // Add Frozen Food category
          {
            category: "FROZEN FOOD",
            totalSpent: totalSpentFrozenFood, // Set initial total spent to 0
            totalPrice: totalPriceFrozenFood, // Set initial total price to 0
            percentage:
              totalPriceFrozenFood !== 0
                ? (totalSpentFrozenFood / totalPriceFrozenFood) * 100
                : 0, // Set initial percentage to 0
          },
        ]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const navigateToCategoryScreen = (category) => {
    console.log(`${category.toUpperCase()}SCREEN`);
    navigation.navigate(`${category.toUpperCase()}SCREEN`);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        {/* Render cards for all categories */}
        {["VEGETABLES", "FISH", "MEAT", "BEVERAGES", "FROZEN FOOD"].map(
          (category, index) => {
            const categoryDataItem = categoryData.find(
              (item) => item.category === category
            ) || {
              category: category,
              totalSpent: 0,
              totalPrice: 0,
              percentage: 0,
            };
            return (
              <CardComponent
                key={index}
                image={
                  categoryDataItem.category === "VEGETABLES"
                    ? require("../AddImages/vegetables.jpg")
                    : categoryDataItem.category === "FISH"
                    ? require("../AddImages/fish.jpg")
                    : categoryDataItem.category === "MEAT"
                    ? require("../AddImages/meat.jpeg")
                    : categoryDataItem.category === "BEVERAGES"
                    ? require("../AddImages/beverages.jpg")
                    : // Add image for Frozen Food category
                      require("../AddImages/frozenfood.jpg")
                }
                date="2024-02-28"
                off={`${categoryDataItem.category} ${Math.round(
                  categoryDataItem.totalPrice === 0
                    ? 0
                    : 100 - categoryDataItem.percentage
                )}%`}
                offText={`You have spent ${Math.round(
                  categoryDataItem.percentage
                )}%. Time to add your favorite ${categoryDataItem.category.toLowerCase()}!`}
                onClicked={() =>
                  navigateToCategoryScreen(categoryDataItem.category)
                }
              />
            );
          }
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FoodItems;
