import React, { useState } from 'react';
import { View,Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SetButton from '../../../../../components/SetButtons/setButton';
import PasswordInput from '../../../../../components/Text&PasswordInputField/passwordInput'; // Import the PasswordInput component
import SectionTitle from '../../../../../components/SettingsComponents/SectionTitle';
import forgetPwImg from '../../../../../pages/forget-password-pages/forget-password-images/lock.png';
import SubtitleComponent from "../../../../../components/SettingsComponents/Subtittle"; // Import the SubtitleComponent
import TextInputField from '../../../../../components/TextInputField';

const UserNameChange = () => {
  const navigation = useNavigation();
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');

  const handleButtonPress = () => {
    // Handle delete account press
    navigation.navigate('Reset Username');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView Style={styles.scrollViewContent}>
        <View style={styles.content}>
          <Image source={forgetPwImg} style={styles.image} />
          <SectionTitle title={"Change Username"} />
          <SubtitleComponent title={" Enter your new Username and existing password here!"} />
          <TextInputField
            placeholder="New Username"
            value={username}
            onChangeText={(text) => setusername(text)}
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
            onPress={handleButtonPress}
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
