import { Component } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import SoraBox from '../../../components/widget/SoraBox';

class Index extends Component {
    render() {
        let items = [{name:'সূরা আল-ফাতিহা'},{name:'সূরা আল-বাকারা'},{name:'সূরা আলে ইমরান'},{name:'সূরা আন-নিসা'},{name:'সূরা আল-ফাতিহা'},{name:'সূরা আল-বাকারা'},{name:'সূরা আলে ইমরান'},{name:'সূরা আন-নিসা'},{name:'সূরা আল-ফাতিহা'},{name:'সূরা আল-বাকারা'},{name:'সূরা আলে ইমরান'},{name:'সূরা আন-নিসা'},{name:'সূরা আল-ফাতিহা'},{name:'সূরা আল-বাকারা'},{name:'সূরা আলে ইমরান'},{name:'সূরা আন-নিসা'},{name:'সূরা আল-ফাতিহা'},{name:'সূরা আল-বাকারা'},{name:'সূরা আলে ইমরান'},{name:'সূরা আন-নিসা'}]
        return (
            <ImageBackground
                style={style.background}
                resizeMode="cover"
                source={require('@/assets/images/bg-primary.jpg')}
            >
                <ScrollView>
                    <View style={style.container}>
                        <SoraBox topTitle="Bangla" title="আল-ফাতিহা">
                            <Text style={style.word}>সূরা</Text>
                            <Text style={style.word}>আল-ফাতিহা-ই</Text>
                            <Text style={style.word}>সর্বপ্রথম</Text>
                            <Text style={style.word}>কুরআন</Text>
                            <Text style={style.word}>মজীদের</Text>
                            <Text style={style.word}>একটি</Text>
                            <Text style={style.word}>পূর্ণাঙ্গ </Text>
                            <Text style={style.word}>সূরা </Text>
                        </SoraBox>
                        <SoraBox/>
                        <SoraBox/>
                    </View>
                </ScrollView>
            </ImageBackground>
                
        );
    }
}

export default Index;
const style = StyleSheet.create({
    background:{
        flex:1,
    },
    container:{
        padding:20
    },
    word:{
        fontSize:16,
        color:'#000'
    }
})