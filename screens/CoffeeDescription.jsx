import { View, Text, ImageBackground, BackHandler, Pressable } from 'react-native'
import React, { useState } from 'react'
import { ArrowLeftCircleIcon,UserCircleIcon,CurrencyDollarIcon,StarIcon,FireIcon,PlusIcon,MinusIcon } from 'react-native-heroicons/solid'
import { NavigationActions,StackActions } from '@react-navigation/native';


export default function CoffeeDescription({navigation}) {
    const [count, setCount] = useState(0);
  return (
    <View className='flex h-screen bg-[#150C07] w-screen justify-start items-start relative'>
      <ImageBackground resizeMode='cover' className='flex h-[550px] w-screen justify-start items-start' source={
        {
            uri: "https://images.unsplash.com/photo-1561047029-3000c68339ca?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlJTIwY3VwfGVufDB8fDB8fHww"
        }
      }>
        <View className='flex flex-col justify-between items-start h-full w-full relative' >
            <View className='flex flex-row justify-between items-center h-20 w-full px-6 pt-15'>
                <Pressable onPress={()=>{
                    const popAction = StackActions.pop(1);
                    navigation.dispatch(popAction);
                }}>
                    <ArrowLeftCircleIcon color={'#B95F2A'} size={40}/>
                </Pressable>
                <Pressable onPress={()=>{
                    const popAction = StackActions.pop(1);
                    navigation.dispatch(popAction);
                }}>
                    <UserCircleIcon color={'#B95F2A'} size={40}/>
                </Pressable>
            </View>

            <View className='flex absolute h-[120px] bg-white/10 backdrop-filter backdrop-blur-lg rounded-t-[40px] px-10 bottom-0 left-0 right-0'>
                <View className='flex flex-row justify-between items-center pt-2'>
                    <Text className='text-2xl font-medium text-white '>Cappuccino</Text>
                    <View className='flex flex-row justify-start items-center h-full'>
                        <StarIcon color={'#B95F2A'} size={20}/>
                        <View className='w-2'></View>
                        <Text className='text-md font-bold text-white'>3.99</Text>
                        <Text className='text-white/70 font-light text-xs'> (125)</Text>
                    </View>
                </View>

                <Text className='text-xs font-medium px-1 text-white/70'>With Chocalate</Text>

                <View className='flex flex-row w-full justify-between items-center pt-3'>
                    <View className='flex flex-row justify-start items-center'>
                        <FireIcon color={'#B95F2A'} size={25}/>
                        <Text className='text-white'>104 Kcal</Text>
                    </View>
                    <View className='flex flex-row justify-between items-center w-20'>
                        <View className='rounded-full flex justify-center items-center bg-[#B95F2A] w-6 h-6'>
                            <PlusIcon color={'white'} size={15}/>
                        </View>
                        <Text className='font-medium text-md text-white'>1</Text>
                        <View className='rounded-full flex justify-center items-center bg-[#B95F2A] w-6 h-6'>
                            <MinusIcon color={'white'} size={15}/>
                        </View>
                    </View>
                </View>
            </View>
        </View>
      </ImageBackground>

      <View className='px-5 pt-5 pb-3 '>
        <Text className='text-white font-light text-lg'>Description</Text>
      </View>

      <View className='px-5'>
        <Text className='text-gray-400 font-normal text-sm'>Perfectly balanced Esperesso and Milk with freshly prepared vanillac cream</Text>
      </View>

      <View className='flex flex-row px-7 my-5 w-full justify-between items-center h-[60px] '>
        <View className='flex w-[110px] h-full bg-[#B95F2A] border border-[#26160E] justify-center rounded-3xl items-center'>
          <View className='flex h-full w-full justify-center items-center'>
            <Text className='text-white font-semibold text-md'>Tall</Text>
            <Text className='text-gray-400 font-light text-xs'>354 ML</Text>
          </View>
        </View>
        <View className='flex w-[110px] h-full bg-[#26160E] border border-[#B95F2A] justify-center rounded-3xl items-center'>
          <View className='flex h-full w-full justify-center items-center'>
            <Text className='text-white font-semibold text-md'>Grande</Text>
            <Text className='text-gray-400 font-light text-xs'>473 ML</Text>
          </View>
        </View>
        <View className='flex w-[110px] h-full bg-[#26160E] border border-[#B95F2A] justify-center rounded-3xl items-center'>
          <View className='flex h-full w-full justify-center items-center'>
            <Text className='text-white font-semibold text-md'>Venti</Text>
            <Text className='text-gray-300 font-light text-xs'>591 ML</Text>
          </View>
        </View>
      </View>

      <View className='flex flex-row justify-between items-center pt-5 w-full px-5'>
        <View className='flex flex-row justify-between items-center'>
          <CurrencyDollarIcon color={'#B95F2A'} size={40}/>
          <View className='w-2'></View>
          <Text className='text-white font-semibold text-3xl'>3.99</Text>
        </View>
        <View className='flex flex-row justify-center items-center w-[200px] h-[60px] bg-[#B95F2A] rounded-3xl'>
          <Text className='text-white font-bold text-lg'>Buy Now</Text>
        </View>
        
      </View>
    </View>
  )
}