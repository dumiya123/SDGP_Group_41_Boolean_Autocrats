import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
const screenWidth = Dimensions.get("window").width;

const UpdateManually = () => {
    const navigation = useNavigation();

    const handleUpdateManually = () => {
        // Handle the action when "Update Manually" button is clicked
        console.log("Update Manually clicked");
        navigation.navigate("Update Expenses");
        // Add your logic here
      };
    
      return (
        <View style={styles.mainWrapper}>
          <TouchableOpacity style={styles.button} onPress={handleUpdateManually}>
            <View style={styles.contentWrapper}>
              <Text style={styles.buttonText}>{"Update Manually"}</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    };

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 2,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1F3F4",
    flexDirection: "row",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    height: 80,
    width: screenWidth - 20,
  },
  button: {
    backgroundColor: "green",
    width: 200,
    borderRadius: 10,
    alignSelf: "center",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  contentWrapper: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    flex: 1,
    alignSelf: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 11,
  },
  title: {
    alignSelf: "center",
    color: "black",
    fontSize: 30,
    fontWeight: "700",
  },
  itemText: {
    color: "black",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    marginBottom: 10,
  },
  subTitle: {
    color: "black",
    fontSize: 30,
    fontWeight: "600",
    marginTop: 10,
  },
  totalText: {
    color: "black",
    fontSize: 20,
    fontWeight: "700",
    marginTop: 10,
    marginBottom: 50,
  },
  modalContainer: {
    width: screenWidth - 20,
    alignSelf: "center",
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
  },
  modalContent: {
    flex: 1,
    alignSelf: "center",
    backgroundColor: "white",
    marginTop: 30,
    justifyContent: "center",
    padding: 15,
  },
  closeButton: {
    marginTop: 20,
    marginBottom: 30,
    alignSelf: "center",
    color: "green",
    fontSize: 15,
  },
  errorText: {
    color: "black",
    fontSize: 25,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 30,
  },
});

export default UpdateManually;
