import React, { useState } from "react";
import {
  View,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SetButton from "../../../../../components/SetButtons/setButton";
import SectionTitle from "../../../../../components/SettingsComponents/SectionTitle";
import forgetPwImg from "../../../../../pages/forget-password-pages/forget-password-images/lock.png";
import SubtitleComponent from "../../../../../components/SettingsComponents/Subtittle";
import TextInputField from "../../../../../components/TextInputField";

const ipAddress = "192.168.8.119";

const UserEmailChange = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = async () => {
    try {
      const response = await fetch(
        `http://${ipAddress}:8080/user/editProfile`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await response.json();

      if (response.ok) {
        navigation.navigate("Email Change Confirmation");
      } else {
        Alert.alert(
          "Error",
          data.message || "Failed to change email. Please try again."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "An error occurred. Please try again later.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flexGrow: 1 }}>
        <View style={styles.content}>
          <Image source={forgetPwImg} style={styles.image} />
          <SectionTitle title={"Change Email Address"} />
          <SubtitleComponent
            title={"Enter your new Email address and existing password here!"}
          />
          <TextInputField
            placeholder="New email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            iconName="email"
          />
          <TextInputField
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            iconName="lock"
          />
        </View>
        <View style={styles.btn}>
          <SetButton onPress={handleChangeEmail} title="Confirm" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F8FF",
  },
  content: {
    padding: 20,
    alignItems: "center",
    marginBottom: 50,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  btn: {
    marginTop: 100,
  },
});

export default UserEmailChange;
