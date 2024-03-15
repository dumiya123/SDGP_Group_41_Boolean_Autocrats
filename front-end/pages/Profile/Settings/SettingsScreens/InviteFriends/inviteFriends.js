import React from 'react';
import { View,StyleSheet,ScrollView } from 'react-native';
import SectionTitle from '../../../../../components/SettingsComponents/SectionTitle';
import SubtitleComponent from "../../../../../components/SettingsComponents/Subtittle";
import CustomButton from '../../../../../components/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';

const InviteFriends = () => {
  const handleShareApp = () => {
    console.log("Sharing the app with friends...");
    // Add functionality to share the app
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.section}>
          <SectionTitle title="Invite Friends" style={{ textAlign: 'center' }} />
          <SubtitleComponent
            title="Share our app with your friends and enjoy together!"
            style={styles.subtitle}
          />
          <CustomButton
            onPress={handleShareApp}
            text="Share App"
            icon="share"
            buttonColor="#007AFF"
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
    paddingHorizontal: 20,
  },
  section: {
    width: '100%',
    maxWidth: 400,
    paddingTop: 20,
  },
  subtitle: {
    color: 'gray',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
});

export default InviteFriends;

