import {View, Text} from 'react-native'
import FontistoIcon from "react-native-vector-icons/Fontisto";
import { style } from './style';
export const Header = ()=>{
    return (
        <View style={style.container}>
            <View >
                <FontistoIcon name='locked' size={100} />
            </View>
            <View style={style.viewText}>
                <Text style={style.text}>forget {'\n'}passowrd</Text>
            </View>
        </View>
    )
}