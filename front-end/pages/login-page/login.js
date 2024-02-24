import React, { useState, useEffect } from "react"; //author himan
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import LogoImg from "./login-images/B2.png";
import GoogleIcon from "./login-images/google.png";
import InstagramIcon from "./login-images/instagram.png";
import FacebookIcon from "./login-images/fb.png";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import useLoginFunctions from "./useLoginFunctions";
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const {
    loading,
    userName,
    password,
    setUserName,
    setPassword,
    setLoading,
    handleGoogleSignIn,
    handleFacebookSignIn,
    handleInstagramSignIn,
    handleLogin,
    handleSignUpClick,
  } = useLoginFunctions();

  useEffect(() => {
    let rotationInterval;

    if (loading) {
      rotationInterval = setInterval(() => {
        setLoading((prevLoading) => !prevLoading);
      }, 1000);
    } else {
      clearInterval(rotationInterval);
    }

    return () => clearInterval(rotationInterval);
  }, [loading]);

  //exiting color of the login page 0E8388

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#116D6E",
        padding: 50,
        alignItems: "center",
      }}
    >
      <Image
        source={LogoImg}
        style={{
          width: "100%",
          height: 200,
          resizeMode: "contain",
          marginBottom: 20,
        }}
      />
      <Text
        style={{
          color: "white",
          fontSize: 25,
          textAlign: "center",
          marginBottom: 50,
          fontWeight: "bold",
        }}
      >
        Welcome to the SaveNest
      </Text>

      <View style={{ width: "100%", marginBottom: 20 }}>
        <View style={{ position: "relative", marginBottom: 10 }}>
          <MaterialIcons
            name={"person-outline"}
            size={26}
            color={"gray"}
            style={{ position: "absolute", top: 10, left: 10, zIndex: 1 }}
          />
          <TextInput
            placeholder="User Name"
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              backgroundColor: "white",
              padding: 10,
              paddingLeft: 40,
              borderRadius: 10,
            }}
            onChangeText={(text) => setUserName(text)}
            value={userName}
          />
        </View>

        <View style={{ position: "relative", marginBottom: 10 }}>
          <MaterialIcons
            name={"lock-outline"}
            size={26}
            color={"gray"}
            style={{ position: "absolute", top: 10, left: 10, zIndex: 1 }}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={!showPassword}
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              backgroundColor: "white",
              padding: 10,
              paddingLeft: 40,
              borderRadius: 10,
            }}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TouchableOpacity
            style={{ position: "absolute", top: 10, right: 10 }}
            onPress={() => setShowPassword(!showPassword)}
          >
            <MaterialCommunityIcons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Verification Email")}
          style={{ alignItems: "flex-end", marginRight: 10 }}
        >
          <Text
            style={{
              color: "midnightblue",
              fontSize: 15,
              marginBottom: 10,
              fontWeight: "bold",
            }}
          >
            Forget your password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          // onPress={() => navigation.navigate("HOMESCREEN")}
          onPress={handleLogin}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FF9209",
            borderRadius: 20,
            padding: 5,
            marginTop: 15,
            width: 200,
            alignSelf: "center", // Center the button horizontally
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 25,
              textAlign: "center",
              marginRight: 5,
            }}
          >
            Login
          </Text>
          <MaterialCommunityIcons name="arrow-right" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 20,
        }}
      >
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: "black",
            marginHorizontal: 10,
          }}
        />
        <Text style={{ fontSize: 14, marginHorizontal: 10 }}>
          Or sign up with
        </Text>
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: "black",
            marginHorizontal: 10,
          }}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <TouchableOpacity
          onPress={handleFacebookSignIn}
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-end",
            flexDirection: "row",
            height: 52,
          }}
        >
          <Image
            source={FacebookIcon}
            style={{ width: 40, height: 40, marginRight: 2 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleGoogleSignIn}
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            height: 52,
          }}
        >
          <Image
            source={GoogleIcon}
            style={{ width: 40, height: 40, marginRight: 2 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleInstagramSignIn}
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "row",
            height: 52,
          }}
        >
          <Image
            source={InstagramIcon}
            style={{ width: 40, height: 40, marginRight: 2 }}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "70%",
          marginBottom: 0,
          marginTop: 30,
        }}
      >
        <Text style={{ color: "white", fontSize: 15 }}>
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={handleSignUpClick}>
          <Text
            style={{ color: "midnightblue", fontSize: 15, fontWeight: "bold" }}
          >
            Sign up
          </Text>
        </TouchableOpacity>
      </View>

      {loading && (
        <View style={{ position: "absolute", top: "52%", alignSelf: "center" }}>
          <ActivityIndicator size="large" color="midnightblue" />
        </View>
      )}
    </View>
  );
};
export default LoginScreen;
