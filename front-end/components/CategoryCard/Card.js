import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import theme from "../../themes/themes";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

// Function to scale the size of the components based on the screen size
const verticalScale = (size) => {
  const designHeight = 1000;
  const ratio = screenHeight / designHeight;
  return size * ratio;
};

const CardComponent = (props) => {
  const { image, date, off, offText, onClicked } = props;

  return (
    <ImageBackground source={image} borderRadius={12} style={styles.card}>
      <View style={styles.overlay}>
        <Text style={styles.text}>{date}</Text>
        <View style={styles.content}>
          <Text style={styles.offText}>{off}</Text>
          <Text style={styles.description}>
            {offText.substring(0, 100) + "."}
          </Text>
        </View>
        <TouchableOpacity onPress={onClicked} style={styles.button}>
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonText}>{"EXPLORE"}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    alignSelf: "center",
    flexDirection: "column",
    width: screenWidth - 20,
    height: verticalScale(300),
    borderRadius: 20,
    elevation: 2,
    shadowColor: "#777",
    shadowOpacity: 0,
    shadowRadius: 20,
    overflow: "hidden",
    shadowOffset: {
      height: 1,
      width: 0,
    },
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: 12,
    flex: 1,
  },
  text: {
    flex: 1,
    color: theme.colors.primary,
    fontSize: 17,
    margin: 20,
  },
  content: {
    flex: 4,
    marginLeft: 20,
    backgroundColor: "transparent",
    alignItems: "flex-start",
  },
  offText: {
    marginTop: 15,
    color: "#fff",
    fontSize: 30,
    marginBottom: 20,
  },
  description: {
    color: theme.colors.primary,
    fontSize: 11,
    width: 200,
    textAlign: "justify",
  },
  button: {
    justifyContent: "center",
    zIndex: 3,
    alignItems: "center",
    alignSelf: "flex-end",
    width: 150,
    height: 40,
    margin: 20,
    shadowRadius: 5,
    borderRadius: 40,
    backgroundColor: theme.colors.buttonFirst,
  },
  buttonTextContainer: {
    flexDirection: "row",
  },
  buttonText: {
    color: theme.colors.primary,
    fontSize: 13,
    fontWeight: "bold",
  },
});

export default CardComponent;
