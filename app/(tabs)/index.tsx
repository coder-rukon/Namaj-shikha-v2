import IconBox from '@/components/widget/IconBox';
import RoundBox from '@/components/widget/RoundBox';
import { Image } from 'expo-image';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import BorderBox from '../../components/widget/BorderBox';
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
    return(
        <ScrollView style={style.container}>
            <ImageBackground
                style={style.topBg}
                resizeMode="cover"
            >
                <View style={style.topItems}>
                    <Image contentFit="cover" style={style.top_minar} source={require('@/assets/images/hometopbg.png')} />
                </View>
                
            </ImageBackground>
            <View style={{...style.gridWrapper, marginTop:-50}}>
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
            <RoundBox title="ইসলামে সালাতের গুরুত্ব ও ফযীলত" link='/page/2' style={style.boxShadow}>
                সালাত ফরজ হওয়ার শর্ত ও গুরুত্ব সমূহ
            </RoundBox>
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
            <RoundBox title="ফরজ সালাত শেষে আমল সমূহ" style={{...style.boxShadow}} link='/page/2'>
                ফরজ সালাত শেষ করে রাসূল (সা.)-এর আমলসমূহ যা প্রতিটি মুসলিমের জন্য অনুসরণীয় 
                <Text style={{color:'#bd0606ff'}}> বিস্তারিত দেখুন</Text>
            </RoundBox>            
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
            <View style={{padding:10, marginTop:10}}>
                <BorderBox title="আজকের হাদিস" collapsable={false}>
                    
                    <Text  style={style.text}> নু’আয়ম মুজমির (রহঃ) হতে বর্ণিতঃ</Text>
                    <TitleRound><Text  style={{...style.text,fontSize:20,lineHeight:28,direction:'rtl'}}>حَدَّثَنَا إِسْحَاقُ بْنُ إِبْرَاهِيمَ الْحَنْظَلِيُّ، قَالَ أَخْبَرَنَا عَبْدُ الرَّزَّاقِ، قَالَ أَخْبَرَنَا مَعْمَرٌ، عَنْ هَمَّامِ بْنِ مُنَبِّهٍ، أَنَّهُ سَمِعَ أَبَا هُرَيْرَةَ، يَقُولُ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏ "‏ لاَ تُقْبَلُ صَلاَةُ مَنْ أَحْدَثَ حَتَّى يَتَوَضَّأَ ‏"‏‏.‏ قَالَ رَجُلٌ مِنْ حَضْرَمَوْتَ مَا الْحَدَثُ يَا أَبَا هُرَيْرَةَ قَالَ فُسَاءٌ أَوْ ضُرَاطٌ‏.‏</Text></TitleRound>
                    <TitleRound><Text  style={style.text}> আবূ হুরাইরা (রাঃ) হতে বর্ণিতঃ
তিনি বলেনঃ আল্লাহ্‌র রসূল (সাল্লাল্লাহু ‘আলাইহি ওয়া সাল্লাম) বলেছেনঃ ‘যে ব্যক্তির হাদাস হয় তার সালাত কবুল হবে না, যতক্ষণ না সে উযূ করে। হাযরা-মাওতের জনৈক ব্যক্তি বলল, ‘হে আবূ হুরাইরা! হাদাস কী? হাদাস কী?’ তিনি বললেন, ‘নিঃশব্দে বা সশব্দে বায়ু বের হওয়া।’</Text></TitleRound>
                    <Text  style={style.text}> অনুবাদ ঃ আমি সাক্ষ্য দিতেছি যে , অল্লাহ ভিন্ন আর কেহই ইবাদতের উপযুক্ত নাই তিনি এক তাঁহার কোন অংশীদার নাই । আমি আরও সাক্ষ্য দিতেছি যে, হযরত মুহাম্মদ (সাল্লাহু আলাইহে ওয়া সাল্লাম) আল্লাহর শ্রেষ্ঠ বান্দা এবং তাঁহার প্রেরিত নবী ।</Text>
                </BorderBox>
            </View>
        </ScrollView>
    )
}
export default Home;
const style = StyleSheet.create({
    container:{
        backgroundColor:'#EFF6F3'
    },
    top_minar:{
        width:'100%',
        height:200,
        marginBottom:20,
        borderBottomEndRadius:30,
        borderBottomStartRadius:30,
    },
    topItems:{
        flex:1,
        flexDirection:'column'
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
        marginTop:5,
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
        backgroundColor:'#02855eff',
        color:'#fff',
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
        boxShadow:'0 4px 4px rgba(0,0,0,.5)',
    }
});