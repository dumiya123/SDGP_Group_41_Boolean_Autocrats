import React from "react";
import { StatusBar } from "react-native";
import AuthStackNavigator from "./components/AuthStackNavigator";
import { NavigationContainer } from "@react-navigation/native";


const App = () => {
  
  return (
    <NavigationContainer>
      <AuthStackNavigator  />
      <StatusBar barStyle="dark-content" backgroundColor="white" />
    </NavigationContainer>
  );
};

export default App;
