import {StyleSheet} from 'react-native'

export const style = StyleSheet.create({
    container:{
        flex:0.5,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignContent:'center'
    },
    icon:{
        flex:0.5
    },
    viewText:{
        flex:1,
        alignItems: "center",
    },
    text:{
        flex:1,
        textTransform:'uppercase',
        wordBreak:'break-all',
        textAlign: 'center',
        fontSize:20,
        fontWeight:'700',
    },
    
})