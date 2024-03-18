import React from "react";
import { ScrollView, View } from "react-native";
import CardComponent from "../../../components/CategoryCard/Card";
import { useNavigation } from "@react-navigation/native";
const Add = () => {
  const navigation = useNavigation();
  // data for each card
  const cardFoodProps = {
    image: require("./AddImages/illustrations/food.jpg"),
    date: "2024-02-28",
    off: "FOOD",
    offText: "Time to add your favorite food!",
    onClicked: () => {
      console.log("Buy now button clicked for Card 1!");
      navigation.navigate("FOODSCREEN");
    },
  };

  const cardPharmacyProps = {
    image: require("./AddImages/illustrations/pharmacy.avif"),
    date: "2024-03-01",
    off: "PHARMACY",
    offText: "Time to add your pharmaceuticals!",
    onClicked: () => {
      console.log("Buy now button clicked for Card 2!");
      navigation.navigate("Transports");
    },
  };

  const cardTransportProps = {
    image: require("./AddImages/illustrations/transport.jpg"),
    date: "2024-03-02",
    off: "TRANSPORT",
    offText: "Time to plan your journeys!",
    onClicked: () => {
      console.log("Buy now button clicked for Card 3!");
    },
  };

  const cardEntertainmentProps = {
    image: require("./AddImages/illustrations/entertainment.jpg"),
    date: "2024-03-03",
    off: "Entertainment",
    offText: "Lets make fun plans!",
    onClicked: () => {
      console.log("Buy now button clicked for Card 4!");
    },
  };

  const cardOtherProps = {
    image: require("./AddImages/illustrations/education.jpg"),
    date: "2024-03-04",
    off: "EDUCATION",
    offText: "Time to prepare for emergencys!",
    onClicked: () => {
      console.log("Buy now button clicked for Card 5!");
    },
  };

  const cardPropsArray = [
    cardFoodProps,
    cardTransportProps,
    cardPharmacyProps,
    cardEntertainmentProps,
    cardOtherProps,
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
