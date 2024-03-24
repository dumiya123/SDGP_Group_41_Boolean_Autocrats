import React from "react";
import { View, Text } from "react-native";
import ProductList from "../../../../../components/ProductList/ProductList";
const ExplorerFish = () => {
  return (
    <View>
      {/* Use ProductList component */}
      <ProductList category="fish" />
    </View>
  );
};

export default ExplorerFish;
