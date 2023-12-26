import { Text, View,Image,SafeAreaView, ImageBackground, Button, Pressable } from 'react-native';
import React from 'react'
import { NavigationActions } from '@react-navigation/native';

export default function SplashScreen({navigation}) {
  return (
    <View className='h-screen w-screen'>
        <ImageBackground
            className='flex-1 h-3/5 w-screen'
            resizeMode='cover'
            source={
                require('../assets/images/coffee_splashscreen.png')
            }
        >

            <View className='flex flex-col justify-end items-center h-full w-full '>
                <View className='flex bg-black w-full h-2/5 justify-around items-center'>
                    <View className='flex flex-col justify-center items-center h-36 w-full px-8 pt-5'>
                        <Text className='text-4xl text-white font-semibold text-center tracking-widest'>Coffee so good, your taste buds will love it.</Text>
                        <Text className='text-lg text-gray-300 pt-5 font-semibold text-center tracking-widest'>One cup coffee make your day productive.</Text>
                        
                    </View>
                    <Pressable className='flex w-4/5 justify-center items-center' onPress={() => navigation.reset({
                        index: 0,
                        routes: [{ name: 'home' }],
                      
                    })}>
                        <View className='flex flex-col justify-center items-center h-[70px] w-full rounded-3xl bg-orange-400'>
                            <Text className='text-xl text-white font-bold'>Get Started</Text>
                        </View>
                    </Pressable>
                </View>
            </View>

            
                
        </ImageBackground>
    </View>

  )
}