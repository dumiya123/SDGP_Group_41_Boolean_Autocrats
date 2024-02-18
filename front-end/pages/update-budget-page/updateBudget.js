
import React from 'react';
import { View, Text } from 'react-native';

const UpdateBudget = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange', padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' }}>update budget</Text>
      <View style={{ backgroundColor: 'white', padding: 16, borderRadius: 10, marginTop: 20 }}>
        {/* Add your settings-related components/content here */}
        <Text>update budget</Text>
      </View>
    </View>
  );
};

export default UpdateBudget;