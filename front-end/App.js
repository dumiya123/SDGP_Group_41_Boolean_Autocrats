import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import AuthStackNavigator from "./components/AuthStackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import theme from "./themes/themes";

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer theme={theme}>
        <AuthStackNavigator />
      </NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#183D3D",
  },
});

export default App;
