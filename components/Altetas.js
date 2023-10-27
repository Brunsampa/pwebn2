import {react, useEffect, useState} from 'react';
import {SafeAreaView, View,Text,TextInput,TouchableHighlight,FlatList,ScrollView,Image,ImageBackground} from 'react-native';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Styles from '../css/styles';


export default function Atletas({route}) {
     const [nomeJ,setNomeJ]=useState("")
     const [dados,setDados]=useState([])
     const navigation=useNavigation()
     const {listaF,setListaF}=route.params;

     async function buscaJ(nome) {
          const keyAp='c6ab3eba3949608ed254505b6b2913be1ac958077f4d539fa20c18c5fc14f236'
          const UrlBase=`https://apiv3.apifootball.com/?action=get_players&player_name=${nome}&APIkey=${keyAp}`
          try{
               let res= await fetch(UrlBase)
               let resposta= await res.json()
               setDados(resposta)
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
          <View>
          <Text style={Styles.tituloPric}>  Buscar Jogador </Text>
          </View>

          <View>

          <TextInput style={Styles.input} placeholder='Digite o nome do jogador' 
          onChangeText={(text)=>setNomeJ(text)} value={nomeJ}></TextInput>

          <View style={Styles.caixaBtn}>

          <TouchableHighlight style={Styles.btn}  onPress={()=>mostrarPesquisa()} underlayColor={'#549'} >
          <Text style={Styles.btnText}>Buscar Jogador</Text>
          </TouchableHighlight>

          <TouchableHighlight style={Styles.btn} onPress={()=>navigation.goBack()} underlayColor={'#f13'}>
          <Text style={Styles.btnText}>Voltar</Text>
          </TouchableHighlight>

          </View>

          </View>

          <View>
               {dados.length<1

               ?
                    <ImageBackground style={Styles.imagemBackgroud} source={require('../assets/jogadorf.png')}>
                         
                    </ImageBackground>
               :
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

                                             <TouchableHighlight style={Styles.btn2 }  onPress={()=>alert("Buscar Jogador")} underlayColor={'#f12'} >
                                             <Text style={{color:'#000', textAlign:'center'}}>Sair</Text>
                                             </TouchableHighlight>

                                             <TouchableHighlight style={Styles.btn2} onPress={()=>favoritarJ(index)} underlayColor={'#ccc'}>
                                             <Text style={{color:'#000',textAlign:'center'}}>Favoritar</Text>
                                             </TouchableHighlight>

                                        </View>
                                   </View>
                              ))}
                         </ScrollView>
                    </View>    
               }      
          </View>
          {/* <View style={[Styles.contener,{marginTop:10,marginEnd:10,opacity:0.1}]}>
               <TouchableHighlight style={Styles.btn} onPress={()=>navigation.goBack()}
               underlayColor={'#f12'}>
                    <Text style={Styles.btnText}>Voltar</Text>
               </TouchableHighlight>
          </View> */}
     
     </ScrollView>

    </SafeAreaView>
  );
}
