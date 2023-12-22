import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex h-screen justify-center items-center">
      <Text className="text-orange-300">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

