import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, ImageBackground } from "react-native";
import { Picker } from "@react-native-picker/picker";

const ManuallyUpdateBudget = () => {
  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [updateExpense, setUpdateExpense] = useState("");

  const handleSubmit = () => {
    // Implement form submission logic here
    // This could involve sending data to a server or performing other actions
    console.log("Product:", product);
    console.log("Description:", description);
    console.log("Total Amount:", totalAmount);
    console.log("Update Expense:", updateExpense);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground source={require('../../../Add/AddImages/illustrations/updateExpences.jpg')} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <View style={styles.inputContainer}>
            <View style={styles.descriptionContainer}>
              <TextInput
                style={[styles.textInput, styles.descriptionInput]}
                value={description}
                onChangeText={setDescription}
                placeholder="Enter description"
                placeholderTextColor="white"
                textAlignVertical="center" // Align placeholder text vertically
              />
            </View>
            <View style={styles.amountContainer}>
              <TextInput
                style={styles.textInput}
                value={totalAmount}
                onChangeText={setTotalAmount}
                placeholder="Enter total amount"
                placeholderTextColor="white"
                keyboardType="numeric"
              />
            </View>
          </View>
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Update Expenses</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={product}
          onValueChange={(itemValue, itemIndex) => {
            setProduct(itemValue);
            console.log("Selected Product:", itemValue); // Debug the selected product
          }}
          style={styles.picker}
        >
          <Picker.Item label="Select a product..." value={null} />
          <Picker.Item label="Transports" value="Transports" />
          <Picker.Item label="Education" value="Education" />
          <Picker.Item label="Pharmacy" value="Pharmacy" />
          <Picker.Item label="Entertainment" value="Entertainment" />
          <Picker.Item label="Food" value="Food" />
        </Picker>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    borderRadius: 60,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.1)", // Adjust opacity by changing the last value (0.5 means 50% opacity)
    padding: 20,
    paddingTop: 180, // Adjust the padding top to maintain space for the product picker
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#fff", // Make text color white for better visibility
  },
  inputContainer: {
    marginBottom: 40,
  },
  descriptionContainer: {
    marginBottom: 20,
    
  },
  amountContainer: {},
  fieldLabel: {
    fontSize: 16,
  },
  textInput: {
    padding: 20,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 15,
    backgroundColor:"rgba(149, 165, 166,0.6)",
  },
  descriptionInput: {
    height: 60,
    paddingTop: 20,
    paddingBottom: 20,
  },
  pickerContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  picker: {
    width: "100%",
    color: "#fff",
  },
  submitButton: {
    backgroundColor: "#007bff",
    borderRadius: 5,
    padding: 10, // Decreased padding
    alignItems: "center",
    alignSelf: "center", // Align to center horizontally
    width: 200, // Set a fixed width
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default ManuallyUpdateBudget;
