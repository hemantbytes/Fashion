import { View, Text, StatusBar, StyleSheet } from 'react-native';
import React from 'react';

const StatusBarExample = () => {
  return (
    <View>
      <StatusBar 
        barStyle={'dark-content'}
        backgroundColor="#fff" 
        hidden={false}
        translucent={true}
      />
    </View>
  );
};

export default StatusBarExample;


