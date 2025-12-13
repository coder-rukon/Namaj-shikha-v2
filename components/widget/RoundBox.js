import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class RoundBox extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text style={style.title}>{this.props.title}</Text>
                <Text style={style.text}>{this.props.children}</Text>
            </View>
        );
    }
}

export default RoundBox;
const style =  StyleSheet.create({
    container:{
        backgroundColor:'#46C7A0',
        padding:20,
        marginHorizontal:10,
        marginVertical:10,
        borderRadius:20,
    },
    title:{
        fontSize:20,
        fontWeight:600,
        color:'#fff',
        marginBottom:10
    },
    text:{
        color:"#fff",
        fontWeight:400,
        color:"#fff"
    }
})