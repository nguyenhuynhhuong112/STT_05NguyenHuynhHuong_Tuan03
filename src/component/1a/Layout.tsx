import {View} from 'react-native'
import { Header } from './Header/Header'
import { style } from './style'
import { Body } from './Body/Body'
import { Footer } from './Footer/Footer'

export const Layout = ()=>{
    return (
        <View style={style.container}>
            
            <View style={style.header}>
                <Header />
            </View>
            <View>
                <Body />
            </View>
            <View style={style.footer}>
                <Footer/>
            </View>
        </View>
    )
}