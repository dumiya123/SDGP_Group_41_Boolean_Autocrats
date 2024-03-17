import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import AddItemForm from '../../../../components/AddToCategory/addToCategory';

class TransportScreen extends Component {
  handleFormSubmit = (formData) => {
    // Handle form submission data here
    console.log('Form data submitted:', formData);
  };

  render() {
    return (
      <ImageBackground
        source={require('../../Add/AddImages/meat.jpeg')}
        style={styles.background}
      >
        <View style={styles.container}>
          <AddItemForm
            categoryName="Transport"
            onSubmit={this.handleFormSubmit}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TransportScreen;
