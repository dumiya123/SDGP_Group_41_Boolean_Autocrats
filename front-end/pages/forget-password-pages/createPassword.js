import React, { useState } from 'react';//author himan
import { View, TextInput, TouchableOpacity, Text, Image, SafeAreaView, ActivityIndicator } from 'react-native';
import forgetPwImg from './forget-password-images/lock.png';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const PasswordForm = () => {
  const navigation = useNavigation(); // Use the useNavigation hook
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    try {
      setLoading(true);

      // Simulate an asynchronous operation (e.g., API call)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (newPassword === confirmPassword) {
        console.log('Passwords match! New Password:', newPassword);
        // Implement logic to submit the password (e.g., API call)
      } else {
        console.log('Passwords do not match!');
      }
    } catch (error) {
      console.error('Create Password failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F3F8FF' }}>
      <View style={{ flex: 1, padding: 20 }}>
        {/* Back button */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
        </TouchableOpacity>

        {/* Image at the top */}
        <Image source={forgetPwImg} style={{ width: '100%', height: 200, resizeMode: 'contain', marginBottom: 20 }} />
        <Text style={{ fontSize: 20, marginBottom: 20, alignSelf: 'center', fontWeight: 'bold' }}>Create Password</Text>
        <Text style={{ fontSize: 14, marginBottom: 20, textAlign: 'center', color: 'gray' }}>
          Your new password must be different from previously used passwords.
        </Text>

        {/* New Password Input */}
        <View style={{ position: 'relative' }}>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingLeft: 10, paddingRight: 40, borderRadius:15 }}
            placeholder="New Password"
            secureTextEntry={!showNewPassword}
            value={newPassword}
            onChangeText={(text) => setNewPassword(text)}
          />
          <TouchableOpacity
            onPress={() => setShowNewPassword(!showNewPassword)}
            style={{ position: 'absolute', right: 10, top: 10 }}
          >
            <MaterialCommunityIcons
              name={showNewPassword ? 'eye-off-outline' : 'eye-outline'}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        {/* Confirm Password Input */}
        <View style={{ position: 'relative' }}>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 10, paddingRight: 40, borderRadius:15 }}
            placeholder="Confirm Password"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            style={{ position: 'absolute', right: 10, top: 10 }}
          >
            <MaterialCommunityIcons
              name={showConfirmPassword ? 'eye-off-outline' : 'eye-outline'}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        {/* Create Button */}
        <TouchableOpacity
          style={{ backgroundColor: '#183D3D', padding: 10, borderRadius: 15, alignItems: 'center', width: '50%', alignSelf: 'center', marginTop: 180 }}
          onPress={() => navigation.navigate('CONFIRMPW')}
          disabled={loading}
        >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Create</Text>
       
        </TouchableOpacity>

        {/* Loading indicator */}
        {loading && (
          <View style={{ position: 'absolute', top: '50%', alignSelf:'center' }}>
            <ActivityIndicator size="large" color="#183D3D" />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default PasswordForm;
