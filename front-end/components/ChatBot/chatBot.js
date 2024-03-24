import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import ChatBotAnimation from '../../animations/chatBotAnimation.json';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const scrollViewRef = useRef();
  const [showAnimation, setShowAnimation] = useState(true);

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      setMessages(prevMessages => [
        ...prevMessages,
        { text: inputMessage, sender: 'user' }
      ]);
  
      setMessages(prevMessages => [
        ...prevMessages,
        { text: 'Bot is typing...', sender: 'bot' }
      ]);
  
      setTimeout(() => {
        setMessages(prevMessages => [
          ...prevMessages.slice(0, -1),
          { text: 'This is a dummy response.', sender: 'bot' },
        ]);
      }, 1000);
  
      setInputMessage('');
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
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
        contentContainerStyle={styles.chatContainer}
      >
         <Text style={styles.chatBotText}>Chat Bot!....</Text>
        {messages.map((message, index) => (
          <View key={index} style={message.sender === 'user' ? styles.userMessageContainer : styles.botMessageContainer}>
            {message.sender === 'bot' && showAnimation && (
              <LottieView
                source={require('../../animations/chatbotIcon.json')}
                style={styles.profileIcon}
                loop
              />
            )}
            <View style={message.sender === 'user' ? styles.userMessage : styles.botMessage}>
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
          <MaterialIcon name="send" size={24} color="#183D3D" style={{ marginRight: 10, marginBottom: 10 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginTop: 5,
    position: 'relative',
  },
  animationContainer: {
    position: 'absolute',
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
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: 5,
    marginRight: 5,
  },
  botMessageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginBottom: 5,
    marginLeft: 5,
  },
  userMessage: {
    backgroundColor: 'lightblue',
    padding: 8,
    borderRadius: 8,
    maxWidth: '80%',
  },
  botMessage: {
    backgroundColor: '#aed581',
    padding: 8,
    borderRadius: 8,
    maxWidth: '80%',
  },
  profileIcon: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    paddingHorizontal: 6,
    borderTopColor: '#183D3D',
    paddingVertical: 10,
    paddingBottom: 0,
  },
  input: {
    flex: 1,
    marginRight: 10,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: '#183D3D',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingTop: 10,
    marginBottom: 10,
  },
  chatBotText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20, // Adjust spacing as needed
  },
});

export default ChatBot;
