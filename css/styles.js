import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  contener:{
    flex:1,
    justifyContent:'center',
    alignItems:"center",
    justifyContent:"center",
    padding:10,
},
  contener2:{
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    padding:10,
},
tituloPric:{
    fontSize:45,
    fontWeight:'600',
    textAlign:'center',
},
btn:{
  textAlign:"center",
  padding:10,
  width:125,
  height:45,
  margin:"auto",
  borderStyle:'solid',
  borderColor:'#000',
  borderWidth:1,
  borderRadius:10,
  backgroundColor:'#77DEE7'
},
btn2:{
  textAlign:"center",
  padding:10,
  width:90,
  height:42,
  margin:'auto',
  borderStyle:'solid',
  borderWidth:1,
  borderColor:'#000',
  borderRadius:10,
  backgroundColor:'#fff',
  color:"#000",
},
btnText:{
    color:"#000",
    textAlign:'center',
    padding:2

},
input:{
  borderWidth:1,
  borderStyle:'solid',
  borderColor:"#000",
  borderRadius:10,
  marginTop:40,
  marginBottom:30,
  padding:10,
},

caixaBtn:{
  flex:1,
  width:'100%',
  justifyContent:'space-between',
  alignItems:'center',
  justifyContent:'center',
  flexDirection:'row',
  marginTop:10,
  margin:'auto',
  marginEnd:10,
},
caxaTexto:{
  width:300,
  height:40,
  padding:10,
  margin:'auto',
  marginBottom:20,
  marginTop:50,
  backgroundColor:'#ccc',
  color:"#fff",
  borderRadius:10,
  textAlign:'center',
  zIndex:1,
},
caxaTexto2:{
  width:'90%',
  height:33,
  margin:'auto',
  marginBottom:20,
  marginTop:80,
  padding:8,
  backgroundColor:'#55f21',
  color:"#fff",
  borderRadius:10,
  textAlign:'center',
  zIndex:1,
},
caixaJogador:{
  width:320,
  height:480,
  borderStyle:'solid',
  borderWidth:2,
  borderColor:'#5f6593',
  marginTop:10,
  marginEnd:10,
  borderRadius:10,
  padding:10,
  margin:'auto'
},

caixaNome:{
  width:'100%',
  margin:'auto',
  marginTop:5,
  marginEnd:5,
  padding:12,
  backgroundColor:'#5f6593',
  borderRadius:1,
  fontWeight:"bold",
  color:'#fff',
  textAlign:'center',
  fontSize:20
},

caixaDadosJ:{
  marginTop:10,
  marginEnd:10,
  padding:5,
  fontWeight:'500'
},
caixaimagem:{
  width:'99%',
  height:180,
  margin:'auto',
  borderStyle:'solid',
  borderWidth:2,
  borderColor:'#5f6593',
},
image:{
  width:'100%',
  height:'98%',
  objectFit:'cover',
},
imagemBackgroud:{
  width:'100%',
  height:290,
  margin:'auto',
  marginTop:10,
  marginEnd:10,
  padding:10,
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  alignContent:'center',
  flexDirection:'column',
  objectFit:'contain'
}

});

