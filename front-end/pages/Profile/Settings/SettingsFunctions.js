import { useNavigation } from '@react-navigation/native';

const useSettingsFunctions = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    console.log("User logged out");
  };

  const handleEditProfile = () => {
    navigation.navigate('EDIT PROFILE');
  };


  const handlePushNotifications = () => {
    navigation.navigate('PUSH NOTIFICATIONS');
  };

  const handlePrivacyAndSecurity = () => {
    navigation.navigate('PRIVACY AND SECURITY');
  };

  const handleInviteFriends = () => {
    navigation.navigate('INVITE FRIENDS');
  };

  const handleLinkedAccounts = () => {
    navigation.navigate('LINKED ACCOUNT');
  };
  const handleAbout = () => {
    navigation.navigate('ABOUT');
  };

  const handleHelpAndSupport = () => {
    navigation.navigate('HELP AND SUPPORT');
  };

  return {
    handleLogout,
    handleEditProfile,
    handlePushNotifications,
    handleInviteFriends,
    handleLinkedAccounts,
    handleAbout,
    handleHelpAndSupport,
  };
};

export default useSettingsFunctions;
