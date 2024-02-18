import React, { useState, useEffect } from 'react';//author himan
import { View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import LogoImg from './login-images/B2.png';
import GoogleIcon from './login-images/google.png';
import InstagramIcon from './login-images/instagram.png';  
import FacebookIcon from './login-images/fb.png';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    let rotationInterval;

    if (loading) {
      rotationInterval = setInterval(() => {
        setLoading((prevLoading) => !prevLoading);
      }, 1000);
    } else {
      clearInterval(rotationInterval);
    }

    return () => clearInterval(rotationInterval);
  }, [loading]);

  const handleGoogleSignIn = () => {
    setLoading(true);
    setTimeout(() => {
      console.log("Google sign-in completed");
      setLoading(false);
    }, 2000);
  };

  const handleFacebookSignIn = () => {
    setLoading(true);
    setTimeout(() => {
      console.log("Facebook sign-in completed");
      setLoading(false);
    }, 2000);
  };

  const handleInstagramSignIn = () => {
    setLoading(true);
    setTimeout(() => {
      console.log("Instagram sign-in completed");
      setLoading(false);
    }, 2000);
  };

  const handleSignUp = () => {
    setTimeout(() => {
      setLoading(false);
      console.log("Sign-up completed");
    }, 2000);
  };

  const handleTextClick = () => {
    setLoading(true);
    setTimeout(() => {
      console.log("Text clicked");
      handleSignUp(); 
    }, 2000);
  };

  const handleLogging = () => {
    setLoading(true);
    setTimeout(() => {
      console.log("Logging completed");
      setLoading(false);
    }, 2000);
  };

  const handleForgetPassword = () => {
    setLoading(true);
    setTimeout(() => {
      console.log("Forget Password clicked");
      setLoading(false);
    }, 2000);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#0E8388', padding: 50, alignItems: 'center' }}>
      <Image source={LogoImg} style={{ width: '100%', height: 200, resizeMode: 'contain', marginBottom: 20 }} />
      <Text style={{ color: 'white', fontSize: 25, textAlign: 'center', marginBottom: 50,fontWeight: 'bold' }}>Welcome to the SaveNest</Text>

      <View style={{ width: '100%', marginBottom: 20}}>
        <View style={{ position: 'relative', marginBottom: 10 }}>
          <MaterialIcons
            name={'person-outline'}
            size={26}
            color={'gray'}
            style={{ position: 'absolute', top: 10, left: 10, zIndex: 1 }}
          />
          <TextInput
            placeholder="Email"
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white', padding: 10, paddingLeft: 40, borderRadius: 10 }}
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>

        <View style={{ position: 'relative', marginBottom: 10 }}>
          <MaterialIcons
            name={'lock-outline'}
            size={26}
            color={'gray'}
            style={{ position: 'absolute', top: 10, left: 10, zIndex: 1 }}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={!showPassword}
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white', padding: 10, paddingLeft: 40, borderRadius: 10 }}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TouchableOpacity
            style={{ position: 'absolute', top: 10, right: 10 }}
            onPress={() => setShowPassword(!showPassword)}
          >
            <MaterialCommunityIcons
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Verification Email")}
         style={{ alignItems: 'flex-end', marginRight: 10 }}>
          <Text style={{ color: 'midnightblue', fontSize: 15, marginBottom: 10,fontWeight: 'bold'}}>Forget your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={()=>Navigation.navigate()}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FF9209',
            borderRadius: 20,
            padding: 5,
            marginTop: 15,
            width: 200,
            alignSelf: 'center', // Center the button horizontally
          }}
        >
          <Text style={{ color: 'white', fontSize: 25, textAlign: 'center', marginRight: 5 }}>Login</Text>
          <MaterialCommunityIcons name="arrow-right" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
        <View style={{ flex: 1, height: 1, backgroundColor: 'black', marginHorizontal: 10 }} />
        <Text style={{ fontSize: 14, marginHorizontal: 10 }}>Or sign up with</Text>
        <View style={{ flex: 1, height: 1, backgroundColor: 'black', marginHorizontal: 10 }} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity
          onPress={handleFacebookSignIn}
          style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row', height: 52 }}
        >
          <Image source={FacebookIcon} style={{ width: 40, height: 40, marginRight: 2 }} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleGoogleSignIn}
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', height: 52 }}
        >
          <Image source={GoogleIcon} style={{ width: 40, height: 40, marginRight: 2 }} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleInstagramSignIn}
          style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', height: 52 }}
        >
          <Image source={InstagramIcon} style={{ width: 40, height: 40, marginRight: 2 }} />
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '70%', marginBottom: 0, marginTop: 30 }}>
        <Text style={{ color: 'white', fontSize: 15 }}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SIGN UP")}>
  <Text style={{ color: 'midnightblue', fontSize: 15, fontWeight: 'bold' }}>Sign up</Text>
</TouchableOpacity>


      </View>

      {loading && (
        <View style={{ position: 'absolute', top: '52%', alignSelf:'center' }}>
          <ActivityIndicator size="large" color="midnightblue" />
        </View>
      )}
    </View>
  );
}
export default LoginScreen;