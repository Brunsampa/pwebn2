import {react } from 'react';
import {SafeAreaView, View,Text,TouchableHighlight,ScrollView,Image,ImageBackground} from 'react-native';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import Styles from '../css/styles';

export default function AtletasF({route}) {
     const navigation=useNavigation()
     const {listaF,setListaF,temperatura}=route.params;

     function desfavoritarJ(index){
          const lstaAux=[...listaF]
          lstaAux.splice(index,1)
          setListaF(lstaAux)  
     }

  return (
    <SafeAreaView style={Styles.contener}>
     <ScrollView>
          <View>
          <Text style={[Styles.tituloPric,{color:"#daa520"}]}>  Jodores Favoritos </Text>
          </View>

          <View style={[Styles.contener,{marginTop:40,marginEnd:10,margin:'auto'}]}>
               <TouchableHighlight style={[Styles.contener,Styles.btn]} onPress={()=>navigation.goBack()}
               underlayColor={'#f12'}>
                    <Text style={Styles.btnText}>Voltar</Text>
               </TouchableHighlight>
          </View>

          <View style={Styles.caxaF}>
               <Text style={{color:'#fff',fontSize:20,textAlign:"center"}}>Favoritos({`${listaF.length}`})</Text>
          </View>

          <View>
               {listaF.length>=1
               ?

                    <View style={Styles.contener2}>
                    <ScrollView>
                         {listaF.map((el,index)=>(
                              <View key={index} style={[Styles.caixaJogador,{borderColor:"#daa520"}]}>

                                   <View style={Styles.caixaimagem}>
                                        <Image style={Styles.image} source={{uri:`${el.player_image}`} } />
                                   </View>

                                   <View>
                                        <Text style={[Styles.caixaNome,{backgroundColor:"#daa520"}]}>{el.player_name}</Text>
                                        <Text style={Styles.caixaDadosJ}>Time: {(el.team_name)==''?'Time não definido':el.team_name}</Text>
                                        <Text style={Styles.caixaDadosJ}>Posição:{(el.player_type)=="Forwards"?"Atacante":(el.player_type)=="Midfielder"?"Meio-Campo":(el.player_type)=="Goalkeeper"?'Goleiro':'Zagueiro'}</Text>
                                        <Text style={Styles.caixaDadosJ}>Numero camisa:{(el.player_number)==''?'numero não definido':el.player_number}</Text>
                                        <Text style={Styles.caixaDadosJ}>Time: {(el.team_name)==''?'Time não definido':el.team_name}</Text>
                                   </View>
                                   <View style={Styles.caixaBtn}>
                                        <TouchableHighlight style={[Styles.btn2,{borderColor:'#f12',width:120}]} onPress={()=>desfavoritarJ(index)} underlayColor={'#f12'} >
                                        <Text style={{color:'#f12',textAlign:'center'}}>Desfavoritar</Text>
                                        </TouchableHighlight>

                                   </View>
                              </View>
                         ))}
                         <View style={[Styles.contener,{marginTop:40,marginEnd:10,margin:'auto'}]}>
                              <TouchableHighlight style={[Styles.btn,{backgroundColor:'#fff',borderColor:"#f13",width:210}]} onPress={()=>navigation.goBack()}
                              underlayColor={'#f12'}>
                                   <Text style={[Styles.btnText,{color:'#f13'}]}> Voltar</Text>
                              </TouchableHighlight>
                         </View>
                         </ScrollView> 
                         
                    </View>
               :
               <View style={[Styles.contener,{marginTop:40,marginEnd:10,margin:'auto',width:'100%'}]}>
                    <View style={Styles.caixaTemp}> 
                              <Text style={{textAlign:'center',padding:5,color:"#fff"}}>A temperatura no estadio é {temperatura}</Text>
                    </View>
                    <ImageBackground style={Styles.imagemBackgroud} source={require('../../assets/jogadorf.png')}>
                         
                    </ImageBackground>
               </View>
               }
               
          </View>
     </ScrollView>

    </SafeAreaView>
  );
}
