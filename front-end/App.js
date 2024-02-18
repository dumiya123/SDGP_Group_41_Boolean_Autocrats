import * as React from 'react';
import { View, Text, Image } from 'react-native';
import SignupScreen from './pages/sign-up-page/signUp';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './pages/login-page/login';
import GetStarted from './pages/get-started-page/getStarted';
import VerificationEmail from './pages/forget-password-pages/verificationEmail';
import VerificationCodeScreen from './pages/forget-password-pages/verificationCode';
import PasswordForm from './pages/forget-password-pages/createPassword';
import ConfirmPasswordScreen from './pages/forget-password-pages/confirmPassword';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}
function add() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>add!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function HomeTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="add" component={add}/>
    </Tab.Navigator> 
  );
}

function AuthStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='GET STARTED' component={GetStarted} options={{ headerShown: false }} />
      <Stack.Screen name="LOG IN" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SIGN UP" component={SignupScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Verification Email" component={VerificationEmail} options={{ headerShown: false }} />
      <Stack.Screen name="CODE" component={VerificationCodeScreen} options={{ headerShown: false }} />
      <Stack.Screen name='CREATEPW' component={PasswordForm} options={{ headerShown: false }} />
      <Stack.Screen name='CONFIRMPW' component={ConfirmPasswordScreen} options={{ headerShown: false }} />
      <Stack.Screen name='HOME' component={HomeTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  );
}
