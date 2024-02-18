import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, PixelRatio, TouchableOpacity } from 'react-native';
import image5 from '../../assets/image5.jpg';
import { useNavigation } from '@react-navigation/native';

const ImageBox = ({ imageSource, header, paragraph }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.slide}>
      <Image source={imageSource} style={styles.imageStyle} />
      <View style={styles.wrapper}>
        <Text style={styles.header}>{header}</Text>
        <Text style={styles.paragraph}>{paragraph}</Text>
        {imageSource === image5 && (
          <TouchableOpacity
            onPress={() => {
              // Handle 'Get Started' button press
              navigation.navigate("LOG IN");
            }}
          >
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Get Started</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor:'#424769'
  },
  imageStyle: {
    marginTop:30,
    height: PixelRatio.getPixelSizeForLayoutSize(135),
    width: '100%',
    borderRadius:100,
    borderWidth:70
    
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    backgroundColor:'#424769'
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
    padding: 15,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ImageBox;
