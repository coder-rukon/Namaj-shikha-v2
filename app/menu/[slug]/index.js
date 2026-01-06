import AppHeader from '@/components/header/AppHeader';
import { db } from "@/database/db";
import { Component } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WithNavigation } from '../../../components/hoc/withNavigation';
import ListItem from '../../../components/widget/ListItem';
import RoundBox from '../../../components/widget/RoundBox';
class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            menuName:'Menu',
            menu:null,
            menu_id:props.params.slug,
            items:[]
        }
    }

    componentDidMount() {
        
        this.props.navigation.setOptions({
            headerShown: false, // 👈 Hide header from inside the class
        });
        this.getMenuData();
    }
    async getMenuData(){
        let menu_id =this.state.menu_id ? this.state.menu_id : null;
        try {
        //const result = await db.runAsync('INSERT INTO menu (name, items) VALUES (?, ?)', 'aaa', '100');
            const menu = await db.getFirstAsync('SELECT * FROM menu where id = '+menu_id);
            this.setState({
                menu:menu,
                menuName:menu?.name,
                items:menu ? JSON.parse(menu.menu_items) : [],
            })
        } catch (error) {
            console.log('Error fetching tables:', error);
        }
    }
    getMenuDetails(details= null){
        if (!details) {
        return null;
        }

        // match <b color="...">text</b> OR <b>text</b>
        const regex = /<b(?:\s+color="(.*?)")?>(.*?)<\/b>/g;

        const parts = [];
        let lastIndex = 0;
        let match;

        while ((match = regex.exec(details)) !== null) {
            // normal text before <b>
            if (match.index > lastIndex) {
                parts.push({
                text: details.slice(lastIndex, match.index),
                bold: false
                });
            }

            // bold text
            parts.push({
                text: match[2],
                bold: true,
                color: match[1] || null
            });

            lastIndex = regex.lastIndex;
        }

        // remaining text
        if (lastIndex < details.length) {
        parts.push({
            text: details.slice(lastIndex),
            bold: false
        });
        }

        return (
        <RoundBox
            style={{
            marginBottom: 2,
            borderRadius: 4,
            backgroundColor: "#e5faf7ff"
            }}
            hideFooter={true}
        >
            <Text style={style.menuDetails}>
            {parts.map((part, i) => (
                <Text
                key={i}
                style={{
                    fontWeight: part.bold ? "bold" : "normal",
                    color: part.color || "#000"
                }}
                >
                {part.text}
                </Text>
            ))}
            </Text>
        </RoundBox>
        );

    }
    render() {
        let items = this.state.items;
        let menuDetails = this.state.menu && this.state.menu.details ? this.state.menu.details : null;
        let after_details = this.state.menu && this.state.menu.after_menu_details ? this.state.menu.after_menu_details : null;
        return (
            <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
            <ImageBackground
                style={style.background}
                resizeMode="cover"
                source={require('@/assets/images/bg-primary.jpg')}
            >
                <AppHeader title={this.state.menuName}/>
                <ScrollView >
                    {this.getMenuDetails(menuDetails)}
                    
                    <View style={style.list}>
                        {
                            items.map( (item,key) => {
                                let itemValue = {
                                    name:item.name,
                                    icon:item.icon,
                                    link:item.link ? item.link : '/',
                                    subtitle:item.subtitle ? item.subtitle : null
                                }
                                return(
                                    <ListItem key={key} item={itemValue}/>
                                )
                            })
                        }
                    </View>
                    {this.getMenuDetails(after_details)}
                </ScrollView>
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
    menuDetails:{
        color:'#000',
        fontSize:18
    },
    list:{
        margin:10
    }
})