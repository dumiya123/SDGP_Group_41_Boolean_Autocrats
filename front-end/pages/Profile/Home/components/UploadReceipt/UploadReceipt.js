import React, { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from "react-native";
import ImageUploader from "../../../../../components/ImageUploader/ImageUploader";
import handleReceiptUpload from "./handleReceiptUpload";
import Modal from "react-native-modal";

const screenWidth = Dimensions.get("window").width;

const UploadReceipt = () => {
  const [pickerResponse, setPickerResponse] = useState(null);
  const [imagePickModalVisible, setImagePickModalVisible] = useState(false);
  const [receiptVisible, setReceiptVisible] = useState(false);
  const [receiptData, setReceiptData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (pickerResponse) {
      handleReceiptUpload(pickerResponse)
        .then((data) => {
          setReceiptData(data);
          setReceiptVisible(true);
          setError(null);
        })
        .catch((error) => {
          setError("Something went wrong! Please try again");
          setReceiptVisible(true);
        });
    }
  }, [pickerResponse]);

  return (
    <View style={styles.mainWrapper}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setImagePickModalVisible(true)}
      >
        <View style={styles.contentWrapper}>
          <Text style={styles.buttonText}>{"Upload Receipt"}</Text>
        </View>
      </TouchableOpacity>
      <ImageUploader
        showModal={imagePickModalVisible}
        setPickerResponse={setPickerResponse}
        setModalVisible={setImagePickModalVisible}
      />
      <Modal
        isVisible={receiptVisible}
        onBackdropPress={() => setReceiptVisible(false)}
        onBackButtonPress={() => setReceiptVisible(false)}
        backdropOpacity={0.5}
      >
        <ScrollView
          style={styles.modalContainer}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View style={styles.modalContent}>
            {error ? (
              <Text style={styles.errorText}>{error}</Text>
            ) : (
              <>
                <Text style={styles.title}>{receiptData?.merchantName}</Text>
                {receiptData?.items.map((item, index) => (
                  <Text key={index} style={styles.itemText}>
                    {item.description} : {item.amount}
                  </Text>
                ))}
                <Text style={styles.subTitle}>
                  {"--------------------------------------------------"}
                </Text>
                <Text style={styles.subTitle}>
                  Subtotal: {receiptData?.subTotal}
                </Text>
                <Text style={styles.subTitle}>Tax: {receiptData?.tax}</Text>
                <Text style={styles.totalText}>
                  Total: {receiptData?.total}
                </Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    setReceiptVisible(false);
                    setPickerResponse(null);
                    setImagePickModalVisible(false);
                  }}
                >
                  <View style={styles.contentWrapper}>
                    <Text style={styles.buttonText}>{"Confirm"}</Text>
                  </View>
                </TouchableOpacity>
              </>
            )}
            <TouchableOpacity
              onPress={() => {
                setReceiptVisible(false);
                setPickerResponse(null);
                setImagePickModalVisible(false);
              }}
            >
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 2,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CCD3CA",
    flexDirection: "row",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    height: 150,
    width: screenWidth - 20,
  },
  button: {
    backgroundColor: "green",
    width: 200,
    borderRadius: 10,
    alignSelf: "center",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  contentWrapper: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    flex: 1,
    alignSelf: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 11,
  },
  title: {
    alignSelf: "center",
    color: "black",
    fontSize: 25,
    fontWeight: "700",
  },
  itemText: {
    color: "black",
    fontSize: 15,
    fontWeight: "500",
    marginTop: 10,
  },
  subTitle: {
    color: "black",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
  totalText: {
    color: "black",
    fontSize: 20,
    fontWeight: "700",
    marginTop: 10,
    marginBottom: 50,
  },
  modalContainer: {
    width: screenWidth - 20,
    alignSelf: "center",
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
  },
  modalContent: {
    flex: 1,
    alignSelf: "center",
    backgroundColor: "white",
    marginTop: 30,
    justifyContent: "center",
    padding: 15,
  },
  closeButton: {
    marginTop: 20,
    marginBottom: 30,
    alignSelf: "center",
    color: "green",
    fontSize: 15,
  },
  errorText: {
    color: "black",
    fontSize: 25,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 30,
  },
});

export default UploadReceipt;
