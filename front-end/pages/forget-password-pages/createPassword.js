
import React, { useState } from 'react';
import { View, Image, SafeAreaView, StyleSheet, ScrollView, Alert } from 'react-native';
import PasswordInput from '../../components/Text&PasswordInputField/passwordInput';
import forgetPwImg from './forget-password-images/lock.png';
import { useNavigation } from '@react-navigation/native';
import SetButton from "../../components/SetButtons/setButton";
import SectionTitle from "../../components/SettingsComponents/SectionTitle";
import SubtitleComponent from "../../components/SettingsComponents/Subtittle";

const PasswordForm = () => {
  const navigation = useNavigation();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCreate = async () => {
    // try {
    //   // Check if passwords match
    //   if (newPassword !== confirmPassword) {
    //     Alert.alert('Passwords Do Not Match', 'Please make sure the passwords match.');
    //     return;
    //   }

    //   // Make API call to backend to set new password
    //   const response = await fetch('YOUR_BACKEND_ENDPOINT', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ newPassword }),
    //   });

    //   if (response.ok) {
    //     // Navigate to confirmation screen or perform any other action
        navigation.navigate('Confirm Password');
    //   } else {
    //     // Handle error response from backend
    //     Alert.alert('Error', 'Failed to set new password. Please try again later.');
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    //   // Handle other errors gracefully
    //   Alert.alert('Error', 'An error occurred. Please try again later.');
    // }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView Style={styles.scrollViewContent}>
        <View style={styles.content}>
          <Image source={forgetPwImg} style={styles.image} />
          <SectionTitle title={"Create Password"} />
          <SubtitleComponent title="Your new password must be different from previously used passwords." />

          <View style={styles.input}>
            <PasswordInput
              value={newPassword}
              onChangeText={setNewPassword}
              placeholder="New Password"
            />
          </View>

          <View style={styles.input}>
            <PasswordInput
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm Password"
            />
          </View>
        </View>
        <View style={styles.btn}>
          <SetButton
            onPress={handleCreate}
            title="Create"
            backgroundColor="#183D3D"
            marginTop={60}
            textColor="white"
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  input: {
    marginBottom: 20,
  },
  btn: {
    marginTop: 60,
  }
});

export default PasswordForm;
