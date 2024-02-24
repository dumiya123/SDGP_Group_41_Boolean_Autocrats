// SettingsScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange', padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' }}>Settings</Text>
      <View style={{ backgroundColor: 'white', padding: 16, borderRadius: 10, marginTop: 20 }}>
        {/* Add your settings-related components/content here */}
        <Text>Profile Goes here</Text>
      </View>
    </View>
  );
};

export default SettingsScreen;
