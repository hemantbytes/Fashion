import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native'; // Import Image component
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const SignInScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 justify-center px-6 ">
      <Text className="text-3xl font-bold mb-2 text-center">Sign In</Text>
      <Text className="text-gray-400 text-lg text-center mb-20">
        Hi! Welcome back, you've been missed
      </Text>

      {/* Email Input */}
      <View className="w-full mb-4">
        <Text className="text-lg font-medium mb-1 self-start">Email</Text>
        <TextInput
          className="w-full p-4 border border-gray-300 rounded-full"
          placeholder="example@gmail.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {/* Password Input */}
      <View className="w-full mb-2">
        <Text className="text-lg font-medium mb-1 self-start">Password</Text>
        <TextInput
          className="w-full p-4 border border-gray-300 rounded-full"
          placeholder="************"
          secureTextEntry
        />
      </View>

      {/* Forgot Password with Color and Underline */}
      <TouchableOpacity className="self-end mb-12">
        <Text className="text-[#704f38] underline font-bold " onPress={() => navigation.navigate('Forgot')}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

      {/* Sign In Button */}
      <TouchableOpacity className="w-full bg-[#704f38] p-4 rounded-full">
        <Text className="text-white text-center font-semibold text-lg"   onPress={() => navigation.navigate('HomePage')}>
          Sign In
        </Text>
      </TouchableOpacity>

      {/* Or sign in with - With Left & Right Border */}
      <View className="flex-row items-center justify-center my-10 w-full px-6">
        <View className="flex-1 h-[1px] bg-gray-300"></View>
        <Text className="text-gray-400 text-lg mx-4">Or sign in with</Text>
        <View className="flex-1 h-[1px] bg-gray-300"></View>
      </View>

      {/* Social Sign In Buttons (Apple, Google, Facebook Icons) */}
      <View className="flex-row justify-evenly mb-6">
        {/* Apple Icon */}
        <TouchableOpacity className="p-3 border border-gray-300 rounded-full">
          <Image
            source={require('../images/apple.png')} // Ensure this is the correct path
            style={{width: 30, height: 30}} // Same size for all icons
          />
        </TouchableOpacity>

        {/* Google Icon */}
        <TouchableOpacity className="p-3 border border-gray-300 rounded-full">
          <Image
            source={require('../images/Google.png')} // Ensure this is the correct path
            style={{width: 30, height: 30}} // Same size for all icons
          />
        </TouchableOpacity>

        {/* Facebook Icon */}
        <TouchableOpacity className="p-3 border border-gray-300 rounded-full">
          <Image
            source={require('../images/facebook.png')} // Ensure this is the correct path
            style={{width: 30, height: 30}} // Same size for all icons
          />
        </TouchableOpacity>
      </View>
      <Text className="text-center text-lg mt-5">
        Don't Have an Account?{' '}
        <Text
          className="text-[#704f38] underline font-bold"
          onPress={() => navigation.navigate('SignUp')}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

export default SignInScreen;
