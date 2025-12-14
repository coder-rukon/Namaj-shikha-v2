import IconBox from '@/components/widget/IconBox';
import RoundBox from '@/components/widget/RoundBox';
import { Image } from 'expo-image';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import BorderBox from '../../components/widget/BorderBox';
import TitleRound from '../../components/widget/TitleRound';
const Home = () => {
    let items = [
        {title:'কালিমা',link:'/page/kalima'},
        {title:'সুরা',link:'/menu/kalima'},
        {title:'দোয়া',link:'/page/kalima'},
        {title:'হাদিস',link:'/page/kalima'},
        {title:'নামাজের গুরুত্ব ও ফযীলত',link:'/page/kalima'},
        {title:'ওযু করার নিয়ম',link:'/page/kalima'},
        {title:'ফরজ নামাজের নিয়ম',link:'/page/kalima'},
        {title:'সুন্নত নামাজের নিয়ম',link:'/page/kalima'},
        {title:'পাঁচ ওয়াক্ত নামাজের নিয়ম ',link:'/page/kalima'},
        {title:'মহিলাদের নামাজের নিয়ম',link:'/page/kalima'},
        {title:'তাহাজ্জুদ নামাজের নিয়ম',link:'/page/kalima'},
        {title:'Tasbeeh',link:'/page/tasbeeh'},
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
            <View style={style.grid}>
                {
                    items.map( (item,key) => {
                        return(
                            <IconBox title={item.title ? item.title : ''} link={item?.link} key={key}/>
                        )
                    })
                }
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
            <RoundBox title="পরিচ্ছেদঃ ৯৪. হিসাব ও শাস্তি ছাড়াই ">সাল্লাম বললেনঃ এ সুযোগ লাভে উক্কাশাহ তোমার অগ্রগামী হয়ে গেছে। (ইসলামিক ফাউন্ডেশনঃ ৪১৫, ইসলামিক সেন্টারঃ ৪২৯)</RoundBox>
            <RoundBox title="পরিচ্ছেদঃ ৯৪. হিসাব ও শাস্তি ছাড়াই ">সাল্লাম বললেনঃ এ সুযোগ লাভে উক্কাশাহ তোমার অগ্রগামী হয়ে গেছে। (ইসলামিক ফাউন্ডেশনঃ ৪১৫, ইসলামিক সেন্টারঃ ৪২৯)</RoundBox>
            
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
    grid:{
        flex:1,
        flexWrap:'wrap',
        flexDirection:'row',
        justifyContent:'center',
        gap:10,
        backgroundColor:'#fff',
        padding:20,
        marginTop:-30,
        borderRadius:30,
        marginHorizontal:10,
        boxShadow:'0 0 10px rgba(0,0,0,.1)'
    },
    text:{
        fontSize:18,
        lineHeight:24,
        color:'#000',
        marginVertical:10
    }
});