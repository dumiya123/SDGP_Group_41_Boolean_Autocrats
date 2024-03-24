import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import LottieView from "lottie-react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

import ChatBotAnimation from "../../animations/chatBotAnimation.json";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const scrollViewRef = useRef();
  const [showAnimation, setShowAnimation] = useState(true);

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      // Add user message to state
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputMessage, sender: "user" },
      ]);

      // Make API call to send message to the backend
      fetch("http://68.183.183.164:6969/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputMessage }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Network response was not ok.");
          }
        })
        .then((data) => {
          console.log(data, "safs"); // Log the response received from the backend
          // Handle the response from the backend
          // For now, let's assume the backend responds with the bot message
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: data.response, sender: "bot" },
          ]);
        })
        .catch((error) => {
          console.error(
            "There was a problem with your fetch operation:",
            error
          );
          // Optionally handle error state
        });

      setInputMessage("");
    }
  };

  return (
    <View style={styles.container}>
      {showAnimation && (
        <LottieView
          source={ChatBotAnimation}
          autoPlay
          loop
          style={styles.animationContainer}
        />
      )}
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({ animated: true })
        }
        contentContainerStyle={styles.chatContainer}
      >
        <Text style={styles.chatBotText}>Chat Bot!....</Text>
        {messages.map((message, index) => (
          <View
            key={index}
            style={
              message.sender === "user"
                ? styles.userMessageContainer
                : styles.botMessageContainer
            }
          >
            <View
              style={
                message.sender === "user"
                  ? styles.userMessage
                  : styles.botMessage
              }
            >
              <Text>{message.text}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputMessage}
          onChangeText={setInputMessage}
          placeholder="Type your message..."
          placeholderTextColor="black"
        />
        <TouchableOpacity onPress={handleSendMessage}>
          <MaterialIcon
            name="send"
            size={24}
            color="#183D3D"
            style={{ marginRight: 10, marginBottom: 10 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginTop: 5,
    position: "relative",
  },
  animationContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.5,
  },
  chatContainer: {
    flexGrow: 1,
    paddingVertical: 10,
  },
  userMessageContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginBottom: 5,
    marginRight: 5,
  },
  botMessageContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    marginBottom: 5,
    marginLeft: 5,
  },
  userMessage: {
    backgroundColor: "lightblue",
    padding: 8,
    borderRadius: 8,
    maxWidth: "80%",
  },
  botMessage: {
    backgroundColor: "#aed581",
    padding: 8,
    borderRadius: 8,
    maxWidth: "80%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    paddingHorizontal: 6,
    borderTopColor: "#183D3D",
    paddingVertical: 10,
    paddingBottom: 0,
  },
  input: {
    flex: 1,
    marginRight: 10,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: "#183D3D",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingTop: 10,
    marginBottom: 10,
  },
  chatBotText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20, // Adjust spacing as needed
  },
});

export default ChatBot;
