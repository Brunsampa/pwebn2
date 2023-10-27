import {react, useState } from 'react';
import {SafeAreaView, View,Text,TextInput,TouchableHighlight,Image} from 'react-native';
import Styles from '../css/styles';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home(){

  const navigation=useNavigation()
  const [nomeU,setNomeU]=useState("")
  return (
    <SafeAreaView style={Styles.contener}>

      <View>
        <Text style={Styles.tituloPric}>  Buscar Jogador </Text>
      </View>

      <View>
    
      <TextInput style={Styles.input} placeholder='Digite seu Nome' 
        onChangeText={(text)=>setNomeU(text)} value={nomeU}/>

        <TouchableHighlight onPress={()=>navigation.navigate
        ('Main',{nome:nomeU})} underlayColor={'#15f'} style={Styles.btn}>

          <Text style={Styles.btnText}>Login</Text>
          
        </TouchableHighlight>

      </View>

    </SafeAreaView>
  );
}
