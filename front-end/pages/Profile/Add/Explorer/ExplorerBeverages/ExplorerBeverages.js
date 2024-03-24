import React from "react";
import { View, Text } from "react-native";
import ProductList from "../../../../../components/ProductList/ProductList";
const ExplorerBeverages = () => {
  return (
    <View>
      {/* Use ProductList component */}
      <ProductList category="beverages" />
    </View>
  );
};

export default ExplorerBeverages;
