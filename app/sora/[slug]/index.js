import { Component } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import SoraBox from '../../../components/widget/SoraBox';
import SoraPlayer from '../../../components/widget/SoraPlayer';

class Index extends Component {
    constructor(props){
        super(props),
        this.state = {
            audioCurrentTime:0
        }
        this.audioPlayer = null;
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
        let sora = [
                {
                    bn:'আলহামদু লিল্লাহি রব্বিল আ -লামি-ন।',
                    ar:'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
                    meaning:'যাবতীয় প্রশংসা আল্লাহ তা’আলার যিনি সকল সৃষ্টি জগতের পালনকর্তা।',
                    timeStart:0,
                    timeEnd:10000
                },
                {
                    bn:'আররহমা-নির রাহি-ম।',
                    ar:'الرَّحْمَٰنِ الرَّحِيمِ',
                    meaning:'যিনি নিতান্ত মেহেরবান ও দয়ালু।',
                    timeStart:10001,
                    timeEnd:20000
                },
                {
                    bn:'মা-লিকি ইয়াওমিদ্দি-ন।',
                    ar:'مَالِكِ يَوْمِ الدِّينِ',
                    meaning:'বিচার দিনের একমাত্র অধিপতি।',
                    timeStart:20001,
                    timeEnd:30000
                },
                {
                    bn:`ইয়্যা-কা না’বুদু ওয়া ইয়্যা-কা নাসতাই’-ন`,
                    ar:'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
                    meaning:'আমরা একমাত্র তোমারই ইবাদত করি এবং শুধুমাত্র তোমারই সাহায্য প্রার্থনা করি।',
                    timeStart:30001,
                    timeEnd:35000
                },
                {
                    bn:`ইহদিনাস সিরাতা’ল মুসতাকি’-ম`,
                    ar:'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
                    meaning:'আমাদের সরল পথ দেখাও।',
                    timeStart:35001,
                    timeEnd:40000
                },
                {
                    bn:'সিরাতা’ল্লা যি-না আনআ’মতা আ’লাইহিম গা’ইরিল মাগ’দু’বি আ’লাইহিম ওয়ালা দ্দ-ল্লি-ন।',
                    ar:'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
                    meaning:'সে সমস্ত লোকের পথ, যাদেরকে তুমি নেয়ামত দান করেছ। তাদের পথ নয়, যাদের প্রতি তোমার গজব নাযিল হয়েছে এবং যারা পথভ্রষ্ট হয়েছে।',
                    timeStart:40001,
                    timeEnd:48000
                }
            ];
        let audioCurrentTime = this.state.audioCurrentTime;
        return (
            <ImageBackground
                style={style.background}
                resizeMode="cover"
                source={require('@/assets/images/bg-primary.jpg')}
            >
                <ScrollView>
                    <SoraPlayer onReady={ audioObj => { this.audioPlayer = audioObj }} onTimeChange={this.onAudioChange.bind(this)} file={require('@/assets/audio/88855.mp3')}/>
                    <View style={style.container}>
                        <SoraBox topTitle="Arabic" title="আল-ফাতিহা">
                            {
                                sora.map( (soraWord,key) => {
                                    return(
                                        <Text key={key} style={{...style.word,direction:'rtl',fontSize:25,lineHeight:35, ...this.getColor(soraWord) }} onPress={ e => {this.onWordPress(soraWord)}}>{soraWord.ar} </Text>
                                    )
                                })
                            }
                        </SoraBox>
                        <SoraBox topTitle="Bangla" title="বিসমিল্লাহির রাহমানির রাহিম">
                            {
                                sora.map( (soraWord,key) => {
                                    return(
                                        <Text key={key} style={{...style.word, ...this.getColor(soraWord) }} onPress={ e => {this.onWordPress(soraWord)}}>{soraWord.bn} </Text>
                                    )
                                })
                            }
                        </SoraBox>
                        <SoraBox topTitle="Bangla Meaning" title="বিসমিল্লাহির রাহমানির রাহিম">
                            {
                                sora.map( (soraWord,key) => {
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

export default Index;
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