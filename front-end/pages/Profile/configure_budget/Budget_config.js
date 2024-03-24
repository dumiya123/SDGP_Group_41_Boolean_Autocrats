// Developed by Dumindu Gamage

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ImageBackground,
  SafeAreaView,
  Switch,
  TouchableOpacity,
  Image,
} from "react-native";

import styles from "./BudgetConfigStyle";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { sendBudgetDataToBackend } from "./configBudgetFunctions";

const BudgetConfigurationScreen = () => {
  const navigation = useNavigation();
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [isAlertEnabled, setIsAlertEnabled] = useState(false);

  const saveBudgetConfiguration = async () => {
    try {
      await sendBudgetDataToBackend(income, isAlertEnabled, expenses); // Call the function with necessary parameters
      navigation.navigate("PROFILE"); // Navigate to the Home screen after saving the budget configuration
      console.log("Budget configuration saved successfully");
    } catch (error) {
      console.error("Error saving budget configuration:", error);
      // Handle error, e.g., display error message to user
    }
  };

  return (
    <View style={styles.background}>
      <SafeAreaView>
        <View>
          <ImageBackground
            source={require("../configure_budget/budget_images/configuer.avif")}
            style={styles.ImageBackground}
          ></ImageBackground>
        </View>

        <View style={styles.details}>
          <Text></Text>
          <Text style={styles.header}>Let's Configure Your Budget</Text>
          <Text></Text>
          <Text></Text>

          <Text style={styles.label}>Enter Name for your Budget</Text>
          <Text></Text>
          <TextInput
            style={styles.input}
            keyboardType="default"
            placeholder="  Enter Name for your Budget"
            value={income}
            onChangeText={(text) => setIncome(text)}
          />
          <Text></Text>

          <Text style={styles.label}>Enter Your monthly income</Text>
          <Text></Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="  Enter Your monthly income"
            value={expenses}
            onChangeText={(text) => setExpenses(text)}
          />
          <Text></Text>

          <Text style={styles.label}>Enter the Amount for the Budget</Text>
          <Text></Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder=" Enter the Amount for the Budget"
          />
          <Text></Text>

          <View style={styles.notificationContainer}>
            <Text style={styles.label_one}>Receive Alert Notification</Text>
            <Switch
              value={isAlertEnabled}
              onValueChange={(value) => setIsAlertEnabled(value)}
            />
          </View>
          <Text></Text>

          {/* Button to save budget configuration */}
          <TouchableOpacity
            style={styles.save_config_button}
            onPress={saveBudgetConfiguration}
          >
            <View style={styles.buttonContent}>
              <Icon
                name="save"
                size={20}
                color="#000"
                style={styles.buttonIcon}
              />

              <Text style={styles.config_button_text}>
                Save Budget Configuration
              </Text>
            </View>
          </TouchableOpacity>
          <Text></Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default BudgetConfigurationScreen;
