import { useNavigation } from '@react-navigation/native';

const useSettingsFunctions = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    console.log("User logged out");
  };

  const handleEditProfile = () => {
    navigation.navigate('Profile Settings');
  };
  const handlePushNotifications = () => {
    navigation.navigate('Push Notifications');
  };

  const handleInviteFriends = () => {
    navigation.navigate('Invite Friends');
  };


  const handleAbout = () => {
    navigation.navigate('About Us');
  };

  const handleHelpAndSupport = () => {
    navigation.navigate('Help & Support');
  };

  return {
    handleLogout,
    handleEditProfile,
    handlePushNotifications,
    handleInviteFriends,
    handleAbout,
    handleHelpAndSupport,
  };
};

export default useSettingsFunctions;
