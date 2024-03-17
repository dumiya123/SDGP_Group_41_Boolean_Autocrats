import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Description = ({ title,style }) => {
  return (
    <View>
      <Text style={[styles.text, style]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'black',
    marginVertical: 5,
    textAlign:'center'
  },
});

export default Description;
