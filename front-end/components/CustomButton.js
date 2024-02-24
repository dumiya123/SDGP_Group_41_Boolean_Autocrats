// CustomButton.js
import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CustomButton = ({ onPress, text, icon, buttonColor }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer, { backgroundColor: buttonColor }]}
    >
      <Text style={styles.buttonText}>{text}</Text>
      {icon && <MaterialCommunityIcons name={icon} size={24} color="white"  />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 5,
    marginTop: 15,
    width: 200,
    alignSelf: "center",
  },
  buttonText: {
    paddingLeft: 10,
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    marginRight: 5,
    fontWeight: 'bold'
  }
});

export default CustomButton;
