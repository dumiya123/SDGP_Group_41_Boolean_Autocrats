import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

const StockPredictionCard = () => {
  const [symbol, setSymbol] = useState("");
  const [predictionImage, setPredictionImage] = useState(null);
  const [predictedPrice, setPredictedPrice] = useState(null);
  const [loading, setLoading] = useState(false);

  const ipAddress = "192.168.8.126";

  const predictStock = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://${ipAddress}:5000/predict`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ symbol }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch prediction data");
      }

      const data = await response.json();
      setPredictionImage(data.plot_path); // Set predictionImage with the received plot path
      setPredictedPrice(data.prediction[0][0]); // Set predictedPrice with the received predicted price
    } catch (error) {
      console.error("Prediction failed", error);
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter stock symbol"
          value={symbol}
          onChangeText={(text) => setSymbol(text)}
        />
        <Button title="Predict" onPress={predictStock} />
      </View>
      <View style={styles.imageContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            {predictionImage && (
              <Image style={styles.image} source={{ uri: predictionImage }} />
            )}
            {predictedPrice && (
              <Text style={styles.predictedPrice}>
                Predicted Price: ${predictedPrice.toFixed(2)}
              </Text>
            )}
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  predictedPrice: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default StockPredictionCard;
