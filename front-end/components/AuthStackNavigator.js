import React from "react";
import { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Animated,
  SafeAreaView,
  Image,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GetStarted from "../pages/get-started-page/getStarted";
import LoginScreen from "../pages/login-page/login";
import SignUpScreen from "../pages/sign-up-page/signUp";
import VerificationEmail from "../pages/forget-password-pages/verificationEmail";
import VerificationCodeScreen from "../pages/forget-password-pages/verificationCode";
import PasswordForm from "../pages/forget-password-pages/createPassword";
import ConfirmPasswordScreen from "../pages/forget-password-pages/confirmPassword";
import HomeScreen from "../pages/Profile/Home/Home";
import SettingsScreen from "../pages/Profile/Settings/Settings";
import AddScreen from "../pages/Profile/Add/Add";
import ReportsScreen from "../pages/Profile/Reports/Reports";
import ExpensesScreen from "../pages/Profile/Expenses/Expenses";
import { Ionicons } from "@expo/vector-icons";
import ExploreFoodScreen from "../pages/Profile/Add/Explorer/ExplorerFood";
import ExploreVegetablesScreen from "../pages/Profile/Add/Explorer/ExplorerVegetables/ExplorerVegetables";

//navigate settings page
import EditProfile from "../pages/Profile/Settings/SettingsScreens/EditProfile/editProfile";
import PushNotifications from "../pages/Profile/Settings/SettingsScreens/PushNotifications/pushNotifications";
import InviteFriends from "../pages/Profile/Settings/SettingsScreens/InviteFriends/inviteFriends";
import About from "../pages/Profile/Settings/SettingsScreens/About/about";
import HelpAndSupport from "../pages/Profile/Settings/SettingsScreens/HelpAndSupport/helpAndSupport";

import UserNamechange from "../pages/Profile/Settings/SettingsScreens/EditProfile/Username";
import UserEmailchange from "../pages/Profile/Settings/SettingsScreens/EditProfile/userEmail";
import UserPasswordchange from "../pages/forget-password-pages/passwordChange";
import DeleteAccount from "../pages/Profile/Settings/SettingsScreens/EditProfile/deleteAccount";

import UserNameResetScreen from "../pages/Profile/Settings/SettingsScreens/EditProfile/userNameResetScreen";
import EmailResetScreen from "../pages/Profile/Settings/SettingsScreens/EditProfile/emailResetScreen";
import DeleteAccountScreen from "../pages/Profile/Settings/SettingsScreens/EditProfile/deleteAccountScreen";
import NotificationScreen from "../pages/NotificationScreen/NotificationScreen";
import ContactUs from "../pages/Profile/Settings/SettingsScreens/HelpAndSupport/Contactus";

import Transports from "../pages/Profile/Add/Transports/transports";
import { useNavigation } from '@react-navigation/native';

import NotificationButton from './NotificationButton/notificationButton';
import ChatBotScreen from './ChatBotScreen/chatBotScreen'; // Import the UserProfile component from the new file

// import { color } from "react-native-tailwindcss";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="GET STARTED" component={GetStarted} options={{ headerShown: false }}/>
      <Stack.Screen name="LOG IN" component={LoginScreen} options={{ headerShown: false}}/>
      <Stack.Screen name="SIGN UP" component={SignUpScreen} options={{ headerShown: false}}/>
     
      <Stack.Screen name="PROFILE" component={BottomTabNavigator} options={{ headerShown: false}}/>
      <Stack.Screen name="FOODSCREEN" component={ExploreFoodScreen} options={{ headerShown: false}}/>
      <Stack.Screen name="VEGSCREEN" component={ExploreVegetablesScreen} options={{ headerShown: false}}/>

      <Stack.Screen name="Transports" component={Transports} options={{ headerShown: true, headerBackTitleVisible: false}}/>

      {/*navigate settings page*/}
      <Stack.Screen name="Profile Settings" component={EditProfile} options={{ headerShown: true, headerBackTitleVisible: false}} />
      {/*navigate settings page inside*/}
      <Stack.Screen name="Username" component={UserNamechange} options={{ headerShown: true, headerBackTitleVisible: false}}/>
      <Stack.Screen name="E-mail" component={UserEmailchange} options={{ headerShown: true, headerBackTitleVisible: false}}/>
      <Stack.Screen name="Change Password" component={UserPasswordchange} options={{ headerShown: true, headerBackTitleVisible: false}}/>
      <Stack.Screen name="DELETE ACCOUNT" component={DeleteAccount} options={{ headerShown: true, headerBackTitleVisible: false}} />
      <Stack.Screen name="Username Change Confirmation" component={UserNameResetScreen} options={{ headerShown: false}}/>
      <Stack.Screen name="Email Change Confirmation" component={EmailResetScreen} options={{ headerShown: false}}/>
      <Stack.Screen name="Account Deleted Confirmation" component={DeleteAccountScreen} options={{ headerShown: false, headerBackTitleVisible: false}}/>
      <Stack.Screen name="Verification Email" component={VerificationEmail} options={{ headerShown: true, headerBackTitleVisible: false}}/>
      <Stack.Screen name="Verify Code" component={VerificationCodeScreen} options={{ headerShown: true, headerBackTitleVisible: false}}/>
      <Stack.Screen name="Create Password" component={PasswordForm} options={{ headerShown: true, headerBackTitleVisible: false}}/>
      <Stack.Screen name="Confirm Password" component={ConfirmPasswordScreen} options={{ headerShown: false }}/>

      <Stack.Screen name="Push Notifications" component={PushNotifications} options={{ headerShown: true, headerBackTitleVisible: false }}/>
      <Stack.Screen name="Invite Friends" component={InviteFriends} options={{ headerShown: true, headerBackTitleVisible: false}}/>
      <Stack.Screen name="About Us" component={About} options={{ headerShown: true, headerBackTitleVisible: false}}/>
      <Stack.Screen name="Help & Support" component={HelpAndSupport} options={{ headerShown: true, headerBackTitleVisible: false}}/>
      <Stack.Screen name="Contact Us" component={ContactUs} options={{ headerShown: true, headerBackTitleVisible: false}}/>
      
      <Stack.Screen name="Notifications" component={NotificationScreen} options={{ headerShown: true, headerBackTitleVisible: false}}/>

    </Stack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="Home" 
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        ),
        headerRight: () => <NotificationButton />,
        headerLeft: () => <ChatBotScreen/>
      }}
      
      />
      <Tab.Screen
        name="Expenses"
        component={ExpensesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cash" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Reports"
        component={ReportsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="document-text" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AuthStackNavigator;
