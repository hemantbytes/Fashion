import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { ImageSlider } from 'react-native-image-slider-banner';
import BottomTab from './BottomTab';
import StatusBarExample from './StatusBarExample';

const { height: screenHeight } = Dimensions.get('window');

const flashSaleItems = [
  {
    name: 'Brown Jacket',
    price: '$83.97',
    rating: 4.9,
    image: require('../images/p-1.png') // Replace with your actual image path
  },
  {
    name: 'Brown Suite',
    price: '$120.00',
    rating: 5.0,
    image: require('../images/p-2.png') // Replace with your actual image path
  },
  {
    name: 'Brown Jacket',
    price: '$83.97',
    rating: 4.9,
    image: require('../images/p-3.png') // Replace with your actual image path
  },
  {
    name: 'Yellow Shirt',
    price: '$120.00',
    rating: 5.0,
    image: require('../images/p-4.png') // Replace with your actual image path
  }
];

const bannerImages = [
  { img: require('../images/hero-1.png') },
  { img: require('../images/hero-2.jpg') },
  { img: require('../images/hero-3.png') },
  { img: require('../images/hero-4.png') }
];

const categories = ['T-Shirt', 'Pant', 'Dress', 'Jacket'];
const saleCategories = ['All', 'Newest', 'Popular', 'Man', 'Woman', 'Kids', 'Sport'];

const categoryImages = {
  'T-Shirt': require('../images/t-shirt.png'),
  'Pant': require('../images/pant.png'),
  'Dress': require('../images/dress.png'),
  'Jacket': require('../images/jacket.png')
};


const HomePageScreen = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Newest');
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 12,
    seconds: 56
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        }
        clearInterval(timer);
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const renderPagination = () => {
    return (
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        gap: 8
      }}>
        {bannerImages.map((_, index) => (
          <View
            key={index}
            style={{
              width: currentIndex === index ? 12 : 8,
              height: currentIndex === index ? 12 : 8,
              borderRadius: 6,
              backgroundColor: currentIndex === index ? 'red' : '#D3D3D3',
              elevation: currentIndex === index ? 3 : 0,
              shadowColor: 'red',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: currentIndex === index ? 0.3 : 0,
              shadowRadius: 2,
            }}
          />
        ))}
      </View>
    );
  };


  return (
    <View className="bg-[#fff]" style={{ flex: 1 }}>
      <StatusBarExample />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        enabled={false}
      >
        {/* Header Section */}
        <View className="flex-row justify-between items-center mx-5 mt-8" style={{ height: screenHeight * 0.1 }}>
          <View className="flex-row items-center">
            <View>
              <Text className="color-[#999898]">Location</Text>
              <View className="flex-row items-center">
                <Image
                  source={require('../images/location.png')}
                  className="h-6 w-6 mr-2"
                />
                <Text className="text-lg font-semibold mr-2">New York, USA</Text>
                <Icon name="chevron-down" size={12} className="font-semibold" />
              </View>
            </View>
          </View>
          <TouchableOpacity className="p-2 bg-gray-200 rounded-full">
            <Image
              source={require('../images/notification.png')}
              className="h-8 w-8"
            />
          </TouchableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
        >
          {/* Search Section */}
          <View className="mx-5 mt-2">
            <View className="flex-row items-center justify-start ">
              <View className="flex-row items-center border border-gray-300 rounded-full px-4 py-2 w-[300px] mr-4">
                <Image
                  source={require('../images/search.png')}
                  className="w-9 h-9 mr-2"
                />
                <TextInput
                  className="flex-1 text-base"
                  placeholder="Search"
                  returnKeyType="done"
                />
              </View>
              <TouchableOpacity className="p-3 bg-[#704f38] rounded-full">
                <Image
                  source={require('../images/filter.png')}
                  className="h-7 w-7"
                />
              </TouchableOpacity>
            </View>
          </View>


          {/* Banner Section */}

          <View className="mx-5 pt-7">
            <View style={{
              borderRadius: 8,
              overflow: 'hidden',
            }}>
              <ImageSlider
                data={bannerImages}
                localImg={true}
                autoPlay={true}
                timer={5000}
                preview={false}
                caroselImageStyle={{
                  resizeMode: 'cover',
                  height: 180,
                  borderRadius: 8
                }}
                showIndicator={false}
                onItemChanged={(item) => setCurrentIndex(item)}
                closeIconColor="#fff"
              />
            </View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10
            }}>
              {bannerImages.map((_, index) => (
                <View
                  key={index}
                  style={{
                    width: currentIndex === index ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: currentIndex === index ? '#FF0000' : '#D3D3D3',
                    marginHorizontal: 4,
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </View>
          </View>

          {/* Categories Section */}
          <View className="mx-5 py-4">
            <View className="flex-row justify-between items-center px-4 pt-1">
              <Text className="text-lg font-bold">Category</Text>
              <Text className="color-[#704f38]">See All</Text>
            </View>

            <View className="mt-2 flex-row justify-center items-center">
              {categories.map((category, index) => (
                <View key={index} className="items-center mx-3">
                  <View className="bg-[#eee5db] rounded-full w-20 h-20 justify-center items-center">
                    <Image
                      source={categoryImages[category]}
                      className="w-10 h-10 rounded-full"
                    />
                  </View>
                  <Text className="text-center mt-2 font-bold">{category}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Flash Sale Section with Timer */}
          <View className=" py-4">
            <View className="mx-5 flex-row justify-between items-center mb-4">
              <Text className="text-lg font-bold">Flash Sale</Text>
              <View className="flex-row items-center">
                <Text className="text-gray-600 mr-2">Closing in :</Text>
                <View className="flex-row items-center">
                  <Text className="bg-[#eee5db] px-2 py-1 rounded min-w-[28px] text-center font-medium">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </Text>
                  <Text className="mx-1 font-medium">:</Text>
                  <Text className="bg-[#eee5db] px-2 py-1 rounded min-w-[28px] text-center font-medium">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </Text>
                  <Text className="mx-1 font-medium">:</Text>
                  <Text className="bg-[#eee5db] px-2 py-1 rounded min-w-[28px] text-center font-medium">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </Text>
                </View>
              </View>
            </View>

            {/* Sale Categories ScrollView */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="mb-4"
            >
              <View className="flex-row ms-5">
                {saleCategories.map((category) => (
                  <TouchableOpacity
                    key={category}
                    onPress={() => setSelectedCategory(category)}
                    className={`px-3 py-1 rounded-full mr-2 border ${selectedCategory === category
                      ? 'bg-[#704f38] border-[#704f38]' 
                      : 'bg-gray-100 border-gray-700'   
                      }`}
                  >
                    <Text
                      className={`px-4 py-1 rounded-full font-medium ${selectedCategory === category
                        ? 'text-white'  
                        : 'text-gray-700' 
                        }`}
                    >
                      {category}
                    </Text>
                  </TouchableOpacity>

                ))}
              </View>
            </ScrollView>

            {/* Products Grid */}
            <ScrollView className="mx-5">
              <View className="flex-row flex-wrap justify-between">
                {flashSaleItems.map((item, index) => (
                  <View key={index} className="w-[48%] mb-4">
                    <View className="relative">
                      <Image
                        source={item.image}
                        className="w-full h-44 rounded-xl"
                        style={{ backgroundColor: '#f5f0ed' }}
                      />
                      <TouchableOpacity
                        className="absolute top-2 right-2 h-10 w-10 bg-white/20 p-2 rounded-full flex items-center justify-center border border-white/10 backdrop-blur-sm"
                      >
                        <Image
                          source={require('../images/heart-1.png')}
                          className="w-6 h-6"
                        />
                      </TouchableOpacity>

                    </View>
                    <View className="mt-2">
                      <View className="flex-row items-center justify-between">
                        <Text className="text-base font-medium color-[#292727]" onPress={() => navigation.navigate('Details')}>{item.name}</Text>
                        <View className="flex-row items-center">
                          <Icon name="star" size={12} color="#fcaf23" />
                          <Text className="ml-1 text-sm color-[#999898] ">{item.rating}</Text>
                        </View>
                      </View>
                      <Text className="text-lg font-semibold mt-1">{item.price}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
        </ScrollView>

        {/* Sticky Footer */}
        {!keyboardVisible && (

          <BottomTab />
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default HomePageScreen;


