import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

export function DetailScreen({route}){
  const { name }= route.params
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ffffff",
  }
})