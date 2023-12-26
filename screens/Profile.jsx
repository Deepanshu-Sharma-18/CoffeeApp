import { View, Text, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { UserCircleIcon,ArrowLeftCircleIcon,CurrencyDollarIcon } from 'react-native-heroicons/solid'
import { StackActions } from '@react-navigation/native';

export default function Profile({navigation}) {
  return (
    <View className='flex h-screen w-screen bg-[#150C07] relative px-10'>
      
      <View className='flex flex-row justify-start absolute left-4 top-5 items-center h-20 w-full'>
        <Pressable onPress={()=>{
          const popAction = StackActions.pop(1);
          navigation.dispatch(popAction);
        }}>
          <ArrowLeftCircleIcon color={'#B95F2A'} size={40}/>
        </Pressable>   
        <View className='w-5'></View>
    
        <Text className='text-white font-bold text-2xl'>Profile</Text>
      </View>

      <View className='flex h-full w-full pb-2'>
        <ScrollView>
          <View className='flex justify-center items-center pt-32'>
            <UserCircleIcon color={'#B95F2A'} size={150}/>
          </View>

          <View className='h-5'></View>

          <View className='flex border border-[#B95F2A] rounded-xl w-full bg-[#26160E] px-8'>
            <View className = 'flex flex-row w-full justify-between pt-3'>
              <Text className='text-white/70 font-light text-lg'>Name :</Text>
              <Text className='text-white/80 font-normal text-lg'>John Doe</Text>
            </View>
            <View className = 'flex flex-row w-full justify-between pt-2'>
              <Text className='text-white/70 font-light text-lg'>Age :</Text>
              <Text className='text-white/80 font-normal text-lg'>25</Text>
            </View>
            <View className = 'flex flex-row w-full justify-between pt-2'>
              <Text className='text-white/70 font-light text-lg'>Joined :</Text>
              <Text className='text-white/80 font-normal text-lg'>25 Dec 2024</Text>
            </View>
            <View className = 'flex flex-row w-full justify-between pb-3 pt-2'>
              <Text className='text-white/70 font-light text-lg'>Plan :</Text>
              <Text className='text-white/80 font-normal text-lg'>Free</Text>
            </View>
          </View>

          <View>
            <Text className='text-white/70 font-light text-lg pt-5'>Payment Details</Text>
            <View className='flex border border-[#B95F2A] mt-5 rounded-xl w-full bg-[#26160E] px-5'>
              <View className = 'flex flex-row w-full justify-between pt-3'>
                <Text className='text-white/70 font-light text-lg'>Card Number :</Text>
                <Text className='text-white/80 font-normal text-lg'>1234 5678 9012</Text>
              </View>
              <View className = 'flex flex-row w-full justify-between pt-2'>
                <Text className='text-white/70 font-light text-lg'>Expiry Date :</Text>
                <Text className='text-white/80 font-normal text-lg'>12/24</Text>
              </View>
              <View className = 'flex flex-row w-full justify-between pb-3 pt-2'>
                <Text className='text-white/70 font-light text-lg'>CVV :</Text>
                <Text className='text-white/80 font-normal text-lg'>***</Text>
              </View>
            </View>
          </View>
          <View>
            <Text className='text-white/70 font-light text-lg pt-5'>Spendings</Text>
            <View className='flex border border-[#B95F2A] mt-5 rounded-xl w-full bg-[#26160E] px-5'>
              <View className = 'flex flex-row w-full justify-between pt-3'>
                <Text className='text-white/70 font-light text-lg'>Cappuccino :</Text>
                <View  className='flex flex-row items-center'>
                  <CurrencyDollarIcon color={'#B95F2A'} size={20}/>
                  <Text className='text-white/80 font-normal text-md'>15.98</Text>
                </View>
              </View>
              <View className = 'flex flex-row w-full justify-between pt-2'>
                <Text className='text-white/70 font-light text-lg'>Esperresso :</Text>
                <View  className='flex flex-row items-center'>
                  <CurrencyDollarIcon color={'#B95F2A'} size={20}/>
                  <Text className='text-white/80 font-normal text-md'>15.98</Text>
                </View>
              </View>
              <View className = 'flex flex-row w-full justify-between pb-3 pt-2'>
                <Text className='text-white/70 font-light text-lg'>Latte :</Text>
                <View  className='flex flex-row items-center'>
                  <CurrencyDollarIcon color={'#B95F2A'} size={20}/>
                  <Text className='text-white/80 font-normal text-md'>15.98</Text>
                </View>
              </View>
              <View className = 'flex flex-row w-full justify-between pb-3 pt-2'>
                <Text className='text-white/70 font-light text-lg'>Total :</Text>
                <View  className='flex flex-row items-center'>
                  <CurrencyDollarIcon color={'#B95F2A'} size={20}/>
                  <Text className='text-white/80 font-normal text-md'>155.98</Text>
                </View>
              </View>
            </View>
          </View>

        </ScrollView>

      </View>

      
      
    </View>
  )
}