import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const NotificationButton = () => {
  const navigation = useNavigation();
  
  const handleNotificationPress = () => { 
    navigation.navigate('Notifications');
  };

  return (
    <Ionicons 
      name="notifications" 
      size={30} 
      color="white" 
      style={{ marginRight: 20 }} 
      onPress={handleNotificationPress}
    />
  );
};

export default NotificationButton;
