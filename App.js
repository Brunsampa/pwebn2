import {react, useState } from 'react';
import {SafeAreaView, View,Text,TextInput,TouchableHighlight} from 'react-native';
import Home from './src/pages/Home';
import Atletas from './src/pages/Altetas';
import Main from './src/pages/Main';
import AtletasF from './src/pages/AtletasF';
import Styles from './src/css/styles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const Stack =createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Atletas" component={Atletas} />
        <Stack.Screen name="AtletasF" component={AtletasF} />
      </Stack.Navigator>
  </NavigationContainer>
  
  );
}


