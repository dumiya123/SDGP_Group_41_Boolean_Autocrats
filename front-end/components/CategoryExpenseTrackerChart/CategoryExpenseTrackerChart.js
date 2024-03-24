import { Dimensions, StyleSheet, View, Text } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { chartConfig } from "./config";
import { useEffect, useState } from "react";
import useCategoryExpenseData from "./useCategoryExpenseData";

const screenWidth = Dimensions.get("window").width;

const CategoryExpenseTrackerChart = () => {
  const [chartParentWidth, setChartParentWidth] = useState(0);
  const { getCategoryData, categoryExpenseData } = useCategoryExpenseData();

  useEffect(() => {
    if (
      categoryExpenseData !== null &&
      Object.keys(categoryExpenseData).length !== 0
    ) {
      getCategoryData();
    }
  }, [categoryExpenseData]);

  return (
    <View
      style={styles.container}
      onLayout={({ nativeEvent }) =>
        setChartParentWidth(nativeEvent.layout.width)
      }
    >
      <Text style={styles.titleText}>{"Your Expenses"}</Text>
      {categoryExpenseData !== null &&
      Object.keys(categoryExpenseData).length !== 0 ? (
        <BarChart
          style={{
            borderRadius: 16,
            margin: 10,
            padding: 5,
          }}
          data={categoryExpenseData}
          width={chartParentWidth - 20}
          height={450}
          yAxisLabel="Rs."
          chartConfig={chartConfig}
          verticalLabelRotation={90}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "flex-start",
    alignItems: "center",
    height: "auto",
    margin: 10,
    backgroundColor: "#CCD3CA",
    padding: 20,
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

export default CategoryExpenseTrackerChart;
