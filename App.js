import { StatusBar } from 'expo-status-bar';
import React, {createContext, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StateContext} from './Context';
import {Images} from './Images';
import {Saved} from './Saved';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';



const Tab = createBottomTabNavigator();

export default function App() {
  const [savedImages, setSavedImages] = useState([]);
  
  return (
    <StateContext.Provider value={{savedImages, setSavedImages}}>
      <NavigationContainer>
      <Tab.Navigator  tabBarOptions={{
        activeTintColor: '#e91e63',
        inactiveTintColor: 'gray',
      }} 
      style= {{
    position: 'absolute',
    backgroundColor: 'transparent'
  }}
  
  >
        <Tab.Screen name="Images" style={styles.container} component={Images} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="images-outline" size={30} color="gray" />
          ),
        }}
 />
        <Tab.Screen name="Saved" component={Saved} options={{
          tabBarLabel: 'Saved',
          tabBarIcon: ({ color, size }) => (
            <Icon name="bookmark-outline" size={30} color="gray" />
          )}}
          />
      </Tab.Navigator>
      </NavigationContainer>
    </StateContext.Provider>
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
