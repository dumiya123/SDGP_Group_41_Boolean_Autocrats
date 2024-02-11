import * as React from 'react';  //import necessary modules from react and React natve 
import { View } from 'react-native';    //View is a component of react native that helps in organizing the elements on the screen.
import SignupScreen from './pages/sign-up-page/signUp';   //Importing the SignUpScreen component from the specified file path



// Main App component
export default function App() {
  return (
    // Main container view with flex styling
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Render the SignUpScreen component */}
      <SignupScreen />
    </View>
  );
}





