import Helper from '@/constants/Helper';
import { getTables, initDatabase, InsertMenuItem } from "@/database/db";
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';
export default function TabTwoScreen() {
  const setup = async () => {
      await initDatabase();
  };
  const getT = () => {
    getTables();
  }  
  const updateMenu =  () => {
    axios.get(Helper.apiUrl+'/p/menu/list')
    .then(res => {
      let jsonMenu = res.data.data;
      jsonMenu.forEach((jsonMenu: any) => {
        InsertMenuItem(jsonMenu)
      });
    })
    .catch(err => {
      console.error(err);
    });
  }
  return (
    <View>
      <Text style={{marginTop:150}} onPress={setup}>Create database</Text>
      <Text style={{marginTop:20}} onPress={getT}>Get Tablse</Text>
      <Text style={styles.button} onPress={updateMenu}>Menu Update</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  button:{
    color:"#fff",
    backgroundColor:"#000",
    padding:20,
    borderRadius:20,
    margin:10
  }
});

