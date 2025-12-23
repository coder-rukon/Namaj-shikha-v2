import IconNames from '@/constants/IconNames';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


class IconBox extends Component {
    render() {
        let link = this.props.link;
        let boxStyle = style.box;
        let isTopImage = this.props.imageTop ? true : false;
        if(isTopImage){
            boxStyle = {
                ...boxStyle,
                flexDirection:'column',
                alignItems:'center',
                padding:10,
                textAlign:'center',
            }
        }
        if(this.props.boxStyle){
            boxStyle = {
                ...boxStyle,
                ...this.props.boxStyle
            }
        }
        let detailsStyle = style.details;
        let imageStyle = style.image;
        if(isTopImage){
            detailsStyle = {
                ...detailsStyle,
                width:'100%',
                alignItems:'center',
                textAlign:'center',
            }
            imageStyle = {
                ...imageStyle,
                width:70,
                height:70,
                maxWidth:70,
                marginBottom:2,
            }
        }
        return (
            <Link href={link ? link : '/'} style={style.container}>
                
                <View style={ boxStyle }>
                    <View style={{margin:0,width:isTopImage ? '100%' : 30, alignItems:'center'}}>
                        <Image contentFit="cover" style={imageStyle} source={this.props.image ? this.props.image : IconNames.default} />
                    </View>
                    <View style={detailsStyle}>
                        <Text style={style.title}>{this.props.title}</Text>
                        <Text style={style.subtitle}>{this.props.subtitle}</Text>
                    </View>
                    
                </View>
            </Link>
        );
    }
}

export default IconBox;
const style =  StyleSheet.create({
    container:{
        marginBottom:0,
        textDecoration:'none',
        width:'100%'
    },
    box:{
        padding:5,
        backgroundColor:'#86f288c9',
        borderRadius:20,
        borderWidth:2,
        borderColor:'#0000008d',
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        width:'100%',
    },
    image:{
        width:30,
        height:30,
        maxWidth:30,
    },
    details:{
        width:'75%',
        flexDirection:'column',
        gap:0
    },
    title:{
        fontSize:18,
        lineHeight:28,
        fontWeight:600,
        color:'#000000ff',
        margin:0,
    },
    subtitle:{
        fontSize:14,
        lineHeight:18,
        color:'#000000ff',
        margin:0,
        whiteSpace:'breakword'
    },
})