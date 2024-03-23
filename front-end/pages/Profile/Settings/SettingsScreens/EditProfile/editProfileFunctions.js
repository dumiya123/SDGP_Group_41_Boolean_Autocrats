import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const ipAddress = "192.168.1.3"; // Move ipAddress outside of the component

const useEditProfileFunctions = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    try {
      const response = await fetch(`http://${ipAddress}:8080/user/profile`);
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const userData = await response.json();
      setUsername(userData.username);
      setEmail(userData.email);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch user data from backend when component mounts
    fetchUserData();
  }, []);

  const updateUserProfile = async (data) => {
    try {
      const response = await fetch(`http://${ipAddress}:8080/user/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to update user profile");
      }
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  const saveUsername = async (newUsername) => {
    try {
      await updateUserProfile({ username: newUsername });
      setUsername(newUsername);
    } catch (error) {
      console.error("Error saving username:", error);
    }
  };

  const saveEmail = async (newEmail) => {
    try {
      await updateUserProfile({ email: newEmail });
      setEmail(newEmail);
    } catch (error) {
      console.error("Error saving email:", error);
    }
  };

  const handleEditProfilePress = () => {
    // Handle edit profile button press (if needed)
    console.log("Edit profile button pressed");
  };

  const handleUsernamePress = () => {
    // Handle username press
    navigation.navigate("Username");
  };

  const handleEmailPress = () => {
    // Handle email press
    navigation.navigate("E-mail");
  };

  const handlePasswordPress = () => {
    // Handle password press
    navigation.navigate("Create Password");
  };

  const handleDeleteAccountPress = () => {
    // Handle delete account press
    navigation.navigate("DELETE ACCOUNT");
  };

  return {
    loading,
    username,
    email,
    handleEditProfilePress,
    handleUsernamePress,
    handleEmailPress,
    handlePasswordPress,
    handleDeleteAccountPress,
    saveUsername,
    saveEmail,
    fetchUserData, // Expose fetchUserData function
  };
};

export default useEditProfileFunctions;
