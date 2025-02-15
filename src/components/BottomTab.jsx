import { View, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';

const BottomTab = () => {
  const [activeTab, setActiveTab] = useState('home'); // Default active tab

  const tabs = [
    { id: 'home', icon: require('../images/home.png'), activeIcon: require('../images/home-1.png') },
    { id: 'shopping-bag', icon: require('../images/shopping-bag.png'), activeIcon: require('../images/shopping-bag-1.png') },
    { id: 'heart', icon: require('../images/heart.png'), activeIcon: require('../images/heart-2.png') },
    { id: 'message', icon: require('../images/message.png'), activeIcon: require('../images/message-1.png') },
    { id: 'user', icon: require('../images/user.png'), activeIcon: require('../images/user-1.png') },
  ];

  return (
    <View className="fixed bottom-5 left-0 right-0 bg-[#1f2029] rounded-full py-2 px-2 mx-4">
      <View className="flex-row justify-between items-center">
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            onPress={() => setActiveTab(tab.id)}
            className={`h-14 w-14 rounded-full flex items-center justify-center ${
              activeTab === tab.id ? 'bg-[#fff]' : 'bg-transparent'
            }`}
          >
            <Image
              source={activeTab === tab.id ? tab.activeIcon : tab.icon}
              className="w-6 h-6"
              style={{ tintColor: activeTab === tab.id ? '#704f38' : '#dcdde3' }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default BottomTab;
