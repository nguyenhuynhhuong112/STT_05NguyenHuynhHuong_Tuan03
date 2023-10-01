import { Text, TextInput, View } from "react-native";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import { styles } from "./style";
import { RadioButton } from "react-native-paper";
export const Input = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Name" style={styles.textInput} />
      </View>
      <View style={styles.spacing} />
      <View style={styles.inputContainer}>
        <TextInput placeholder="Phone" style={styles.textInput} />
      </View>
      <View style={styles.spacing} />
      <View style={styles.inputContainer}>
        <TextInput placeholder="Email" style={styles.textInput} />
      </View>
      <View style={styles.spacing} />
      <View style={styles.inputContainer}>
        <TextInput placeholder="Password" style={styles.textInput} />
        <Entypo name="eye" size={30} style={styles.icon} />
      </View>
      <View style={styles.spacing} />
      <View style={styles.inputContainer}>
        <TextInput placeholder="Birthday" style={styles.textInput} />
      </View>
      <View style={styles.spacing} />
      <View style={styles.radioButton}>
        <RadioButton value="male" />
        <Text>Male</Text>
        <RadioButton value="female" />
        <Text>Female</Text>
      </View>
    </View>
  );
};
