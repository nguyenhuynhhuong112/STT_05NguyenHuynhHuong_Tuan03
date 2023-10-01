import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { style } from "./style";

export const Button = ()=>{
    return (
        <View style={style.container}>
            <View style={style.button}>
                <TouchableOpacity>
                    <Text style={style.text}>next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}