import React from 'react';
import { View, StyleSheet,ScrollView } from 'react-native';
import NotificationSwitch from '../../../../../components/NotificationSwitch/Switch';
import { SafeAreaView } from 'react-native-safe-area-context';

const PushNotificationButton = () => {
  const handleNotificationToggle = (notificationIndex, isEnabled) => {
    if (isEnabled) {
      console.log(`Notification ${notificationIndex} is enabled`);
    } else {
      console.log(`Notification ${notificationIndex} is disabled`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.sectionTitleContainer}>
        </View>
        <View style={styles.notificationContainer}>
          <NotificationSwitch label="Notifications 1" onToggle={(isEnabled) => handleNotificationToggle(1, isEnabled)} />
          <NotificationSwitch label="Notifications 2" onToggle={(isEnabled) => handleNotificationToggle(2, isEnabled)} />
          <NotificationSwitch label="Notifications 3" onToggle={(isEnabled) => handleNotificationToggle(3, isEnabled)} />
          <NotificationSwitch label="Notifications 4" onToggle={(isEnabled) => handleNotificationToggle(4, isEnabled)} />
          <NotificationSwitch label="Notifications 5" isLast onToggle={(isEnabled) => handleNotificationToggle(5, isEnabled)} />
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
    paddingBottom: 20,
  },
  sectionTitleContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  notificationContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
});

export default PushNotificationButton;
