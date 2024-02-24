import React from 'react';
import {View, Text, Vibration} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ViewBook from './ViewBook';
const Stack = createStackNavigator();
const AppNavigator=()=> {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="App" component={App} options={{headerShown:false}}/>
            <Stack.Screen name="ViewBook" component={ViewBook}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator
