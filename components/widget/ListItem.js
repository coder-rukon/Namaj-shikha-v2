import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IconNames from '../../constants/IconNames';

class ListItem extends Component {
    render() {
        let {name,link,icon} = this.props.item;
        let iconName = icon ? IconNames[icon] : IconNames.default;
        return (
            <View style={style.container}>
                <Link href={link} >
                    <View style={style.list_item}>
                        <Image contentFit="cover" style={style.icon} source={iconName} />
                        <Text style={style.title}>{name}</Text>
                    </View>
                </Link>
            </View>
        );
    }
}

export default ListItem;
const style = StyleSheet.create({
    container:{
        borderWidth:1,
        backgroundColor:'#fff',
        borderColor:'#fff',
        marginVertical:2,
        padding:10,
        borderRadius:10,
        verticalAlign:'center'
    },
    list_item:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        gap:10
    },
    icon:{
        width:30,
        height:30
    },
    title:{
        fontSize:20,
        color:'#000',
        fontWeight:500
    }
})