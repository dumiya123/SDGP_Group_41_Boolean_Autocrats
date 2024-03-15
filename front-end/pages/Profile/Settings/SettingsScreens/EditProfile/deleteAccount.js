import React, { useState } from 'react';
import { View,Image, SafeAreaView, StyleSheet,ScrollView } from 'react-native';
import SetButton from '../../../../../components/SetButtons/setButton';
import PasswordInput from '../../../../../components/Text&PasswordInputField/passwordInput';
import SectionTitle from '../../../../../components/SettingsComponents/SectionTitle';
import { useNavigation } from '@react-navigation/native';
import forgetPwImg from '../../../../../pages/forget-password-pages/forget-password-images/lock.png';
import SubtitleComponent from "../../../../../components/SettingsComponents/Subtittle"; 


const DeleteAccount = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');

  const handleButtonPress = () => {
    navigation.navigate('DELETE USER ACCOUNT');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView Style={styles.scrollViewContent}>
        <View style={styles.content}>
          <Image source={forgetPwImg} style={styles.image} />
          <SectionTitle title={"Delete My Account"} style={styles.sectionTitle} />
          <SubtitleComponent title={"Do you want to delete your account?"} style={styles.subtitle} />
          <PasswordInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
          />
        </View>
        <View style={styles.btn}>
          <SetButton
            onPress={handleButtonPress}
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
    justifyContent: 'center',
    alignItems: 'center',
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
  sectionTitle: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
    color: 'red',
  },
  btn: {
    marginTop: 160,
  }
});

export default DeleteAccount;
