import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import styles from './style';
const Input = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.square} />
      <TextInput style={styles.square} />
      <TextInput style={styles.square} />
      <TextInput style={styles.square} />
      <TextInput style={styles.square} />
    </View>
  );
};


export default Input;
