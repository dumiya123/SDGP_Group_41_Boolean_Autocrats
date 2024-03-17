import React, { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const PasswordInput = ({ value, onChangeText, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <MaterialIcons name="lock" size={24} color="gray" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={!showPassword}
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity
        onPress={() => setShowPassword(!showPassword)}
        style={styles.iconContainer}
        testID="eye-icon"
      >
        <MaterialCommunityIcons
          name={showPassword ? "eye-off-outline" : "eye-outline"}
          size={24}
          color="gray"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  input: {
    height: Dimensions.get("window").height / 18,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "#F3F8FF",
    padding: 10,
    paddingLeft: 40,
    borderRadius: 10,
    width: Dimensions.get("window").width - 40,
  },
  iconContainer: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  icon: {
    position: "absolute",
    left: 10,
    top: 7,
    zIndex: 1,
  },
});

export default PasswordInput;
