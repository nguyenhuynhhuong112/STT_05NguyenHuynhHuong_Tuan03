import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  button: {
    backgroundColor: "#E53935",
    width:'90%',
    justifyContent:'center',
    height:45
},
  text: {
    textTransform: "uppercase",
    color:'#FFFFFF',
    textAlign:'center',
    fontFamily:'Roboto',
    fontSize:20,
    lineHeight:23.44,
},
  caption:{
    alignItems:'center',
    textAlign:'center',
  },
  textCap:{
    paddingTop:25
  },
  textCaption:{
    paddingTop:25,
    paddingBottom:25,
    color:'#5D25FA'
  },
  iconContainer:{
    paddingTop:10,
    flexDirection:'row',
    color:'white',
  },
  face:{
    backgroundColor:'blue',
    alignItems:'center',
    width:80
  },
  twitter:{
    backgroundColor:'#00CCF9',
    alignItems:'center',
    width:80
  },
  icon:{
    color:'white'
  }
});
