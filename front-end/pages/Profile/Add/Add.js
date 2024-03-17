import React from "react";
import { ScrollView, View } from "react-native";
import CardComponent from "../../../components/CategoryCard/Card";
import { useNavigation } from "@react-navigation/native";
const Add = () => {
  const navigation = useNavigation();
  // data for each card
  const card1Props = {
    image: require("./AddImages/foods.jpg"),
    date: "2024-02-28",
    off: "FOOD",
    offText: "Time to add your favorite food!",
    onClicked: () => {
      console.log("Buy now button clicked for Card 1!");
      navigation.navigate('FOODSCREEN')
    },
  };

  const card2Props = {
    image: require("./AddImages/fish.jpg"),
    date: "2024-03-01",
    off: "Transports",
    offText: "Time to add your favorite fish!",
    onClicked: () => {
      console.log("Buy now button clicked for Card 2!");
      navigation.navigate('Transports')
    },
  };

  const card3Props = {
    image: require("./AddImages/vegetables.jpg"),
    date: "2024-03-02",
    off: "VEGETABLES",
    offText: "Time to add your favorite vegetables!",
    onClicked: () => {
      console.log("Buy now button clicked for Card 3!");
    },
  };

  const card4Props = {
    image: require("./AddImages/fruits.jpg"),
    date: "2024-03-03",
    off: "15% OFF",
    offText: "Time to add your favorite fruit!",
    onClicked: () => {
      console.log("Buy now button clicked for Card 4!");
    },
  };

  const card5Props = {
    image: require("./AddImages/meat.jpeg"),
    date: "2024-03-04",
    off: "40% OFF",
    offText: "Time to add your favorite meat!",
    onClicked: () => {
      console.log("Buy now button clicked for Card 5!");
    },
  };

  const cardPropsArray = [
    card1Props,
    card2Props,
    card3Props,
    card4Props,
    card5Props,
  ];

  return (
    <ScrollView>
      {/* Map over the cardPropsArray to render multiple cards */}
      {cardPropsArray.map((cardProps, index) => (
        <CardComponent key={index} {...cardProps} />
      ))}
    </ScrollView>
  );
};

export default Add;
