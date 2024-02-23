/**
 * @fileOverview This is a Reusable component for the Bottom Navigation bar.
 * @author Dumindu Gamage
 * @version 1.0.0
 * @description This file contains sample js code for the Bottom Navigation bar.
 */

//import necessary libraries from the react native .

import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../pages/home-page/home";
import SettingsScreen from "../pages/settings-page/settingScreen";
import UpdateBudget from "../pages/update-budget-page/updateBudget";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("../assets/home.png")}
              width={40}
              height={40}
              marginTop={15}
            />
          ),
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="Update Budget"
        component={UpdateBudget}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("../assets/updatebudget.png")}
              width={30}
              height={30}
              marginTop={16}
            />
          ),
          tabBarLabel: "",
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("../assets/settings.png")}
              width={12}
              height={12}
              style={{
                marginTop: 12,
                marginEnd: 12,
                marginLeft: 12,
                marginRight: 12,
              }}
            />
          ),
          tabBarLabel: "",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
