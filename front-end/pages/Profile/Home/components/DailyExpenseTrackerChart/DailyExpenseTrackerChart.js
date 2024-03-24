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
          <Text style={styles.titleText}>{"Daily Expenses"}</Text>
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
      {/* {Object.keys(weeklyExpenseData).length !== 0 ? (
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
      )} */}
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
    marginBottom: 15,
  },
  button: {
    backgroundColor: "green",
    width: 200,
    borderRadius: 10,
    alignSelf: "center",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    flex: 1,
    alignSelf: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 11,
  },
});

export default DailyExpenseTrackerChart;
