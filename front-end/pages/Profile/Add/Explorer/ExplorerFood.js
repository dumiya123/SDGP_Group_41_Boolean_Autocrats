import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CardComponent from "../../../../components/CategoryCard/Card";
import { useNavigation } from "@react-navigation/native";

const FoodItems = () => {
  const navigation = useNavigation();

  const cardVegProps = {
    image: require("../AddImages/vegetables.jpg"), //change this to the correct path
    date: "2024-02-28",
    off: "VEGETABLES",
    offText: "Time to add your favorite food!",
    onClicked: () => {
      console.log("Buy now button clicked for Card 1!");
      navigation.navigate("VEGSCREEN");
    },
  };

  const cardFishProps = {
    image: require("../AddImages/fish.jpg"), //change this to the correct path
    date: "2024-02-28",
    off: "FISH",
    offText: "Time to add your favorite fish!",
    onClicked: () => {
      console.log("Buy now button clicked for Card 1!");
      navigation.navigate("FISHSCREEN");
    },
  };

  const cardPropsArray = [cardVegProps, cardFishProps];

  return (
    <View style={styles.container}>
      {/* Map over the cardPropsArray to render multiple cards */}
      {cardPropsArray.map((cardProps, index) => (
        <CardComponent key={index} {...cardProps} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default FoodItems;
