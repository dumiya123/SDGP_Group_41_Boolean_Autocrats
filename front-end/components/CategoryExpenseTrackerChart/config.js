export const chartConfig = {
  backgroundGradientFrom: "#000000",
  backgroundGradientTo: "#0f9b0f",
  color: (opacity = 1) => `rgba(25, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(25, 255, 255, ${opacity})`,
  strokeWidth: 5,
  barPercentage: 0.5,
  propsForLabels: {
    fontSize: "10",
  },
  fillShadowGradient: "#FF597B",
  fillShadowGradientOpacity: 1,
};
