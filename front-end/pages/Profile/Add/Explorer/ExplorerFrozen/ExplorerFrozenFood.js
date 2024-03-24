import React from "react";
import { View, Text } from "react-native";
import ProductList from "../../../../../components/ProductList/ProductList";

const ExploreFrozenFood = () => {
  return (
    <View>
      {/* Use ProductList component */}
      <ProductList category="frozenfood" />
    </View>
  );
};

export default ExploreFrozenFood;
