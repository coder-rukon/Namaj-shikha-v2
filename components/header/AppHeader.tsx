import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
  title: string;
};
export default function AppHeader({ title }: Props) {
  const navigation = useNavigation();
  let rightText = 'বাংলা নামাজ শিক্ষা';
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.leftArea}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backBtn}
            >
            <Ionicons name="arrow-back" size={20} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View>
          <Text style={styles.titleRight}>বাংলা নামাজ শিক্ষা</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    backgroundColor:"#018F68",
    paddingTop:0,
    paddingBottom:20,
    borderBottomEndRadius:20,
    borderBottomStartRadius:20,
    minHeight:0,
    marginBottom:10
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingHorizontal: 16,
  },
  leftArea:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  backBtn: {
    paddingRight: 12,
    color:"#fff"
  },
  title: {
    fontSize: 18,
    fontWeight: '400',
    color:'#fff'
  },
  titleRight: {
    fontSize: 16,
    fontWeight: '400',
    backgroundColor:'#015a42ff',
    paddingHorizontal:10,
    paddingVertical:6,
    borderRadius:20,
    color:'#fff',
    marginTop:-5,
    marginBottom:-5
  },
});
