/*
  File: Budget_config.js
  Author: Dumindu Gamage
  Description: This script for configure budget screen
  
*/

//import necessary modules from react

// Import necessary React Native components
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const BudgetConfigurationScreen = () => {
  // State variables to store budget details
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');

  // Function to handle saving the budget configuration
  const saveBudgetConfiguration = () => {
    
    console.log('Saving Budget Configuration:', { income, expenses });
  };

  return (
    
    <View style={styles.container}>
      <Text>Lets Configure Your Budget</Text>
      
      <Text></Text>
      <Text></Text>
      <Text style={styles.label}>Enter Monthly Income:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter your income"
        value={income}
        onChangeText={(text) => setIncome(text)}
      />

      <Text style={styles.label}>Enter Monthly Expenses:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter your expenses"
        value={expenses}
        onChangeText={(text) => setExpenses(text)}
      />

      <Button title="Save Configuration" onPress={saveBudgetConfiguration} />

      
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default BudgetConfigurationScreen;









