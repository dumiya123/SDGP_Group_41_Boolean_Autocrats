import React, { useState, useEffect } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import AddItemForm from "../../../../components/AddToCategory/addToCategory";
import { addMedicine } from "../Pharmacy/pharmacyFunctions";

const PharmacyScreen = () => {
  const [formData, setFormData] = useState({
    totalPrice: "",
    medicineDescription: "",
  });
  const [categoryData, setCategoryData] = useState({
    totalPrice: 0,
    remainingAmount: 0,
    percentage: 0,
  });

  const ipAddress = "68.183.183.164";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://${ipAddress}:8080/user/getBudget`);
        const data = await response.json();

        // Extract relevant data for the pharmacy category from API response
        const selectedMedicine = data.data.Budget.SelectedMedicine || [];

        console.log("Selected Medicine:", selectedMedicine);

        let totalPrice = 0;
        let totalSpent = 0;

        // Calculate total price and total spent for the pharmacy category
        selectedMedicine.forEach((medicine) => {
          totalPrice += medicine.totalPrice || 0;
          totalSpent += medicine.spentAmount || 0;
        });
        console.log("Total Price:", totalPrice); // Debug log to check total price
        console.log("Total Spent:", totalSpent); // Debug log to check total spent

        let remainingAmount = totalPrice - totalSpent;
        let percentage = 0;

        // Calculate percentage if remaining amount is higher than 0
        if (remainingAmount > 0) {
          percentage = (remainingAmount / totalPrice) * 100;
        }

        // Set category data for the pharmacy category
        setCategoryData({
          totalPrice: totalPrice,
          remainingAmount: remainingAmount,
          percentage: percentage,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleFormSubmit = async () => {
    try {
      const { success, data, error } = await addMedicine(formData);
      if (success) {
        console.log("Response from addMedicine:", data);
        // Handle response data as needed
      } else {
        console.error("Error while calling addMedicine:", error);
        // Handle error
      }
    } catch (error) {
      console.error("Error while submitting form:", error);
      // Handle error
    }
  };

  const handleChange = (name, value) => {
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <ImageBackground
      source={require("../../Add/AddImages/illustrations/pharmaceutical-industry.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <AddItemForm
          categoryName="Pharmacy"
          onSubmit={handleFormSubmit}
          onChange={handleChange}
          totalAmount={categoryData.totalPrice}
          remainingAmount={
            isNaN(categoryData.remainingAmount)
              ? 0
              : categoryData.remainingAmount
          }
          percentage={categoryData.percentage.toFixed(2)}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PharmacyScreen;
