import { View} from 'react-native'
import { Header } from './Header/Header'
import { Body } from './Body/Body'
import { Button } from './Footer/Button'
import { styles } from './style'

export const Layout = ()=>{
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header />
            </View>
            <View style={styles.body}>
                <Body />
            </View>
            <View style={styles.footer}>
                <Button />
            </View>
        </View>
    )
}