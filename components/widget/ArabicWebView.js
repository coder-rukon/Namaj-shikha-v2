
import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system/legacy';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
class ArabicWebView extends Component {
    constructor(props){
        super(props);
        this.state = {
            viewHeight:100,
            fontBase64:'',
            isFontLoading:false,
        }
    }
    async componentDidMount(){
        /*
        let base64File = await this.getFontBase64();
        this.setState({
            isFontLoading:false,
            fontBase64:base64File
        })
            */
            
    }
    onLineClickHanlder(time){
        if(this.props.onLineClick){
            this.props.onLineClick({time_start:time})
        }
    }
    async getFontBase64() {
        // Load the font asset
        const fontAsset = Asset.fromModule(require('@/assets/fonts/Amiri-Regular.ttf'));
        await fontAsset.downloadAsync(); // ensures file is downloaded

        // Read font file as base64
        const fontBase64 = await FileSystem.readAsStringAsync(fontAsset.localUri, {
            encoding: 'base64'
        });

        return fontBase64;
    }
    getWaqfo(word){
        if(word.line_end_sign){
            if(word.line_end_sign == '۝'){
                return(
                    `<span class="line_end_sign" style="margin-bottom:auto;">
                        <span class="wf_circle"></span>
                    </span>`
                )
            }
            return(
                `<span class="line_end_sign">
                    <span class="wf_txt">${word.line_end_sign}</span>
                    <span class="wf_circle"></span>
                </span>`
            )
        }
        return '';
    }
    getHtmlContents(data){
        let arabicHtml = '';
        data.forEach(soraWord => {
            let color = this.props.color(soraWord);
            arabicHtml +='<span class="item_inline">';
            arabicHtml +='<span style="color:'+color.color+';" data-time="'+soraWord.time_start+'">'+soraWord.ar+'</span>';
            arabicHtml += this.getWaqfo(soraWord);

            arabicHtml +='</span>';
        });
        return arabicHtml;
    }
    render() {
        let suraData = this.props.data;
        let htmlContents = '<p>Loading...</p>';
        if(this.state.isFontLoading){
            return <Text>Loading font</Text>
        }
        if(suraData){
            htmlContents = this.getHtmlContents(suraData);
        }
        
        const injectedJS = `
            (function() {
                function sendHeight() {
                    const height = document.documentElement.scrollHeight;
                    window.ReactNativeWebView.postMessage(
                    JSON.stringify(
                            {
                                type: 'view_height',
                                value:height.toString()
                            }
                        )
                    );
                }

                // Send height after page loads
                window.addEventListener('load', sendHeight);

                // Send height after fonts/images render
                setTimeout(sendHeight, 100);

                document.querySelectorAll('span').forEach(function(p) {
                    p.addEventListener('click', function() {
                        const dataTime = p.getAttribute('data-time');
                        if(dataTime){
                            window.ReactNativeWebView.postMessage(
                                JSON.stringify(
                                        {
                                            type: 'p_click',
                                            time:dataTime
                                        }
                                    )
                            );
                        }
                        
                    });
                });
            })();
            `;

        let pageContents = `<html lang="ar" dir="rtl">
                    <header>
                     <meta charset="utf-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1">
                        <style>
                        @font-face {
                            font-family: 'Amiri-custom';
                            src: url('data:font/truetype;charset=utf-8;base64,${this.state.fontBase64}') format('truetype');
                        }
                        body{
                         font-family: "Amiri-custom", serif;
                        }
                        *{
                            margin:0;
                            padding:0;
                        }
                        .container{
                            font-family: "Amiri-custom", serif;
                        }
                        .item_inline{
                           font-family: "Amiri-custom", serif;
                            white-space: normal;
                        }
                         .item_inline span{
                           font-family: "Amiri-custom", serif;
                           font-size:28px;
                           line-height:50px;
                           font-weight:300;
                            white-space: normal;
                        }
                        .line_end_sign{
                            display: inline-block;
                            position:relative;
                            margin:0 3px;
                            padding:0 5px;
                            margin-top:auto;
                            justify-content: center;
                            font-family: "Amiri-custom", serif;
                            top:10px;
                        }
                        .line_end_sign .wf_txt{
                            position: absolute;
                            bottom:calc(100%);
                            right:0;
                            left:0;
                            text-align:center;
                            font-size:20px;
                            line-height:35px;
                            font-family: "Amiri-custom", serif;
                            font-width:bold;
                            color:red;
                        }
                        .line_end_sign .wf_circle{
                            display: inline-block;
                            width: 20px;
                            height: 20px;
                            text-align:center;
                            background: transparent;
                            border: 1px solid #000;
                            border-radius: 50%;
                            position: relative;
                            font-size:12px;
                            line-height:15px;
                        }
                       
                        </style>
                        <script>
                            document.addEventListener('click', function (e) {
                                const link = e.target.closest('a');
                                if(link){
                                    const path = link.getAttribute('href');
                                    if (path && path.startsWith('/')) {
                                        e.preventDefault();
                                        window.ReactNativeWebView.postMessage(
                                            JSON.stringify({
                                                type: 'NAVIGATE',
                                                path: path
                                            })
                                        );

                                    }
                                }
                            });
                        </script>
                    </header>
                    <body>
                        <div class="container">
                            ${htmlContents}
                        
                        </div>
                        
                    </body>
                    </html>`;
        return (
            <View style={{backgroundColor:'#e2e2e2ff', padding:4,borderRadius:4}}>
                <WebView
                    style={{...style.webview,height:this.state.viewHeight}}
                    originWhitelist={['*']}
                    source={{ html: pageContents }}
                    injectedJavaScript={injectedJS}
                    onMessage={(event) => {
                        try {
                            const data = JSON.parse(event.nativeEvent.data);

                            if(data.type == 'view_height'){
                                this.setState({
                                    viewHeight:Number(data.value)
                                });
                            }
                            if(data.type == 'p_click'){
                                this.onLineClickHanlder(data.time)
                            }
                        } catch (e) {}
                        
                        
                    }}
                    javaScriptEnabled={true}
                    scrollEnabled={false}
                    
                />
            </View>
            
        );
    }
}

export default ArabicWebView;

const style = StyleSheet.create({
    webview:{
        flex:1,
        backgroundColor:'rgba(0,0,0,0)'
    }
})