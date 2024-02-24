import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleExplore = () => {
    // Handle Explore button press
    console.log("Explore button pressed");
  };

  const handleProfile = () => {
    // Handle Profile button press
    console.log("Profile button pressed");
  };

  const handleSettings = () => {
    // Handle Settings button press
    console.log("Settings button pressed");
  };

  const handleMoreOptions = () => {
    // Handle More Options button press
    console.log("More Options button pressed");
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.headerText}>Welcome to My App</Text> */}

      {/* <Image source={require("./home-images/image5.jpg")} style={styles.logo} /> */}

      {/* <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleExplore}>
          <Text style={styles.buttonText}>Explore</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleProfile}>
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.bottomButton} onPress={handleSettings}>
          <Text style={styles.bottomButtonText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottomButton}
          onPress={handleMoreOptions}
        >
          <Text style={styles.bottomButtonText}>More Options</Text>
        </TouchableOpacity>
      </View> */}

      {/* Render the bottom tab navigator */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#183D3D",
    borderRadius: 15,
    paddingVertical: 10,
    alignItems: "center",
    width: 150,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  bottomButton: {
    backgroundColor: "#183D3D",
    borderRadius: 15,
    paddingVertical: 10,
    alignItems: "center",
    width: "40%",
    marginTop: 20,
  },
  bottomButtonText: {
    color: "black",
    fontWeight: "bold",
  },
});

export default HomeScreen;
