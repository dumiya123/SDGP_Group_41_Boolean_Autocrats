import React from 'react';
import { View,ActivityIndicator, Image, Alert, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import forgetPwImg from './forget-password-images/forgetPw.png';
import { useNavigation } from '@react-navigation/native';
import SubtitleComponent from "../../components/SettingsComponents/Subtittle"; // Import the SubtitleComponent
import SectionTitle from '../../components/SettingsComponents/SectionTitle';
import TextInputField from '../../components/TextInputField'; // Import the TextInputField component
import SetButton from '../../components/SetButtons/setButton';


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
        <SafeAreaView style={styles.container}>
            <ScrollView Style={styles.scrollViewContent}>
                <Image source={forgetPwImg} style={styles.image} />
                <SectionTitle title={"Forgot your password?"} style={styles.sectionTitle}/>
                <SubtitleComponent title={"To reset your password, enter your registered email address or mobile number below."} 
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
                        onPress={() => navigation.navigate('Verify Code')}
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
