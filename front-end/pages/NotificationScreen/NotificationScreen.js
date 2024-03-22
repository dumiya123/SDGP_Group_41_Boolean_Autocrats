import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NotificationBox from "../../components/NotificationBox/NotificationBox";

const ipAddress = "192.168.1.8";

const NotificationScreen = () => {
  const notificationsData = [
    {
      id: 1,
      userId: 2,
      readStatus: false,
      notificationContent:
        "Price of Carrot has increased from undefined to undefined",
      createdAt: "2024-03-21",
      updatedAt: "2024-03-21",
    },
    {
      id: 2,
      userId: 2,
      readStatus: false,
      notificationContent: "New message from John Doe",
      createdAt: "2024-03-20",
      updatedAt: "2024-03-20",
    },
    {
      id: 3,
      userId: 2,
      readStatus: true,
      notificationContent: "You have a meeting at 2:00 PM",
      createdAt: "2024-03-19",
      updatedAt: "2024-03-19",
    },
  ];
  return (
    <View>
      <NotificationBox notifications={notificationsData} />
    </View>
  );
};

export default NotificationScreen;
