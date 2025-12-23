import { Ionicons } from '@expo/vector-icons';
import * as Sharing from 'expo-sharing';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { captureRef } from 'react-native-view-shot';

class BorderBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            takingSs:false
        }
        this.containerView = React.createRef()
        this.takingScreenshoot = false;
    }
    async onShare(){
        this.setState({
            takingSs:true
        },async function() {
            try {
                const uri = await captureRef(this.containerView, {
                    format: 'png',
                    quality: 1,
                });
                // Check if sharing is available
                if (!(await Sharing.isAvailableAsync())) {
                    alert('Sharing is not available on this device');
                    return;
                }

                await Sharing.shareAsync(uri, {
                    mimeType: 'image/png',
                    dialogTitle: 'শেয়ার করুন',
                });

            } catch (e) {

                console.log(e);
            }
            this.setState({
                takingSs:false
            })
        })
    }
    getFooter(){
        if(this.props.hideFooter) return null;
        if(this.state.takingSs){
            return(
                <View style={style.footer} collapsable={false}>
                    <View style={style.shareSection}>
                        <Text style={style.shareText}>Bangla Quran Shikkha থেকে নেওয়া হয়েছে</Text>
                    </View>
                </View>
            )
        }
        return(
            <View style={style.footer} collapsable={true}>
                <View style={style.copyIconCircle}>
                    <Ionicons name='copy-outline' size={20} color={'#fff'} />
                </View>
                <View style={style.shareSection}>
                    <Text style={style.shareText} onPress={this.onShare.bind(this)}><Ionicons name='share' size={20} color={'#fff'} /> শেয়ার করুন</Text>
                </View>
            </View>
        )
    }
    render() {
        
        let titleWraperStyle = style.titleWraper;
        if(this.props.titleRight){
            titleWraperStyle ={
                ...style.titleWraper,
                paddingTop:3,
                paddingBottom:3,
                paddingRight:3
            }
        }
        
        return (
            <View style={style.container} ref={this.containerView} collapsable={false}>
                <View style={titleWraperStyle} collapsable={false}>
                    {this.props.title ? <Text style={style.titleText}>{this.props.title}</Text> : null}
                    {this.props.titleRight ? <Text style={style.titleTextRight}>{this.props.titleRight}</Text> : null }
                </View>
                <View style={style.contents} collapsable={false}>
                    {this.props.children}
                </View>
                {this.getFooter()}
            </View>
        );
    }
}

export default BorderBox;

const style = StyleSheet.create({
    container:{
        borderWidth:2,
        borderRadius:10,
        borderColor:'#017e33ff',
        boxShadow:'0 0 5px rgba(0,0,0,.5)',
        backgroundColor:'#ecf4edff',
        marginBottom:15
    },
    titleWraper:{
        backgroundColor:'#017e33ff',
        padding:10,
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    titleText:{
        color:'#fff',
        fontSize:16,
        fontWeight:500
    },
    titleTextRight:{
        backgroundColor:'#fff',
        fontSize:20,
        fontWeight:400,
        color:'#017e33ff',
        paddingHorizontal:10,
        paddingVertical:1,
        borderRadius:20
    },
    contents:{
        padding:10,
        elevation:5,
    },
    footer:{
        padding:10,
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    copyIconCircle:{
        width:40,
        height:40,
        backgroundColor:"#017e33ff",
        borderRadius:50,
        alignItems:'center',
        paddingTop:10
    },
    shareSection:{},
    shareText:{
        backgroundColor:"#017e33ff",
        paddingHorizontal:20,
        paddingVertical:5,
        color:'#fff',
        borderRadius:40,
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
})