import React, { useRef } from "react";
import { View, StyleSheet, Text, ScrollView, Dimensions } from "react-native";
import ExpenseTrackingCard from "./../../../../../components/ExpenseTrackingCard/ExpenseTrackingCard";
import { mockCardProps } from "./mockCardProps";

const screenWidth = Dimensions.get("window").width;

const ExpenseTrackerCarousel = () => {
  const carouselRef = useRef(null);

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
        {mockCardProps.map((item, index) => (
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
    backgroundColor: "#CCD3CA",
    padding: 10,
    borderRadius: 10,
    width: screenWidth - 20,
  },
  titleText: {
    color: "#092635",
    fontSize: 30,
    fontWeight: "900",
  },
  item: {
    alignSelf: "center",
    width: 180,
  },
});

export default ExpenseTrackerCarousel;
