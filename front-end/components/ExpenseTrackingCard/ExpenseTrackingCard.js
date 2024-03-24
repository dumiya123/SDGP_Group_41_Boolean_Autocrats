import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const ExpenseTrackingCard = (props) => {
  const { expenseType, topIconName, setBudget, spentAmount, onPress } = props;

  let spentAmountTextColor = "green";

  if (spentAmount > setBudget * 0.7) {
    spentAmountTextColor = "#820300";
  } else if (spentAmount < setBudget * 0.5) {
    spentAmountTextColor = "#FFFFFF";
  } else {
    spentAmountTextColor = "#FF9800";
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={["black", "#1B5E20", "#66BB6A"]}
        style={styles.card}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <Ionicons
              name={topIconName}
              color="#FFFFFF"
              size={40}
              testID="topIcon"
            />
          </View>
          <Text style={styles.titleText}>{expenseType}</Text>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.amountContainer}>
            <Ionicons name="wallet" color="#FFFFFF" size={15} />
            <Text style={styles.amountText}>{`$ ${setBudget}`}</Text>
          </View>
          <View style={styles.amountContainer}>
            <Ionicons
              name="arrow-redo"
              color={spentAmountTextColor}
              size={15}
            />
            <Text style={[styles.amountText, { color: spentAmountTextColor }]}>
              {`$ ${spentAmount}`}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    borderRadius: 15,
    flexDirection: "column",
    width: 175,
    height: 150,
    padding: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    overflow: "hidden",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
  },

  bottomContainer: {
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  amountContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 3,
  },
  titleText: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "900",
    marginLeft: 15,
  },
  amountText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },
});

export default ExpenseTrackingCard;
