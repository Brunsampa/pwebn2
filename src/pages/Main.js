import {SafeAreaView,View,Text,TextInput,TouchableHighlight,Image,ScrollView,Modal,Pressable} from 'react-native';
import {react,useEffect,useState} from 'react';
import Styles from '../css/styles';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Main({route}){

  const navigation=useNavigation()
  const [listaF,setListaF]=useState([])
  const [temperatura,setTemperatura]=useState(0);
  const nomeU=route.params?.nome
  const [mostra, setMostra]=useState(false);
  const [visivel,setVisivel]=useState(true)
  async function verTemperatura(){
    const UrlBase=`https://api.thingspeak.com/update?api_key=CLDBTEONMSR8ZTGJ&field1=0
    `
    try {
         let res= await fetch(UrlBase)
         let resposta= await res.json()
         setTemperatura(resposta)
         setMostra(true)
    } catch (error) {
         
    }

   

    useEffect(() => {
      verTemperatura();
    },[]);
}

  return (
    <SafeAreaView style={Styles.contener}>

  {mostra && 
          <View>
               <Modal visible={visivel} animationType='fade' transparent={false} >
                    <View style={Styles.modalS}>
                    <View style={Styles.modalC}>
                         <Text style={[Styles.textoModal,{color:(temperatura)>20?"#f14":"#45f"}]} >
                              A Temperatura do ambiente é: {temperatura}
                          </Text>
                    </View>
                    <View style={Styles.modalC}>
                         <Pressable  style={Styles.modalBtn} onPress={()=>setMostra(false)}>
                              <Text style={Styles.modalBtnT}>Fechar</Text>
                         </Pressable>
                    </View>
                    </View>
               </Modal>
          </View>
         }

      <ScrollView style={[Styles.a]}>
      <View style={[Styles.contener,{marginBottom:50}]}>

          <Text style={[Styles.tituloPric]}>Bem Vindo!</Text> 
          <Text style={[Styles.tituloPric,{color:"#daa520"}]}> {nomeU}</Text> 
      </View>
      <View style={Styles.contener}>
          <Image source={require('../../assets/jogador.png')} style={{width:300,height:300}}/>
      </View>

       <View style={[Styles.caixaBtn,{marginTop:40}]}>

          <TouchableHighlight style={[Styles.btn]} onPress={()=>navigation.navigate('Atletas',{listaF,setListaF,temperatura})} underlayColor={'#daa520'}>
            <Text style={Styles.btnText}>Buscar Jogador</Text>
          </TouchableHighlight>

          <TouchableHighlight style={Styles.btn} onPress={()=>navigation.navigate('AtletasF',{listaF,setListaF,temperatura})} underlayColor={'#daa520'}>
            <Text style={Styles.btnText}>Ver Favoritos</Text>
          </TouchableHighlight>

          <TouchableHighlight style={Styles.btn} onPress={()=>verTemperatura()} underlayColor={'#daa520'}>
            <Text style={Styles.btnText}>ver Temperatura</Text>
          </TouchableHighlight>
          

        </View>
      </ScrollView>
      
    </SafeAreaView>
  );
}