import React from 'react';
import { View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const BudgetGraph = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      data: [20, 45, 28, 80, 99, 43]
    }]
  };

  return (
    <View>
      <LineChart
        data={data}
        width={400}
        height={220}
        yAxisLabel={'$'}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    </View>
  );
};

export default BudgetGraph;
