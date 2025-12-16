import AppHeader from '@/components/header/AppHeader';
import { Component } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text } from 'react-native';
import { WithNavigation } from '../../../components/hoc/withNavigation';
import BorderBox from '../../../components/widget/BorderBox';
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
            <AppHeader title="আল্লাহর ৯৯টি নাম"/>
            <ScrollView>
                <ImageBackground
                    style={style.container}
                    resizeMode="cover"
                >
                    {
                        allahName.map( (allahNam , key) => {
                            return(
                                <BorderBox key={key} title={ allahNam.bangla} titleRight={allahNam.arabic} collapsable={false}>
                                    <TitleRound><Text collapsable={false} style={style.text}>{allahNam.meaning}</Text></TitleRound>
                                </BorderBox>
                            )
                        })
                    }
                    

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