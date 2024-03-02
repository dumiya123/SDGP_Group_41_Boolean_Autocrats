export const WeeklyExpenseData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  datasets: [
    {
      data: [200, 450, 280, 800, 990, 430, 500, 700, 800],
    },
  ],
  legend: ["Daily Expenses for the past 10 days"],
};

export const chartConfig = {
  backgroundGradientFrom: "#000000",
  backgroundGradientTo: "#0f9b0f",
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 30,
  },
  propsForDots: {
    r: "6",
    strokeWidth: "3",
    stroke: "#ffa726",
  },
};
