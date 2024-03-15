import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ForgetPasswordLink = ({ title, style }) => {
  const navigation = useNavigation();

  const handleForgetPassword = () => {
    navigation.navigate("Verification Email");
  };

  return (
    <TouchableOpacity onPress={handleForgetPassword} style={styles.container}>
      <Text style={styles.ForgetPwText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignSelf: 'center',
  },
  ForgetPwText: {
    color: "midnightblue",
    fontSize: 14,
  },
});

export default ForgetPasswordLink;
