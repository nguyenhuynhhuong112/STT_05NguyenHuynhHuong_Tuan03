import { Text, TextInput, View } from "react-native";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import { styles } from "./style";
export const Input = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.inputContainer}>
        <TextInput placeholder="Email" style={styles.textInput} />
      </View>
      <View style={styles.spacing} />
      <View style={styles.inputContainer}>
        <TextInput placeholder="Password" style={styles.textInput} />
        <Entypo name="eye" size={30} />
      </View>
    </View>
  );
};
