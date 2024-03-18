import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "./ExpensesStyle";
import { Calendar } from "react-native-calendars";

const Expenses = () => {
  const [selectedDate, setSelectedDate] = useState(""); // State variable to hold the selected date

  const onDateSelect = (date) => {
    setSelectedDate(date.dateString); // Update the selected date
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
            {selectedDate ? selectedDate : ""}{" "}
          </Text>
        </Text>

        {/* Display the selected date */}
      </View>
    </ScrollView>
  );
};

export default Expenses;
