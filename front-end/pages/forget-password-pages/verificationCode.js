import React, { useState, useRef } from 'react';//author himan
import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator, SafeAreaView } from 'react-native';
import forgetPwImg from './forget-password-images/forgetPw.png';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { MaterialCommunityIcons } from '@expo/vector-icons';

const VerificationCodeScreen = () => {
  const navigation = useNavigation(); // Use the useNavigation hook
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const codeInputs = Array(6).fill(0).map((_, index) => useRef(null));
  const [loading, setLoading] = useState(false);

  const handleVerification = async () => {
    setLoading(true);

    try {
      const verificationCode = code.join('');
      console.log('Verifying code:', verificationCode);
      // Implement your verification logic here
      // ...
      // Simulate an asynchronous operation (e.g., API call)
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      console.error('Verification failed:', error);
      // Handle error if necessary
    } finally {
      setLoading(false);
    }
  };

  const handleCodeChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value;

    if (index < 5 && value !== '') {
      codeInputs[index + 1].current.focus();
    }

    setCode(newCode);
  };

  const handleResendCode = async () => {
    setLoading(true);

    try {
      console.log('Resending verification code...');
      // Implement the logic for resending the verification code
      // ...
      // Simulate an asynchronous operation (e.g., API call)
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      console.error('Resending code failed:', error);
      // Handle error if necessary
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F3F8FF' }}>
      <View style={{ flex: 1, padding: 20 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Image source={forgetPwImg} style={{ width: 200, height: 200, marginTop: 40, alignSelf: 'center' }} />
        <Text style={{ fontSize: 20, marginBottom: 20, alignSelf: 'center',fontWeight: 'bold' }}>Enter Verification Code</Text>
        <Text style={{ fontSize: 14, marginBottom: 20, textAlign: 'center', color: 'gray' }}>
          Please enter the verification code that was sent to your registered mobile number or email
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '60%', marginBottom: 10, alignSelf: 'center' }}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={codeInputs[index]}
              style={{ height: 40, width: '15%', borderColor: 'gray', borderBottomWidth: 1, textAlign: 'center', fontSize: 20, marginTop: 50 }}
              placeholder="0"
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleCodeChange(index, text)}
            />
          ))}
        </View>
        <TouchableOpacity
          style={{ backgroundColor: '#183D3D', borderRadius: 15, width: '60%', paddingVertical: 10, alignItems: 'center', marginTop: 120, alignSelf: 'center' }}
          onPress={() => navigation.navigate('CREATEPW')}
                        
          disabled={loading}
        >
          <Text style={{ color: 'white' }}>Verify Number</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center', marginTop: 30 }} onPress={handleResendCode} disabled={loading}>
          <Text style={{ color: 'black' }}>Resend Code</Text>
        </TouchableOpacity>
        {loading && (
          <View style={{ position: 'absolute', top: '60%', left: '58%', transform: [{ translateX: -25 }, { translateY: -25 }] }}>
            <ActivityIndicator size="large" color="midnightblue" />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default VerificationCodeScreen;
