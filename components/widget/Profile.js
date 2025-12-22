import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
export default function Profile(props) {
    return(
        <View style={style.container}>
            <View style={style.profile_image_circle}>
               <Image 
                    source={props.image}
                    style={style.profile_image}
               />
            </View>
            <View>
                <Text style={style.title}>{props.title}</Text>
                <Text style={style.subtitle}>{props.subtitle}</Text>
                {props.contact ? <Text style={style.subtitle}>{props.contact}</Text> : null}
                <View style={style.children_container}>
                    {props.children}
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        alignItems:'center',
        flexDirection:'row',
        flex:1,
        gap:10,
        marginBottom:10
    },
    profile_image_circle:{

    },
    profile_image:{
        width:100,
        height:100,
        borderRadius:50,
        margin:0,
        obbjectFit:'cover'
    },
    icon:{
        size:20,
        color:'#04996cff',
        marginBottom:0
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        color:'#000'
    }, 
    children_container:{
        fontSize:16,
        margin:0,
        color:'#000'
    },
    subtitle:{
        fontSize:14,
        color:'#000',
        marginBottom:0
    }
})