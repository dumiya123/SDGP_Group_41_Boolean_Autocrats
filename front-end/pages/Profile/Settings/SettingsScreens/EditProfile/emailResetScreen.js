import React, { useState } from 'react';
import { View,Image, SafeAreaView,ScrollView, StyleSheet } from 'react-native';
import ResetImg from '../../../../forget-password-pages/forget-password-images/reset.png';
import { useNavigation } from '@react-navigation/native';
import SubtitleComponent from "../../../../../components/SettingsComponents/Subtittle";
import SectionTitle from "../../../../../components/SettingsComponents/SectionTitle";
import SetButton from "../../../../../components/SetButtons/setButton";


const EmailResetScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handleConfirm = () => {

    navigation.navigate('Home');
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.card}>
          <Image source={ResetImg} style={styles.image} />
          <SectionTitle title={"Email changed"} style={styles.sectionTitle} />
          <SubtitleComponent title="Your email has been changed Successfully!" style={styles.subtitle} />
          <SetButton
            onPress={handleConfirm}
            title="Confirm"
            backgroundColor="#183D3D"
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
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '80%',
    alignItems: 'center',
  },
  image: {
    width: '50%',
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    color: 'gray',
    justifyContent: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default EmailResetScreen;
