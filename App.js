import {react, useState } from 'react';
import {SafeAreaView, View,Text,TextInput,TouchableHighlight} from 'react-native';
import Home from './components/Home'
import Atletas from './components/Altetas';
import Main from './components/Main';
import Styles from './css/styles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AtletasF from './components/AtletasF';

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


