import {SafeAreaView,View,Text,TextInput,TouchableHighlight,Image} from 'react-native';
import {react,useState} from 'react';
import Styles from '../css/styles';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Main({route}){

  const navigation=useNavigation()
  const [listaF,setListaF]=useState([])
  const nomeU=route.params?.nome
  return (
    <SafeAreaView style={Styles.contener}>

      <View>

          <Text style={[Styles.tituloPric, {marginTop:20}]}>Bem Vindo! {nomeU}</Text>
           
           <View style={Styles.contener}>

            <Image source={require('../assets/jogador.png')} style={{width:200,height:200,marginTop:40}}/>

           </View>

       <View style={Styles.caixaBtn}>

          <TouchableHighlight style={[Styles.btn,{margin:30}]} onPress={()=>navigation.navigate('Atletas',{listaF,setListaF})} underlayColor={'#15f'}>
            <Text style={Styles.btnText}>Buscar Jogador</Text>
          </TouchableHighlight>

          <TouchableHighlight style={Styles.btn} onPress={()=>navigation.navigate('AtletasF',{listaF,setListaF})} underlayColor={'#15f'}>
            <Text style={Styles.btnText}>Favoritos</Text>
          </TouchableHighlight>

        </View>
      </View>
    </SafeAreaView>
  );
}