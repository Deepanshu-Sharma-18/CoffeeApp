import { View, Text, Image } from 'react-native'
import React from 'react'
import { CurrencyDollarIcon , PlusCircleIcon , FireIcon } from 'react-native-heroicons/solid'

export default function ({name , mixture , price , calories}) {
  return (
    <View>
        <View className = 'flex w-screen px-8 h-[150px]'>
            <View className=' flex flex-row bg-[#26160E] justify-start items-center  p-3 rounded-2xl border border-[#B95F2A] h-[145px] w-full'>
                <View className='flex justify-center items-start'>
                <Image className=' w-[110px] h-[120px] rounded-2xl' source={{
                    uri: "https://142852039.cdn6.editmysite.com/uploads/1/4/2/8/142852039/s350851868723820076_p17_i1_w800.jpeg"
                }}/>
                </View>
                <View className='flex flex-col justify-center items-start'>
                    <View className='flex flex-col items-start pt-2 pl-2 w-[180px]'>
                        <Text className='text-md text-white font-bold'>{name}</Text>
                        <Text className='text-xs text-gray-500 font-normal'>with {mixture}</Text>
                    </View>

                    <View className='flex flex-row justify-start items-center pt-2 pl-2 w-[180px]'>
                        
                            <FireIcon color={'#B95F2A'} size={15}/>
                            <Text className='text-xs text-white font-normal'> {calories} calories</Text>
                       
                    </View>

                    <View className='flex flex-row justify-between items-center w-[180px] h-1/3 pl-2'>
                        <View className='flex flex-row justify-center items-center'>
                            <CurrencyDollarIcon color={'#B95F2A'} size={20}/>
                            <Text className='text-md text-white font-bold'> {price}</Text>
                        </View>
                        <PlusCircleIcon color={'#B95F2A'} size={25}/>
                    </View>
                </View>
            </View>
        </View>
    </View>
  )
}