import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ChatBotAnimation from '../../animations/Frame 1.json'; // Assuming this is the correct path to your animation file
import LottieView from 'lottie-react-native';

const AppStartedScreen = () => {
  const navigation = useNavigation();
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    // Replace the current screen with "GET STARTED" screen after 3000 milliseconds (3 seconds))
    const timeout = setTimeout(() => {
      navigation.replace('GET STARTED');
    }, 1550);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {showAnimation && (
        <LottieView
          source={ChatBotAnimation} // Use the source prop to specify the animation file
          autoPlay // Automatically start playing the animation
          loop // Loop the animation indefinitely
          style={{ width: '100%', height: '100%' }} // Adjust the style as needed
        />
      )}
    </View>
  );
};

export default AppStartedScreen;

