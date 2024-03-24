import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Text, ScrollView, Dimensions } from "react-native";
import ExpenseTrackingCard from "./../../../../../components/ExpenseTrackingCard/ExpenseTrackingCard";
import useCarouselData, { mockCardProps } from "./useCarouselData";

const screenWidth = Dimensions.get("window").width;

const ExpenseTrackerCarousel = () => {
  const carouselRef = useRef(null);

  const { getExpenseData, carouselData } = useCarouselData();
  useEffect(() => {
    getExpenseData();
  });

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{"Expenses"}</Text>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        ref={carouselRef}
        contentContainerStyle={styles.scrollViewContent}
      >
        {carouselData.map((item, index) => (
          <View style={styles.item} key={index}>
            <ExpenseTrackingCard {...item} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: 250,
    margin: 10,
    backgroundColor: "#F1F3F4",
    padding: 10,
    borderRadius: 10,
    width: screenWidth - 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titleText: {
    color: "#46523C",
    fontSize: 20,
    fontWeight: "700",
    marginLeft: Dimensions.get("window").width / 2 - 60,
  },
  item: {
    alignSelf: "center",
    width: 200,
  },
});

export default ExpenseTrackerCarousel;
