import React, { useState } from 'react';
import { View, Image, SafeAreaView, StyleSheet, ScrollView, Alert, ActivityIndicator } from 'react-native';
import forgetPwImg from './forget-password-images/forgetPw.png';
import { useNavigation } from '@react-navigation/native';
import SubtitleComponent from "../../components/SettingsComponents/Subtittle";
import SectionTitle from '../../components/SettingsComponents/SectionTitle';
import TextInputField from '../../components/TextInputField';
import SetButton from '../../components/SetButtons/setButton';

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [loadingText, setLoadingText] = useState('');

    const handleSendOTP = async () => {
        // try {
        //     setLoadingText('Sending OTP...');
        //     setLoading(true);

        //     // Make API call to backend to send OTP
        //     const response = await fetch('YOUR_BACKEND_OTP_ENDPOINT', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({ email }),
        //     });

        //     if (response.ok) {
        //         // Navigate to the verification screen after sending OTP
                navigation.navigate('Verify Code');
        //     } else {
        //         // Handle error response from backend
        //         Alert.alert('Error', 'Failed to send OTP. Please try again later.');
        //     }
        // } catch (error) {
        //     console.error('Send OTP failed:', error);
        //     // Handle other errors gracefully
        //     Alert.alert('Error', 'Failed to send OTP. Please try again later.');
        // } finally {
        //     setLoadingText('');
        //     setLoading(false);
        // }
    };

    const handleBackToLogin = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView Style={styles.scrollViewContent}>
                <Image source={forgetPwImg} style={styles.image} />
                <SectionTitle title={"Forgot your password?"} style={styles.sectionTitle}/>
                <SubtitleComponent title={"To reset your password, enter your registered email address below."} 
                    style={styles.subtitle} />
                <View style={styles.inputContainer}>
                    <TextInputField
                        placeholder="Enter your email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        iconName="email"
                    />
                </View>
                {loading && (
                    <View style={styles.loading}>
                        <ActivityIndicator size="large" color="midnightblue" />
                    </View>
                )}
                <View style={styles.btnContainer}>
                    <SetButton
                        onPress={handleSendOTP}
                        title="Send OTP"
                    />
                    <SetButton
                        onPress={handleBackToLogin}
                        title="Back to Login"
                        backgroundColor="transparent"
                        textColor={'black'}
                        marginTop={20}
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
        padding: 16,
    },
    image: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginTop: 50,
    },
    sectionTitle: {
        fontSize: 18,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        textAlign: 'center',
        padding: 20,
        color: 'gray',
    },
    inputContainer: {
        justifyContent: 'center',
        padding: 16,
    },
    loading: {
        position: 'absolute',
        top: '50%',
        alignSelf: 'center',
    },
    btnContainer: {
        justifyContent: 'center',
        marginTop: 70,
    },
});

export default ForgotPasswordScreen;