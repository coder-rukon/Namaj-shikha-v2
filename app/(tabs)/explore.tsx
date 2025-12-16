import { getTables, initDatabase } from "@/database/db";
import { StyleSheet, Text, View } from 'react-native';
export default function TabTwoScreen() {
  const setup = async () => {
      await initDatabase();
  };
  const getT = () => {
    getTables();
  }
  return (
    <View>
      <Text style={{marginTop:150}} onPress={setup}>Create database</Text>
      <Text style={{marginTop:150}} onPress={getT}>Get Tablse</Text>
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
});
