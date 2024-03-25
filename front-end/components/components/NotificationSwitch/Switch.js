import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const NotificationSwitch = ({ label, isLast }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => {
      const newState = !previousState;
      if (newState) {
        console.log(`Switch for "${label}" is enabled`);
      } else {
        console.log(`Switch for "${label}" is disabled`);
      }
      return newState;
    });
  };

  return (
    <View style={[styles.switchContainer, isLast && styles.noBorder]}>
      <Text style={styles.label}>{label}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#183D3D" }}
        thumbColor={isEnabled ? "#76ABAE" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  noBorder: {
    borderBottomWidth: 0,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NotificationSwitch;
