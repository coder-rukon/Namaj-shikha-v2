
import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system/legacy';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
class ArabicWebView extends Component {
    constructor(props){
        super(props);
        this.state = {
            viewHeight:0,
            fontBase64:'',
            isFontLoading:true,
        }
    }
    async componentDidMount(){
        let base64File = await this.getFontBase64();
        this.setState({
            isFontLoading:false,
            fontBase64:base64File
        })
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
                    `<div class="line_end_sign" style="margin-bottom:auto;">
                        <span class="wf_circle"></span>
                    </div>`
                )
            }
            return(
                `<div class="line_end_sign">
                    <span class="wf_txt">${word.line_end_sign}</span>
                    <span class="wf_circle"></span>
                </div>`
            )
        }
        return '';
    }
    getHtmlContents(data){
        let arabicHtml = '';
        data.forEach(soraWord => {
            let color = this.props.color(soraWord);
            arabicHtml +='<div class="item_inline">';
            arabicHtml +='<p style="color:'+color+'">'+soraWord.ar+'</p>';
            arabicHtml += this.getWaqfo(soraWord);

            arabicHtml +='</div>';
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
                setTimeout(function() {
                window.ReactNativeWebView.postMessage(
                    document.documentElement.scrollHeight
                );
                }, 100);
                true; // required for Android
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

                        }
                        .item_inline{
                             font-family: "Amiri-custom", serif;
                            display: inline-flex;
                            margin:0 2px;
                            padding:0;
                            align-items: end;
                            
                        }
                        
                        .line_end_sign{
                            display: inline-block;
                            position:relative;
                            margin:0 3px;
                            margin-top:auto;
                            justify-content: center;
                             font-family: "Amiri-custom", serif;
                        }
                        .line_end_sign .wf_txt{
                            position: absolute;
                            bottom:calc(100%);
                            right:0;
                            left:0;
                            text-align:center;
                            font-size:20px;
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
                        .item_inline p{
                            font-family: "Amiri-custom", serif;
                            margin:0;
                            padding:0;
                            font-size:26px;
                            line-height:52px;
                            display: inline-block;
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
                        this.setState({
                            viewHeight:Number(event.nativeEvent.data)
                        });
                    }}
                    javaScriptEnabled
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