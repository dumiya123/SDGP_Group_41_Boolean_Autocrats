import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import styles from "./ExpensesStyle";
import { Calendar } from "react-native-calendars";

const Expenses = () => {
  return (
    <ScrollView>
    <View>
       
       <Text style={styles.header}>Expenses</Text>
      <Text></Text>
      {/* Calendar Component */}

      <Calendar style={styles.calender}></Calendar>

      <View>
        <Text></Text>
        <Text style={styles.text}>Your Status</Text>
        <Text></Text>
        <ScrollView horizontal={true} style={styles.scrollView}>
          <TouchableOpacity
            style={styles.balanceBox}
            
          >
            <Text style={styles.balanceText}> Education</Text>
            <Text style={styles.balanceAmount}>Rs.50,000.00</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.balanceBox}>
            <Text style={styles.balanceText}>Groceries</Text>
            <Text style={styles.balanceAmount}>Rs.50,000.00</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.balanceBox}>
            <Text style={styles.balanceText}>Health</Text>
            <Text style={styles.balanceAmount}>Rs.50,000.00</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.balanceBox}>
            <Text style={styles.balanceText}>Transport</Text>
            <Text style={styles.balanceAmount}>Rs.50,000.00</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

        
        
      <Text></Text>
      
    </View>
    </ScrollView>
  );
};

export default Expenses;
