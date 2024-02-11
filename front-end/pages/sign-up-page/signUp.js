// Import necessary modules from the 'react' and 'react-native' libraries
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


// Define the SignUp functional component.
const SignupScreen = () => {
  // State variables to hold email and password using the 'useState' hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // create a function to handle signup
  const handleSignup = () => {
    // Implement signup logic here, e.g., send data to a backend API
    console.log('Email:', email);
    console.log('Password:', password);
    // You can add API call or authentication logic here
  };

  // render the UI for SignUp Screen
  const Spacer = ({ size }) => <View style={{ width: 100, height: 20 }} />;

  return (
    <View style={styles.container}>
      {/* Display a welcome message. */}
      <Spacer size={100} />
      <Text style={styles.title}>Welcome to the SaveNest</Text>
      <Spacer size={100} />
      {/* TextInput for entering email */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <Spacer size={100} />
      {/* TextInput for entering Password */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Spacer size={100} />
      <Button title="               Sign Up               " onPress={handleSignup} />
      <Spacer size={100} />
      <Button title="Sign in with Google    " onPress={handleSignup} />
      <Spacer size={100} />
      <Button title="Sign in with Facebook" onPress={handleSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

    
  },
  

  title: {
    fontSize: 24,
    marginBottom: 16,
  },

  input: {
    height: 40,
    width: 300,
    borderColor: '#9EC8B9',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },

  button: {
    width: 80, // Set the desired width for all buttons
    backgroundColor: '#3498db',
    borderRadius: 10,
  },
});

export default SignupScreen;

