import * as React from 'react';  //import necessary modules from react and React natve 
import { View ,Image} from 'react-native';    //View is a component of react native that helps in organizing the elements on the screen.
import SignupScreen from './pages/sign-up-page/signUp';   //Importing the SignUpScreen component from the specified file path
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// Main App component
//This component created to show the sign Up screen to the User.
export default function App() {
  return (
    // Main container view with flex styling
    <View style={{ flex: 1, justifyContent: 'cnpmenter', alignItems: 'center' ,backgroundColor:'#B4A5A5'}}>
      {/* Render the SignUpScreen component */}
      {/* <SignupScreen /> */}
      <SignupScreen />

      
    </View>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Signup">
    //   <Stack.Screen name="Signup" component={SignupScreen} />
    //   <Stack.Screen name="Login" component={LoginScreen} />
    //   </Stack.Navigator>


    // </NavigationContainer>
  );
}

// export default function App()
// {
//   return(
//     <View style={{ padding:30,justifyContent: 'flex-end', alignItems: 'center' ,backgroundColor:'#4477CE'}}>
//       <Social_Media_Buttons/>
//     </View>


//   );
// }






