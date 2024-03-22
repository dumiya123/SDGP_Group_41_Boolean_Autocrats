const ipAddress = "192.168.1.10";

// Function to fetch notificationshttp://localhost:8080/user/getNotification
const fetchNotifications = async () => {
  try {
    const response = await fetch(
      `http://${ipAddress}:8080/user/getNotification`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (response.ok) {
      return data; // Return the fetched notifications
    } else {
      console.error("Failed to fetch notifications:", data.error);
      return []; // Return an empty array in case of failure
    }
  } catch (error) {
    console.error(`http://${ipAddress}:8080/notification`);
    console.error("Error fetching notifications:", error);
    return []; // Return an empty array in case of error
  }
};

const fetchNotificationsAndUpdate = async () => {
  try {
    const response = await fetch(
      `http://${ipAddress}:8080/user/getNotificationAndUpdate`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (response.ok) {
      return data; // Return the fetched notifications
    } else {
      console.error("Failed to fetch notifications:", data.error);
      return []; // Return an empty array in case of failure
    }
  } catch (error) {
    console.error(`http://${ipAddress}:8080/notification`);
    console.error("Error fetching notifications:", error);
    return []; // Return an empty array in case of error
  }
};

module.exports = { fetchNotifications, fetchNotificationsAndUpdate };
