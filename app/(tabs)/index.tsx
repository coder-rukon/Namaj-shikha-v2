import IconBox from '@/components/widget/IconBox';
import RoundBox from '@/components/widget/RoundBox';
import { Image } from 'expo-image';
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
const Home = () => {
    let items = [{},{},{},{},{},{},{},{},{},{},{}]
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
                            <IconBox title="abcd" key={key}/>
                        )
                    })
                }
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
    }
});