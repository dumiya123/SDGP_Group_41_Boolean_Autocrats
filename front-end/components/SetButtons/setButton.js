import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

const SetButton = ({
  onPress,
  title,
  backgroundColor,
  width,
  style: Styles,
  textColor,
  marginTop,
  font,
}) => {
  return (
    <View style={[styles.btncontainer, { marginTop: marginTop }]}>
      <TouchableOpacity
        testID="button"
        onPress={onPress}
        style={{
          ...styles.button,
          backgroundColor: backgroundColor || "#183D3D",
          width: width || 150,
        }}
      >
        <Text
          style={[
            styles.buttonText,
            { color: textColor || "white", fontWeight: font },
            Styles,
          ]}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btncontainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: 15,
    paddingVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
  },
});

export default SetButton;
