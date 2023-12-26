import { StatusBar } from 'expo-status-bar';
import { Text, View,Image,SafeAreaView , NativeModules  } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import {NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ShoppingBag from './screens/ShoppingBag';
import Profile from './screens/Profile';
import Favourite from './screens/Favourite';
import CoffeeDescription from './screens/CoffeeDescription';



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
          <Stack.Screen name='bag' options={{headerShown:false}} component={ShoppingBag} />
          <Stack.Screen name='favourite' options={{headerShown:false}} component={Favourite} />
          <Stack.Screen name='profile' options={{headerShown:false}} component={Profile} />
          <Stack.Screen name='details' options={{headerShown:false}} component={CoffeeDescription} />
        </Stack.Navigator>
      </NavigationContainer>

    </View>
  );
}

