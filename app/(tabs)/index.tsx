import IconBox from '@/components/widget/IconBox';
import RoundBox from '@/components/widget/RoundBox';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import BorderBox from '../../components/widget/BorderBox';
import Clock from '../../components/widget/Clock';
import TitleRound from '../../components/widget/TitleRound';
import IconNames from '../../constants/IconNames';
const Home = () => {
    let items = [
        {title:'সূরা',link:'/menu/8',icon:IconNames.sura},
        {title:'দোয়া',link:'/menu/9',icon:IconNames.dua},
        {title:'হাদিস',link:'/menu/7',icon:IconNames.default},
        {title:'আল্লাহর ৯৯টি নাম',link:'/page/allah-name',icon:IconNames.default},
        {title:'কালিমা',link:'/page/kalima',icon:IconNames.default},
        {title:'যিকির',link:'/page/1',icon:IconNames.default},
    ]
    let namajshikkha = [
        {title:'নামাজের নিয়ম',link:'/menu/6',icon:IconNames.default},
        {title:'আজান',link:'/page/16',icon:IconNames.default},
        {title:'ইকামাত',link:'/page/19',icon:IconNames.default}
    ]
    let pobitrotaItem = [
        {title:'ওযুর নিয়ম',link:'/page/12',icon:IconNames.default},
        {title:'ফরজ গোসল',link:'/page/17',icon:IconNames.default},
        {title:'তায়াম্মুম',link:'/page/18',icon:IconNames.default}
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
                                <IconBox title={item.title ? item.title : ''} link={item?.link} icon={item.icon} key={key}/>
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
                                <IconBox title={item.title ? item.title : ''} link={item?.link} icon={item.icon} key={key}/>
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
                                <IconBox title={item.title ? item.title : ''} link={item?.link} icon={item.icon} key={key}/>
                            )
                        })
                    }
                </View>
            </View>
             <RoundBox title="ইসলামে সালাতের গুরুত্ব ও ফযীলত" link='/page/2' style={{...style.boxShadow,marginBottom:0,backgroundColor:'#70078aff'}} >
                সালাত ফরজ হওয়ার শর্ত ও গুরুত্ব সমূহ ....
            </RoundBox>
            <RoundBox title="ফরজ সালাত শেষে আমল সমূহ" style={{...style.boxShadow,marginBottom:0}} link='/page/2'>
                ফরজ সালাত শেষ করে রাসূল (সা.)-এর আমলসমূহ যা প্রতিটি মুসলিমের জন্য অনুসরণীয় ....
            </RoundBox>  
            <View style={{padding:10, marginTop:10}}>
                <BorderBox title="আজকের হাদিস" collapsable={false}>
                    
                    <Text  style={style.text}> নু’আয়ম মুজমির (রহঃ) হতে বর্ণিতঃ</Text>
                    <TitleRound><Text  style={style.text}> আবূ হুরাইরা (রাঃ) হতে বর্ণিতঃ
তিনি বলেনঃ আল্লাহ্‌র রসূল (সাল্লাল্লাহু ‘আলাইহি ওয়া সাল্লাম) বলেছেনঃ ‘যে ব্যক্তির হাদাস হয় তার সালাত কবুল হবে না, যতক্ষণ না সে উযূ করে। হাযরা-মাওতের জনৈক ব্যক্তি বলল, ‘হে আবূ হুরাইরা! হাদাস কী? হাদাস কী?’ তিনি বললেন, ‘নিঃশব্দে বা সশব্দে বায়ু বের হওয়া।’</Text></TitleRound>
                </BorderBox>
            </View>
            <ScrollView horizontal  showsHorizontalScrollIndicator={false} style={style.footerWraper}>
                <Link style={style.footerMenuItem} href="/page/about-us">আমাদের সম্পর্কে</Link>
                <Link style={style.footerMenuItem} href="/page/thanks">ধন্যবাদ ও ক্রেডিট</Link>
                <Link style={style.footerMenuItem} href="https://wa.me/+8801733435951">রিপোর্ট করুন</Link>
                <Link style={style.footerMenuItem} href="https://www.facebook.com/bdnamajshikkha">ফেসবুক গ্রুপ</Link>
            </ScrollView>
        </ScrollView>
    )
}
export default Home;
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