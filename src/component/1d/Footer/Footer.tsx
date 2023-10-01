import React from "react";
import { View, Text,TouchableOpacity } from "react-native";
import { styles } from "./style";
import EvilIcons from 'react-native-vector-icons/EvilIcons'
export const Footer = ()=>{
    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <TouchableOpacity>
                    <Text style={styles.text}>login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.caption}>
                <Text style={styles.textCap}>When you agree to terms and conditions</Text>
                <Text style={styles.textCaption}>For got your password</Text>
                <Text>Or login with</Text>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.face}>
                    <EvilIcons name="sc-facebook" size={30} style={styles.icon}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.twitter}>
                    <EvilIcons name="sc-twitter" size={30} style={styles.icon}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}