// ProductList.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet ,Platform} from 'react-native';
import { fetchExplorer } from '../../pages/Profile/Add/Explorer/ExplorerFunctions';

const PAGE_SIZE = 10;

const ProductList = ({ category }) => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Load initial data
    loadMoreData();
  }, [category]); // Reload when the category changes

  const loadMoreData = async () => {
    try {
      // Fetch data from the API using the function and the provided category
      const newData = await fetchExplorer(category);

      // Calculate the start index based on the current page and page size
      const startIndex = (page - 1) * PAGE_SIZE;
      // Calculate the end index
      const endIndex = startIndex + PAGE_SIZE;

      // Slice the data to get the current page's worth of items
      const slicedData = newData.slice(startIndex, endIndex);

      // Update the products state with the new data
      setProducts((prevProducts) => [...prevProducts, ...slicedData]);

      // Increment the page for the next load
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      // Handle error if the API call fails
      console.error('Error loading data:', error);
    }
  };

  const renderProductCard = ({ item }) => (
    <View style={styles.productCard}>
      {/* Assume you have an image component here */}
      <View style={styles.productImage}></View>

      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </View>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderProductCard}
      keyExtractor={(item, index) => `${item.name}_${index}`}
      numColumns={2}
      contentContainerStyle={styles.productList}
      onEndReached={loadMoreData}
      onEndReachedThreshold={0.1}
    />
  );
};

const styles = StyleSheet.create({
  productList: {
    padding: 16,
  },
  productCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 8,
    padding: 16,
    alignItems: 'center',
    elevation: Platform.OS === 'android' ? 4 : 0, // Apply elevation only on Android
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
    }),
  },
  productImage: {
    width: '100%',
    height: 150, // Placeholder height for the image
    backgroundColor: '#f2f2f2', // Placeholder background color
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
});

export default ProductList;
