import React from 'react';
import { View, Text, Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import ResetImg from '../../../../forget-password-pages/forget-password-images/reset.png';
import { useNavigation } from '@react-navigation/native';
import SubtitleComponent from "../../../../../components/SettingsComponents/Subtittle"; // Import the SubtitleComponent
import SectionTitle from "../../../../../components/SettingsComponents/SectionTitle";
import SetButton from "../../../../../components/SetButtons/setButton"; // Import the SetButton component

const UsernameResetScreen = () => {
  const navigation = useNavigation();

  const handleConfirm = () => {
    // Handle confirmation press, navigate to the home screen or any other screen as needed
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.card}>
          <Image source={ResetImg} style={styles.image} />
          <SectionTitle title={"Username changed"} style={styles.sectionTitle} />
          <SubtitleComponent title="Your Username has been changed Successfully!" style={styles.subtitle} />
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

export default UsernameResetScreen;

