import React, { useState } from 'react';
import { View,Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import SetButton from '../../../../../components/SetButtons/setButton';
import PasswordInput from '../../../../../components/Text&PasswordInputField/passwordInput';
import SectionTitle from '../../../../../components/SettingsComponents/SectionTitle';
import { useNavigation } from '@react-navigation/native';
import forgetPwImg from '../../../../../pages/forget-password-pages/forget-password-images/lock.png';
import SubtitleComponent from "../../../../../components/SettingsComponents/Subtittle";
import TextInputField from '../../../../../components/TextInputField';

const UserEmailChange = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 
  const handleButtonPress = () => {
    navigation.navigate('Reset E-mail Address');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView Style={{ flexGrow: 1 }}>
        <View style={styles.content}>
          <Image source={forgetPwImg} style={styles.image} />
          <SectionTitle title={"Change Email Address"} />
          <SubtitleComponent title={" Enter your new E-mail address and existing password here!"} />
          <TextInputField
            placeholder="New email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            iconName="email"
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

export default UserEmailChange;
