import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions
} from "react-native";
import TextInputField from "../../components/TextInputField";
import CustomButton from "../../components/CustomButton";
import SocialMediaButton from "../../components/SocialMediaButton";
import Divider from "../../components/Divider";
import LogoImg from "./login-images/B2.png";
import GoogleIcon from "./login-images/google.png";
import InstagramIcon from "./login-images/instagram.png";
import FacebookIcon from "./login-images/fb.png";
import useLoginFunctions from "./useLoginFunctions";
import { useNavigation } from "@react-navigation/native";
import theme from "../../themes/themes";

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

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
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
          color: "black",
          fontSize: 25,
          textAlign: "center",
          marginBottom: 50,
          fontWeight: "bold",
        }}
      >
        Welcome to the SaveNest
      </Text>

      <TextInputField
        placeholder="User Name"
        value={userName}
        onChangeText={setUserName}
      />

      <TextInputField
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
        showPassword={showPassword}
        onTogglePassword={() => setShowPassword(!showPassword)}
      />

<TouchableOpacity
        onPress={() => navigation.navigate("Verification Email")}
        style={{ alignItems: "flex-end", marginRight: 10 }}
      >
        <Text
          style={{
            color: "rgb(93, 93, 93)",
            fontSize: 14,
           
            left: 80,
            paddingLeft:Dimensions.get('window').width-360
        
          }}
        >
          Forget your password?
        </Text>
      </TouchableOpacity>

      <CustomButton
        onPress={handleLogin}
        text="Login"
        icon="arrow-right"
        buttonColor={theme.colors.buttonSecond} 
      />



      <Divider text="Or sign up with" />

      <View style={{ flexDirection: "row", justifyContent: "center", justifyContent: "space-between", paddingHorizontal: 50, }}>
        <SocialMediaButton
          onPress={handleFacebookSignIn}
          source={FacebookIcon}
        />
        <SocialMediaButton onPress={handleGoogleSignIn} source={GoogleIcon} />
        <SocialMediaButton
          onPress={handleInstagramSignIn}
          source={InstagramIcon}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "70%",
          marginTop: 10
        
        }}
      >
        <Text style={{ color: "black", fontSize: 15}}>
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
