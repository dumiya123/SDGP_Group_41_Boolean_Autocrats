// Import necessary modules from the 'react' and 'react-native' libraries
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
const logoImg = require('./images/Login_image.png');

// Define the SignUp functional component.
const SignupScreen = () => {
  // State variables to hold email and password using the 'useState' hook
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // create a function to handle signup
  const handleSignup = () => {
    // Implement signup logic here, e.g., send data to a backend API
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    // You can add API call or authentication logic here
  };

  // render the UI for SignUp Screen
  const Spacer = ({ size }) => <View style={{ width: 100, height: 70 }} />;

  return (
    <View style={styles.container}>
      <Image source={logoImg} style={{ width: 370, height: 250, padding: 20 }} />
      {/* Display a welcome message. */}
      {/* <Spacer size={80} /> */}
      <Text style={styles.title}>
        Hello!. Register to get{'\n'}Start..!
      </Text>

      {/* Text Input for entering Name */}
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        onChangeText={(text) => setName(text)}
      />

      {/* Text Input for entering Email */}
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        onChangeText={(text) => setEmail(text)}
      />

      {/* Text Input for entering Password */}
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm your password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />

      <Spacer size={100} />

      <Button title="Sign Up" onPress={handleSignup} />
      <Spacer size={20} />

      {/* Uncomment the following lines if you want to include Google and Facebook sign-in buttons */}
      {/* <Button title="Sign in with Google" onPress={handleSignup} />
      <Spacer size={20} />
      <Button title="Sign in with Facebook" onPress={handleSignup} /> */}
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
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 26,
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

  label: {
    fontSize: 15,
    marginTop: 5,
    marginBottom: 10,
  },

  button: {
    width: 80, // Set the desired width for all buttons
    backgroundColor: '#3498db',
    borderRadius: 10,
  },
});

export default SignupScreen;







