import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import SettingsItem from "../../../../../components/SettingsComponents/SettingsItem";
import SectionTitle from "../../../../../components/SettingsComponents/SectionTitle";
import useEditProfileFunctions from "./editProfileFunctions";

const EditProfile = () => {
  const navigation = useNavigation();
  const {handleEditProfilePress, handleUsernamePress, handleEmailPress, handlePasswordPress, handleDeleteAccountPress } = useEditProfileFunctions();
  const [username, setUsername] = useState("Himan Welgama");
  const [email, setEmail] = useState("Himanwelgama@gmail.com");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{backgroundColor: '#F3F8FF'}}>
        <View style={styles.headerContainer}>
        </View> 
        <View style={styles.profilePicContainer}>
          
          <View style={styles.imageContainer}>
            <Image
              style={styles.profileImage}
              source={{ uri: 'https://example.com/your-profile-image.jpg' }}
            />
          </View>
          <View style={styles.EditIconAndTextContainer}>
            <TouchableOpacity style={styles.editIconContainer} onPress={handleEditProfilePress}>
              <Text style={styles.editText}>Edit</Text>
              <FontAwesome name="pencil" size={20} color="#183D3D" />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <SectionTitle title={"Username"}/>
          <SettingsItem
            onPress={handleUsernamePress}
            title={`${username}`}
            iconName="user"
            isLast
          />
          <SectionTitle title={"E-mail"}/>
          <SettingsItem
            onPress={handleEmailPress}
            title={`${email}`}
            iconName="envelope"
            isLast
          />
          <SectionTitle title={"Password"}/>
          <SettingsItem
            onPress={handlePasswordPress}
            title="Password"
            iconName="lock"
            isLast
          />
          <SectionTitle/>
          <SettingsItem
            onPress={handleDeleteAccountPress}
            title="Delete Account"
            iconName="trash"
            isLast
            showAngleRight={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer:{
    paddingTop: 20,
    alignItems: 'center',
  },
  profilePicContainer: {
    paddingTop: 50,
  },
  imageContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#183D3D',
    marginBottom: 10,
  },
  EditIconAndTextContainer:{
    alignItems:'center',
  },
  editIconContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between'
  },
  editText: {
    fontSize: 20,
    color: '#183D3D',
    marginRight: 8,
  },

});

export default EditProfile;
