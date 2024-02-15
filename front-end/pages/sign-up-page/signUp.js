// Import necessary modules from the 'react' and 'react-native' libraries
import { View, Text, TextInput, Button, StyleSheet,Image,TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome5 } from 'react-native-vector-icons'; // Import FontAwesome5 for Twitter icon
const logoImg = require('./images/signup.png');
import {Ionicons} from "@expo/vector-icons"; 


// Define the SignUp functional component.
const SignupScreen = () => {
  // State variables to hold email and password using the 'useState' hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[isPasswordShown,setIsPasswordShown] = useState(false);

  // create a function to handle signup
  const handleSignup = () => {
    // Implement signup logic here, e.g., send data to a backend API
    console.log('Email:', email);
    console.log('Password:', password);
    // You can add API call or authentication logic here
  };

  const togglePasswordVisibility = () => {
    setIsPasswordShown((prev) =>!prev);

  };


  const Spacer = ({ size }) => <View style={{ width: 100, height: 20 }} />;

    // render the UI for SignUp Screen

  return (
    <View style={styles.container}>

      {/*Below Image component will show the Image which is showing in top of the screen*/}

      <Image source={logoImg} style={{width:300 ,height:220,borderRadius:30}}/>

      {/* Display a welcome message. */}

      <Text style={styles.title}>Hello! Register to get Start.</Text>
    
      

      {/*Declare a separate View Tag for Show Enter Username Text Input Field */}
      {/* Text Input for entering email */}

      <View>
      <TextInput
        style={styles.input}
        placeholder="Enter Username"             
        onChangeText={(text) => setUsername(text)}
      />

      </View>

      {/*Declare a separate View Tag for Show Enter email Text Input Field */}
      {/* TextInput for enter email */}

      <View>
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        secureTextEntry
        onChangeText={(text) => setEmail(text)}
      /> 

      </View>

      {/*Declare a separate View Tag for Show Enter Password Text Input Field */}
      {/* TextInput for enter Password */}

      <View>
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        secureTextEntry={!isPasswordShown}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity
         style={{
          position:'absolute',
          right:12,
          padding:12
        
         }}
         onPress={togglePasswordVisibility}
      >

        <Ionicons name={isPasswordShown ? 'eye' : 'eye-off'} size={19} color={'black'} />

      </TouchableOpacity>

      </View>

      <View>
        
      <TextInput
          style={styles.input}
          placeholder='Confirm Password'
          secureTextEntry={isPasswordShown}
          onChangeText={(text) => setPassword(text)}
          
      />

      <TouchableOpacity
            style={{
              position:'absolute',
              right:12,
              padding:12
            }}
            onPress={togglePasswordVisibility}
      >

        <Ionicons name={isPasswordShown ? 'eye' : 'eye-off'} size={19} color={'black'} />
      </TouchableOpacity>

      </View>

      <View>
      <Button title="                 Sign Up               " onPress={handleSignup} style={{ borderRadius:40 }} />
      <Spacer size={100} />

      </View>

      <View>

      <Text style={styles.finaltext}>Or Sign Up with</Text>
      <Spacer size={100} />

      </View>

      <Button title='    Sign Up with Google  ' onPress={()=>googleLogin()} color="#DE4D5A"/> 
      <Spacer size={100} />

      <View>

        <Button title=' Sign Up with faceBook' onPress={()=>facebookLogin()} color="#3B5998"/>
        <Spacer size={100} />

      </View>

      <View>

      <Text style={styles.finaltext}>Already Have an Account? Login in</Text>


      </View>

      
       
      
      
      
      
      
      
 

    </View>
    
  );

  
};

const styles = StyleSheet.create({
  container: 
  {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor:'#B4A5A5',
    

  },
  

  title: 
  {
    fontSize: 24,
    marginBottom: 16,
    
    alignContent:'stretch',
    flexDirection:'row'
  },

  input: 
  {
    height: 40,
    width: 300,
    borderColor: '#9EC8B9',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },

  button: 
  {
    width: 80, // Set the desired width for all buttons
    backgroundColor: '#3498db',
    borderRadius: 10,

  },

  finaltext:
  {
    color:'#040D12',
    fontStyle:'italic',
  }




});

export default SignupScreen;



