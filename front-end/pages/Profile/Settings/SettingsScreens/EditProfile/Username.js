import React, { useState } from 'react';
import { View, Image, SafeAreaView, ScrollView, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SetButton from '../../../../../components/SetButtons/setButton';
import PasswordInput from '../../../../../components/Text&PasswordInputField/passwordInput';
import SectionTitle from '../../../../../components/SettingsComponents/SectionTitle';
import forgetPwImg from '../../../../../pages/forget-password-pages/forget-password-images/lock.png';
import SubtitleComponent from "../../../../../components/SettingsComponents/Subtittle";
import TextInputField from '../../../../../components/TextInputField';

const ipAddress = "192.168.8.126";

const UserNameChange = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeUsername = async () => {
    try {
      const response = await fetch(`http://${ipAddress}:8080/user/editProfile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password }), // Send new username and password to the backend
      });

      const data = await response.json();

      if (response.ok) {
        navigation.navigate('Username Change Confirmation');
      } else {
        Alert.alert('Error', data.message || 'Failed to change username. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'An error occurred. Please try again later.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollViewContent}>
        <View style={styles.content}>
          <Image source={forgetPwImg} style={styles.image} />
          <SectionTitle title={"Change Username"} />
          <SubtitleComponent title={"Enter your new Username and existing password here!"} />
          <TextInputField
            placeholder="New Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
            iconName="person"
          />
          <PasswordInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
          />
        </View>
        <View style={styles.btn}>
          <SetButton
            onPress={handleChangeUsername}
            title="Confirm"
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
    marginTop: 100,
  }
});

export default UserNameChange;
