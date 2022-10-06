import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
import NewsScreen from '../screens/NewsScreen';
import SavedNewsScreen from '../screens/SavedNewsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { Image } from 'react-native';
function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
     
    }}  
    barStyle={{backgroundColor:"#fff"}}
    >
      <Tab.Screen options={{
          tabBarLabel: 'News',
          tabBarIcon: ({ color, size }) => (
            <Image source={require("../assets/images/news.jpeg")} style={{width:24,height:24}} />
          ),
        }} name="HomeScreen" component={NewsScreen} />
      <Tab.Screen
      options={{
        tabBarLabel: 'Saved',
        tabBarIcon: ({ color, size }) => (
          <Image source={require("../assets/images/saved.png")} style={{width:24,height:24}} />
        ),
      }}
      name="NewsScreen" component={SavedNewsScreen} />
      <Tab.Screen
      options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({ color, size }) => (
          <Image source={require("../assets/images/settings.png")} style={{width:24,height:24}} />
        ),
      }}
      name="SettingsScreen" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;