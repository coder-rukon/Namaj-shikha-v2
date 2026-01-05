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
            isDownloading:false,
            isFileDonloaded:false,
            downloadProgress:0,
            playerStatus:{
                positionMillis:0,
                durationMillis:0
            }
        }
        this.audioPlayer = null;
        this.fileName = this.props.file;
        this.fileHelper = new AudioFileHander(this.fileName);
    }
    async componentDidMount(){
        const fileUri = await this.fileHelper.fileUri();
        if(fileUri){
            this.readyPlayer(fileUri);
            this.setState({isFileDonloaded:true});
        }else{
            this.setState({isFileDonloaded:false});
        }
        
        //let fileUri = await this.fileHelper.downloadFile(Helper.fileServerUrl);
        if(this.props.onReady){
            this.props.onReady(this);
        }
    }
    async readyPlayer(fileUri,shouldPlay = false){
        let isMp3File = this.fileHelper.isLocalMp3(fileUri);
        if(isMp3File){
            let player = await Audio.Sound.createAsync({ uri: fileUri }, { shouldPlay: shouldPlay }, this.onPlayerReady.bind(this));
            this.audioPlayer= player.sound;
            if(shouldPlay){
                this.setState({
                    isPlaying:true
                })
            }
        }else{
            alert("File can't play");
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
    async playPausePlayer(e){
        if(this.state.isDownloading){
            return;
        }
        if(!this.state.isFileDonloaded ){
            await this.startDownloadFile(true);
        }
        
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
            if(speedValue>=1){
                speedValue++;
            }else{
                speedValue = speedValue + 0.2;
            }
            if(speedValue >=5){
                speedValue = 4;
            }
            if(speedValue ==0){
                speedValue = 1;
            }
            
        }else{
            if(speedValue >=2){
                speedValue--;
            }else{
                speedValue = speedValue - 0.2;
            }
            if(speedValue <= 0){
                speedValue = 0.2;
            }
        }
        speedValue =  Number(speedValue.toFixed(2));
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
        if(this.state.isDownloading){
            return;
        }
        if(!this.state.isFileDonloaded ){
            await this.startDownloadFile(true);
        }
        if(this.audioPlayer){
            await this.audioPlayer.setPositionAsync(time);
            await this.audioPlayer.playAsync();
        }
    }
    async startDownloadFile(shouldPlay = false){
        this.setState({isDownloading:true,downloadProgress:0});
        const fileUri = await this.fileHelper.startDownloadFile(Helper.fileServerUrl, (prp) => {
            this.setState({downloadProgress:prp});
        });
        this.setState({isDownloading:false,isFileDonloaded:true,downloadProgress:1});
        await this.readyPlayer(fileUri,shouldPlay);
    }
    fileDownloadUi(){
        let isFileDonloaded = this.state.isFileDonloaded;
        let downloadProgress = Math.floor(this.state.downloadProgress * 100) ;
        if(isFileDonloaded){
            return null;
        }
        return (
            <View style={style.downloadWraper}>
                <View style={{...style.dlStatus,width:downloadProgress+'%'}}></View>
                <Text style={style.dlText}>Downloading... {downloadProgress}%</Text>
            </View>
        );
    }
    render() {
        let isPlaying = this.state.isPlaying;
        let speedValue = this.state.speedValue;
        let playerStatus = this.state.playerStatus;
        
        return (
            <View style={style.player}>
                { this.state.isDownloading ? this.fileDownloadUi() : null }
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
       position:'relative'
    },
    downloadWraper:{
        textAlign:'center',
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
        backgroundColor:'rgba(0,0,0,.5)',
        borderRadius:20,
        zIndex:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        overflow:'hidden'
    },
    dlStatus:{
        position:'absolute',
        top:0,
        left:0,
        bottom:0,
        backgroundColor:'rgba(40, 255, 136, 0.34)',
    },
    dlText:{
        textAlign:'center',
        color:"#fff",
        fontSize:20
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