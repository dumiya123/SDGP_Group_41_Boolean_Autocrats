import React, { Component, useState } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import AddItemForm from "../../../../components/AddToCategory/addToCategory";
import { addTransport } from "../Transports/transportFunctions";

const TransportScreen = () => {
  const [formData, setFormData] = useState({
    totalPrice: "",
    transportDescription: "",
  });

  const handleFormSubmit = async () => {
    try {
      const { success, data, error } = await addTransport(formData);
      if (success) {
        console.log("Response from addTransport:", data);
        // Handle response data as needed
      } else {
        console.error("Error while calling addTransport:", error);
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
      source={require("../../Add/AddImages/illustrations/Transports.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <AddItemForm
          categoryName="Transport"
          onSubmit={handleFormSubmit}
          onChange={handleChange}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover", // or 'stretch' or 'contain'
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TransportScreen;
