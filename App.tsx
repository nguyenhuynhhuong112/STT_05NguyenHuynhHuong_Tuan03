import React from 'react';
import { View } from 'react-native';
import {styles} from './style';
import { Header } from './src/component/1a/Header/Header';
import { Layout } from './src/component/1a/Layout';
export default function App() {
  return (
    <View style={styles.container}>
      <Layout/>
    </View>
  );
}
