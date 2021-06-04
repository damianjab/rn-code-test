


import React from 'react';
import { NativeModules, Button, Text, StyleSheet } from 'react-native';

const Info = () => {
  const { MyNativeModule } = NativeModules;
  const { SERVICE_KEY } = MyNativeModule.getConstants();
  return (
    <Text style={styles.titleText}>Service key:  {SERVICE_KEY}</Text>
  )
};
const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    width: '100%',
    color: 'black',
    marginTop: 50
  }
})

export default Info;

