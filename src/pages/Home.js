import {react, useState } from 'react';
import {SafeAreaView, View,Text,TextInput,TouchableHighlight} from 'react-native';
import Styles from '../css/styles';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home(){

  const navigation=useNavigation()
  const [nomeU,setNomeU]=useState("")
  return (
    <SafeAreaView style={Styles.contener}>

      <View>
        <Text style={[Styles.tituloPric]}>  Buscar Jogador </Text>
      </View>

      
      <View style={[{marginTop:4,marginEnd:10,margin:'auto'}]}>
      <TextInput style={Styles.input} placeholder='Digite seu Nome' 
        onChangeText={(text)=>setNomeU(text)} value={nomeU}/>
      </View>

        <View style={[{marginTop:4,marginEnd:10,margin:'auto'}]}>
            <TouchableHighlight onPress={()=>navigation.navigate
            ('Main',{nome:nomeU})} underlayColor={'#daa520'} style={Styles.btn}>

              <Text style={Styles.btnText}>Login</Text>
              
            </TouchableHighlight>
        </View>

    
      <View style={{marginTop:50,}}>
        <Text style={{color:"#daa520"}}>&copy;ProjetoWEBN2</Text>
      </View>

    </SafeAreaView>
  );
}
