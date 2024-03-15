import React, { useState } from 'react';//author himan
import { View, Text, Image, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native';
import ResetImg from './forget-password-images/reset.png';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ConfirmPasswordScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    try {
      setLoading(true);

      // Simulate an asynchronous operation (e.g., API call)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Implement your confirm password logic here

      // Navigate to the next screen or perform any other actions
    } catch (error) {
      console.error('Confirm Password failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 15,
          padding: 20,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          width: '80%',
        }}
      >
        {/* Image at the top */}
        <Image source={ResetImg} style={{ width: '50%', height: 100, resizeMode: 'contain',alignSelf:'center', marginBottom: 20 }} />
        <Text style={{alignSelf:'center',fontWeight: 'bold',fontSize: 20}}>Password Reset</Text>
        <Text style={{alignSelf:'center',fontWeight: 'bold',textAlign: 'center', color: 'gray' ,fontSize:14,marginTop: 10}}>Your password has been reset Successfully!</Text>

        {/* Confirm Button */}
        <TouchableOpacity
          style={{
            backgroundColor: '#183D3D',
            padding: 15,
            borderRadius: 20,
            alignItems: 'center',
            width: '60%',
            alignSelf: 'center',
            marginTop: 20,
          
          }}
          onPress={handleConfirm}
          disabled={loading}
        >
         
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Confirm</Text>
      
        </TouchableOpacity>

        {/* Loading indicator */}
        {loading && (
          <View style={{ position: 'absolute', top: '50%', alignSelf:'center'}}>
            <ActivityIndicator size="large" color="midnightblue" />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ConfirmPasswordScreen;
