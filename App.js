import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TableScreen } from './screen/TableScreen';
import { DetailScreen } from './screen/DetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName = "table"
        screenOptions={{
          headerTintColor:"#ffffff",
          headerStyle: {
            backgroundColor: "#333399",
          }
        }}
        headerMode="float"
      >
        <Stack.Screen name="table" component={TableScreen}/>
        <Stack.Screen name="detail" component={DetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

