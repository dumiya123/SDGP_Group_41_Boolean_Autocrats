import React from "react";
import { View } from "react-native";
import ExpenseTrackerCarousel from "./components/ExpenseTrackerCarousel/ExpenseTrackerCarousel";
import DailyExpenseTrackerChart from "./components/DailyExpenseTrackerChart/DailyExpenseTrackerChart";

const Home = () => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <ExpenseTrackerCarousel />
        <DailyExpenseTrackerChart />
      </View>
    </>
  );
};

export default Home;
