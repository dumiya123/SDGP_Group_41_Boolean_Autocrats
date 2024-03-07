import Modal from "react-native-modal";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const ImageUploader = (props) => {
  const { showModal, setModalVisible, setPickerResponse } = props;

  const chooseImageFromGallery = async () => {
    try {
      await ImagePicker.requestMediaLibraryPermissionsAsync();
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      setPickerResponse(result.assets[0].uri);
    } catch (error) {
      console.error("Image selection failed", error);
      setModalVisible(false);
    }
  };

  const openCamera = async () => {
    try {
      await ImagePicker.requestCameraPermissionsAsync();
      let result = await ImagePicker.launchCameraAsync({
        cameraType: ImagePicker.CameraType.back,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      setPickerResponse(result.assets[0].uri);
      setModalVisible(false);
    } catch (error) {
      console.error("Image Selection Failed", error);
      setModalVisible(false);
    }
  };

  const handleCloseModal = () => {
    if (setModalVisible) {
      setModalVisible(!showModal);
    }
  };

  const handlebackButtonPress = () => setModalVisible(false);

  return (
    <Modal
      onBackButtonPress={handlebackButtonPress}
      isVisible={showModal}
      onBackdropPress={handleCloseModal}
      style={{ justifyContent: "flex-end", margin: 0 }}
    >
      <SafeAreaView style={styles.mainWrapper}>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={chooseImageFromGallery}>
            <Ionicons name="image-outline" color="#FFFFFF" size={40} />
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={openCamera}>
            <Ionicons name="camera-outline" color="#FFFFFF" size={40} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default ImageUploader;
