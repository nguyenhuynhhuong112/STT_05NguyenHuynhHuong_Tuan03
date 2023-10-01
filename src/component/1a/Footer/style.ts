import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    padding:9,
    flexDirection:'column'
},
  button: {
    flexDirection:'row',
    justifyContent:'space-between',
  },
  loginSignup:{
    backgroundColor:'#E3C000',
    height:45,
    justifyContent:'center',
    alignItems:'center',
    width:100
  },
  text:{
    color:'#000000',
    fontSize:20,
    textTransform:'uppercase',
    fontWeight:'700'
  },
  title:{
    flex:0.5,
    justifyContent:'center',
    alignItems:'center'
  }
});
