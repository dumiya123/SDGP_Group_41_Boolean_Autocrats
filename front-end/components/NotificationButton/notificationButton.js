import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import fetchNotifications from "../../pages/NotificationScreen/NotificationScreenFunctions";

const NotificationButton = () => {
  const navigation = useNavigation();
  const [unreadNotifications, setUnreadNotifications] = useState([]);

  useEffect(() => {
    const fetchAndSetNotifications = () => {
      fetchNotifications()
        .then((notifications) => {
          const unread = notifications.filter(
            (notification) => !notification.readStatus
          );
          setUnreadNotifications(unread);
        })
        .catch((error) => {
          console.error("Error fetching notifications:", error);
        });
    };

    fetchAndSetNotifications(); // Fetch notifications initially

    const intervalId = setInterval(fetchAndSetNotifications, 5000); // Fetch notifications every 5 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [unreadNotifications]); // Re-fetch notifications when unreadNotifications change

  const handleNotificationPress = () => {
    navigation.navigate("Notifications");
  };

  const buttonColor = unreadNotifications.length > 0 ? "red" : "white";

  return (
    <Ionicons
      name="notifications"
      size={30}
      color={buttonColor}
      style={{ marginRight: 20 }}
      onPress={handleNotificationPress}
    />
  );
};

export default NotificationButton;
