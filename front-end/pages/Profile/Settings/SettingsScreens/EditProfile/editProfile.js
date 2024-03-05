import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from "react-native";
import SettingsItem from "../../../../../components/SettingsComponents/SettingsItem";
import SectionTitle from "../../../../../components/SettingsComponents/SectionTitle";
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome from expo/vector-icons

const EditProfile = () => {
  const [username, setUsername] = useState("Himan Welgama");
  const [email, setEmail] = useState("Himan@gmail.com");

  const handleEditProfilePress = () => {
    // Handle edit profile button press
    console.log("Edit profile button pressed");
  };

  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.profileImage}
            source={{ uri: 'https://example.com/your-profile-image.jpg' }}
          />
        </View>
        <TouchableOpacity style={styles.editIconContainer} onPress={handleEditProfilePress}>
          <Text style={styles.editText}>Edit</Text>
          <FontAwesome name="pencil" size={20} color="#183D3D" />
        </TouchableOpacity>
      </View>
      <View>
        <SettingsItem onPress={() => { console.log(""); }} title="User name" iconName="user" isLast />
        <Text style={styles.editableUserName}>{username}</Text>
        <SettingsItem onPress={() => { console.log(""); }} title="E-mail" iconName="envelope" isLast />
        <Text style={styles.editableEmail}>{email}</Text>
        <SettingsItem onPress={() => { console.log("Changing password..."); }} title="Password" iconName="lock" isLast />
        <SectionTitle title="" />
        <SettingsItem onPress={() => { console.log("Changing password..."); }} title="Delete Account" iconName="trash" isLast/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'column',
    paddingTop: 20,
  },
  imageContainer: {
    marginLeft: 10,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#183D3D',
    marginBottom: 10,
  },
  editIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 70,
    marginBottom: 10
  },
  editText: {
    fontSize: 14,
    color: '#183D3D',
    marginRight: 5,
  },
  userInfoContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  editableUserName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#183D3D',
    marginTop: 5,
    marginLeft: 40,
  },
  editableEmail: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#183D3D',
    marginTop: 5,
    marginLeft: 40,
  },
});

export default EditProfile;
