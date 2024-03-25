// SocialMediaButton.js
import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

const SocialMediaButton = ({ onPress, source }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row", height: 52 }}>
      <Image source={source} style={{ width: 40, height: 40, marginRight: 2 }} />
    </TouchableOpacity>
  );
};

export default SocialMediaButton;
