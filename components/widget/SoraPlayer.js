import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AudioFileHander from '../../constants/AudioFileHandler';
import Helper from '../../constants/Helper';
class SoraPlayer extends Component {
    constructor(props){
        super(props);
        this.state = {
            isPlaying:false,
            speedValue:1,
            isLooping:false,
            playerStatus:{
                positionMillis:0,
                durationMillis:0
            }
        }
        this.audioPlayer = null;
        this.fileHelper = new AudioFileHander(this.props.file);
    }
    async componentDidMount(){
        let fileUri = await this.fileHelper.downloadFile(Helper.fileServerUrl);
        let player = await Audio.Sound.createAsync({ uri: fileUri }, { shouldPlay: false }, this.onPlayerReady.bind(this));
        this.audioPlayer= player.sound;
        if(this.props.onReady){
            this.props.onReady(this);
        }
    }
    async componentWillUnmount() {
        if (this.audioPlayer) {
        await this.audioPlayer.stopAsync();
        await this.audioPlayer.unloadAsync();
            this.audioPlayer = null;
        }
    }
    onPlayerReady(status){
        if (!status.isLoaded) return;
        if(this.props.onTimeChange){
            this.props.onTimeChange(status);
        }
        this.setState({
            playerStatus:status
        })
    }
    playPausePlayer(e){
        let isPlaying = this.state.isPlaying;
        this.setState({
            isPlaying:!this.state.isPlaying
        })
        if(isPlaying){
            this.audioPlayer.pauseAsync();
        }else{
            this.audioPlayer.playAsync();
        }
    }
    async setLooping(e){
        let loop = !this.state.isLooping;
        this.setState({
            isLooping:loop
        })
        if (this.audioPlayer) {
            await this.audioPlayer.setIsLoopingAsync(loop);
        }
    }

    async onSpeedClick(type){
        let speedValue = this.state.speedValue;
        if(type =='plus'){
            speedValue++;
            if(speedValue >=5){
                speedValue = 4;
            }
            if(speedValue ==0){
                speedValue = 1;
            }
        }else{
            if(speedValue <=1){
                speedValue = speedValue + 0.2;
            }else{
                speedValue--;
            }
            
            if(speedValue<= -5){
                speedValue = -5;
            }
            if(speedValue ==0){
                speedValue = -1;
            }
        }
        
        this.setState({
            speedValue:speedValue
        })
        if (this.audioPlayer) {
            await this.audioPlayer.setRateAsync(
                speedValue,
                true // pitch correction
            );
        }
    }
    async onSlidingComplete(sliderValue){
        await this.setAudioPlayerTime(sliderValue);
    }
    async setAudioPlayerTime(time){
        if(this.audioPlayer){
            await this.audioPlayer.setPositionAsync(time);
            await this.audioPlayer.playAsync();
        }
    }
    render() {
        let isPlaying = this.state.isPlaying;
        let speedValue = this.state.speedValue;
        let playerStatus = this.state.playerStatus;
        return (
            <View style={style.player}>
                <Slider
                    onSlidingComplete = {this.onSlidingComplete.bind(this)}
                    style={{ width: '100%', height: 40 }}
                    minimumValue={0}
                    maximumValue={playerStatus.durationMillis}
                    value={playerStatus.positionMillis}
                    minimumTrackTintColor="#1DB954"
                    maximumTrackTintColor="#ccc"
                    thumbTintColor="#1DB954"
                />
                <View style={style.playerController}>
                    <View style={style.playerControllerLeft}>
                        <Text style={style.speedTextControler} onPress={e=> {this.onSpeedClick('min')}}>-</Text>
                        <Text style={style.speedText}>{speedValue}x</Text>
                        <Text style={style.speedTextControler} onPress={e=> {this.onSpeedClick('plus')}}>+</Text>
                    </View>
                    <Ionicons onPress={ this.playPausePlayer.bind(this)} name={isPlaying ? 'pause' : 'play' } size={32} color="green" />
                    <View style={style.playerControllerRight}>
                        <Ionicons onPress={ this.setLooping.bind(this)} name='repeat' size={32} color={this.state.isLooping ? 'red': '#000'} />
                    </View>
                </View>
            </View>
        );
    }
}

export default SoraPlayer;
const style = StyleSheet.create({
    player:{
        backgroundColor:'#fff',
        boxShadow:'0 0 6px rgba(0,0,0,.8)',
        margin:10,
        padding:10,
        borderRadius:20,
       
    },
    playerController:{
        justifyContent:'center',
        flex:1,
        alignItems:'center',
        flexDirection:'row'
    },
    speedText:{
        fontSize:14,
        textAlign:'center',
        fontWeight:300,
        color:'#000'
    },
    speedTextControler:{
        fontSize:20,
        fontWeight:700
    },
    playerControllerLeft:{
        marginLeft:0,
        marginRight:'auto',
        flex:1,
        flexDirection:'row',
        maxWidth:100,
        alignItems:'center',
        gap:10
    },
    playerControllerRight:{
        marginLeft:'auto',
        marginRight:0,
        flex:1,
        flexDirection:'row',
        maxWidth:100,
        alignItems:'center',
        justifyContent:'flex-end',
        gap:10
    }
})