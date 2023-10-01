import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
    width: "90%",
    borderWidth: 1,
    height:'15%',
    alignItems: "center",
    flexDirection: "row",
    borderColor:'#F2F2F2',
    justifyContent:'space-between',
  },
  icon: {
  },
  textInput: {
    padding: 10,
    borderBottomColor: "gray",
  },
  spacing:{
    height:10
  },
  radioButton:{
    flexDirection:'row',
    alignItems:'center',
    width: "90%",
  }
});
