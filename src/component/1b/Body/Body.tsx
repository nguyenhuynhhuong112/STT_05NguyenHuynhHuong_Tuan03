import {Text, View, TextInput} from 'react-native'
import FontistoIcon from "react-native-vector-icons/Fontisto";
import { style } from './style';
export const Body = () =>{
    return(
        <View style={style.container}>
            <View style={style.textContainer}>
                <Text style={style.text}>Provide your account's email for which you want to reset your password</Text>
            </View>
            <View style={style.input}>
                <FontistoIcon name='email' size={30}/>
                <TextInput placeholder='email' style={style.textInput}/>
            </View>
        </View>
    )
}