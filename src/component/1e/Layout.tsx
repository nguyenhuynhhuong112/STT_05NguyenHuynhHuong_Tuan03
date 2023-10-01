import React from "react";
import { View } from "react-native";
import { Register } from "./Header/Register";
import { Input } from "./Body/Input";
import { Footer } from "./Footer/Footer";
import { styles } from "./style";

export const Layout = () =>{
    return (
        <View style={styles.conatiner}>
            <View style={styles.text}>
                <Register />
            </View>
            <View style={styles.body}>
                <Input />
            </View>
            <View style={styles.footer}>
                <Footer />
            </View>
        </View>
    )
}