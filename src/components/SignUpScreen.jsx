import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox'; // Import from the new package

const SignUpScreen = () => {
  const [isChecked, setIsChecked] = useState(true); // state for checkbox, initially unchecked
  const navigation = useNavigation();

  return (
    <View className="flex-1 justify-center px-6">
      <Text className="text-3xl font-bold mb-2 text-center">Create Account</Text>
      <Text className="text-gray-400 text-lg text-center ">
      Fill your information below or register{"\n"} with your social account.
      </Text>

      {/* Name Input */}
      <View className="w-full mb-4 mt-5">
        <Text className="text-lg font-medium mb-1 self-start">Name</Text>
        <TextInput
          className="w-full p-4 border border-gray-300 rounded-full"
          placeholder="John Doe"
        />
      </View>

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
      <View className="w-full mb-4">
        <Text className="text-lg font-medium mb-1 self-start">Password</Text>
        <TextInput
          className="w-full p-4 border border-gray-300 rounded-full"
          placeholder="************"
          secureTextEntry
        />
      </View>

      {/* Terms and Conditions */}
      <View className="flex-row justify-center items-center  self-start">
        <CheckBox
          value={isChecked} // Controlled checkbox state
          onValueChange={(newValue) => setIsChecked(newValue)} // Update state when checkbox is clicked
          tintColors={{ true: '#704f38', false: '#d3d3d3' }} // Checkbox color when checked and unchecked
          onCheckColor="#fff" // Color of the checkmark when checked
          onTintColor="#704f38" // Border color when checked
          className="mr-2"
        />
        <Text className="text-gray-400 text-center text-lg ">
          Agree with{' '}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('TermsAndConditions')}>
          <Text  className="text-[#704f38] underline font-bold ">Terms & Conditions</Text>
        </TouchableOpacity>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity className="w-full bg-[#704f38 ] p-4 rounded-full mt-5">
        <Text className="text-white text-center font-semibold text-lg">
          Sign Up
        </Text>
      </TouchableOpacity>

      {/* Or sign up with - With Left & Right Border */}
      <View className="flex-row items-center justify-center my-6 w-full px-6">
        <View className="flex-1 h-[1px] bg-gray-300"></View>
        <Text className="text-gray-400 text-lg mx-4">Or sign up with</Text>
        <View className="flex-1 h-[1px] bg-gray-300"></View>
      </View>

      {/* Social Sign Up Buttons (Apple, Google, Facebook Icons) */}
      <View className="flex-row justify-evenly mb-6">
        {/* Apple Icon */}
        <TouchableOpacity className="p-3 border border-gray-300 rounded-full">
          <Image
            source={require('../images/apple.png')} // Ensure this is the correct path
            style={{ width: 30, height: 30 }} // Same size for all icons
          />
        </TouchableOpacity>

        {/* Google Icon */}
        <TouchableOpacity className="p-3 border border-gray-300 rounded-full">
          <Image
            source={require('../images/Google.png')} // Ensure this is the correct path
            style={{ width: 30, height: 30 }} // Same size for all icons
          />
        </TouchableOpacity>

        {/* Facebook Icon */}
        <TouchableOpacity className="p-3 border border-gray-300 rounded-full">
          <Image
            source={require('../images/facebook.png')} // Ensure this is the correct path
            style={{ width: 30, height: 30 }} // Same size for all icons
          />
        </TouchableOpacity>
      </View>

      {/* Already have an account? Sign In */}
      <Text className="text-center text-lg mt-2">
        Already have an account?{' '}
        <Text
          className="text-[#704f38] underline font-bold"
          onPress={() => navigation.navigate('SignIn')}
        >
          Sign In
        </Text>
      </Text>
    </View>
  );
};

export default SignUpScreen;
