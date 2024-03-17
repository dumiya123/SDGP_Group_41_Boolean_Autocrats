import React from 'react';
import { Text, StyleSheet } from 'react-native';

const SubtitleComponent = ({ title, style }) => {
//   const font = title === "Your new password must be different from previously used passwords." ? "lighter" : "bold";
//   const textColor = title === "Your password has been reset Successfully!"? "gray" : "black";

  return (
    <Text style={[styles.subtitle, style ]}>{title}</Text>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
  }

});

export default SubtitleComponent;
