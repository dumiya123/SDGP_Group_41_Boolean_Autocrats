import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const useSignUpFunctions = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //@todo update URL after hosting
  //Replace this with your ipAddress
  const ipAddress = "192.168.8.119";

  const handleSignup = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://${ipAddress}:8080/user/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userName,
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("New user created");
        navigation.navigate("LOG IN");
      } else {
        console.error("Signup failed:", data.message);
      }
    } catch (error) {
      console.error(`http://${ipAddress}:8080/user/signIn`);
      console.error("Error during signup", error);
    } finally {
      setLoading(false);
    }
  };

  const onLoginClick = () => {
    navigation.navigate("LOG IN");
  };

  return {
    userName,
    email,
    password,
    loading,
    setUserName,
    setLoading,
    setEmail,
    setPassword,
    handleSignup,
    onLoginClick,
  };
};

export default useSignUpFunctions;
