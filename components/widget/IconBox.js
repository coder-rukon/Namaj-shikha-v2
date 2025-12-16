import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


class IconBox extends Component {
    render() {
        let link = this.props.link;
        return (
            <Link href={link ? link : '/abds'} style={style.container}>
                <View style={style.container}>
                    <View>
                        <View style={style.icon}>
                            <Image contentFit="cover" style={style.icon_symbol} source={require('@/assets/images/hometopbg.png')} />
                        </View>
                    </View>
                    
                    <Text style={style.title}>{this.props.title}</Text>
                </View>
            </Link>
        );
    }
}

export default IconBox;
const style =  StyleSheet.create({
    container:{
        width:110,
        maxWidth:110,
        justifyContent:'center',
        
    },

    icon:{
        backgroundColor:'#DFFAF3',
        borderRadius:20,
        padding:5,
        width:90,
        height:90,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:'auto',
        marginRight:'auto',
        
    },
    icon_symbol:{
        width:50,
        height:50
    },
    title:{
        fontSize:15,
        fontWeight:600,
        color:'#46C7A0',
        marginBottom:10,
        textAlign:'center'
    },
})