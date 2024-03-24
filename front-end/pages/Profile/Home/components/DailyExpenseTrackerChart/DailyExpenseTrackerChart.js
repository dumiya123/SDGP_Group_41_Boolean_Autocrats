import { Dimensions, StyleSheet, View, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { chartConfig } from "./config";
import { useState, useEffect } from "react";
import useTrackerFunctions from "./useTrackerFunctions";

const screenWidth = Dimensions.get("window").width;

const DailyExpenseTrackerChart = () => {
  const [chartParentWidth, setChartParentWidth] = useState(0);

  const { getAmountArrayFromExpenses, weeklyExpenseData } =
    useTrackerFunctions();

  useEffect(() => {
    console.log(weeklyExpenseData);
    if (Object.keys(weeklyExpenseData).length === 0) {
      console.log("dfdf");
      getAmountArrayFromExpenses();
    }
  }, [weeklyExpenseData]);

  return (
    <View
      style={styles.container}
      onLayout={({ nativeEvent }) =>
        setChartParentWidth(nativeEvent.layout.width)
      }
    >
      <Text style={styles.titleText}>{"Daily Exenses"}</Text>
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
