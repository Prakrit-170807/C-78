import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";

const stacker = createStackNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <stacker.Navigator initialRouteName="Home Screen" screenOptions={{headerShown: false}}>
        <stacker.Screen name="Home Screen" component={HomeScreen}></stacker.Screen>
        <stacker.Screen name="Location Screen" component={IssLocationScreen}></stacker.Screen>
        <stacker.Screen name="Meteor Screen" component={MeteorScreen}></stacker.Screen>
      </stacker.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});





