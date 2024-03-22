
import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NotificationBox from "../../components/NotificationBox/NotificationBox";
import fetchNotifications from "../NotificationScreen/NotificationScreenFunctions";

const NotificationScreen = () => {
  const [notificationsData, setNotificationsData] = useState([]);

  useEffect(() => {
    fetchNotifications()
      .then((data) => {
        // Save the fetched data into the notificationsData array
        setNotificationsData(data);
      })
      .catch((error) => {
        console.error("Error fetching notifications:", error);
      });
  }, []); // Empty dependency array ensures it only runs once on mount

  // Log or process the fetched notifications
  console.log("Fetched notifications:", notificationsData);

  return (
    <ScrollView>
      <View>
        {/* Wrap NotificationBox with Text */}
        <View>
          <NotificationBox notifications={notificationsData} />
        </View>
      </View>
    </ScrollView>

  );
};

export default NotificationScreen;
