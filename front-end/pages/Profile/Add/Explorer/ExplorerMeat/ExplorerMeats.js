// BeveragesPage.js
import React from "react";
import { View, Text } from "react-native";
import ProductList from "../../../../../components/ProductList/ProductList";

const BeveragesPage = () => {
  return (
    <View>
      <Text>Some content before ProductList</Text>
      {/* Use ProductList component */}
      <ProductList category="beverages" />
    </View>
  );
};

export default BeveragesPage;
