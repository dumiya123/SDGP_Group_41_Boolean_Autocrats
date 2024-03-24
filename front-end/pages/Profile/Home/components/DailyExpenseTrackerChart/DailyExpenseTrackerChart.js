import { Dimensions, StyleSheet, View, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { chartConfig } from "./config";
import { useState, useEffect } from "react";
import { getAmountArrayFromExpenses } from "./trackerFunctions";

const screenWidth = Dimensions.get("window").width;

const DailyExpenseTrackerChart = () => {
  const [chartParentWidth, setChartParentWidth] = useState(0);
  const [weeklyExpenseData, setWeeklyExpenseData] = useState({});
  useEffect(() => {
    console.log("useEffect hook is running...");

    const fetchWeeklyExpenseData = async () => {
      try {
        const data = await getAmountArrayFromExpenses();
        console.log(data, "data");
        setWeeklyExpenseData(data); // Extracting data array from the datasets object
      } catch (error) {
        console.error("Error fetching weekly expense data:", error);
      }
    };

    fetchWeeklyExpenseData();
  }, []);

  return (
    <View
      style={styles.container}
      onLayout={({ nativeEvent }) =>
        setChartParentWidth(nativeEvent.layout.width)
      }
    >
      <Text style={styles.titleText}>{"Daily Expenses"}</Text>
      <LineChart
        data={weeklyExpenseData}
        width={chartParentWidth - 20}
        height={220}
        chartConfig={chartConfig}
        bezier
        style={{
          borderRadius: 30,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    alignSelf: "flex-start",
    alignItems: "center",
    height: 350,
    margin: 10,
    backgroundColor: "#CCD3CA",
    paddingHorizontal: 10,
    paddingBottom: 20,
    borderRadius: 10,
    width: screenWidth - 20,
  },
  titleText: {
    color: "#092635",
    fontSize: 30,
    fontWeight: "900",
    alignSelf: "flex-start",
    marginBottom: 15,
  },
});

export default DailyExpenseTrackerChart;
