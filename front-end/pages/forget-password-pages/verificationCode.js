import React, { useState, useEffect, useRef } from 'react';
import { View, Image, SafeAreaView, ScrollView, StyleSheet, Alert } from 'react-native';
import forgetPwImg from './forget-password-images/forgetPw.png';
import { useNavigation } from '@react-navigation/native';
import SetButton from '../../components/SetButtons/setButton';
import SubtitleComponent from "../../components/SettingsComponents/Subtittle";
import SectionTitle from '../../components/SettingsComponents/SectionTitle';

import VerificationCodeInput from '../../components/SettingsComponents/VerificationCodeInput';

const VerificationCodeScreen = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const codeInputs = Array(6).fill(0).map(() => useRef(null));
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  // Function to fetch user's email from the database
  // const fetchUserEmail = async () => {
  //   try {
  //     // Make API call to fetch user's email from the database
  //     const response = await fetch('YOUR_BACKEND_FETCH_EMAIL_ENDPOINT', {
  //       method: 'GET',
  //       headers: {
  //         // Add any necessary headers
  //       },
  //       // Add any necessary parameters or authentication tokens
  //     });

  //     if (response.ok) {
  //       const userData = await response.json();
  //       setUserEmail(userData.email); // Assuming the email is stored in a field called 'email'
  //     } else {
  //       console.error('Failed to fetch user email');
  //       // Handle error if necessary
  //     }
  //   } catch (error) {
  //     console.error('Error fetching user email:', error);
  //     // Handle error if necessary
  //   }
  // };

  // useEffect(() => {
  //   fetchUserEmail(); // Fetch user's email when the component mounts
  // }, []);

  const handleVerification = async () => {
    // setLoading(true);

    // try {
    //   const verificationCode = code.join('');
    //   console.log('Verifying code:', verificationCode);

    //   // Make API call to backend to verify OTP
    //   const response = await fetch('YOUR_BACKEND_VERIFY_OTP_ENDPOINT', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email: userEmail, otp: verificationCode }), // Include user's email in the request
    //   });

    //   if (response.ok) {
    //     // If OTP is correct, navigate to the next screen
        navigation.navigate('Create Password');
    //   } else {
    //     // If OTP is incorrect, display an error message
    //     Alert.alert('Incorrect OTP', 'The entered OTP is incorrect. Please try again.');
    //   }
    // } catch (error) {
    //   console.error('Verification failed:', error);
    //   // Handle error if necessary
    // } finally {
    //   setLoading(false);
    // }
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
    // Implement resend code logic here if needed
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView Style={styles.scrollViewContent}>
        <View style={styles.content}>
          <Image source={forgetPwImg} style={styles.image} />
          <SectionTitle title={"Enter Verification Code"} style={styles.sectionTitle} />
          <SubtitleComponent title={"Please enter the verification code that was sent to your registered mobile number or email"} 
          style={styles.subtitle} />
          <View style={styles.codeInputContainer}>
            <View style={styles.codeInputs}>
              {code.map((digit, index) => (
                <VerificationCodeInput
                  key={index}
                  ref={codeInputs[index]}
                  value={digit}
                  onChangeText={(text) => handleCodeChange(index, text)}
                />
              ))}
            </View>
          </View>
        </View>
     
      <View style={styles.buttonContainer}>
        <SetButton
          onPress={handleVerification}
          title="Verify Number"
          style={styles.button}
        />
        <SetButton
          onPress={handleResendCode}
          title="Resend Code"
          backgroundColor="transparent"
          textColor={'black'}
          marginTop={20}
          fontWeight="bold"
          style={styles.button}
        />
      </View>
       </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F8FF',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 40,
    alignSelf: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    padding: 20,
    color: 'gray',
  },
  codeInputContainer: {
    alignItems: 'center',
  },
  codeInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 80,
  },
});

export default VerificationCodeScreen;