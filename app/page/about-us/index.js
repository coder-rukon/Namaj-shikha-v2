import AppHeader from '@/components/header/AppHeader';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Component } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { WithNavigation } from '../../../components/hoc/withNavigation';
import BorderBox from '../../../components/widget/BorderBox';
import Profile from '../../../components/widget/Profile';
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
            <AppHeader title="আমাদের সম্পর্কে"/>
            <ScrollView>
                <ImageBackground
                    style={style.container}
                    resizeMode="cover"
                >
                    <TitleRound style={{marginBottom:10}}>
                        <Text style={style.text}><Text style={style.textBold}> বাংলা নামাজ শিক্ষা </Text>একটি ইসলামিক শিক্ষামূলক অ্যাপ, যার মূল উদ্দেশ্য হলো সহজ ও সুন্দরভাবে নামাজ শিক্ষা প্রদান করা। এই অ্যাপটি তৈরি করা হয়েছে যাঁরা সঠিকভাবে নামাজ শিখতে চান—তাঁদের জন্য।</Text>
                        <Text style={style.text}>
                            {`আমাদের লক্ষ্য হলো— \n * নামাজ শিক্ষাকে সহজ করা \n * ইসলামিক জ্ঞান বাংলাভাষীদের কাছে সহজভাবে পৌঁছে দেওয়া \n * প্রযুক্তির মাধ্যমে দ্বীনের খেদমত করা`}
                        </Text>
                        <Text style={style.text}>আমরা আশা করি, এই অ্যাপটি আপনার নামাজ শেখা ও আমলে সহায়ক হবে। কোনো ভুলত্রুটি বা পরামর্শ থাকলে আমাদের জানালে আমরা কৃতজ্ঞ থাকব।</Text>
                        <Text style={style.text}>আল্লাহ তাআলা যেন আমাদের এই ক্ষুদ্র প্রচেষ্টা কবুল করেন। আমীন।</Text>
                    </TitleRound>
                    <BorderBox style={{marginBottom:10}} title="অ্যাপ ডেভেলপার" hideFooter={true}>
                        <Profile title="Md Rukon Shekh" subtitle="Full stack developer" image={require('@/assets/images/developer.png')} contact="rukon.info@gmail.com">
                            <View style={{flexDirection:'row',gap:8}}>
                                <Link href={'https://www.linkedin.com/in/rukon'}><MaterialCommunityIcons name="linkedin" size={25} color="#0A66C2" /></Link>
                                <Link href={'https://github.com/coder-rukon'}><MaterialCommunityIcons name="github" size={25} color="#181717" /></Link>
                                <Link href={'https://www.facebook.com/sm.rukon'}><MaterialCommunityIcons name="facebook" size={25} color="#1877F2" /></Link>
                                <Link href={'https://wa.me/+8801733435951'}><MaterialCommunityIcons name="whatsapp" size={25} color="#25D366" /></Link>
                            </View>
                        </Profile>
                        <Text style={style.text}><Text style={style.textBold}> বাংলা নামাজ শিক্ষা </Text>একটি ইসলামিক শিক্ষামূলক অ্যাপ, যার মূল উদ্দেশ্য হলো সহজ ও সুন্দরভাবে নামাজ শিক্ষা প্রদান করা। এই অ্যাপটি তৈরি করা হয়েছে যাঁরা সঠিকভাবে নামাজ শিখতে চান—তাঁদের জন্য।</Text>

                    </BorderBox>

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