import { Link } from 'expo-router';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class RoundBox extends Component {

    render() {
        let containerStyle = style.container;
        if(this.props.style){
            containerStyle = {...containerStyle, ...this.props.style};
        }
        return (
            
            <View style={containerStyle}>
                <Link href={this.props.link ? this.props.link : ''} style={{textDecorationLine:'none'}}>
                    {this.props.title ?<View style={{width:'100%',margin:0, padding:0}}><Text style={style.title}>{this.props.title}</Text></View> : null}
                    <Text style={style.text}>{this.props.children}</Text>
                </Link>
            </View>
        );
    }
}

export default RoundBox;
const style =  StyleSheet.create({
    container:{
        backgroundColor:'#46C7A0',
        padding:10,
        marginHorizontal:10,
        marginVertical:10,
        borderRadius:20,
    },
    title:{
        fontSize:20,
        fontWeight:600,
        color:'#fff',
        marginBottom:0
    },
    text:{
        color:"#fff",
        fontWeight:400,
        color:"#fff",
        fontSize:14,
    }
})