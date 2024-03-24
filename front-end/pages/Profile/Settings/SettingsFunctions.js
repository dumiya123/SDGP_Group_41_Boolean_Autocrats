import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const useSettingsFunctions = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      // Clear authentication tokens from AsyncStorage
      await AsyncStorage.removeItem("accessToken");

      // Navigate to the login screen
      navigation.navigate("LOG IN");
    } catch (error) {
      console.error("Error clearing tokens:", error);
    }
  };

  const handleEditProfile = () => {
    navigation.navigate("Profile Settings");
  };

  const handlePushNotifications = () => {
    navigation.navigate("Push Notifications");
  };

  const handleInviteFriends = () => {
    navigation.navigate("Invite Friends");
  };

  const handleAbout = () => {
    navigation.navigate("About Us");
  };

  const handleHelpAndSupport = () => {
    navigation.navigate("Help & Support");
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
