import React from "react";
import { View, Text } from "react-native";
import ProductList from "../../../../../components/ProductList/ProductList";

const ExploreMeat = () => {
  return (
    <View>
      <Text>Some content before ProductList</Text>
      {/* Use ProductList component */}
      <ProductList category="meat" />
    </View>
  );
};

export default ExploreMeat;
