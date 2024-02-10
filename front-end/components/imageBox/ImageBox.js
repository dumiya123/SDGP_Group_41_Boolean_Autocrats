import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, PixelRatio, Button } from 'react-native';
import image5 from '../../assets/image5.jpg';

const ImageBox = ({ imageSource, header, paragraph }) => {
  return (
    <View style={styles.slide}>
      <Image source={imageSource} style={styles.imageStyle} />
      <View style={styles.wrapper}>
        <Text style={styles.header}>{header}</Text>
        <Text style={styles.paragraph}>{paragraph}</Text>
        {imageSource === image5 && (
          <View style={styles.buttonContainer}>
            <Button
              title='Get Started'
              
              color="#fff" 
            />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  imageStyle: {
    height: PixelRatio.getPixelSizeForLayoutSize(135),
    width: '100%',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "#B4A5A5",
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    paddingRight: 5,
    paddingLeft: 5,
  },
  buttonContainer: {
    marginTop: 50,
    backgroundColor: '#301B3F', 
    borderRadius: 10, 
    overflow: 'hidden', 
  },
});

export default ImageBox;
