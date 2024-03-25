import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import IP_ADDRESS from "../../config";

const useLoginFunctions = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //@todo update URL after hosting
  //Replace this with your ipAddress

  const ipAddress = "68.183.183.164";

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

  const handleTwitterSignIn = () => {
    setLoading(true);
    setTimeout(() => {
      console.log("Twitter sign-in completed");
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
          username: userName.trim(),
          password: password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Login successful");

        // Fetch the budget for the user
        const budgetResponse = await fetch(
          `http://${ipAddress}:8080/user/getBudget`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // Fetch the budget for the user
        const budgetData = await budgetResponse.json();

        // Check if the user has a budget
        if (budgetData.data.Budget) {
          // If the user has a budget, navigate to the profile
          navigation.navigate("PROFILE");
        } else {
          // If the user has no budget, navigate to a different page
          navigation.navigate("NO BUDGET PAGE");
        }
      }
    } catch (error) {
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
    handleTwitterSignIn,
    handleSignUpClick,
    handleTextClick,
    handleLogin,
    handleForgetPassword,
  };
};

export default useLoginFunctions;
