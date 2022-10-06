import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
import NewsScreen from '../screens/NewsScreen';
import SavedNewsScreen from '../screens/SavedNewsScreen';
import SettingsScreen from '../screens/SettingsScreen';
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={NewsScreen} />
      <Tab.Screen name="NewsScreen" component={SavedNewsScreen} />
      <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;