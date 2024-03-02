import { Dimensions, StyleSheet, View, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { chartConfig, WeeklyExpenseData } from "./config";
import { useState } from "react";

const screenWidth = Dimensions.get("window").width;

const DailyExpenseTrackerChart = () => {
  const [chartParentWidth, setChartParentWidth] = useState(0);

  return (
    <View
      style={styles.container}
      onLayout={({ nativeEvent }) =>
        setChartParentWidth(nativeEvent.layout.width)
      }
    >
      <Text style={styles.titleText}>{"Daily Expenses"}</Text>
      <LineChart
        data={WeeklyExpenseData}
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
    height: 300,
    margin: 10,
    backgroundColor: "#CCD3CA",
    paddingHorizontal: 10,
    paddingVertical: 20,
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
