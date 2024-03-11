// ProductList.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
  TextInputField,
} from "react-native";
import { fetchExplorer } from "../../pages/Profile/Add/Explorer/ExplorerFunctions";
import Modal from "react-native-modal";

const PAGE_SIZE = 10;

const ProductList = ({ category }) => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState(false);

  useEffect(() => {
    // Load initial data
    loadMoreData();
  }, [category]); // Reload when the category changes

  const loadMoreData = async () => {
    try {
      console.log(category);
      // Fetch data from the API using the function and the provided category
      const newData = await fetchExplorer(category);

      console.log("New Data from API:", newData); // Log the fetched data

      // Calculate the start index based on the current page and page size
      const startIndex = (page - 1) * PAGE_SIZE;
      // Calculate the end index
      const endIndex = startIndex + PAGE_SIZE;

      // Slice the data to get the current page's worth of items
      const slicedData = newData.slice(startIndex, endIndex);

      console.log("Sliced Data for Current Page:", slicedData); // Log the sliced data

      // Update the products state with the new data
      setProducts((prevProducts) => [...prevProducts, ...slicedData]);

      // Increment the page for the next load
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      // Handle error if the API call fails
      console.error("Error loading data:", error);
    }
  };

  const renderProductCard = ({ item }) => (
    <View>
      <TouchableOpacity
        style={styles.productCard}
        onPress={setModalVisible(true)}
      >
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </TouchableOpacity>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        backdropOpacity={0.5}
      >
        <View style={styles.modalContent}>
          <Image source={{ uri: item.image }} style={styles.productImage} />
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.title}>{item.price}</Text>
          <TextInputField
            placeholder="Quantity"
            value={quantity}
            onChangeText={setQuantity}
          />
          <Text style={styles.title}>{`Total: ${item.price * quantity}`}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <View style={styles.contentWrapper}>
              <Text style={styles.buttonText}>{"Confirm"}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <Text style={styles.closeButton}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
    backgroundColor: "#fff",
    borderRadius: 8,
    margin: 8,
    padding: 16,
    alignItems: "center",
    elevation: Platform.OS === "android" ? 4 : 0, // Apply elevation only on Android
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
    }),
  },
  productImage: {
    width: "100%",
    height: 150, // Placeholder height for the image
    backgroundColor: "#f2f2f2", // Placeholder background color
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 14,
    color: "#888",
  },
  title: {
    alignSelf: "center",
    color: "black",
    fontSize: 25,
    fontWeight: "700",
  },
  modalContent: {
    flex: 1,
    alignSelf: "center",
    backgroundColor: "white",
    marginTop: 30,
    justifyContent: "center",
    padding: 15,
  },
  closeButton: {
    marginTop: 20,
    marginBottom: 30,
    alignSelf: "center",
    color: "green",
    fontSize: 15,
  },
  button: {
    backgroundColor: "green",
    width: 200,
    borderRadius: 10,
    alignSelf: "center",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    flex: 1,
    alignSelf: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 11,
  },
});

export default ProductList;
