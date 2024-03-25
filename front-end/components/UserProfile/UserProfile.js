// Import necessary modules
import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Animated, Modal, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importing Ionicons for the close icon
import LottieView from 'lottie-react-native'; // Importing LottieView for rendering Lottie animations
import useEditProfileFunctions from '../../pages/Profile/Settings/SettingsScreens/EditProfile/editProfileFunctions';
import ChatBot from '../../components/ChatBot/chatBot';

// Define UserProfile component
const UserProfile = () => {
  const { username, email, loading, fetchUserData } = useEditProfileFunctions();
  const [isVisible, setIsVisible] = useState(false); 
  const [forceUpdate, setForceUpdate] = useState(false); // Dummy state for force re-render
  const slideAnim = useRef(new Animated.Value(-1000)).current; // Start from off-screen left

  useEffect(() => {
    // Call fetchUserData when component mounts or forceUpdate changes
    fetchUserData();
  }, [fetchUserData, forceUpdate]);

  // Function to handle user profile press
  const handleUserProfilePress = () => {
    setIsVisible(true);
    // Animate slide in
    Animated.timing(slideAnim, {
      toValue: 0, // Slide to the left edge
      duration: 300, // Adjust as needed
      useNativeDriver: true,
    }).start();
  };

  // Function to handle closing modal
  const handleCloseModal = () => {
    // Animate slide out
    Animated.timing(slideAnim, {
      toValue: -1000, // Slide back off-screen left
      duration: 200, // Adjust as needed
      useNativeDriver: true,
    }).start(() => setIsVisible(false));
  };

  return (
    <SafeAreaView>
      {/* Replace the Ionicons component with the Lottie animation */}
      <TouchableOpacity onPress={handleUserProfilePress}>
        <LottieView
          source={require('../../animations/robot.json')}
          style={{ width: 35, height: 35, marginLeft: 20 }}
          autoPlay
          loop
        />
      </TouchableOpacity>

      <Modal
        visible={isVisible}
        transparent={true}
        animationType="slide"
      >
        <View
          style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0)', justifyContent: 'center', marginRight: '20%' }}
        >
          <Animated.View
            style={{
              transform: [{ translateX: slideAnim }],
              backgroundColor: '#ced6e0',
              padding: 20,
              height: '100%',
            }}
          >
            <TouchableOpacity
              style={{ position: 'absolute', top: 20, right: 20, zIndex: 1 }}
              onPress={handleCloseModal}
            >
              <Ionicons name="chevron-back" style={styles.chevronBack} />
            </TouchableOpacity>

            <ChatBot />
          </Animated.View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  chevronBack: {
    fontSize: 40,
    marginTop: 10,
  }
});

export default UserProfile;
