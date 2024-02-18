import React from 'react';//author himan
import { View, TextInput, TouchableOpacity, ActivityIndicator, Text, Image, Alert, SafeAreaView } from 'react-native';
import forgetPwImg from './forget-password-images/forgetPw.png';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [loadingText, setLoadingText] = React.useState('');

    const handleForgotPassword = async () => {
        try {
            setLoadingText('Sending OTP...');
            setLoading(true);
            // Implement your forgot password logic here (e.g., API call)
            console.log(`Forgot password for email: ${email}`);
            // Simulate an asynchronous operation (e.g., API call)
            await new Promise((resolve) => setTimeout(resolve, 2000));
        } catch (error) {
            // Handle error if necessary
            console.error('Forgot password failed:', error);
            Alert.alert('Error', 'Forgot password failed. Please try again.');
        } finally {
            setLoadingText('');
            setLoading(false);
        }
    };

    const handleBackToLogin = async () => {
        try {
            setLoadingText('Going back to login...');
            setLoading(true);
            // Implement any logic needed before navigating back to login
            // Simulate an asynchronous operation (e.g., API call)
            await new Promise((resolve) => setTimeout(resolve, 500));
            // Navigate back to the login screen
            navigation.goBack();
        } catch (error) {
            // Handle error if necessary
            console.error('Back to Login failed:', error);
            Alert.alert('Error', 'Back to Login failed. Please try again.');
        } finally {
            setLoadingText('');
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F3F8FF', justifyContent: 'center', padding: 16 }}>
            <Image source={forgetPwImg} style={{ width: 200, height: 200, alignSelf: 'center', marginTop: 50 }} />
            <Text style={{ fontSize: 20, textAlign: 'center', color: 'black', marginBottom: 16, fontWeight: 'bold' }}>
                Forgot your password?
            </Text>
            <Text style={{ fontSize: 14, textAlign: 'center', color: 'gray', marginBottom: 16, marginHorizontal: 40 }}>
                To reset your password, enter your registered email address or mobile number below.
            </Text>

            <View style={{ justifyContent: 'center', padding: 16 }}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 26, paddingLeft: 8, borderRadius: 10 }}
                    placeholder="Enter your email"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
            </View>
            {loading && (
                <View style={{ position: 'absolute', top: '50%', alignSelf: 'center' }}>
                    <ActivityIndicator size="large" color="midnightblue" />
                </View>
            )}
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
                <View style={{ marginTop: 60 }}>
                    <TouchableOpacity
                         onPress={() => navigation.navigate('CODE')}
                        
                        style={{
                            backgroundColor: '#183D3D',
                            borderRadius: 15,
                            width: 150,
                            paddingVertical: 10,
                            alignItems: 'center',
                            marginBottom: 8,
                        }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Send OTP</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={handleBackToLogin}
                   
                        style={{
                            width: 150,
                            paddingVertical: 10,
                            alignItems: 'center',
                            marginBottom: 2,
                        }}>
                        <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Back to Login</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
};

export default ForgotPasswordScreen;
