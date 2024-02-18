import * as React from 'react';  //import necessary modules from react and React natve 
import { View ,Image} from 'react-native';    //View is a component of react native that helps in organizing the elements on the screen.
import SignupScreen from './pages/sign-up-page/signUp';   //Importing the SignUpScreen component from the specified file path
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './pages/login-page/login';
import GetStarted from './pages/get-started-page/getStarted';
import 'react-native-gesture-handler';
import VerificationEmail from './pages/forget-password-pages/verificationEmail';
import VerificationCodeScreen from './pages/forget-password-pages/verificationCode';
import PasswordForm from './pages/forget-password-pages/createPassword';
import ConfirmPasswordScreen from './pages/forget-password-pages/confirmPassword';
export default function App() {

  const Stack = createStackNavigator();
  
  


  return (

    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='GET STARTED' component={GetStarted}
        options={{ headerShown: false }}/>
      <Stack.Screen name="LOG IN" component={LoginScreen}
        options={{ headerShown: false }}/>
      <Stack.Screen name="SIGN UP" component={SignupScreen}
        options={{ headerShown: false }}/>
      <Stack.Screen name ="Verification Email" component={VerificationEmail}
        options={{ headerShown: false }}/>
      <Stack.Screen name="CODE" component={VerificationCodeScreen}
        options={{ headerShown: false }}/>
      <Stack.Screen name='CREATEPW' component={PasswordForm}
        options={{ headerShown: false }}/>
      <Stack.Screen name='CONFIRMPW' component={ConfirmPasswordScreen}
        options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}








