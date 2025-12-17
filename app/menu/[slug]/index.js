import AppHeader from '@/components/header/AppHeader';
import { db } from "@/database/db";
import { Component } from 'react';
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import { WithNavigation } from '../../../components/hoc/withNavigation';
import ListItem from '../../../components/widget/ListItem';

class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            menuName:'Menu',
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
            const menu = await db.getFirstAsync('SELECT * FROM menu where remote_id = '+menu_id);
            this.setState({
                menuName:menu?.name,
                items:menu ? JSON.parse(menu.menu_items) : [],
            })
        } catch (error) {
            console.log('Error fetching tables:', error);
        }
    }
    render() {
        let items = this.state.items;
        console.log(items)
        return (
            <ImageBackground
                style={style.background}
                resizeMode="cover"
                source={require('@/assets/images/bg-primary.jpg')}
            >
                <AppHeader title={this.state.menuName}/>
                <ScrollView>
                    <View style={style.list}>
                        {
                            items.map( (item,key) => {
                                let itemValue = {
                                    name:item.name,
                                    icon:item.icon,
                                    link:item.link ? item.link : '/',
                                }
                                return(
                                    <ListItem key={key} item={itemValue}/>
                                )
                            })
                        }
                    </View>
                </ScrollView>
            </ImageBackground>
                
        );
    }
}

export default WithNavigation(Index);
const style = StyleSheet.create({
    background:{
        flex:1,
    },
    list:{
        margin:10
    }
})