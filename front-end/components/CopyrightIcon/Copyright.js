import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the desired icon library

const Copyright = ({ text }) => {
  return (
    <View style={styles.container}>
      <Icon name="copyright" size={20} color="black" />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: "center",
    marginTop: 10,
  },
  text: {
    marginLeft: 5,
    fontSize: 16,
    color: 'black',
  },
});

export default Copyright;
