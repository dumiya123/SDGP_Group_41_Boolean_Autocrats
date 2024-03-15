import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const useEditProfileFunctions = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("Himan Welgama");
  const [email, setEmail] = useState("Himanwelgama@gmail.com");



  const handleEditProfilePress = () => {
    // Handle edit profile button press
    console.log("Edit profile button pressed");
  };

  const handleUsernamePress = () => {
    // Handle username press
    navigation.navigate('Username');
  };
  const handleEmailPress = () => {
    // Handle email press
    navigation.navigate('E-mail');
  };
  
  const handlePasswordPress = () => {
    // Handle password press
    navigation.navigate('Change Password');
  };

  const handleDeleteAccountPress = () => {
    // Handle delete account press
    navigation.navigate('DELETE ACCOUNT');
  };

  const handleSaveUsername = () => {
    // Handle saving edited username
    console.log("Save username pressed");
  };

  const handleSaveEmail = () => {
    // Handle saving edited email
    console.log("Save email pressed");
  };

  return {
    username,
    email,
    handleEditProfilePress,
    handleUsernamePress,
    handleEmailPress,
    handlePasswordPress,
    handleDeleteAccountPress,
    handleSaveUsername,
    handleSaveEmail,
  };
};


export default useEditProfileFunctions;
