import AppHeader from '@/components/header/AppHeader';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Image } from 'expo-image';
import { Component } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, Vibration, View } from 'react-native';
import { WithNavigation } from '../../../components/hoc/withNavigation';

class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:0,
            vibrate:true,
            sound:false
        }
    }
    componentDidMount() {
        
        this.props.navigation.setOptions({
            headerShown: false, // 👈 Hide header from inside the class
        });
    }
    onAddClick(){
        let currentVlue = this.state.value;
        currentVlue++;
        if(this.state.vibrate){
            Vibration.vibrate(20);
        }
        this.setState({
            value:currentVlue
        })
    }     
    onVibrateClick(){
        this.setState({
            vibrate:!this.state.vibrate
        })
    }    
    onResetClick(){
        this.setState({
            value:0
        })
    }
    render() {
        return (
                <ImageBackground
                    style={style.container}
                    resizeMode='contain'
                >
                    <AppHeader title="তাসবিহ"/>
                    <View style={style.topView}>
                        <View style={{justifyContent:'center', flexDirection:'row',gap:10,padding:10}}>

                            <TouchableOpacity style={{...style.button,width:70,height:70,borderWidth:3}} onPress={this.onResetClick.bind(this)} activeOpacity={0.8} >
                                <Text style={{...style.buttonText,fontSize:18}}>Reset</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{...style.button,width:70,height:70,borderWidth:3}} activeOpacity={0.8} >
                                <Ionicons name="volume-mute-outline" size={30} color="#fff" />
                            </TouchableOpacity>
                            <TouchableOpacity style={{...style.button,width:70,height:70,borderWidth:3}} onPress={this.onVibrateClick.bind(this)} activeOpacity={0.8} >
                                <MaterialCommunityIcons  name={this.state.vibrate ? 'vibrate' : 'vibrate-off'} size={30} color="#fff" />
                            </TouchableOpacity>
                        </View>
                        <Text style={style.display}>{this.state.value}</Text>
                        <TouchableOpacity style={style.button} onPress={this.onAddClick.bind(this)} activeOpacity={0.8} >
                            <Text style={style.buttonText}>এখানে চাপুন</Text>
                        </TouchableOpacity>
                        
                    </View>
                    <Image contentFit="cover" style={style.top_minar} source={require('@/assets/images/hometopbg.png')} />
                </ImageBackground>
        );
    }
}

export default WithNavigation(Index);
const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ecf4edff',
        height:800,
        justifyContent:'space-between'
    },
    topView:{
        marginTop:'auto',
        marginBottom:'auto'
    },
    text:{
        fontSize:18,
        lineHeight:24,
        color:'#000'
    },
    display:{
        textAlign:'center',
        justifyContent:'center',
        marginHorizontal:'auto',
        fontSize:50,
        backgroundColor:'#59D8B2',
        borderStyle:'solid',
        borderColor:'#018F68',
        borderWidth:5,
        minWidth:150,
        marginBottom:-15,
        zIndex:1,
        marginTop:20,
        paddingVertical:5,
        color:'#fff',
        borderTopRightRadius:50,
        borderTopLeftRadius:50.
        
    },
    button: {
        backgroundColor: '#018F68',
        alignItems: 'center',
        width:300,
        height:300,
        borderRadius:50,
        marginLeft:'auto',
        marginRight:'auto',
        justifyContent:'center',
        borderWidth:10,
        borderStyle:'solid',
        borderColor:'#59D8B2',
        boxShadow:'0 0 0 5px #018F68,0 0 5px rgba(0,0,0,1)'
    },
    buttonText: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '500',
    },
    top_minar:{
        width:'100%',
        height:150
    },
});