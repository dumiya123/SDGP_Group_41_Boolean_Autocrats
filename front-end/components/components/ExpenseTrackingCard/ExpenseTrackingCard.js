import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
    <ImageBackground
      source={require("./abstract-gradient-neon-lights.jpg")}
      style={styles.card}
    >
      <TouchableOpacity onPress={onPress}>
        <View style={styles.topContainer}>
          <View style={styles.iconContainer}>
            <Ionicons name={topIconName} color="#FFFFFF" size={40} />
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
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    borderRadius: 15,
    flexDirection: "column",
    width: 150,
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
  topContainer: {
    flex: 3,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 18,
  },
  iconContainer: {
    alignSelf: "center",
  },
  bottomContainer: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
    marginLeft: 28,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  amountContainer: {
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 3,
  },
  titleText: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "900",
  },
  amountText: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },
});

export default ExpenseTrackingCard;
