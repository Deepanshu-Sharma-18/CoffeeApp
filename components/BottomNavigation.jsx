import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { UserCircleIcon,HomeIcon,ShoppingBagIcon,HeartIcon } from 'react-native-heroicons/solid'

export default function BottomNavigation({navigation}) {
    const [active, setActive] = useState(0);
  return (
    <View className='w-full flex justify-between flex-row items-center h-[65px] px-10 absolute bottom-0 left-0 right-0 bg-[#26160E] rounded-t-[40px]'>
        <Pressable onPress={()=>{
                setActive(0)
                navigation.navigate('home');
        }} >
            <View className='bg-[#150C07] h-9 w-9 flex justify-center items-center rounded-full'>
                <HomeIcon color={active == 0 ? '#B95F2A' : 'gray'} size={25}/>
            </View>
        </Pressable>
        <Pressable onPress={()=>{
                setActive(1)
                navigation.navigate('bag');
        }} >
            <View className='bg-[#150C07] h-9 w-9 flex justify-center items-center rounded-full'>
            <ShoppingBagIcon color={active == 1? '#B95F2A' : 'gray'} size={25}/>
            </View>
        </Pressable>
        <Pressable onPress={()=>{
                setActive(2)
                navigation.navigate('favourite');
        }} >
            <View className='bg-[#150C07] h-9 w-9 flex justify-center items-center rounded-full'>
            <HeartIcon color={active == 2 ? '#B95F2A' : 'gray'} size={25}/>
            </View>
        </Pressable>
        <Pressable onPress={()=>{
                setActive(3)
                navigation.navigate('profile');
        }} >
            <View className='bg-[#150C07] h-9 w-9 flex justify-center items-center rounded-full'>
            <UserCircleIcon color={active == 3 ? '#B95F2A' : 'gray'} size={25}/>
            </View>
        </Pressable>
    </View>
  )
}