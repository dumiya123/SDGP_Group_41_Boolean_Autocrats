// AnotherPage.js
import React from 'react';
import { View, Text } from 'react-native';
import ProductList from '../../../../../components/ProductList/ProductList'
const ExplorerVegetables = () => {
  return (
    <View>
      {/* Use ProductList component */}
      <ProductList category="vegetables" />
    </View>
  );
};

export default ExplorerVegetables;


