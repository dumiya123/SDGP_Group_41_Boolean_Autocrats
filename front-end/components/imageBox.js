import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, PixelRatio, TouchableOpacity } from 'react-native';
import image5 from '../pages/get-started-page/get-started-images/image5.jpg';
import { useNavigation } from '@react-navigation/native';
import GetStartedButton from '../components/button_1';

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
             <GetStartedButton
            onPress={() => {
              // Handle 'Get Started' button press
              navigation.navigate('LOG IN');
            }}
            prompt="Get Started"
          />
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
    backgroundColor:'#F3F8FF',
    
  },
  imageStyle: {
    marginTop: Dimensions.get('window').height / 20,
    marginLeft:Dimensions.get('window').width / 12,
    height: PixelRatio.getPixelSizeForLayoutSize(Dimensions.get('window').height /10),
    width: Dimensions.get('window').width /1.2,
    borderRadius:140,
    
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F8FF',
    borderRadius: 10,
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    height: Dimensions.get('window').height / 3,
    marginTop: Dimensions.get('window').height / 4.5

    
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "#183D3D",
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 18,
    fontFamily: 'Helvetica',
    textAlign: 'center',
    color: 'black',
    paddingRight: 5,
    paddingLeft: 5,
    paddingEnd: 5,
    marginTop:8
  }
});

export default ImageBox;
