// Import necessary modules from the 'react' and 'react-native' libraries
import { View, Text, TextInput, Button, StyleSheet,Image,TouchableOpacity, Pressable} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome5 } from 'react-native-vector-icons'; // Import FontAwesome5 for Twitter icon
const logoImg = require('./images/signup.png');
import { CheckBox } from 'react-native-elements';  // Import CheckBox from react-native-elements
import {Ionicons} from "@expo/vector-icons"; 
import { NavigationContainer } from '@react-navigation/native';


// Define the SignUp functional component.
const SignupScreen = ({navigation}) => {
  // State variables to hold email and password using the 'useState' hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSelected, setSelection] = useState(false); // Corrected variable name
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

      <View style={{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        marginBottom:1


        }}> 
        <CheckBox
        checked={isSelected}
        onPress={()=>setSelection(!isSelected)}
        containerStyle={{marginRight: 8, marginLeft: -77, padding: 0, borderWidth: 0}}
        iconType="material"
        checkedIcon="check-box"
        uncheckedIcon="check-box-outline-blank"
        iconRight
        iconSize={10} // Adjust the size as needed
        checkedColor='black' //change the color of the check mark inside the check box .
        

        />
        <Text>Agree to Terms And Conditions</Text>

        </View>

      <View style={{paddingTop:10}}>
      {/* <Text style={{paddingBottom:-9}}></Text> */}
      <Button title="                                       Sign Up                                     " onPress={() =>console.log("Sign Up Pressed") } 
      style={{ borderRadius:40}} />
      <Text style={{marginBottom:-12}}></Text>

      </View>

      <View style={{flexDirection:'row',alignItems:'flex-end',marginVertical:20}}>
        <View
        style={{
          flex:1,
          height:1,
          backgroundColor:'grey',
          marginHorizontal:10,
          marginLeft:12,
          marginRight:10,
 
        }}
        />
        <Text style={{fontSize:14}}>    Or Sign up with </Text>
        <View
        style={{
          flex:1,
          height:1,
          backgroundColor:'grey',
          marginHorizontal:10
        }}
        />

        
      </View>

      <View style={{
        flexDirection:'row',
        justifyContent:'center',


      }}>  
      <TouchableOpacity
      onPress={() => console.log('Pressed')}
      style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        height:42,
        borderWidth:1,
        borderColor:'gray',
        marginRight:4,
        borderRadius:10,
        backgroundColor:'#F39F5A',
        marginEnd:25,
        marginStart:25
      }}
      >
        <Icon name='google'  size={30} color="#4285F4"/>
        <Text>        Sign Up With Google</Text>

      </TouchableOpacity>

      </View>
      <Text></Text>

      <View style={{
        flexDirection:'row',
        justifyContent:'center',

      }}>
        <TouchableOpacity
        onPress={() => console.log('Pressed')}
        style={{
          flex:1,
          alignItems:'center',
          justifyContent:'center',
          flexDirection:'row',
          height:42,
          borderWidth:1,
          borderColor:'grey',
          marginRight:4,
          borderRadius:10,
          backgroundColor:'#F39F5A',
          marginEnd:25,
          marginStart:25
          
        }} 
        >
           <Icon name="facebook-square" size={30} color="#1877F2" />
           <Text>     Sign Up With faceBook</Text>

        </TouchableOpacity>
      </View>



      <View
       style={{
        flexDirection:'row',
        justifyContent:'center',
        marginVertical:22
       }}>
        <Text style={{fontSize:16,color:'black'}}>Already have an Account ? </Text>
        <Pressable
        onPress={() => navigation.navigate()}>
          <Text
          style={{
            fontSize:16,
            color:'blue',
            fontWeight:'bold',
            marginLeft:6
          }} 
          >Login</Text>
        </Pressable>

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



  




});

export default SignupScreen;



