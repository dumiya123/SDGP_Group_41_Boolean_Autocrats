import React, { useState } from 'react';
import { View, Image, SafeAreaView, StyleSheet, ScrollView, Alert } from 'react-native';
import SetButton from '../../../../../components/SetButtons/setButton';
import PasswordInput from '../../../../../components/Text&PasswordInputField/passwordInput';
import SectionTitle from '../../../../../components/SettingsComponents/SectionTitle';
import { useNavigation } from '@react-navigation/native';
import forgetPwImg from '../../../../../pages/forget-password-pages/forget-password-images/lock.png';
import SubtitleComponent from "../../../../../components/SettingsComponents/Subtittle";

const DeleteAccount = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');

  const handleDeleteAccount = async () => {
    try {
      // Verify existing user's password with the backend
      const passwordVerified = await verifyPassword(password);

      if (passwordVerified) {
        // If password is verified, proceed to delete the account
        const accountDeleted = await deleteAccount();

        if (accountDeleted) {
          // Navigate to confirmation screen or perform any other action
          navigation.navigate('Account Deleted Confirmation');
        } else {
          // Handle case where account deletion failed
          Alert.alert('Error', 'Failed to delete account. Please try again.');
        }
      } else {
        // Handle case where password verification failed
        Alert.alert('Invalid Password', 'The entered password is incorrect. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle other errors if necessary
      Alert.alert('Error', 'An error occurred. Please try again later.');
    }
  };

  const verifyPassword = async (password) => {
    // Implement logic to verify password with backend
    // Example:
    // const response = await fetch('VERIFY_PASSWORD_ENDPOINT', {
    //   method: 'POST',
    //   body: JSON.stringify({ password }),
    // });
    // const data = await response.json();
    // return data.passwordVerified;

    // For demonstration purposes, assuming password verification is successful
    return true;
  };

  const deleteAccount = async () => {
    // Implement logic to delete account with backend
    // Example:
    // const response = await fetch('DELETE_ACCOUNT_ENDPOINT', {
    //   method: 'DELETE',
    // });
    // const data = await response.json();
    // return data.accountDeleted;

    // For demonstration purposes, assuming account deletion is successful
    return true;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView Style={styles.scrollViewContent}>
        <View style={styles.content}>
          <Image source={forgetPwImg} style={styles.image} />
          <SectionTitle title={"Delete My Account"} />
          <SubtitleComponent title={"Do you want to delete your account?"} />
          <PasswordInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
          />
        </View>
        <View style={styles.btn}>
          <SetButton
            onPress={handleDeleteAccount}
            title="Delete Account"
            backgroundColor="red"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F8FF',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  content: {
    padding: 20,
    alignItems: 'center',
    marginBottom: 50,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  btn: {
    marginTop: 150,
  }
});

export default DeleteAccount;
