import { Dimensions, StyleSheet } from "react-native";

// Developed by Dumindu Gamage

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  details: {
    marginTop: 200,
  },
  imageContainer: {},
  ImageBackground: {
    flex: 1,
    height: 200,
    width: Dimensions.get("window").width,
  },

  header: {
    marginLeft: Dimensions.get("window").width / 7,
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },

  label: {
    fontSize: 15,
    marginBottom: 8,
    marginLeft: 30,
    fontWeight: "bold",
    marginLeft: 20,
  },

  input: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 16,
    marginLeft: 20,
    marginRight: 20,
    borderStyle: "solid",
    borderRadius: 10,
    paddingLeft: 10,
  },

  submit: {
    marginLeft: 12,
    marginRight: 12,
  },

  notificationContainer: {
    fontSize: 15,
    fontWeight: "bold",
    flexDirection: "row",
    paddingRight: 50,
  },

  label_one: {
    fontSize: 15,
    marginBottom: 8,
    marginLeft: 30,
    marginRight: 90,
    fontWeight: "bold",
    flexDirection: "row",
    margin: 12,
    marginEnd: 90,
  },

  save_config_button: {
    backgroundColor: "#B9B4C7",
    marginLeft: Dimensions.get("window").width / 4,
    marginRight: 30,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width / 2,
    height: Dimensions.get("window").height / 15,
  },

  config_button_text: {
    paddingBottom: 20,
    color: "black",
    textAlign: "center",
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: 9,
  },

  buttonIcon: { paddingTop: 11 },
});

export default styles;
