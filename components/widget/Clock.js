import { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";

const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);
       // let tiemeString = time.toLocaleTimeString( { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    let timeString = currentTime.toLocaleTimeString('bn-BD',{ hour: '2-digit', minute: '2-digit', second: '2-digit' });
    let amPM = timeString.includes('AM') ? 'am' : 'pm';
    timeString = timeString.replace(' AM', '').replace(' PM', '');
    return(
        <Text style={styles.clock}>{timeString}</Text>
    );
};

export default Clock;
const styles = StyleSheet.create({
    clock:{
        fontSize:24,
        color:'#fff',
        fontWeight:'700',
        textAlign:'center',
    }
});