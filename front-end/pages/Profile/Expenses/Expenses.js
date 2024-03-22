import React, { useState } from "react";
import { Text, View, ScrollView, TouchableOpacity, Alert } from "react-native";
import styles from "./ExpensesStyle";
import { Calendar } from "react-native-calendars";

const Expenses = () => {
  const [selectedDate, setSelectedDate] = useState(""); // State variable to hold the selected date
  const [expensesData, setExpensesData] = useState(null); // State variable to hold expenses data
  const ipAddress = "192.168.1.8"; // Variable for IP address

  const onDateSelect = async (date) => {
    setSelectedDate(date.dateString); // Update the selected date

    try {
      const response = await fetch(
        `http://${ipAddress}:8080/user/calenderExpenses`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ date: date.dateString }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setExpensesData(data);
    } catch (error) {
      Alert.alert("Error", "Failed to fetch expenses data");
    }
  };

  return (
    <ScrollView>
      <View>
        <Text></Text>
        <Text style={styles.header}>Pick a date to see your expenses!</Text>
        <Text></Text>
        {/* Calendar Component */}
        <View style={styles.calenderContainer}>
          <Calendar
            style={styles.calender}
            onDayPress={onDateSelect} // Handle date selection
            markedDates={{ [selectedDate]: { selected: true } }} // Highlight the selected date
          />
        </View>

        <Text style={styles.selectedDateContainer}>
          <Text>SELECTED DATE</Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text style={styles.selectedDate}>
            {selectedDate ? selectedDate : ""}
          </Text>
        </Text>

        {/* Display expenses data */}
        {expensesData && (
          <View style={styles.expensesDataContainer}>
            <Text style={styles.expensesDataTitle}>
              {expensesData.description}
            </Text>
            {expensesData.expensesDetails.map((expense, index) => (
              <View key={index} style={styles.expenseCard}>
                <Text style={styles.expenseDescription}>
                  {expense.description}
                </Text>
                <Text style={styles.expenseAmount}>{expense.amount}</Text>
              </View>
            ))}
            <Text style={styles.totalExpenses}>
              Total Expenses: {expensesData.totalExpenses}
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Expenses;
