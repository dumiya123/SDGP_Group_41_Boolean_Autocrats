import React from "react";
import{ useState } from 'react';
import { Modal, View,Text,TouchableOpacity,Animated,SafeAreaView, Image } from 'react-native';
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
import EditProfile from '../pages/Profile/Settings/SettingsScreens/EditProfile/editProfile';
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

import { useNavigation } from '@react-navigation/native';

// import { color } from "react-native-tailwindcss";

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
    <Stack.Navigator>
      <Stack.Screen name="GET STARTED" component={GetStarted} options={{ headerShown: false }}/>
      <Stack.Screen name="LOG IN" component={LoginScreen} options={{ headerShown: false}}/>
      <Stack.Screen name="SIGN UP" component={SignUpScreen} options={{ headerShown: false}}/>
     
      <Stack.Screen name="PROFILE" component={BottomTabNavigator} options={{ headerShown: false}}/>
      <Stack.Screen name="FOODSCREEN" component={ExploreFoodScreen} options={{ headerShown: false}}/>
      <Stack.Screen name="VEGSCREEN" component={ExploreVegetablesScreen} options={{ headerShown: false}}/>

      {/*navigate settings page*/}
      <Stack.Screen name="Profile Settings" component={EditProfile} options={{ headerShown: true, headerBackTitleVisible: false}} />
      {/*navigate settings page inside*/}
      <Stack.Screen name="Username" component={UserNamechange} options={{ headerShown: true, headerBackTitleVisible: false}}/>
      <Stack.Screen name="E-mail" component={UserEmailchange} options={{ headerShown: true, headerBackTitleVisible: false}}/>
      <Stack.Screen name="Change Password" component={UserPasswordchange} options={{ headerShown: true, headerBackTitleVisible: false}}/>
      <Stack.Screen name="DELETE ACCOUNT" component={DeleteAccount} options={{ headerShown: true, headerBackTitleVisible: false}} />
      <Stack.Screen name="Reset Username" component={UserNameResetScreen} options={{ headerShown: false}}/>
      <Stack.Screen name="Reset E-mail Address" component={EmailResetScreen} options={{ headerShown: false}}/>
      <Stack.Screen name="DELETE USER ACCOUNT" component={DeleteAccountScreen} options={{ headerShown: false, headerBackTitleVisible: false}}/>
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
  //this is the bottom tab navigator which appears after the user logs in
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="Home" 
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
          
          
        ), headerRight: () => <NotificationButton/>,headerLeft: ()=> <UserProfile/>
       
      }}
      />
      <Tab.Screen
        name="Expenses"
        component={ExpensesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cash" color={color} size={size} />
          )
        }} 
        />
      <Tab.Screen
        name="Add"
        component={AddScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add" color={color} size={size} />
          )
        }} 
        />
      <Tab.Screen 
      name="Reports"
       component={ReportsScreen} 
       options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="document-text" color={color} size={size} />
        )
      }}
       />
      <Tab.Screen
       name="Settings"
       component={SettingsScreen}
       options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="settings" color={color} size={size} />
        )
      }}
        />
    </Tab.Navigator>
  );
};

//notification view

const NotificationButton = () => {
  const navigation = useNavigation();
  const handleNotificationPress = () => { 
    navigation.navigate('Notifications');
  };

  return (
    <Ionicons name="notifications" size={30} color="white" style={{ marginRight: 20 }} onPress={handleNotificationPress}/>
  );
};




// profile view

const UserProfile = ({ profilePictureUrl = 'https://via.placeholder.com/150', userName = 'Himan Welgama', userEmail = "himanwelgama@gmail.com" }) => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const slideAnim = useState(new Animated.Value(-1000))[0]; // Start from off-screen left

  const handleUserProfilePress = () => {
    setIsVisible(true);
    // Animate slide in
    Animated.timing(slideAnim, {
      toValue: 0, // Slide to the left edge
      duration: 300, // Adjust as needed
      useNativeDriver: true,
    }).start();
  };

  const handleCloseModal = () => {
    // Animate slide out
    Animated.timing(slideAnim, {
      toValue: -1000, // Slide back off-screen left
      duration: 200, // Adjust as needed
      useNativeDriver: true,
    }).start(() => setIsVisible(false));
  };

  return (
    <SafeAreaView>
      <Ionicons
        name="person-circle-outline"
        size={35}
        color="white"
        style={{ marginLeft: 20 }}
        onPress={handleUserProfilePress}
      />

      <Modal
        visible={isVisible}
        transparent={true}
        animationType="slide"
      >
        <View
          style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0,1.0)', justifyContent: 'center', marginRight: '30%' }}
        >
          <Animated.View
            style={{
              transform: [{ translateX: slideAnim }],
              backgroundColor: '#FFF',
              padding: 20,
              height: '100%',
            }}
          >
            <TouchableOpacity
              style={{ position: 'absolute', top: 20, right: 20, zIndex: 1}}
              onPress={handleCloseModal}
            >
              <Ionicons name="chevron-back" size={40} color="#2d3436"  />
            </TouchableOpacity>
            {/* Profile Picture */}
            <View style={{ alignItems: 'left', backgroundColor: '', padding: 10,marginTop: 40}}>
           <Image
            style={{ width: 180, height: 180, borderRadius: 100 }} // Adjust border radius to half of width and height to create a circle
            source={{ uri: profilePictureUrl }}
           />
            </View>
            {/* User Name */}
            <Text style={{ textAlign: 'left', fontSize: 30, marginTop: 30 }}>{userName}</Text>
            {/* Email */}
            <Text style={{ textAlign: 'left', fontSize: 18, color: 'gray', marginTop: 5 }}>{userEmail}</Text>
          </Animated.View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};


export default AuthStackNavigator;



