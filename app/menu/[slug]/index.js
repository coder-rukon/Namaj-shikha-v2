import { Component } from 'react';
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import ListItem from '../../../components/widget/ListItem';

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
                    <View style={style.list}>
                        {
                            items.map( (item,key) => {
                                return(
                                    <ListItem key={key} item={item}/>
                                )
                            })
                        }
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
    list:{
        margin:10
    }
})