import {SafeAreaView,View,Text,TextInput,TouchableHighlight,Image,ScrollView} from 'react-native';
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

      <ScrollView style={[Styles.a]}>
      <View style={[Styles.contener,{marginBottom:50}]}>

          <Text style={[Styles.tituloPric]}>Bem Vindo!</Text> 
          <Text style={[Styles.tituloPric,{color:"#daa520"}]}> {nomeU}</Text> 
      </View>
      <View style={Styles.contener}>
          <Image source={require('../../assets/jogador.png')} style={{width:300,height:300}}/>
      </View>

       <View style={[Styles.caixaBtn,{marginTop:40}]}>

          <TouchableHighlight style={[Styles.btn]} onPress={()=>navigation.navigate('Atletas',{listaF,setListaF})} underlayColor={'#daa520'}>
            <Text style={Styles.btnText}>Buscar Jogador</Text>
          </TouchableHighlight>

          <TouchableHighlight style={Styles.btn} onPress={()=>navigation.navigate('AtletasF',{listaF,setListaF})} underlayColor={'#daa520'}>
            <Text style={Styles.btnText}>Ver Favoritos</Text>
          </TouchableHighlight>

        </View>
      </ScrollView>
      
    </SafeAreaView>
  );
}