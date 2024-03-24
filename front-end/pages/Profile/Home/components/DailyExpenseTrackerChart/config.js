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
