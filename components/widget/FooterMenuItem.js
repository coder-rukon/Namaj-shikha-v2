import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { router } from "expo-router";
import { Pressable, StyleSheet, Text } from 'react-native';
export default function FooterMenuItem(props) {
    return(
        <Pressable
            onPress={() => router.push(props.link)}
            style={style.container}
        >
            <MaterialCommunityIcons style={style.icon} name={props.icon} size={20} />
            <Text style={style.text}>{props.title}</Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    container:{
        alignItems:'center',
        paddingHorizontal:10,
        paddingVertical:10
    },
    icon:{
        size:20,
        color:'#04996cff',
        marginBottom:0
    },
    text:{
        fontSize:12,
        color:'#04996cff',
        marginBottom:0
    }
})