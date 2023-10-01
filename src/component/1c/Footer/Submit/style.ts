import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow", 

  },
  button: {
    borderRadius: 5,
  },
  buttonText: {
    color: "black",
    textTransform:'uppercase',
    textAlign: "center",
    paddingHorizontal:80
  },
});
export default style;
