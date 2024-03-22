import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons from expo vector icons

const NotificationBox = ({ notifications }) => {
  // Adjust createdAt date format for each notification
  const formattedNotifications = notifications.map((notification) => ({
    ...notification,
    createdAt: new Date(notification.createdAt).toLocaleDateString(),
  }));

  return (
    <View style={styles.container}>
      {formattedNotifications.map((notification) => (
        <View key={notification.id} style={styles.notification}>
          <View style={styles.iconContainer}>
            <Ionicons name="notifications" size={24} color="#333" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.date}>{notification.createdAt}</Text>
            <Text style={styles.content}>
              {notification.notificationContent}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
  },
  notification: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    padding: 10,
  },
  iconContainer: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  date: {
    fontWeight: "bold",
    color: "#333",
  },
  content: {
    marginTop: 5,
    color: "#666",
  },
});

export default NotificationBox;
