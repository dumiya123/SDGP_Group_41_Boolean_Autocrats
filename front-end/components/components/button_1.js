import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import theme from '../themes/themes';

const button_1 = ({ onPress, prompt }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{prompt}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
    backgroundColor:theme.colors.buttonSecond,//button secon have the dark green 
    borderRadius: 10,
    overflow: 'hidden',
    padding: 15,
  },
  buttonText: {
    color: theme.colors.primary,//primary color is the white color
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default button_1;
