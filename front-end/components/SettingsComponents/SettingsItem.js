import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const SettingsItem = ({ onPress, title, isLast, iconName, showAngleRight = true }) => {
  const textColor = title === "Delete Account" ? "red" : "black";

  return (
    <TouchableOpacity
      style={[
        styles.settingItem,
        { borderBottomColor: isLast ? "transparent" : "#7F7F7F", borderBottomWidth: isLast ? 0 : 1 },
      ]}
      onPress={onPress}
    >
      <View style={styles.contentContainer}>
        <View style={styles.iconContainer}>
          <Icon name={iconName} size={20} color="black" style={styles.icon} />
        </View>
        <Text style={[styles.settingText, { color: textColor }]}>{title}</Text>
      </View>
      {showAngleRight && <Icon name="angle-right" size={20} color="#7F7F7F" style={styles.nextPageIcon} />}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({

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

});

export default SettingsItem;
