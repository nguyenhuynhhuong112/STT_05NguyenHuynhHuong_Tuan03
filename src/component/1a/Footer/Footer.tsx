import {View, TouchableOpacity, Text} from 'react-native'
import { style } from './style'

export const Footer = ()=>{
    return (
        <View style={style.container}>
            <View style={style.button}>
                <TouchableOpacity style={style.loginSignup}>
                    <Text style={style.text}>login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.loginSignup}>
                    <Text style={style.text}>sign up</Text>
                </TouchableOpacity>
            </View>
            <View style={style.title}>
                <Text style={style.text}>how he work?</Text>
            </View>
        </View>
    )
}