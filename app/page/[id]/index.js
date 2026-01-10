import AppHeader from '@/components/header/AppHeader';
import { db } from "@/database/db";
import { Component } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import { WithNavigation } from '../../../components/hoc/withNavigation';
import BootstrapCss from '../../../constants/Css';
class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            menuName:'Page name',
            id:props.params.id,
            page:null
        }
    }

    componentDidMount() {
        
        this.props.navigation.setOptions({
            headerShown: false, // 👈 Hide header from inside the class
        });
        this.getMenuData();
    }
    async getMenuData(){
        let id =this.state.id ? this.state.id : null;
        try {
        //const result = await db.runAsync('INSERT INTO menu (name, items) VALUES (?, ?)', 'aaa', '100');
            const page = await db.getFirstAsync('SELECT * FROM page where id = '+id);
            if(page){
                this.setState({
                    menuName:page?.name,
                    page:page
                })
            }
            
        } catch (error) {
            console.log('Error fetching tables:', error);
        }
    }
    render() {
        let pageContents = `<html>
                    <body>
                        <h1>Loading</h1>
                    </body>
                    </html>`
        let page = this.state.page;
        if(page){
            pageContents = `<html>
                    <header>
                     <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
                        <style>
                            ${BootstrapCss}
                            img{
                            max-width:100%;
                            }
                            h1{
                                color:#fff;
                                background:#018F68;
                                border-radius:4px;
                                padding:5px 10px;
                                margin:5px 0 10px 0;
                                font-size:24px;
                            }
                            p{
                                margin:0 0 10px 0;
                                color:#000;
                                font-size:18px;
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
                            ${page.contents}
                        
                        </div>
                        
                    </body>
                    </html>`
        }
        return (
            <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
                <ImageBackground
                    style={style.background}
                    resizeMode="cover"
                    source={require('@/assets/images/bg-primary.jpg')}
                >
                    <AppHeader title={this.state.menuName}/>
                    <View style={style.webviewWraper}>
                        <WebView
                                style={style.webview}
                                originWhitelist={['*']}
                                source={{ html: pageContents }}
                                onMessage={(event) => {
                                    try {
                                        const data = JSON.parse(event.nativeEvent.data);

                                        if (data.type === 'NAVIGATE' && data.path) {
                                            this.props.router.push(data.path);
                                        }
                                    } catch (e) {}
                                }}
                                />
                    </View>
                </ImageBackground>
            </SafeAreaView>
                
        );
    }
}

export default WithNavigation(Index);
const style = StyleSheet.create({
    background:{
        flex:1,
    },
    webviewWraper:{
        flex:1,
        backgroundColor:'rgba(255,255,255,.92)',
        marginHorizontal:10,
        marginBottom:5,
        boxShadow:'0 0 5px rgba(0,0,0,.5)',
        borderRadius:4,
        overflow:'hidden'
    },
    webview:{
        backgroundColor:'rgba(255,255,255,0)'
    },
    list:{
        margin:10
    }
})