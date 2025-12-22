import AppHeader from '@/components/header/AppHeader';
import { Component } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text } from 'react-native';
import { WithNavigation } from '../../../components/hoc/withNavigation';
import Profile from '../../../components/widget/Profile';
import RoundBox from '../../../components/widget/RoundBox';
import TitleRound from '../../../components/widget/TitleRound';
class Index extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        
        this.props.navigation.setOptions({
            headerShown: false, // 👈 Hide header from inside the class
        });
    }
    render() {
        let allahName = require('@/assets/files/allahnames.json');

        return (
            <>
            <AppHeader title="কৃতজ্ঞতা ও ক্রেডিট"/>
            <ScrollView>
                <ImageBackground
                    style={style.container}
                    resizeMode="cover"
                >
                    <TitleRound style={{marginBottom:10}}>
                        <Text style={style.text}><Text style={style.textBold}> আলহামদুলিল্লাহ! </Text>
                         সর্বপ্রথম আল্লাহর প্রশংসা করছি যিনি আমাদেরকে এটি করার শক্তি দিয়েছেন। প্রিয় নবী মুহাম্মদ এর উপর অসংখ্য দরুদ ও সালাম বর্ষিত হোক</Text>
                        <Text style={style.text}>এই প্রকল্পে অনেক মানুষ আমাদের সাহায্য করেছেন, আমরা তাদের প্রতি কৃতজ্ঞ। আল্লাহ তাআলা তাদের উত্তম প্রতিদান দিন। আমীন।</Text>
                        <Text style={style.text}><Text style={style.textBold}> বাংলা নামাজ শিক্ষা</Text> অ্যাপটি তৈরি করার সময় বিভিন্ন নির্ভরযোগ্য ইসলামিক ওয়েবসাইট, মোবাইল অ্যাপ, বই ও অনলাইন রিসোর্স থেকে প্রয়োজনীয় ধারণা, তথ্য ও অনুপ্রেরণা গ্রহণ করা হয়েছে।</Text>
                        <Text style={style.text}>আমরা কৃতজ্ঞতা প্রকাশ করছি সেই সকল ইসলামিক কনটেন্ট নির্মাতা, আলেম, শিক্ষাবিদ এবং ডেভেলপারদের প্রতি, যাঁরা আন্তরিকতার সাথে দ্বীনের জ্ঞান ছড়িয়ে দেওয়ার জন্য কাজ করে যাচ্ছেন। তাঁদের গবেষণা, লেখা ও উপস্থাপনা আমাদের এই অ্যাপ তৈরিতে সহায়ক হয়েছে।</Text>
                        <Text style={style.text}>যদি কোনো কনটেন্টের স্বত্বাধিকারী মনে করেন যে তাঁদের কাজ যথাযথভাবে উল্লেখ হয়নি বা আলাদা করে ক্রেডিট দেওয়ার প্রয়োজন রয়েছে, তাহলে অনুগ্রহ করে আমাদের সাথে যোগাযোগ করার জন্য অনুরোধ করা হলো। আমরা বিষয়টি গুরুত্বের সাথে বিবেচনা করব ইনশাআল্লাহ।</Text>
                        <Text style={style.text}>আল্লাহ তাআলা যেন দ্বীনের খেদমতে নিয়োজিত সকলের প্রচেষ্টা কবুল করেন এবং আমাদের সবাইকে সঠিক জ্ঞান অনুযায়ী আমল করার তাওফিক দান করেন। আমীন।</Text>
                        <Text style={style.text}><Text style={style.textBold}>রেফারেন্স অ্যাপ , বই  ও ওয়েবসাইটসমূহ</Text></Text>
                        <Text style={style.text}>
                            {`- Quran.com \n- ihadis.com \n- alqurans.com \n- ইসলামিক বই ও অনলাইন রিসোর্সসমূহ`}
                        </Text>
                    </TitleRound>
                    <TitleRound>
                        <RoundBox><Text style={style.textBold}>অ্যাপ ডেভেলপ করেছেন</Text></RoundBox>
                        <Profile title="Md Rukon Shekh" subtitle="Full stack developer" image={require('@/assets/images/developer.png')} contact="rukon.info@gmail.com"></Profile>
                        <RoundBox><Text style={style.textBold}>কনটেন্ট যাচায়ে সাহায্য করেছেন</Text></RoundBox>
                        <Profile title="Md Rukon Shekh" subtitle="Full stack developer" image={require('@/assets/images/developer.png')} contact="rukon.info@gmail.com"></Profile>
                        <Profile title="Md Rukon Shekh" subtitle="Full stack developer" image={require('@/assets/images/developer.png')} contact="rukon.info@gmail.com"></Profile>
                        <RoundBox><Text style={style.textBold}>ডাটা এন্ট্রি করতে সাহায্য করেছেন</Text></RoundBox>
                        <Profile title="Md Rukon Shekh" subtitle="Full stack developer" image={require('@/assets/images/developer.png')} contact="rukon.info@gmail.com"></Profile>
                    </TitleRound>


                </ImageBackground>
            </ScrollView>
            </>
        );
    }
}

export default WithNavigation(Index);
const style = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:15,
        paddingVertical:10,
        backgroundColor:'#ecf4edff'
    },
    textBold:{
        fontWeight:'bold',
    },
    text:{
        fontSize:16,
        lineHeight:24,
        color:'#000',
        marginBottom:10
    }
});