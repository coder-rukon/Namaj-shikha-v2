import AppHeader from '@/components/header/AppHeader';
import RoundBox from '@/components/widget/RoundBox';
import { Image } from 'expo-image';
import { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
class Ramadan extends Component {
    render() {
        return (
            <ScrollView>
                <AppHeader title="পবিত্র রমজান" containerStyle={{marginBottom: 0, borderBottomEndRadius: 0,borderBottomStartRadius:0}}/>
                <Image source={require('@/assets/images/app_top_bg.png')}  contentFit="fill" style={{width:'100%',height:70}} />
                <RoundBox title="ইসলামিক ফাউন্ডেশন কর্তৃক ২০২৬ সালের রমজান মাসের চূড়ান্ত সময়সূচি প্রকাশ করা হলে, সে অনুযায়ী ইফতার ও সেহরির সময়সূচি এই অ্যাপে প্রদর্শন করা হবে।" link='#' style={{...style.boxShadow,marginBottom:0,backgroundColor:'#f1ae4aff'}} >
                    ২০২৬ সালে পবিত্র রমজান মাস চাঁদ দেখার ওপর নির্ভর করে শুরু হবে। সম্ভাব্য হিসেবে রমজান মাস ১৯ অথবা ২০ ফেব্রুয়ারি থেকে শুরু হতে পারে।
                    
                </RoundBox>
            </ScrollView>
        );
    }
}

export default Ramadan;
const style = StyleSheet.create({
    boxShadow:{
        boxShadow:'0 2px 3px rgba(0,0,0,.5)',
    }
});