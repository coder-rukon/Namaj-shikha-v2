import Helper from '@/constants/Helper';
import { clearTables, deleteDatabase, getAppContentTable, getMenuTable, initDatabase, insertAppContentItem, InsertMenuItem } from "@/database/db";
import axios from 'axios';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
export default function TabTwoScreen() {
  const setup = async () => {
      await initDatabase();
  };
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
  const updateAppContents =  () => {
    axios.get(Helper.apiUrl+'/app-content/list')
    .then(res => {
      let data = res.data.data;
      data.forEach((dataItem: any) => {
        insertAppContentItem(dataItem)
        //InsertMenuItem(jsonMenu)
      });
    })
    .catch(err => {
      console.error(err);
    });
  }
  
  return (
    <ScrollView>

      <View>
        <Text style={{...styles.button,marginTop:70}} onPress={e => { deleteDatabase()}}>Delete Database</Text>
        <Text style={{...styles.button}} onPress={setup}>Create database</Text>
        <Text style={styles.button} onPress={ e => { clearTables()}}>Clear All Tables</Text>
        <Text style={styles.button} onPress={updateMenu}>Update Menu Table</Text>
        <Text style={styles.button} onPress={e => { getMenuTable() }}> Print Menu Table</Text>
        <Text style={styles.button} onPress={updateAppContents}>Update Content Database</Text>
        <Text style={styles.button} onPress={ e => { getAppContentTable()}}>Print Content Table</Text>
      </View>
    </ScrollView>
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

