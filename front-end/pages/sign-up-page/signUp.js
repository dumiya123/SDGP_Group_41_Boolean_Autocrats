import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import useSignUpFunctions from "./useSignUpFunctions";

const logoImg = require("./images/signup.png");

const SignupScreen = () => {
  const [isSelected, setSelection] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  const {
    userName,
    email,
    password,
    loading,
    setUserName,
    setEmail,
    setPassword,
    handleSignup,
    onLoginClick,
  } = useSignUpFunctions();

  const togglePasswordVisibility = () => {
    setIsPasswordShown((prev) => !prev);
  };

  const validatePassword = (text) => {
    if (text.length < 5 || !/[A-Z]/.test(text) || !/[a-z]/.test(text)) {
      setPasswordError(
        "Password must have at least 5 characters with upper and lower case letters."
      );
    } else {
      setPasswordError("");
    }
    setPassword(text);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    if (!validateEmail(text)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />

      <Text style={styles.title}>Hello! Register to get Started!</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Username"
          value={userName}
          onChangeText={(text) => setUserName(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, emailError ? styles.inputError : null]}
          placeholder="Enter Email"
          value={email}
          onChangeText={handleEmailChange}
        />
      </View>
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry={!isPasswordShown}
          value={password}
          onChangeText={validatePassword}
        />
        <TouchableOpacity
          style={styles.passwordVisibilityToggle}
          onPress={togglePasswordVisibility}
        >
          <Ionicons
            name={isPasswordShown ? "eye" : "eye-off"}
            size={19}
            color={"black"}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={!isPasswordShown}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          checked={isSelected}
          onPress={() => setSelection(!isSelected)}
          containerStyle={styles.checkbox}
          iconType="material"
          checkedIcon="check-box"
          uncheckedIcon="check-box-outline-blank"
          iconRight
          iconSize={10}
          checkedColor="black"
        />
        <Text style={styles.checkboxText}>Agree to Terms And Conditions</Text>
      </View>

      <TouchableOpacity
        style={styles.signupButton}
        onPress={handleSignup}
        disabled={loading || (!isSelected && password === confirmPassword)}
      >
        <Text style={styles.signupButtonText}>Create an Account</Text>
      </TouchableOpacity>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <TouchableOpacity testID="login" onPress={onLoginClick}>
          <Text style={styles.loginLink}>Log in</Text>
        </TouchableOpacity>
      </View>

      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="white" />
        </View>
      )}

      {passwordError !== "" && (
        <Text style={styles.errorText}>{passwordError}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  logo: {
    width: 300,
    height: 220,
    borderRadius: 30,
  },
  title: {
    fontSize: 15,
    marginBottom: 20,
    fontWeight: "bold",
    color: "black",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: 300,
    borderColor: "#9EC8B9",
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    borderRadius: 15,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  passwordVisibilityToggle: {
    position: "absolute",
    right: 12,
    paddingBottom: 12,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 1,
    paddingLeft: 80,
  },
  checkbox: {
    marginRight: 8,
    marginLeft: -77,
    padding: 0,
    borderWidth: 0,
    paddingLeft: 0,
  },
  checkboxText: {
    color: "black",
  },
  signupButton: {
    backgroundColor: "#FF9209",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 40,
  },
  signupButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "55%",
    marginBottom: 0,
    marginTop: 30,
  },
  loginText: {
    color: "black",
    fontSize: 15,
  },
  loginLink: {
    color: "midnightblue",
    fontSize: 15,
    fontWeight: "bold",
    paddingLeft: 5,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    marginTop: -5,

    textAlign: "center",
    fontStyle: "italic",
  },
});

export default SignupScreen;
