import AppHeader from '@/components/header/AppHeader';
import { db } from "@/database/db";
import { Component } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import ImageBox from '../../components/widget/ImageBox';
import ListItem from '../../components/widget/ListItem';
class DuaPage extends Component {
    constructor(props){
        super(props),
        this.state = {
            otherDuaList:[]
        }
    }
    async componentDidMount() {
        await this.getMenuData()
    }
    async getMenuData(){
        let menu_id =15;
        try {
        //const result = await db.runAsync('INSERT INTO menu (name, items) VALUES (?, ?)', 'aaa', '100');
            const menu = await db.getFirstAsync('SELECT * FROM menu where id = '+menu_id);
            this.setState({
                otherDuaList:menu ? JSON.parse(menu.menu_items) : [],
            })
        } catch (error) {
            console.log('Error fetching tables:', error);
        }
    }
    render() {
        let allDua = this.state.otherDuaList;
        return (
            <ImageBackground
                style={style.background}
                resizeMode="cover"
                source={require('@/assets/images/bg-primary.jpg')}
            >
                <AppHeader title="দোয়া"/>
                <ScrollView>
                    <View style={style.container}>
                        <Text style={style.title}><Text style={style.border}> </Text> দৈনন্দিন দোয়া </Text>
                        <View style={{gap:10, flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between'}}>
                                <View style={{width:'50%'}}>
                                    <ImageBox title="আয়াতুল কুরসি" link="/dua/11" subtitle="বাংলা অর্থ, অডিও ও উচ্চারন" image={require('@/assets/images/dua.png')}/>
                                    <ImageBox title="গুরুত্বপূর্ণ দোয়া" link="/menu/14" subtitle="সুন্দর ও গুরুত্বপূর্ণ কিছু ছোট দোয়া" image={require('@/assets/images/dua.png')} boxStyle={{backgroundColor:"#f2ffa7ff",borderColor:"#f2ffa7ff"}}/>
                                </View>
                                <View style={{width:'45%'}}>
                                    <ImageBox title="রাব্বানা দোয়া" link="/menu/13" imageTop={true} subtitle="কুরআনে বর্ণিত আল্লাহর শেখানো দোয়াসমূহ" image={require('@/assets/images/dua.png')} boxStyle={{backgroundColor:"#e1b8ffff",borderColor:"#8629ff86"}}/>
                                </View>
                        </View>
                        <Text style={style.title}><Text style={style.border}> </Text> নামাজের দোয়া </Text>
                        <ImageBox title="নামাজের গুরুত্বপূর্ণ দোয়া" link="/menu/12" subtitle="মসজিদে প্রবেশের দোয়া থেকে শুরু করে  নামাজের সকল প্রয়োজনীয় দোয়া ও আমল" image={require('@/assets/images/dua.png')} boxStyle={{backgroundColor:"#edaa58ff",borderColor:"#ef840299",padding:15}}/>
                        <Text style={style.title}><Text style={style.border}> </Text> দোয়া কুনুত </Text>
                        <View style={{gap:10, flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between'}}>
                                <View style={{width:'50%'}}>
                                    <ImageBox title="দোয়া কুনুত" link="/dua/18" subtitle="বাংলা অর্থ, অডিও ও উচ্চারন" image={require('@/assets/images/dua.png')} />
                                </View>
                                <View style={{width:'45%'}}>
                                    <ImageBox title="কুনুতে নাজেলা" link="/dua/19" subtitle="বাংলা অর্থ, অডিও ও উচ্চারন" image={require('@/assets/images/dua.png')} boxStyle={{backgroundColor:"#f2ffa7ff",borderColor:"#f2ffa7ff"}}/>
                                </View>
                        </View>
                        <Text style={style.title}><Text style={style.border}> </Text> অন্যান্য গুরুত্বপূর্ণ দুয়াসমূহ </Text>
                        <View>
                            {
                                allDua.map( (item,key) => {
                                    let itemValue = {
                                        name:item.name ? item.name : 'দোয়ার নাম',
                                        image:item.icon ? item.icon : require('@/assets/images/dua.png'),
                                        link:item.link ? item.link : '/',
                                        subtitle:item.subtitle ? item.subtitle : 'আরবি ও বাংলা উচ্চারণসহ অর্থ',
                                    }
                                    return(
                                        <ListItem key={key} item={itemValue}/>
                                    )
                                })
                            }
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
                
        );
    }
}

export default DuaPage;
const style = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:'#c3f1cfff'
    },
    overlay:{},
    container:{
        padding:10,
        borderRadius:20,
        backgroundColor: '#018f6994', // overlay color
    },

    border:{
        width:4,
        height:15,
        backgroundColor:'#dce216ff',
        marginRight:5,
        borderRadius:2,
    },
    title:{
        fontSize:22,
        color:'#fff',
        lineHeight: 30,
        fontWeight:600,
        borderBottomColor:'#fff',
        borderBottomWidth:1,
        paddingBottom:7,
        marginBottom:15,
    },
    details:{
        fontSize:16,
        color:'#000',
        marginBottom:10,
        marginTop:20,
    }
})