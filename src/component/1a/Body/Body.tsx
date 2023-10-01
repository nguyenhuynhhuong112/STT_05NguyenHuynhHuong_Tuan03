import {View, Text} from 'react-native'
import { style } from './style'

export const Body = ()=>{
    return(
        <View style={style.conatiner}>
            <View>
                <Text style={style.text}>grow{'\n'}your business</Text>
            </View>
            <View  style={style.view}></View>
            <View>
                <Text style={style.text2}>We will help you to grow your business using online server</Text>
            </View>
        </View>
    )
}