import React from 'react';

import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/screens/LoginScreen';
import OTPScreen from './src/screens/OTPScreen';
import BottomTab from './src/navigation/BottomTabNavigator';



const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar
        barStyle={'dark-content'}
      />
       <NavigationContainer>
        <Stack.Navigator >
           <Stack.Screen options={{headerShown:false}} name="LoginScreen" component={LoginScreen} />
           <Stack.Screen options={{headerShown:false}} name="OtpScreen" component={OTPScreen} />
           <Stack.Screen options={{headerShown:false}} name="BottomTab" component={BottomTab} />
       </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
