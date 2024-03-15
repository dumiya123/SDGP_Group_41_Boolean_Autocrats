// TextInputField.js
import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const TextInputField = ({ placeholder, value, onChangeText, secureTextEntry, showPassword, onTogglePassword }) => {
  return (
    <View style={styles.inputContainer}>
      <MaterialIcons name={"person-outline"} size={26} color={"gray"} style={styles.icon} />
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
      />
      {secureTextEntry && (
        <TouchableOpacity style={styles.iconContainer} onPress={onTogglePassword}>
          <MaterialCommunityIcons
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    position: "relative",
    marginBottom: 20,
  },
  input: {
    height: Dimensions.get("window").height / 18,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "white",
    padding: 10,
    paddingLeft: 40,
    borderRadius: 10,
    width: Dimensions.get("window").width - 40,
  },
  icon: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1,
  },
  iconContainer: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

export default TextInputField;
