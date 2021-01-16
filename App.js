import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Images} from './Images';
import {Saved} from './Saved';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Images/>
    //   <StatusBar style="auto" />
    // </View>
    // <View style={styles.container}>

    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Images" style={styles.container} component={Images}/>
      <Tab.Screen name="Saved" component={Saved} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
    },
});
