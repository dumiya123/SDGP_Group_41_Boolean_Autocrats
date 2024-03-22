import React, { useState } from 'react';
import { View, Image, SafeAreaView, StyleSheet, ScrollView, Alert } from 'react-native';
import SetButton from '../../../../../components/SetButtons/setButton';
import PasswordInput from '../../../../../components/Text&PasswordInputField/passwordInput';
import SectionTitle from '../../../../../components/SettingsComponents/SectionTitle';
import { useNavigation } from '@react-navigation/native';
import forgetPwImg from '../../../../../pages/forget-password-pages/forget-password-images/lock.png';
import SubtitleComponent from "../../../../../components/SettingsComponents/Subtittle";

const ipAddress = "192.168.8.126";
const DeleteAccount = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');

  const handleDeleteAccount = async () => {
    try {
      const response = await fetch( `http://${ipAddress}:8080/user/deleteUserData`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
      
        },
        body: JSON.stringify({
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Account deletion successful
        Alert.alert('Success', 'Your account has been deleted successfully.');
        // You may navigate to a different screen after successful deletion
        navigation.navigate('Account Deleted Confirmation');
      } else {
        // Handle errors from the server
        Alert.alert('Error', data.message);
      }
    } catch (error) {
      console.error('Error deleting account:', error);
      Alert.alert('Error', 'An error occurred while deleting your account. Please try again later.');
    }
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
