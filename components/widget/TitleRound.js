import { StyleSheet, View } from "react-native";

const TitleRound = (props)=> {
    let containterStyle = style.container;
    if(props.style){
        containterStyle = {
            ...style.container,
            ...props.style
        }
    }
    return(
        <View style={containterStyle}>
            {props.children}
        </View>
    )
}
export default TitleRound;
const style = StyleSheet.create({
    container:{
        backgroundColor:'#daf9e6ff',
        borderColor:'#67b082ff',
        padding:10,
        borderRadius:4,
        borderWidth:1,
        marginBottom:10
    },
    text:{
        fontSize:16,
        color:'#000',
        fontWeight:400
    }
})