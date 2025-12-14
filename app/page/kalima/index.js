import { Component } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text } from 'react-native';
import BorderBox from '../../../components/widget/BorderBox';
import TitleRound from '../../../components/widget/TitleRound';

class Index extends Component {
    render() {
        return (
            <ScrollView>
                <ImageBackground
                    style={style.container}
                    resizeMode="cover"
                >
                    <BorderBox title="(১)কালেমা তাইয়্যেবা:" titleRight="كلمة طيبة" collapsable={false}>
                        <TitleRound><Text collapsable={false} style={{...style.text,fontSize:20,lineHeight:28,direction:'rtl'}}> لاَ اِلَهَ اِلاَّ اللهُ مُحَمَّدُ رَّسُوْ لُ الله</Text></TitleRound>
                        <TitleRound><Text collapsable={false} style={style.text}>উচ্চারণ ঃ লা-ইলাহা ইল্লাল্লাহু মুহাম্মাদুর রাসূলুল্লাহ ।</Text></TitleRound>
                        <Text collapsable={false} style={style.text}>অনুবাদ ঃ আল্লাহ ভিন্ন ইবাদত বন্দেগীর উপযুক্ত আর কেহই নাই । হযরত মুহাম্মদ ছাল্লাল্লাহু আলাইহি ওয়াছাল্লাম তাঁহার প্রেরিত রসূল ।</Text>
                    </BorderBox>

                    <BorderBox title="(২)কালেমা শাহাদত:" titleRight="كلمة طيبة" collapsable={false}>
                        <TitleRound><Text collapsable={false} style={{...style.text,fontSize:20,lineHeight:28,direction:'rtl'}}> اَشْهَدُ اَنْ لاَّ اِلَهَ اِلاَّ اللهُ وَحْدَهُ لاَشَرِيْكَ لَه' وَاَشْهَدُ اَنَّ مُحَمَّدًا عَبْدُه' وَرَسُوْلُه'</Text></TitleRound>
                        <TitleRound><Text collapsable={false} style={style.text}> উচ্চারন ঃ আশহাদু আল লা-ইলাহা ইল্লাল্লাহু ওহদাহু লা-শারীকালাহু ওয়াশহাদু আন্না মুহাম্মাদান আবদুহু ওয়া রাছুলুহু ।</Text></TitleRound>
                        <Text collapsable={false} style={style.text}> অনুবাদ ঃ আমি সাক্ষ্য দিতেছি যে , অল্লাহ ভিন্ন আর কেহই ইবাদতের উপযুক্ত নাই তিনি এক তাঁহার কোন অংশীদার নাই । আমি আরও সাক্ষ্য দিতেছি যে, হযরত মুহাম্মদ (সাল্লাহু আলাইহে ওয়া সাল্লাম) আল্লাহর শ্রেষ্ঠ বান্দা এবং তাঁহার প্রেরিত নবী ।</Text>
                    </BorderBox>

                    <BorderBox title="(৩)কালেমা তাওহীদ:" titleRight="كلمة طيبة" collapsable={false}>
                        <TitleRound><Text collapsable={false} style={{...style.text,fontSize:20,lineHeight:28,direction:'rtl'}}> لاَ اِلَهَ اِلاَّ اَنْتَ وَاحِدَ لاَّثَانِىَ لَكَ مُحَمَّدُرَّ سُوْلُ اللهِ اِمَامُ الْمُتَّقِيْنَ رَسُوْ لُرَبِّ الْعَلَمِيْنَ</Text></TitleRound>
                        <TitleRound><Text collapsable={false} style={style.text}>উচ্চারণ ঃ লা-ইলাহা ইল্লা আনতা ওয়াহেদাল্লা ছানীয়ালাকা মুহাম্মাদুর রাসূলুল্লা ইমামুল মোত্তাকীনা রাছুলুরাবি্বল আলামীন ।</Text></TitleRound>
                        <Text collapsable={false} style={style.text}> অনুবাদ ঃ আল্লাহ ভিন্ন কেহ এবাদতের যোগ্য নাই । তিনি এক তাঁহার অংশীদার নাই মুহাম্মদ রাসুলুল্লাহ (সাল্লাহু আলাইহে ওয়া সাল্লাম) সোত্তাকীনদের (ধর্মভীরুগণের) ইমাম এবং বিশ্বপালকের প্রেরিত ।</Text>
                    </BorderBox>
                    <BorderBox title="(৪)কালেমা তামজীদ" titleRight="كلمة طيبة" collapsable={false}>
                        <TitleRound><Text collapsable={false} style={{...style.text,fontSize:20,lineHeight:28,direction:'rtl'}}> لاَ اِلَهَ اِلاَّ اَنْتَ نُوْرَ يَّهْدِىَ اللهُ لِنُوْرِهِ مَنْ يَّشَاءُ مُحَمَّدُ رَّسَوْ لُ اللهِ اِمَامُ الْمُرْسَلِيْنَ خَا تَمُ النَّبِيِّنَ</Text></TitleRound>
                        <TitleRound><Text collapsable={false} style={style.text}> উচ্চারন ঃ লা-ইলাহা ইল্লা আনতা নুরাইইয়াহ দিয়াল্লাহু লিনুরিহী মাইয়্যাশাউ মুহাম্মাদুর রাসূলুল্লাহি ইমামূল মুরছালীনা খাতামুন-নাবিয়্যীন ।</Text></TitleRound>
                        <Text collapsable={false} style={style.text}> অনুবাদ ঃ হে খোদা! তুমি ব্যতীত কেহই উপাস্য নাই, তুমি জ্যোতিময় । তুমি যাহাকে ইচ্ছা আপন জ্যোতিঃ প্রদর্শন কর । মুহাম্মদ (সাল্লাহু আলাইহে ওয়া সাল্লাম) প্রেরিত পয়গম্বরগণের ইমাম এবং শেষ নবী।</Text>
                    </BorderBox>
                    <BorderBox title="(৫)কালেমা রদ্দেকুফর:" titleRight="كلمة طيبة" collapsable={false}>
                        <TitleRound><Text collapsable={false} style={{...style.text,fontSize:20,lineHeight:28,direction:'rtl'}}> اَللَّهُمَّ اِنِّىْ اَعُوْذُبِكَ مِنْ اَنْ اُشْرِكَ بِكَ شَيْئً وَاَنَا اعَلَمُ بِهِ وَاَسْتَغْفِرُكَ لِمَا اعَلَمُ بِهِ وَمَا لاَاعَلَمُ بِهِ تُبْتُ عَنْهُ وَتَبَرَّأتُ مِنَ الْكُفْرِ وَالشِّرْكِ وَالْمَعَاصِىْ كُلِّهَا وَاَسْلَمْتُ وَاَمَنْتُ وَاَقُوْلُ اَنْ لاَّاِلَهَ اِلاَّاللهُ مُحَمَّدُ رَّسَوْلُ اللهِ –</Text></TitleRound>
                        <TitleRound><Text collapsable={false} style={style.text}> উচ্চারণ ঃ আল্লাহুম্মা ইন্নী আউযুবিকা মিন আন উশরিকা বিকা শাইআও ওয়া আনা আলামু বিহি ওয়া আসতাগ ফিরুকা লিমা আলামু বিহি ওয়ামা লা আলামু বিহি তুবতু আনহু ওয়া তাবাররাতু মিনাল কুফরি ওয়াশ্শির্কি ওয়াল মা আছি কুল্লিহা ওয়া আসলামতু ওয়া আমানতু ওয়া আক্বলু আল্লা ইলাহা ইল্লাল্লাহু মুহাম্মাদু রাসূলুল্লাহ ।</Text></TitleRound>
                        <Text collapsable={false} style={style.text}> অনুবাদ ঃ হে আল্লাহ! আমি তোমার নিকট আশা করছি, যেন কাহাকেও তোমান সহিত অংশীদার না করি । আমার জানা-অজানা গুনাহ হতে ক্ষমা চাহিতেছি এবং ইহা হতে তওবা করিতেছি । কুফর, শিরক এবং অন্যান্য সমস্ত গুনাহ হতে বিদুরীত হইতেছি এবং প্রতিজ্ঞা করিতেছি আল্লাহ ব্যতীত অন্য কোন মাবুদ নাই, মুহাম্মদ মুস্তফা (সাল্লাহু আলাইহে ওয়া সাল্লাম) তাঁহার রাসুল ।</Text>
                    </BorderBox>
                </ImageBackground>
            </ScrollView>
        );
    }
}

export default Index;
const style = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:20,
        paddingVertical:10,
        backgroundColor:'#ecf4edff'
    },
    text:{
        fontSize:18,
        lineHeight:24,
        color:'#000'
    }
});