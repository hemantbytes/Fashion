import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import StatusBarExample from './StatusBarExample';

const WelcomeScreen = () => {
    const navigation = useNavigation();

    return (
        <ImageBackground
            source={require('../images/Welcome-Screen.png')}
            className="flex-1 justify-center items-center"
            resizeMode="cover"
        >
            <StatusBarExample />
            <View className="flex-1 justify-end mb-16 mx-5">
                <Text className="text-black text-3xl font-bold text-center mt-80">
                    The <Text style={{ color: "#704f38" }}> Fashion App</Text> That {"\n"} Makes You Looks Your Best
                </Text>
                <Text className="text-gray-400 text-1xl text-center mt-5">
                    Lorem ipsum dolor sit amet consectetur {"\n"} adipisicing elit. Adipisci delectus aliquid  incidunt
                </Text>
                <TouchableOpacity
                    style={{ backgroundColor: '#704f38' }}
                    className="p-4 rounded-full mt-5"
                >
                    <Text className="text-white text-center font-semibold text-lg" onPress={() => navigation.navigate('HomePage')}>
                        Let's Get Started
                    </Text>
                </TouchableOpacity>
                <Text className="text-center text-lg mt-5">Already Have an Account? <Text className="text-[#704f38] underline font-bold"  onPress={() => navigation.navigate('SignIn')}>Sign In</Text></Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({});

export default WelcomeScreen;
