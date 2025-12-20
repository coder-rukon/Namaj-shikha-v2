import AppHeader from '@/components/header/AppHeader';
import { Component } from 'react';

import axios from 'axios';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { WithNavigation } from '../../../components/hoc/withNavigation';
import SoraBox from '../../../components/widget/SoraBox';
import SoraPlayer from '../../../components/widget/SoraPlayer';

class Index extends Component {
    constructor(props){
        super(props),
        this.state = {
            sura:{},
            audioCurrentTime:0
        }
        this.audioPlayer = null;
    }
    componentDidMount() {
        
        this.props.navigation.setOptions({
            headerShown: false, // 👈 Hide header from inside the class
        });
        this.loadSura();
    }
    loadSura(){
        let id =this.props.params.slug;
        axios.get('http://192.168.0.200:8000/api/app-content/details/6').then(res => {
            if(res.data.type){
                this.setState({
                    sura:res.data.data
                })
            }
        })
    }
    onWordPress(word) {
        let startTime = word.timeStart;

        this.setState({
            audioCurrentTime: startTime
        })
        if(this.audioPlayer){
            this.audioPlayer.setAudioPlayerTime(startTime)
        }

    }
    getColor(word){
        let currentTime = this.state.audioCurrentTime;
        let output = {
            color:"#000"
        }
        if( currentTime >word.timeStart && currentTime < word.timeEnd){
            output.color = "red";
        }
        return output;
    }
    onAudioChange(status){
        this.setState({
            audioCurrentTime:status?.positionMillis
        })
    }
    render() {
        let sura = this.state.sura;
        let suraData = sura.data ? sura.data : [];
        let audioCurrentTime = this.state.audioCurrentTime;
        return (
            <ImageBackground
                style={style.background}
                resizeMode="cover"
                source={require('@/assets/images/bg-primary.jpg')}
            >
                <AppHeader title={sura.name}/>
                <ScrollView>
                    <SoraPlayer onReady={ audioObj => { this.audioPlayer = audioObj }} onTimeChange={this.onAudioChange.bind(this)} file={'002_Al-Baqara2.mp3'}/>
                    <View style={style.container}>
                        <SoraBox topTitle="Arabic" title="আল-ফাতিহা">
                            {
                                suraData.map( (soraWord,key) => {
                                    return(
                                        <Text key={key} style={{...style.word,direction:'rtl',fontSize:25,lineHeight:35, ...this.getColor(soraWord) }} onPress={ e => {this.onWordPress(soraWord)}}>{soraWord.ar} </Text>
                                    )
                                })
                            }
                        </SoraBox>
                        <SoraBox topTitle="Bangla" title="বিসমিল্লাহির রাহমানির রাহিম">
                            {
                                suraData.map( (soraWord,key) => {
                                    return(
                                        <Text key={key} style={{...style.word, ...this.getColor(soraWord) }} onPress={ e => {this.onWordPress(soraWord)}}>{soraWord.bn} </Text>
                                    )
                                })
                            }
                        </SoraBox>
                        <SoraBox topTitle="Bangla Meaning" title="বিসমিল্লাহির রাহমানির রাহিম">
                            {
                                suraData.map( (soraWord,key) => {
                                    return(
                                        <Text key={key} style={{...style.word, ...this.getColor(soraWord) }} onPress={ e => {this.onWordPress(soraWord)}}>{soraWord.meaning} </Text>
                                    )
                                })
                            }
                        </SoraBox>
                        <SoraBox/>
                    </View>
                </ScrollView>
            </ImageBackground>
                
        );
    }
}

export default WithNavigation( Index);
const style = StyleSheet.create({
    background:{
        flex:1,
    },
    container:{
        padding:20
    },
    word:{
        fontSize:16,
        color:'#000',
        lineHeight: 24
    }
})