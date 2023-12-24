import { StatusBar } from 'expo-status-bar';
import { Text, View,Image,SafeAreaView , NativeModules  } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';



export default function App() {
  
  const { StatusBarManager } = NativeModules;
  const Stack = createNativeStackNavigator();

  return (
    <View className='h-full w-full' style={{
      paddingTop: StatusBarManager.HEIGHT,
    }}>
      
      <StatusBar style='light' backgroundColor='black' />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="splash">
          <Stack.Screen name='splash' options={{headerShown:false}} component={SplashScreen} />
          <Stack.Screen name='home' options={{headerShown:false}} component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>

    </View>
  );
}

