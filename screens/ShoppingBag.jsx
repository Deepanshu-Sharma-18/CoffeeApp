import { View, Text, ImageBackground, BackHandler, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { ArrowLeftCircleIcon,UserCircleIcon,CurrencyDollarIcon } from 'react-native-heroicons/solid'
import { NavigationActions,StackActions } from '@react-navigation/native';
import PopularCard from '../components/PopularCard'



export default function ShoppingBag({navigation}) {
    const [count, setCount] = useState(0);
  return (
    <View className='flex h-screen bg-[#150C07] w-screen justify-start items-center relative'>

        <View className='flex flex-row justify-between absolute top-15 items-center h-20 w-full px-6'>
                <Pressable onPress={()=>{
                    const popAction = StackActions.pop(1);
                    navigation.dispatch(popAction);
                }}>
                    <ArrowLeftCircleIcon color={'#B95F2A'} size={40}/>
                </Pressable>
                <Text className='text-white font-bold text-3xl'>Order</Text>
                <Pressable onPress={()=>{
                    const popAction = StackActions.pop(1);
                    navigation.dispatch(popAction);
                }}>
                    <UserCircleIcon color={'#B95F2A'} size={40}/>
                </Pressable>
        </View>

        <View className='flex flex-col justify-center items-center w-full top-16 pb-[300px]'>
            <ScrollView className=''>
            <View className='flex flex-col justify-center items-center w-full '>
              
                <View className='flex pt-10'>
                    <PopularCard name={'Cappuccino'} mixture={'milk'} price={3.99} calories={104}/>
                    <View className='h-4'></View>
                    <PopularCard name={'Cappuccino'} mixture={'milk'} price={3.99} calories={104}/>
                    <View className='h-4'></View>
                    <PopularCard name={'Cappuccino'} mixture={'milk'} price={3.99} calories={104}/>
                    <View className='h-4'></View>
                    <PopularCard name={'Cappuccino'} mixture={'milk'} price={3.99} calories={104}/>
                    <View className='h-4'></View>
                    <PopularCard name={'Cappuccino'} mixture={'milk'} price={3.99} calories={104}/>
                    <View className='h-4'></View>
                    <PopularCard name={'Cappuccino'} mixture={'milk'} price={3.99} calories={104}/>
                    <View className='h-4'></View>
                    <PopularCard name={'Cappuccino'} mixture={'milk'} price={3.99} calories={104}/>
                </View>
            </View>
            </ScrollView>
        </View>

        <View className='absolute flex justify-start items-start px-10 pt-3 bottom-0 left-0 right-0 bg-[#26160E] rounded-t-[40px] h-[250px]'>
                <Text className='text-white text-2xl font-semibold'>Summary</Text>
                <View className='h-5'></View>
                <View className='flex flex-row w-full justify-between items-center'>
                    <Text className='text-white text-lg font-normal'>Order</Text>
                    <View className='flex flex-row justify-center items-center'>
                            <CurrencyDollarIcon color={'#B95F2A'} size={20}/>
                            <Text className='text-md text-white font-bold'> 3.99</Text>
                    </View>
                </View>
                <View className='h-[1px] w-full my-3 px-10 bg-[#B95F2A] '></View>
                <View className='flex flex-row w-full justify-between items-center'>
                    <Text className='text-white text-lg font-normal'>Delivery</Text>
                    <View className='flex flex-row justify-center items-center'>
                            <CurrencyDollarIcon color={'#B95F2A'} size={20}/>
                            <Text className='text-md text-white font-bold'> 3.99</Text>
                    </View>
                </View>
                <View className='h-[1px] w-full my-3 px-10 bg-[#B95F2A] '></View>
                <View className='flex flex-row w-full justify-between items-center'>
                    <Text className='text-white text-lg font-normal'>Total</Text>
                    <View className='flex flex-row justify-center items-center'>
                            <CurrencyDollarIcon color={'#B95F2A'} size={20}/>
                            <Text className='text-md text-white font-bold'> 7.98</Text>
                    </View>
                </View>



        </View>


    </View>
  )
}