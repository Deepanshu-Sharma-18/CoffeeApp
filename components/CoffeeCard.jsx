import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { CurrencyDollarIcon , PlusCircleIcon } from 'react-native-heroicons/solid'

export default function CoffeeCard({image , name , mixture , price ,navigation}) {
  return (
    <Pressable onPress={()=>{
      navigation.navigate('details')
    }}>
      <View className = 'flex w-[190px] h-[250px]'>
        <View className=' flex flex-col bg-[#26160E] justify-start items-center p-3 rounded-2xl border border-[#B95F2A] h-[250px] w-[165px]'>
          <View className='flex flex-col justify-center items-center'>
            <Image className=' w-[140px] h-[130px] rounded-2xl' source={{
              uri: "https://142852039.cdn6.editmysite.com/uploads/1/4/2/8/142852039/s350851868723820076_p17_i1_w800.jpeg"
            }}/>
          </View>
          <View className='flex flex-col items-start pt-2 pl-2 w-full'>
            <Text className='text-md text-white font-bold'>{name}</Text>
            <Text className='text-xs text-gray-500 font-normal'>with {mixture}</Text>
            
          </View>
          <View className='flex flex-row justify-between items-center w-full h-1/3 px-2'>
            <View className='flex flex-row justify-center items-center'>
              <CurrencyDollarIcon color={'#B95F2A'} size={20}/>
              <Text className='text-md text-white font-bold'>{price}</Text>
            </View>
            <PlusCircleIcon color={'#B95F2A'} size={20}/>
          </View>
        </View>
      </View>
    </Pressable>
  )
}