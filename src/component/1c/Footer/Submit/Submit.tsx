import { Text, View, TouchableOpacity } from "react-native";
import style from "./style";
const Submit = () => {
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.button}>
        <View style={style.buttonText}>
         <h2 >verify code</h2>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Submit;
