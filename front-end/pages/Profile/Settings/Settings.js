import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import SettingsItem from "../../../components/SettingsComponents/SettingsItem";
import SectionTitle from "../../../components/SettingsComponents/SectionTitle";
import useSettingsFunctions from "./SettingsFunctions";
import Copyright from "../../../components/CopyrightIcon/Copyright";

const Settings = () => {
  const SettingsFunctions = useSettingsFunctions();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <SectionTitle title="Settings and privacy" />
        <SettingsItem
          onPress={SettingsFunctions.handleEditProfile}
          title="Profile"
          iconName="edit"
          isLast
        />
        <SectionTitle title="Other" />
        <SettingsItem
          onPress={SettingsFunctions.handleInviteFriends}
          title="Invite Friends"
          iconName="user-plus"
          isLast
        />

        <SectionTitle title="Support & About" />
        <SettingsItem
          onPress={SettingsFunctions.handleAbout}
          title="About"
          iconName="info-circle"
        />
        <SettingsItem
          onPress={SettingsFunctions.handleHelpAndSupport}
          title="Help & Support"
          iconName="question-circle"
          isLast
        />

        <SectionTitle title={"Logout"} />
        <SettingsItem
          onPress={SettingsFunctions.handleLogout}
          testID="logout-button"
          title="Logout"
          iconName="sign-out"
          isLast
          showAngleRight={false}
        />
      </View>

      <Copyright text="SaveNest" />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#F3F8FF",
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

  copyRightText: {
    left: 5,
  },
});

export default Settings;
