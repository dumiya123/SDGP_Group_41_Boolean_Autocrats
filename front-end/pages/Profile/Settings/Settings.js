import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import SettingsItem from "../../../components/SettingsComponents/SettingsItem";
import SectionTitle from "../../../components/SettingsComponents/SectionTitle";
import useSettingsFunctions from "./SettingsFunctions";

const Settings = () => {
  const SettingsFunctions = useSettingsFunctions(); 
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        
        <SectionTitle title="Settings and privacy" />
        <SettingsItem onPress={SettingsFunctions.handleEditProfile} title="Profile" iconName="edit" />
        <SettingsItem onPress={SettingsFunctions.handlePushNotifications} title="Push Notifications" iconName="bell" isLast />
 
        <SectionTitle title="Other" />
        <SettingsItem onPress={SettingsFunctions.handleInviteFriends} title="Invite Friends" iconName="user-plus" />
        <SettingsItem onPress={SettingsFunctions.handleLinkedAccounts} title="Linked Accounts" iconName="link" isLast />

        <SectionTitle title="Support & About" />
        <SettingsItem onPress={SettingsFunctions.handleAbout} title="About" iconName="info-circle" />
        <SettingsItem onPress={SettingsFunctions.handleHelpAndSupport} title="Help & Support" iconName="question-circle" isLast />

        <SectionTitle/>
        <SettingsItem onPress={SettingsFunctions.handleLogout} title="Logout" iconName="sign-out" isLast showAngleRight={false} />
      </View>

      <View style={styles.copyRightIcon}>
        <Icon name="copyright" size={20} color="black" />
        <Text style={styles.copyRightText}>SaveNest</Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "white",
  },
  section: {
    width: "100%",
  },
   settingItem: {
    backgroundColor: "rgba(223, 230, 233,0.5)",
    padding: 10,
    borderRadius: 10,
    borderBottomWidth: 1,
    paddingTop: 20,
    width: "100%",
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingText: {
    fontSize: 16,
    borderTopWidth: 1,
    marginLeft: 10,
  },
  iconContainer: {
    flexDirection: "row",
    marginLeft: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  nextPageIcon: {
    marginRight: 15,
  },
  buttonSection: {
    paddingTop: 20,
    width: "100%",
  },
  button: {
    backgroundColor: "#ddd",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    backgroundColor: "rgba(223, 230, 233,0.5)",
  },
  buttonText: {
    color: "red",
    fontSize: 16,
  },
  copyRightIcon: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  copyRightText: {
    left: 5,
  },
});

export default Settings;
