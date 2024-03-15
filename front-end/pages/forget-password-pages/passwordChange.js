import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import SetButton from '../../components/SetButtons/setButton';
import PasswordInput from '../../components/Text&PasswordInputField/passwordInput';
import SectionTitle from '../../components/SettingsComponents/SectionTitle';
import { useNavigation } from '@react-navigation/native';
import forgetPwImg from './forget-password-images/lock.png';
import SubtitleComponent from "../../components/SettingsComponents/Subtittle";
import ForgetPasswordLink from "../../components/SettingsComponents/forgetpPwBtn"; 

const UserPasswordchange = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');

  const handleButtonPress = () => {
    navigation.navigate('Create Password');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView Style={{ flexGrow: 1 }}>
        <View style={styles.content}>
          <Image source={forgetPwImg} style={styles.image} />
          <SectionTitle title={"Change Password"} />
          <SubtitleComponent title={" Enter your previous password here!"} />
          <PasswordInput
            value={password}
            onChangeText={setPassword}
            placeholder="Previous Password"
          />
          <ForgetPasswordLink title={"Forget your password?"} style={{ colour: 'midnightblue' }} />
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
  content: {
    flex: 1,
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
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
    color: 'gray',
  },
  btn: {
    marginTop: 130,
  }
});

export default UserPasswordchange;
