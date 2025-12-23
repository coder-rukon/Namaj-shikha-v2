import { db } from '@/database/db';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BorderBox from '../../components/widget/BorderBox';
import TitleRound from '../../components/widget/TitleRound';
class RandomHadis extends Component {
    constructor(props){
        super(props);
        this.state = {
            hadis:null
        }
    }
    componentDidMount() {
        this.loadHadis();
    }
    async loadHadis(){
        try {
        //const result = await db.runAsync('INSERT INTO menu (name, items) VALUES (?, ?)', 'aaa', '100');
            const dbData = await db.getFirstAsync('SELECT * FROM app_content where content_type = ? ORDER BY RANDOM()', '82');
            let hadis = dbData;
            if(hadis){
                hadis.data = JSON.parse(hadis.data); 
            }
            this.setState({
                hadis:hadis
            })
        } catch (error) {
            console.log('Error fetching tables:', error);
        }
    }
    render() {
        let hadis = this.state.hadis;
        if(!hadis){
            return <View style={{padding:10, marginTop:10}}><Text style={style.text}>হাদিস লোড হচ্ছে...</Text></View>
        }
        return (
            <View style={{padding:10, marginTop:10}}>
                <BorderBox title="আজকের হাদিস" collapsable={false}>
                    {hadis.name && hadis.name != 'na' ? <Text  style={style.text}>{hadis.name}</Text> : null}
                    <TitleRound><Text  style={style.text}>{hadis.desctiption}</Text></TitleRound>
                </BorderBox>
            </View>
        );
    }
}

export default RandomHadis;
const style = StyleSheet.create({
    container:{
        backgroundColor:'#EFF6F3'
    },
    
    top_minarWraper:{
        flex:1,
        flexDirection:'column',
        position:'relative',
    },
    top_minar:{
        width:'100%',
        height:200,
        marginBottom:20,
        borderBottomEndRadius:30,
        borderBottomStartRadius:30,
    },
    clockWraper:{
        fontSize:14,
        position:'absolute',
        left:0,
        bottom:44,
        color:'#fff',
        zIndex:10,
        width:'100%',
        textAlign:'center',
        fontWeight:'700'
    },
    topBg:{
        backgroundColor:"#59D8B2",
        paddingTop:20,
        paddingBottom:0,
        borderBottomEndRadius:70,
        borderBottomStartRadius:70,

    },
    gridWrapper:{
        backgroundColor:'#fff',
        marginTop:10,
        borderRadius:30,
        marginHorizontal:10,
        boxShadow:'0 0 10px rgba(0,0,0,.1)'
    },
    grid:{
        flex:1,
        flexWrap:'wrap',
        flexDirection:'row',
        justifyContent:'space-between',
        gap:5,
        padding:5,
    },
    gridTitle:{
        backgroundColor:'#9bf7dfff',
        color:'#018860ff',
        fontSize:20,
        paddingHorizontal:15,
        paddingVertical:5,
        width:'100%',
        borderRadius:30,
        textAlign:'center'
    },
    text:{
        fontSize:18,
        lineHeight:24,
        color:'#000'
    },
    boxShadow:{
        boxShadow:'0 2px 3px rgba(0,0,0,.5)',
    },
    footerWraper:{
        flex:1,
        flexDirection:'row',
        paddingVertical:5,
        paddingHorizontal:0,
        backgroundColor:'#0a6500ff',
        marginTop:10,
        marginBottom:20,
        marginHorizontal:10,
        borderRadius:30,
        boxShadow:'0 2px 3px rgba(0,0,0,.5)',
        overflow:'scroll'
    },
    footerMenuItem:{
        backgroundColor:'#fff',
        padding:8,
        borderRadius:20,
        color:'#0a6500ff',
        fontWeight:'700',
        fontSize:14,
        marginHorizontal:5,
    }
});