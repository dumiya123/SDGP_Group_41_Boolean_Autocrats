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
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false);

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

  const togglePasswordVisibility = (setSelectedPassword) => {
    setSelectedPassword((prev) => !prev);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#116D6E", //F3F8FF
      }}
    >
      <Image
        source={logoImg}
        style={{
          width: 300,
          height: 220,
          borderRadius: 30,
        }}
      />

      <Text
        style={{
          fontSize: 24,
          marginBottom: 16,
          fontWeight: "bold",
          color: "white",
        }}
      >
        Hello! Register to get Started!
      </Text>

      <View>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: "#9EC8B9", //9EC8B9
            borderWidth: 1,
            marginBottom: 16,
            paddingLeft: 8,
            borderRadius: 15,
            backgroundColor: "white",
          }}
          placeholder="Enter Username"
          value={userName}
          onChangeText={(text) => setUserName(text)}
        />
      </View>

      <View>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: "#9EC8B9",
            borderWidth: 1,
            marginBottom: 16,
            paddingLeft: 8,
            borderRadius: 15,
            backgroundColor: "white",
          }}
          placeholder="Enter Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: "#9EC8B9",
            borderWidth: 1,
            marginBottom: 16,
            paddingLeft: 8,
            borderRadius: 15,
            backgroundColor: "white",
          }}
          placeholder="Enter Password"
          secureTextEntry={!isPasswordShown}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 12,
            padding: 12,
          }}
          onPress={() => togglePasswordVisibility(setIsPasswordShown)}
        >
          <Ionicons
            name={isPasswordShown ? "eye" : "eye-off"}
            size={19}
            color={"black"}
          />
        </TouchableOpacity>
      </View>

      <View>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: "#9EC8B9",
            borderWidth: 1,
            marginBottom: 16,
            paddingLeft: 8,
            borderRadius: 15,
            backgroundColor: "white",
          }}
          placeholder="Confirm Password"
          secureTextEntry={isConfirmPasswordShown}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />

        <TouchableOpacity
          style={{
            position: "absolute",
            right: 12,
            padding: 12,
          }}
          onPress={() => togglePasswordVisibility(setIsConfirmPasswordShown)}
        >
          <Ionicons
            name={isConfirmPasswordShown ? "eye" : "eye-off"}
            size={19}
            color={"black"}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          marginBottom: 1,
        }}
      >
        <CheckBox
          checked={isSelected}
          onPress={() => setSelection(!isSelected)}
          containerStyle={{
            marginRight: 8,
            marginLeft: -77,
            padding: 0,
            borderWidth: 0,
          }}
          iconType="material"
          checkedIcon="check-box"
          uncheckedIcon="check-box-outline-blank"
          iconRight
          iconSize={10}
          checkedColor="black"
        />
        <Text style={{ color: "white" }}>Agree to Terms And Conditions</Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#FF9209", //#183D3D
          borderRadius: 15,
          paddingVertical: 10,
          paddingHorizontal: 15,
          marginTop: 40,
        }}
        onPress={handleSignup}
        disabled={loading || (!isSelected && password === confirmPassword)}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>
          Create an Account
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "55%",
          marginBottom: 0,
          marginTop: 30,
        }}
      >
        <Text style={{ color: "black", fontSize: 15 }}>
          Already have an account?
        </Text>
        <TouchableOpacity onPress={onLoginClick}>
          <Text
            style={{ color: "midnightblue", fontSize: 15, fontWeight: "bold" }}
          >
            Log in
          </Text>
        </TouchableOpacity>
      </View>

      {loading && (
        <View
          style={{
            ...StyleSheet.absoluteFill,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator size="large" color="white" />
        </View>
      )}
    </View>
  );
};

export default SignupScreen;
