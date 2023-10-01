import { Text, View, TouchableOpacity } from "react-native";
import Footer from "./Footer/Footer";
import Title from "./Title/Title";
import styles from './style'
const Verify = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Title />
      </View>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </View>
  );
};

export default Verify;
