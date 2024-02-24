// Divider.js
import React from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';

const Divider = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: Dimensions.get("window").height / 30,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "black",
    marginHorizontal: 10,
  },
  text: {
    fontSize: 14,
    marginHorizontal: 10,
    color:'green'
  },
});

export default Divider;
