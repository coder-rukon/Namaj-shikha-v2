import IconBox from '@/components/widget/IconBox';
import RoundBox from '@/components/widget/RoundBox';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import RandomHadis from '../../components/hadis/RandomHadis';
import Clock from '../../components/widget/Clock';
import IconNames from '../../constants/IconNames';
const Home = () => {
    let items = [
        {title:'সূরা',link:'/menu/8',iconName:null,icon:IconNames.quran},
        {title:'দোয়া',link:'/dua',iconName:null,icon:IconNames.dua},
        {title:'যিকির',link:'/menu/16',iconName:null,icon:IconNames.tajbe},
        {title:'হজ',link:'/menu/17',iconName:null,icon:IconNames.haj},
        {title:'যাকাত',link:'/page/20',iconName:null,icon:IconNames.jakat},
        {title:'আল্লাহর নাম',link:'/page/allah-name',iconName:null,icon:IconNames.allah_name},
        {title:'হাদিস',link:'/menu/7',iconName:null,icon:IconNames.hadis},
        {title:'কালিমা',link:'/page/kalima',iconName:null,icon:IconNames.default}
    ]
    let namajshikkha = [
        {title:'নামাজের গুরুত্ব',link:'/page/2',iconName:'information-outline',icon:null},
        {title:'নামাজের নিয়ম',link:'/menu/6',iconName:'format-list-text',icon:null},
        {title:'নামাজের দোয়া',link:'/menu/12',iconName:null,icon:IconNames.dua},
        {title:'নামাজের সূরা',link:'/menu/18',iconName:null,icon:IconNames.quran},
        {title:'মসজিদের আদব',link:'/page/22',iconName:null,icon:IconNames.handSheekh},
        {title:'আজান/ইকামাত',link:'/menu/19',iconName:null,icon:IconNames.ajan}
    ]
    let pobitrotaItem = [
        {title:'ওযু',link:'/menu/20',iconName:'hand-wash-outline',icon:null},
        {title:'ফরজ গোসল',link:'/page/17',iconName:'shower-head',icon:null},
        {title:'তায়াম্মুম',link:'/page/18',iconName:'hand-wash',icon:null}
    ]
    let time = new Date();
    let dateString = time.toLocaleDateString('bn-BD', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
    return(
        <ScrollView style={style.container}>
            <ImageBackground
                style={style.topBg}
                resizeMode="cover"
            >
                <View style={style.top_minarWraper}>
                    <Text style={style.clockWraper}>
                        <Clock/>
                        {`\n`}
                        <Text>{dateString}</Text>
                    </Text>
                    <Image contentFit="cover" style={style.top_minar} source={require('@/assets/images/hometopbg.png')} />
                </View>
                
            </ImageBackground>
            <View style={{...style.gridWrapper, marginTop:-40}}>
                <View style={style.grid}>
                    {
                        items.map( (item,key) => {
                            return(
                                <IconBox size="sm" title={item.title ? item.title : ''} link={item?.link} icon={item.icon} iconName={item.iconName} key={key}/>
                            )
                        })
                    }
                </View>
            </View>
            
            <View style={style.gridWrapper}>
                <Text style={style.gridTitle}>নামাজ শিক্ষা</Text>
                <View style={style.grid}>
                    {
                        namajshikkha.map( (item,key) => {
                            return(
                                <IconBox title={item.title ? item.title : ''} link={item?.link} icon={item.icon} iconName={item.iconName} key={key}/>
                            )
                        })
                    }
                </View>
            </View>
                     
            <View style={style.gridWrapper}>
                <Text style={style.gridTitle}>পবিত্রতা</Text>
                <View style={style.grid}>
                    {
                        pobitrotaItem.map( (item,key) => {
                            return(
                                <IconBox title={item.title ? item.title : ''} link={item?.link} icon={item.icon} iconName={item.iconName} key={key}/>
                            )
                        })
                    }
                </View>
            </View>
            
            
            <RoundBox title="ফরজ সালাত শেষে আমল সমূহ" style={{...style.boxShadow,marginBottom:0}} link='/page/2'>
                ফরজ সালাত শেষ করে রাসূল (সা.)-এর আমলসমূহ যা প্রতিটি মুসলিমের জন্য অনুসরণীয় ....
            </RoundBox>
            <View style={{gap:5, flexDirection:'row', flexWrap:'wrap', justifyContent:'center'}}>
                    <View style={{width:'49%'}}>
                        <RoundBox title="ইসলামে সালাতের গুরুত্ব ও ফযীলত" link='/page/2' style={{...style.boxShadow,marginBottom:0,backgroundColor:'#70078aff'}} >
                            সালাত ফরজ হওয়ার শর্ত ও গুরুত্ব সমূহ ....
                        </RoundBox>
                    </View>
                    <View style={{width:'49%'}}>
                        <RoundBox title="মসজিদের আদব" link='/page/2' style={{...style.boxShadow,marginBottom:0,backgroundColor:'#0973f4ff'}} >
                            সালাত ফরজ হওয়ার শর্ত ও গুরুত্ব সমূহ ....
                        </RoundBox>
                    </View>
            </View>
            <RandomHadis/>
            <View style={style.footerWraper}>
                <Link style={style.footerMenuItem} href="/page/about-us">আমাদের সম্পর্কে</Link>
                <Link style={style.footerMenuItem} href="/page/thanks">ধন্যবাদ ও ক্রেডিট</Link>
                <Link style={style.footerMenuItem} href="https://wa.me/+8801733435951">যোগাযোগ করুন</Link>
            </View>
            <Image contentFit="cover" style={style.footer_image} source={require('@/assets/images/hometopbg.png')} />
        </ScrollView>
    )
}
export default Home;
const style = StyleSheet.create({
    container:{
        backgroundColor:'#EFF6F3'
    },
    footer_image:{
        width:'100%',
        height:150,
        opacity:0.5,
        position:'absolute',
        bottom:0,
        left:0,
        zIndex:-1
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
        color:'#000',
        marginVertical:10
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
        alignItems:'center',
        justifyContent:'center',
    },
    footerMenuItem:{
        backgroundColor:'#fff',
        padding:7,
        borderRadius:20,
        color:'#0a6500ff',
        fontWeight:'700',
        fontSize:13,
        marginHorizontal:3,
    }
});