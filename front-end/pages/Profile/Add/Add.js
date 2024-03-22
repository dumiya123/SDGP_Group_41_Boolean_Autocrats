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
    image: require("./AddImages/illustrations/pharmacy.jpg"),
    date: "2024-03-01",
    off: "PHARMACY",
    offText: "Time to add your pharmaceuticals!",
    onClicked: () => {
      console.log("Buy now button clicked for Card 2!");
      navigation.navigate("Pharmacy");
    },
  };

  const cardTransportProps = {
    image: require("./AddImages/illustrations/transport.jpg"),
    date: "2024-03-02",
    off: "TRANSPORT",
    offText: "Time to plan your journeys!",
    onClicked: () => {
      console.log("Buy now button clicked for Card 3!");
      navigation.navigate("Transports");
    },
  };

  const cardEntertainmentProps = {
    image: require("./AddImages/illustrations/entertainment.jpg"),
    date: "2024-03-03",
    off: "ENTERTAINMENT",
    offText: "Lets make fun plans!",
    onClicked: () => {
      console.log("Buy now button clicked for Card 4!");
      navigation.navigate("Entertainment");
    },
  };

  const cardOtherProps = {
    image: require("./AddImages/illustrations/education.jpg"),
    date: "2024-03-04",
    off: "EDUCATION",
    offText: "Time to prepare for emergencys!",
    onClicked: () => {
      console.log("Buy now button clicked for Card 5!");
      navigation.navigate("Education");
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
