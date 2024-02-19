
/**
 * @fileOverview This is a Reusable component for the Bottom Navigation bar.
 * @author Dumindu Gamage
 * @version 1.0.0
 * @description This file contains sample js code for the Bottom Navigation bar.
 */

//import necessary libraries from the react native .

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AuthStackNavigator = ({ screens }) => {
  return (
    <Stack.Navigator>
      {screens.map((screen, index) => (
        <Stack.Screen
          key={index}
          name={screen.name}
          component={screen.component}
          options={screen.options || { headerShown: false }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
