import AppHeader from '@/components/header/AppHeader';
import { Component } from 'react';
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import { WithNavigation } from '../../../components/hoc/withNavigation';
import ListItem from '../../../components/widget/ListItem';

class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            menuName:'Menu'
        }
    }
    componentDidMount() {
        
        this.props.navigation.setOptions({
            headerShown: false, // 👈 Hide header from inside the class
        });
    }
    render() {
        let items = [{name:'সূরা আল-ফাতিহা'},{name:'সূরা আল-বাকারা'},{name:'সূরা আলে ইমরান'},{name:'সূরা আন-নিসা'},{name:'সূরা আল-ফাতিহা'},{name:'সূরা আল-বাকারা'},{name:'সূরা আলে ইমরান'},{name:'সূরা আন-নিসা'},{name:'সূরা আল-ফাতিহা'},{name:'সূরা আল-বাকারা'},{name:'সূরা আলে ইমরান'},{name:'সূরা আন-নিসা'},{name:'সূরা আল-ফাতিহা'},{name:'সূরা আল-বাকারা'},{name:'সূরা আলে ইমরান'},{name:'সূরা আন-নিসা'},{name:'সূরা আল-ফাতিহা'},{name:'সূরা আল-বাকারা'},{name:'সূরা আলে ইমরান'},{name:'সূরা আন-নিসা'}]
        return (
            <ImageBackground
                style={style.background}
                resizeMode="cover"
                source={require('@/assets/images/bg-primary.jpg')}
            >
                <AppHeader title={this.state.menuName}/>
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

export default WithNavigation(Index);
const style = StyleSheet.create({
    background:{
        flex:1,
    },
    list:{
        margin:10
    }
})