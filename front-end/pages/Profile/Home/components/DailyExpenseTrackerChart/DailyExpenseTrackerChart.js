import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { chartConfig } from "./config";
import useTrackerFunctions from "./useTrackerFunctions";

const screenWidth = Dimensions.get("window").width;

const DailyExpenseTrackerChart = () => {
  const [chartParentWidth, setChartParentWidth] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const { getAmountArrayFromExpenses, weeklyExpenseData } =
    useTrackerFunctions();

  useEffect(() => {
    console.log(weeklyExpenseData);
    if (Object.keys(weeklyExpenseData).length === 0 && !refreshing) {
      console.log("Fetching data...");
      getAmountArrayFromExpenses();
    }
  }, [weeklyExpenseData, refreshing]);

  const handleRefresh = () => {
    setRefreshing(true);
    getAmountArrayFromExpenses();
    setRefreshing(false);
  };

  return (
    <View
      style={styles.container}
      onLayout={({ nativeEvent }) =>
        setChartParentWidth(nativeEvent.layout.width)
      }
    >
      <Text style={styles.titleText}>{"Daily Expenses"}</Text>
      {Object.keys(weeklyExpenseData).length !== 0 && (
        <>
          {weeklyExpenseData.datasets[0].data[
            weeklyExpenseData.datasets[0].data.length - 1
          ] !== "0" ? (
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
          ) : (
            <Text style={styles.titleText}>{"No Expense History"}</Text>
          )}
        </>
      )}

      <TouchableOpacity style={styles.button} onPress={() => handleRefresh()}>
        <View style={styles.contentWrapper}>
          <Text style={styles.buttonText}>{"Refresh Data"}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    backgroundColor: "#F1F3F4",
    paddingHorizontal: 10,
    paddingBottom: 20,
    borderRadius: 10,
    width: screenWidth - 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titleText: {
    color: "#46523C",
    marginTop: 10,
    fontFamily: "Helvetica",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "green",
    width: 150,
    borderRadius: 10,
    alignSelf: "center",
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    flex: 1,
    alignSelf: "center",
    color: "white",
    fontSize: 12,
    fontWeight: "600",
    marginTop: 5,
  },
});

export default DailyExpenseTrackerChart;
