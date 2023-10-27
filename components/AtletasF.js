import {react, useState } from 'react';
import {SafeAreaView, View,Text,TextInput,TouchableHighlight,FlatList,ScrollView,Image,ImageBackground} from 'react-native';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import Styles from '../css/styles';

export default function AtletasF({route}) {
     const navigation=useNavigation()
     const {listaF,setListaF}=route.params;

     function desfavoritarJ(index){
          console.log(listaF)
          const lstaAux=[...listaF]
          lstaAux.splice(index,1)
          setListaF(lstaAux)  
     }

   

             
  return (
    <SafeAreaView style={Styles.contener}>
     <ScrollView>
          <View>
          <Text style={Styles.tituloPric}>  Jodores Favortos </Text>
          </View>

          <View style={{marginTop:40,marginEnd:10}}>
               <TouchableHighlight style={[Styles.contener,Styles.btn]} onPress={()=>navigation.goBack()}
               underlayColor={'#f12'}>
                    <Text style={Styles.btnText}>Voltar</Text>
               </TouchableHighlight>
          </View>

          <View>
               {listaF.length<1
               ?

               <ImageBackground style={Styles.imagemBackgroud} source={require('../assets/jogadorf.png')}>
                    
               </ImageBackground>
                   
               :
                    <View style={Styles.contener2}>
                    <ScrollView>
                         {listaF.map((el,index)=>(
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
                                        <TouchableHighlight style={Styles.btn2} onPress={()=>desfavoritarJ(index)} >
                                        <Text style={{color:'#000',textAlign:'center'}}>Desfavor</Text>
                                        </TouchableHighlight>

                                   </View>
                              </View>
                         ))}
                         </ScrollView> 
                    </View>
               }
          </View>
          {/* <View style={{marginTop:40,marginEnd:10}}>
               <TouchableHighlight style={Styles.btn} onPress={()=>navigation.goBack()}
               underlayColor={'#f12'}>
                    <Text style={Styles.btnText}>Voltar</Text>
               </TouchableHighlight>
          </View> */}
     </ScrollView>

    </SafeAreaView>
  );
}
