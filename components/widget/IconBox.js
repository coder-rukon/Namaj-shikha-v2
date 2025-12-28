import IconNames from '@/constants/IconNames';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class IconBox extends Component {
    render() {
        let link = this.props.link;
        let size = this.props.size ? this.props.size : 'default';
        let conatainerStyle = style.container;
        let iconStyle = style.icon;
        let icon_symbolStyle = style.icon_symbol;
        let titleStyle = style.title;

        if(size=='sm'){
            conatainerStyle = {
                ...conatainerStyle,
                width:90,
                maxWidth:90,
            }
            iconStyle = {
                ...iconStyle,
                width:80,
                height:80,
                borderRadius:15,
                padding:3,
            }
            icon_symbolStyle = {
                ...icon_symbolStyle,
                width:55,
                height:55,
            }
           
            
        }
        return (
            <Link href={link ? link : '/'} style={conatainerStyle}>
                <View style={{marginLeft:'auto',width:'100%',height:'100%', marginRight:'auto', alignItems:'center', justifyContent:'center'}}>
                    <View style={{margin:0}}>
                        <View style={iconStyle}>
                            {
                                this.props.iconName ? <MaterialCommunityIcons name={this.props.iconName} size={50} color="#009e7b" /> : null
                            }
                            {
                                this.props.icon ? <Image contentFit="cover" style={icon_symbolStyle} source={this.props.icon ? this.props.icon : IconNames.default} /> : null
                            }
                            
                        </View>
                    </View>
                    <Text style={titleStyle}>{this.props.title}</Text>
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
        lineHeight:22,
        fontWeight:600,
        color:'#018860ff',
        textAlign:'center',
        margin:0,
    },
})