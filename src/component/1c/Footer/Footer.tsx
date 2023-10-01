import { Text, View } from "react-native"
import styles from "./style"
import Input from "./Input/Input"
import Submit from "./Submit/Submit"

const Footer = () =>{
    return (
        <View style={styles.footer}>
            <View>
                <Text style={styles.text}>Enter online password sent on</Text>
                <Text style={styles.text}>++849092650798</Text>
            </View>
            <View>
                <Input />
            </View>
            <View>
                <Submit />
            </View>
        </View>
    )
}

export default Footer