import {react, useEffect, useState} from 'react';
import {SafeAreaView, View,Text,TextInput,TouchableHighlight,FlatList,ScrollView,Image,ImageBackground, Modal,Pressable} from 'react-native';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Styles from '../css/styles';


export default function Atletas({route}) {
     const [nomeJ,setNomeJ]=useState("")
     const [dados,setDados]=useState([])
     const navigation=useNavigation()
     const [temperatura,setTemperatura]=useState(0);
     const [mostra, setMostra]=useState(false);
     const [visivel,setVisivel]=useState(true)
     const {listaF,setListaF}=route.params;


     async function verTemperatura(){
          const UrlBase=`https://api.thingspeak.com/update?api_key=CLDBTEONMSR8ZTGJ&field1=0
          `
          try {
               let res= await fetch(UrlBase)
               let resposta= await res.json()
               setTemperatura(resposta)
          } catch (error) {
               
          }
     }



     async function buscaJ(nome) {
          const keyAp='c6ab3eba3949608ed254505b6b2913be1ac958077f4d539fa20c18c5fc14f236'
          const UrlBase=`https://apiv3.apifootball.com/?action=get_players&player_name=${nome}&APIkey=${keyAp}`
          try{
               let res= await fetch(UrlBase)
               let resposta= await res.json()
               setDados(resposta)
               verTemperatura()
               setMostra(true)
          }catch{
               console.log('erro')
          }
          
     }

     function mostrarPesquisa(){
          if(nomeJ.length<0 || nomeJ==null || nomeJ==""){
               alert("Digite o Nome do Jogador!")
          }else{
               let nome=nomeJ
               buscaJ(nome)
          }
          
     }

     function favoritarJ(index){
          setListaF((listaA)=>[...listaA,dados[index]]);
     }
   
     useEffect(()=>{
          setDados([])
     },[nomeJ])

             
  return (
    <SafeAreaView style={Styles.contener}>
     <ScrollView>
         {mostra && 
          <View>
               <Modal visible={visivel} animationType='fade' transparent={false} >
                    <View style={Styles.modalS}>
                    <View style={Styles.modalC}>
                         <Text style={[Styles.textoModal,{color:(temperatura)>20?"#f14":"#45f"}]} >
                              A Temperatura do ambiente é {temperatura}
                              </Text>
                    </View>
                    <View style={Styles.modalC}>
                         <Pressable  style={Styles.modalBtn} onPress={()=>setVisivel(!visivel)}>
                              <Text style={Styles.modalBtnT}>Fechar</Text>
                         </Pressable>
                    </View>
                    </View>
               </Modal>
          </View>
         }
          <View>
               
          <Text style={Styles.tituloPric}>  Buscar Jogador  </Text>
          </View>

          <View style={Styles.contener}>

          <TextInput style={Styles.input} placeholder='Digite o nome do jogador' 
          onChangeText={(text)=>setNomeJ(text)} value={nomeJ}></TextInput>

          <View style={Styles.caixaBtn}>

          <TouchableHighlight style={Styles.btn}  onPress={()=>mostrarPesquisa()} underlayColor={'#daa520'} >
          <Text style={Styles.btnText}>Buscar Jogador</Text>
          </TouchableHighlight>

          <TouchableHighlight style={Styles.btn} onPress={()=>navigation.goBack()} underlayColor={'#f12'}>
          <Text style={Styles.btnText}>Voltar</Text>
          </TouchableHighlight>

          </View>

          </View>

          <View>
               {dados.length>=1
               ?
                    <View style={Styles.contener2}>
                         <ScrollView>
                              {dados.map((el,index)=>(
                                   <View key={index} style={Styles.caixaJogador}>
                                        <View style={Styles.caixaimagem}>
                                             <Image style={Styles.image} source={{uri:`${el.player_image}`} } />
                                        </View>
                                        <View>
                                             <Text style={Styles.caixaNome}>{el.player_name}</Text>
                                             <Text style={Styles.caixaDadosJ}>Time: {(el.team_name)==''?'Time não definido':el.team_name}</Text>
                                             <Text style={Styles.caixaDadosJ}>Posição:{(el.player_type)=="Forwards"?"Atacante":(el.player_type)=="Midfielder"?"Meio-Campo":(el.player_type)=="Goalkeeper"?'Goleiro':'Zagueiro'}</Text>
                                             <Text style={Styles.caixaDadosJ}>Numero camisa:{(el.player_number)==''?'numero não definido':el.player_number}</Text>
                                             <Text style={Styles.caixaDadosJ}>Time: {(el.team_name)==''?'Time não definido':el.team_name}</Text>
                                        </View>
                                        <View style={Styles.caixaBtn}>

                                             <TouchableHighlight style={[Styles.btn2,{backgroundColor:"#f12"}] }  onPress={()=>navigation.goBack()} underlayColor={'#fff'} >
                                             <Text style={{color:'#000', textAlign:'center'}}>Sair</Text>
                                             </TouchableHighlight>

                                             <TouchableHighlight style={[Styles.btn2,{backgroundColor:'#daa520'}]} onPress={()=>favoritarJ(index)} underlayColor={'#fff'}>
                                             <Text style={{color:'#000',textAlign:'center'}}>Favoritar</Text>
                                             </TouchableHighlight>

                                        </View>
                                   </View>
                                   
                              ))}
                              <View style={[Styles.contener,{marginTop:10,marginEnd:10}]}>
                                   <TouchableHighlight style={[Styles.btn,{backgroundColor:"#fff",borderColor:"#f12"}]} onPress={()=>navigation.goBack()}
                                        underlayColor={'#f12'}>
                                             <Text style={[Styles.btnText,{color:'#f12'}]}>Voltar</Text>
                                   </TouchableHighlight>
                              </View>  
                         </ScrollView>
                    </View>  
                    :
               
                    <View style={[Styles.contener,{marginTop:40,marginEnd:10,margin:'auto',width:'100%'}]}>
                         <View style={Styles.caixaTemp}> 
                              <Text style={{textAlign:'center',padding:5,color:"#fff"}}>A temperatura {temperatura}</Text>
                         </View>
                         <ImageBackground style={Styles.imagemBackgroud} source={require('../../assets/jogador2.png')}>
                              
                         </ImageBackground>  
                    </View>
               }   
               
          </View>
          
     
     </ScrollView>

    </SafeAreaView>
  );
}
