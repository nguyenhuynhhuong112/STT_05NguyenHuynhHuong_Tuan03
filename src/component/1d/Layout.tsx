import React from "react";
import { View } from "react-native";
import { Footer } from "./Footer/Footer";
import { styles } from "./style";
import { Login } from "./Header/Login";
import { Input } from "./Body/Input";

export const Layout = () =>{
    return (
        <View style={styles.conatiner}>
            <View style={styles.text}>
                <Login />
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