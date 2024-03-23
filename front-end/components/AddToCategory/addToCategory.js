import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from "react-native";

class AddItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      amount: "",
    };
  }

  handleSubmit = () => {
    const { name, amount } = this.state;
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    this.props.onSubmit({ name, amount: parsedAmount });
    this.setState({ name: "", amount: "" });
  };

  render() {
    const {
      categoryName,
      backgroundImage,
      totalAmount,
      remainingAmount,
      percentage,
    } = this.props;
    const { name, amount } = this.state;

    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ImageBackground
          source={{ uri: backgroundImage }}
          style={styles.background}
          borderRadius={60}
        >
          <View style={styles.container}>
            <View style={styles.content}>
              <Text style={styles.title}>
                Let's Add To The {categoryName} category
              </Text>
              <TextInput
                value={name}
                onChangeText={(name) => {
                  this.setState({ name });
                  this.props.onChange("name", name); // Call the onChange prop with the updated name
                }}
                style={styles.input}
                placeholder="Enter Name of the product/service"
                placeholderTextColor="white"
                backgroundColor="rgba(149, 165, 166,0.6)"
              />
              <TextInput
                value={amount}
                onChangeText={(amount) => {
                  this.setState({ amount });
                  this.props.onChange("amount", amount); // Call the onChange prop with the updated amount
                }}
                style={styles.input}
                placeholder="Enter the amount for the month"
                keyboardType="numeric"
                placeholderTextColor="white"
                backgroundColor="rgba(149, 165, 166,0.6)"
              />
            </View>
            <View style={styles.statusContainer}>
              <Text style={styles.statusText}>
                Current Status of the {categoryName} category
              </Text>
              <View style={styles.row}>
                <Text style={styles.label}>TOTAL AMOUNT:</Text>
                <Text style={styles.value}>RS:{totalAmount}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>REMAINING AMOUNT:</Text>
                <Text style={styles.value}>RS:{remainingAmount}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>PERCENTAGE:</Text>
                <Text style={styles.value}>{percentage}%</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={this.handleSubmit}
              style={styles.submitButton}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    backgroundColor: "rgba(149, 165, 166,0.3)",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "100%",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 80,
    color: "black",
    textAlign: "center",
    marginTop: 0,
    paddingHorizontal: 20,
  },
  input: {
    height: 50,

    borderRadius: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  statusContainer: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    borderRadius: 30,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  statusText: {
    fontSize: 18,
    marginBottom: 10,
    color: "black",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  value: {
    fontSize: 16,
    color: "black",
  },
  submitButton: {
    backgroundColor: "#10ac84",
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 40,
    alignSelf: "center", // Align the button horizontally to the center
    width: "50%", // Set the width of the button
  },

  buttonText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
});

export default AddItemForm;
