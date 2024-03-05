import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const useLoginFunctions = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //@todo update URL after hosting
  //Replace this with your ipAddress

  const ipAddress = "192.168.8.126";
  const ipAddress = "192.168.1.9";


  const handleGoogleSignIn = () => {
    setLoading(true);
    setTimeout(() => {
      console.log("Google sign-in completed");
      setLoading(false);
    }, 2000);
  };

  const handleFacebookSignIn = () => {
    setLoading(true);
    setTimeout(() => {
      console.log("Facebook sign-in completed");
      setLoading(false);
    }, 2000);
  };

  const handleInstagramSignIn = () => {
    setLoading(true);
    setTimeout(() => {
      console.log("Instagram sign-in completed");
      setLoading(false);
    }, 2000);
  };

  const handleSignUpClick = () => {
    navigation.navigate("SIGN UP");
  };

  const handleTextClick = () => {
    setLoading(true);
    setTimeout(() => {
      console.log("Text clicked");
      handleSignUp();
    }, 2000);
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://${ipAddress}:8080/user/signIn`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userName,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful");
        navigation.navigate("PROFILE");//will navigate to profile
      } else {
        console.error("Login failed:", data.message);
      }
    } catch (error) {
      console.error(`http://${ipAddress}:8080/user/signIn`);
      console.error("Error during login:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleForgetPassword = () => {
    setLoading(true);
    setTimeout(() => {
      console.log("Forget Password clicked");
      setLoading(false);
    }, 2000);
  };

  return {
    loading,
    userName,
    password,
    setUserName,
    setPassword,
    setLoading,
    handleGoogleSignIn,
    handleFacebookSignIn,
    handleInstagramSignIn,
    handleSignUpClick,
    handleTextClick,
    handleLogin,
    handleForgetPassword,
  };
};

export default useLoginFunctions;
