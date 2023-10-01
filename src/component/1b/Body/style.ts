import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "rgba(0.949, 0.949, 0.949, 0.1)",
    width: "90%",
    borderWidth: 1,
    height: "25%",
    alignItems: "center",
    flexDirection: "row",
    borderColor: "#F2F2F2",
  },
  textInput:{
    flex: 1,
    borderWidth: 0,
    paddingLeft: 10,
    width: "100%",
    height: "100%",
  },
  textContainer:{
    flex:0.5,
    width: "90%",  
    alignItems: "center",
  },
  text:{
    flex: 1,
    paddingLeft:10,
    fontSize:17,
    fontWeight:'800',
    textAlign: 'center'
  }
});
