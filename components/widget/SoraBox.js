import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SoraBox extends Component {
    render() {
        let contentStyle = style.content;
        if(this.props.contentStyle){
            contentStyle = {...contentStyle, ...this.props.contentStyle}
        }
        return (
            <View style={style.contaner}>
                {this.props.topTitle ? <View style={style.topLabelwraper}><Text style={style.topLabel}>{this.props.topTitle}</Text></View> : null}
                <View style={style.card}>
                    {this.props.title ? <Text style={{...style.title, direction: this.props.titleDirection ? this.props.titleDirection : 'ltr'}}>{this.props.title}</Text> : null }
                    <Text style={contentStyle}>{this.props.children}</Text>
                </View>
            </View>
        );
    }
}

export default SoraBox;
const style = StyleSheet.create({
    contaner:{
        marginTop:20
    },
    topLabelwraper:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    topLabel:{
        backgroundColor:'#eaeaeaff',
        padding:5,
        borderRadius:4,
        marginBottom:-5,
        fontSize:20,
    },
    card:{
        padding:10,
        fontSize:15,
        boxShadow:'10 0 10px rgba(255,255,255,1)',
        borderRadius:4,
        backgroundColor:'#eaeaeaff'
    },
    title:{
        fontSize:18,
        fontWeight:500,
        marginBottom:5
    },
    content:{
        fontSize:16,
        padding:10,
        paddingBottom:20,
        borderRadius:4,
        backgroundColor:'#e2e2e2ff',
        flex:1,
        flexDirection:'row',
        justifyContent: 'flex-start',
        gap:4,
        flexWrap:'wrap'
    }
})