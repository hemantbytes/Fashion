import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather'; // Import an icon library

const ForgotScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 justify-center px-6">
      {/* Back Button */}
      <TouchableOpacity 
        className="absolute top-16 left-6 z-10 border border-gray-300 p-2 rounded-full" 
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-left" size={20} color="black" />
      </TouchableOpacity>

      {/* Title */}
      <Text className="text-3xl font-bold mb-2 text-center">New Password</Text>
      <Text className="text-gray-400 text-lg text-center mb-8">
        Your new password must be different {"\n"}from previously used passwords.
      </Text>

      {/* Password Input */}
      <View className="w-full mb-3">
        <Text className="text-lg font-medium mb-1 self-start">Password</Text>
        <TextInput
          className="w-full p-4 border border-gray-300 rounded-full"
          placeholder="************"
          secureTextEntry
        />
      </View>

      {/* Confirm Password Input */}
      <View className="w-full mb-10">
        <Text className="text-lg font-medium mb-1 self-start">Confirm Password</Text>
        <TextInput
          className="w-full p-4 border border-gray-300 rounded-full"
          placeholder="************"
          secureTextEntry
        />
      </View>

      {/* Create New Password Button */}
      <TouchableOpacity className="w-full bg-[#704f38] p-4 rounded-full mb-52">
        <Text className="text-white text-center font-semibold text-lg">
          Create New Password
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotScreen;
