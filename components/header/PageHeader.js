import { StyleSheet, Text, View } from 'react-native';
const PageHeader = (props) => {
    const {pageName} = props;
    return (
        <View style={styles.container}>
            <View>
                 <Text>Hello Header</Text>
            </View>
            <View>
            </View>
        </View>
    );
};

export default PageHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:'red'
    },
    menu:{
        color:'#fff',
        fontSize:30
    },
    sidelogo:{
        width:40,
        height:40,
        borderRadius:40,
        borderColor:"#fff",
        borderWidth:1
    },
    counter:{
        color:'#ff0000ff',
        fontWeight:400,
        fontSize:25,
        marginRight:'auto',
        marginLeft:'auto',
        backgroundColor:'#ffffff96',
        paddingLeft:20,
        paddingRight:20,
        borderRadius:40
    }
});
