import RoundBox from '@/components/widget/RoundBox';
import { Image } from 'expo-image';
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
const Home = () => {
    return(
        <ScrollView style={style.container}>
            <ImageBackground
                style={style.topBg}
                resizeMode="cover"
            >
                <View style={style.topItems}>
                    <RoundBox title="পরিচ্ছেদঃ ৯৪. হিসাব ও শাস্তি ছাড়াই মুসলিমদের একাধিক দল জান্নাতে প্রবেশ করার প্রমাণ। ">৪১০-(৩৬৯/...) হারমালাহ ইবনু ইয়াহইয়া (রহঃ) ..... আবূ হুরাইরাহ (রাযিঃ) থেকে বর্ণিত। তিনি বলেন, আমি রাসূলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম কে বলতে শুনেছি, আমার উম্মতের একটি দল জান্নাতে প্রবেশ করবে। তাদের সংখ্যা হবে সত্তর হাজার। তাদের চেহারা পূর্ণিমার চাদের ন্যায় চমকাতে থাকবে। আবূ হুরাইরাহ (রাযিঃ) বলেন, তখন উক্কাশাহ ইবনু মিহসান আসাদী দাঁড়ালেন। তার গায়ে একটি চাঁদর ছিল। বললেন, ইয়া রাসূলাল্লাহ! আপনি আল্লাহর কাছে দু’আ করুন তিনি যেন আমাকেও তাদের অন্তর্ভুক্ত করে নেন। রাসূলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম বললেনঃ ইয়া আল্লাহ! একে তাদের অন্তর্ভুক্ত করে নিন। এরপর আরেকজন আনসারী দাঁড়িয়ে বললেন, ইয়া রাসূলাল্লাহ। আপনি আল্লাহর কাছে দু’আ করুন তিনি যেন আমাকেও তাদের অন্তর্ভুক্ত করে  নেন। রাসূলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম বললেনঃ এ সুযোগ লাভে উক্কাশাহ তোমার অগ্রগামী হয়ে গেছে। (ইসলামিক ফাউন্ডেশনঃ ৪১৫, ইসলামিক সেন্টারঃ ৪২৯)</RoundBox>
                    <Image contentFit="cover" style={style.top_minar} source={require('@/assets/images/hometopbg.png')} />
                </View>
            </ImageBackground>
        </ScrollView>
    )
}
export default Home;
const style = StyleSheet.create({
    container:{},
    top_minar:{
        width:'100%',
        height:200
    },
    topItems:{
        flex:1,
        flexDirection:'column'
    },
    topBg:{
        backgroundColor:"#59D8B2",
        paddingTop:20,
        paddingBottom:0
    }
});