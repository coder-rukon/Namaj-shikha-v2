import { useNavigation } from '@react-navigation/native';
import { useLocalSearchParams, useRouter } from 'expo-router';
export function WithNavigation(Component) {
  return function (props) {
    const navigation = useNavigation();
    const router = useRouter();
    const params = useLocalSearchParams();

    return <Component {...props} navigation={navigation} params ={params} router = {router}  />;
  };
}