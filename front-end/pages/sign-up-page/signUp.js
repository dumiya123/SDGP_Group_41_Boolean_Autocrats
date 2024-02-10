import react,{useState} from "react";
import { View,Text,TextInput,Button,StyleSheet } from "react-native";

const SignupScreen = () => {
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');


    const handleSignup = () => {

        //In here we are hope to develop the logic for the signup process.
        //e.g: send data to a backend API 
        console.log('Email:'.email);
        console.log('Password:'.password);

        //This is the point to add the API call or Authentication Logic
        



    };


    return(
        <View style={styles.container}>

        </View>
    )
    
  







};
