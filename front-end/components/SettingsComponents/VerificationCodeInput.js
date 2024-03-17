// VerificationCodeInput.js
import React, { useRef } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const VerificationCodeInput = ({ value, onChangeText, autoFocus, onSubmitEditing }) => {
  const inputRef = useRef(null);

  const focusNextInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        style={styles.input}
        keyboardType="numeric"
        maxLength={1}
        value={value}
        onChangeText={onChangeText}
        autoFocus={autoFocus}
        onSubmitEditing={focusNextInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },
  input: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
  },
});

export default VerificationCodeInput;
