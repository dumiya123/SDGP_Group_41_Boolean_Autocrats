import React from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
  Button,
} from "react-native";
import styles from "./ExpensesStyle";
import { Calendar } from "react-native-calendars";

const image_one = require("../Expenses/Expenses_Images/salary.png");
const image_two = require("../Expenses/Expenses_Images/expenses.png");
const image_three = require("../Expenses/Expenses_Images/education.png");
const image_four = require("../Expenses/Expenses_Images/health_care.png");
const image_five = require("../Expenses/Expenses_Images/groceries.png");

const Expenses = () => {
  return (
    <ScrollView>
      <View>
        <Text></Text>
        <Text style={styles.header}>Expenses</Text>
        <Text></Text>
        {/* Calendar Component */}

        <Calendar style={styles.calender} testID="calendar"></Calendar>

        <View>
          <Text></Text>
          <Text></Text>
          <Text style={styles.text}>Current Status</Text>
          <Text></Text>
          <ScrollView horizontal={true} style={styles.scrollView}>
            <ImageBackground source={image_one} style={styles.image}>
              <TouchableOpacity style={styles.balanceBox}>
                <Text style={styles.balanceText}>Total Salary</Text>
                <Text></Text>
                <Text></Text>
                <Text style={styles.balanceAmount}>Rs.50,000.00</Text>
              </TouchableOpacity>
            </ImageBackground>

            <ImageBackground source={image_two} style={styles.image}>
              <TouchableOpacity style={styles.balanceBox}>
                <Text style={styles.balanceText}>Total Expenses</Text>
                <Text></Text>
                <Text></Text>
                <Text style={styles.balanceAmount}>Rs.50,000.00</Text>
              </TouchableOpacity>
            </ImageBackground>
          </ScrollView>
          <Text></Text>

          <ScrollView style={styles.scrollView}>
            <Text style={styles.expenses}>Recent Expenses</Text>
            <Text></Text>

            <ImageBackground source={image_three} style={styles.image}>
              <TouchableOpacity style={styles.balanceBox}>
                <Text style={styles.balanceText}>Education</Text>
                <Text></Text>
                <Text style={styles.balanceAmount}>Rs.10,000.00</Text>
                <Text></Text>
              </TouchableOpacity>
            </ImageBackground>
            <Text></Text>

            <ImageBackground source={image_four} style={styles.image}>
              <TouchableOpacity style={styles.balanceBox}>
                <Text style={styles.balanceText}>Health Care</Text>
                <Text></Text>
                <Text style={styles.balanceAmount}>Rs.3000.00</Text>
                <Text></Text>
              </TouchableOpacity>
            </ImageBackground>
            <Text></Text>

            <ImageBackground source={image_five} style={styles.image}>
              <TouchableOpacity style={styles.balanceBox}>
                <Text style={styles.balanceText}>Groceries</Text>
                <Text></Text>
                <Text style={styles.balanceAmount}>Rs.3,000.00</Text>
                <Text></Text>
              </TouchableOpacity>
            </ImageBackground>

            <Text></Text>
          </ScrollView>
        </View>

        <Text></Text>
      </View>
    </ScrollView>
  );
};

export default Expenses;
