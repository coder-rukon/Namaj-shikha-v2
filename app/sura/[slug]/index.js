import AppHeader from '@/components/header/AppHeader';
import { db } from "@/database/db";
import { Component } from 'react';
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
    async loadSura(){
        let id =this.props.params.slug;
        try {
        //const result = await db.runAsync('INSERT INTO menu (name, items) VALUES (?, ?)', 'aaa', '100');
            const dbData = await db.getFirstAsync('SELECT * FROM app_content where id = '+id);
            let sura = dbData;
            if(sura){
                sura.data = JSON.parse(sura.data); 
            }
            this.setState({
                sura:sura
            })
        } catch (error) {
            console.log('Error fetching tables:', error);
        }
    }
    onWordPress(word) {
        let startTime = word.time_start;

        this.setState({
            audioCurrentTime: startTime
        })
        if(this.audioPlayer){
            this.audioPlayer.setAudioPlayerTime(startTime);
            this.audioPlayer.setState({
                isPlaying:true
            })
        }

    }
    getColor(word){
        let currentTime = this.state.audioCurrentTime;
        let output = {
            color:"#000"
        }
        if( currentTime >word.time_start && currentTime < word.time_end){
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
                    {sura.audio_file && <SoraPlayer onReady={ audioObj => { this.audioPlayer = audioObj }} onTimeChange={this.onAudioChange.bind(this)} file={sura.audio_file}/>}
                    <View style={style.container}>
                        <SoraBox topTitle="আরবি" titleDirection="rtl" title="بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ">
                            {
                                suraData.map( (soraWord,key) => {
                                    return(
                                        <Text key={key} style={{...style.word,direction:'rtl',fontSize:25,lineHeight:35, ...this.getColor(soraWord) }} onPress={ e => {this.onWordPress(soraWord)}}>{soraWord.ar} </Text>
                                    )
                                })
                            }
                        </SoraBox>
                        <SoraBox topTitle="উচ্চারন" title="বিসমিল্লাহির রাহমানির রাহিম">
                            {
                                suraData.map( (soraWord,key) => {
                                    return(
                                        <Text key={key} style={{...style.word, ...this.getColor(soraWord) }} onPress={ e => {this.onWordPress(soraWord)}}>{soraWord.bn} </Text>
                                    )
                                })
                            }
                        </SoraBox>
                        <SoraBox topTitle="অর্থ" title="পরম করুণাময় এবং দয়ালু আল্লাহর নামে শুরু করছি।">
                            {
                                suraData.map( (soraWord,key) => {
                                    return(
                                        <Text key={key} style={{...style.word, ...this.getColor(soraWord) }} onPress={ e => {this.onWordPress(soraWord)}}>{soraWord.meaning} </Text>
                                    )
                                })
                            }
                        </SoraBox>
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
        padding:20,
        paddingBottom:50
    },
    word:{
        fontSize:16,
        color:'#000',
        lineHeight: 24
    }
})