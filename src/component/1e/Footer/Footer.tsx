import React from "react";
import { View, Text,TouchableOpacity } from "react-native";
import { styles } from "./style";

export const Footer = ()=>{
    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <TouchableOpacity>
                    <Text style={styles.text}>register</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text>When you agree to terms and conditions</Text>
            </View>
        </View>
    )
}