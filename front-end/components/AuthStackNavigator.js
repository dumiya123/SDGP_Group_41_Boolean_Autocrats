import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GetStarted from "../pages/get-started-page/getStarted";
import LoginScreen from "../pages/login-page/login";
import SignUpScreen from "../pages/sign-up-page/signUp";
import VerificationEmail from "../pages/forget-password-pages/verificationEmail";
import VerificationCodeScreen from "../pages/forget-password-pages/verificationCode";
import PasswordForm from "../pages/forget-password-pages/createPassword";
import ConfirmPasswordScreen from "../pages/forget-password-pages/confirmPassword";
import HomeScreen from '../pages/Profile/Home';
import SettingsScreen from '../pages/Profile/Settings';
import AddScreen from '../pages/Profile/Add';
import ReportsScreen from '../pages/Profile/Reports';
import ExpensesScreen from '../pages/Profile/Expenses';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


/* 

AuthStackNavigator is for the authentication flow. It includes the following screens:

- GetStarted
- LoginScreen
- SignUpScreen
- VerificationEmail
- VerificationCodeScreen
- createPasswordScreen
- confirmPasswordScreen

When the user logs in sucessfully, the user is navigated to the BottomTabNavigator which includes the following screens:

- HomeScreen
- SettingsScreen
- AddScreen
- ReportsScreen

Name of the bottom tab navigator is set to "PROFILE" 

This name is used in the useLoginFunctions.js to navigate to the bottom tab navigator after the user logs in successfully.

        ----"
        from useLoginFunctions.js:

        if (response.ok) {
                console.log("Login successful");
                navigation.navigate("PROFILE");//will navigate to bottomtabnavigator(name is set to profile) which includes the following screens: Home, Settings, Add, Reports
              }
              
              ""-------



*/

const AuthStackNavigator = () => {
  
  return (
    <Stack.Navigator >
      <Stack.Screen name="GET STARTED" component={GetStarted} options={{ headerShown: false }} />
      <Stack.Screen name="LOG IN" component={LoginScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="SIGN UP" component={SignUpScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Verification Email" component={VerificationEmail} options={{ headerShown: false }}/>
      <Stack.Screen name="CODE" component={VerificationCodeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="CREATEPW" component={PasswordForm} options={{ headerShown: false }}/>
      <Stack.Screen name="CONFIRMPW" component={ConfirmPasswordScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="PROFILE" component={BottomTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const BottomTabNavigator = () => {
  //this is the bottom tab navigator which appears after the user logs in
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}  />
      <Tab.Screen name="Expenses" component={ExpensesScreen} />
      <Tab.Screen name="Add" component={AddScreen} />
      <Tab.Screen name="Reports" component={ReportsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default AuthStackNavigator;
