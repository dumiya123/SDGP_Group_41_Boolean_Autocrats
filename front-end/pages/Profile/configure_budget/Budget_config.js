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
import { ScrollView } from "react-native-gesture-handler";

const BudgetConfigurationScreen = () => {
  // State variables to store budget details
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  // State variable to store the selected item
  const [isAlertEnabled, setIsAlertEnabled] = useState(false);

  // Function to handle saving the budget configuration
  const saveBudgetConfiguration = () => {
    console.log("Saving Budget Configuration:", { income, expenses });
  };

  return (
    <ScrollView>
      <ImageBackground
        source={require("../configure_budget/budget_images/envelope.png")}
        style={styles.ImageBackground}
      >
        <SafeAreaView style={styles.background}>
          <View>
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
            <TouchableOpacity style={styles.save_config_button}>
              <View style={styles.buttonContent}>
                <Icon
                  name="save"
                  size={40}
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
      </ImageBackground>
    </ScrollView>
  );
};

export default BudgetConfigurationScreen;
