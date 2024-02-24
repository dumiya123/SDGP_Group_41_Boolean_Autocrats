import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, FlatList } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [type, setType] = useState(CameraType.back);
  const [permission] = Camera.useCameraPermissions();
  const [capturedImages, setCapturedImages] = useState([]);
  const [isCameraView, setIsCameraView] = useState(true);
  const [capturedImage, setCapturedImage] = useState(null);
  let cameraRef = useRef(null);

  useEffect(() => {
    const fetchStoredImages = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const images = await AsyncStorage.multiGet(keys);

        setCapturedImages(images.map(item => item[1]));
      } catch (error) {
        console.error('Error fetching images from AsyncStorage:', error);
      }
    };

    fetchStoredImages();
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        console.error('Camera permission not granted');
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        console.error('Gallery permission not granted');
      }
    })();
  }, []);

  const toggleCameraType = () => {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  };

  const takePicture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      setCapturedImage(photo.uri);

      setCapturedImages(prevImages => [...prevImages, photo.uri]);

      try {
        await AsyncStorage.setItem(`capturedImage_${new Date().getTime()}`, photo.uri);

      } catch (error) {
        console.error('Error saving image to AsyncStorage:', error);
      }
    }
  };

  const pickImageFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setCapturedImage(result.uri);
      setCapturedImages(prevImages => [...prevImages, result.uri]);
    }
  };

  const renderItem = ({ item }) => (
    <View style={{ marginRight: 10 }}>
      <Text>Captured Image</Text>
      <Image source={{ uri: item }} style={{ width: 200, height: 200 }} />
    </View>
  );

  const uploadImage = () => {
    console.log('Uploading image:', capturedImage);
    // Add your logic for uploading the image here
  };

  return (
    <View style={{ flex: 1 }}>
      {isCameraView ? (
        <Camera style={{ flex: 1, width: '100%' }} type={type} ref={ref => (cameraRef = ref)}>
          <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row', margin: 20 }}>
            <TouchableOpacity style={{ left: '1%', alignSelf: 'flex-end', alignItems: 'center' }} onPress={toggleCameraType}>
              <FontAwesome5 name="exchange-alt" size={40} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={{ alignSelf: 'flex-end', left: '17%', alignItems: 'center' }} onPress={takePicture}>
              <FontAwesome5 name="camera" size={70} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ alignSelf: 'flex-end', left:'35%', alignItems: 'center' }} onPress={pickImageFromGallery}>
              <FontAwesome5 name="image" size={40} color="white" />
            </TouchableOpacity>
          </View>
        </Camera>
      ) : (
        <ScrollView>
          {capturedImage ? (
            <View>
              <Image source={{ uri: capturedImage }} style={{ width: '100%', height: 300 }} />
              <TouchableOpacity style={styles.uploadButton} onPress={uploadImage}>
                <Text style={{ fontSize: 18, color: 'white' }}>Upload Image</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <FlatList
              horizontal
              data={capturedImages}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
          {/* <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => setIsCameraView(true)}>
              <Text style={{ fontSize: 18, color: 'white' }}>Take a Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={pickImageFromGallery}>
              <Text style={{ fontSize: 18, color: 'white' }}>Choose from Library</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setIsCameraView(true)}>
              <Text style={{ fontSize: 18, color: 'white' }}>Cancel</Text>
            </TouchableOpacity>
          </View> */}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  uploadButton: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
});