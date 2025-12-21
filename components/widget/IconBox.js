import IconNames from '@/constants/IconNames';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


class IconBox extends Component {
    render() {
        let link = this.props.link;
        return (
            <Link href={link ? link : '/'} style={style.container}>
                <View style={{marginLeft:'auto',width:'100%',height:'100%', marginRight:'auto', alignItems:'center', justifyContent:'center'}}>
                    <View style={{margin:0}}>
                        <View style={style.icon}>
                            <Image contentFit="cover" style={style.icon_symbol} source={this.props.icon ? this.props.icon : IconNames.default} />
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
        width:120,
        maxWidth:120,
        justifyContent:'center'
        
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
        lineHeight:22,
        fontWeight:600,
        color:'#018860ff',
        textAlign:'center',
        margin:0,
    },
})