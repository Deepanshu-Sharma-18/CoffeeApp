import { View, Text, TextInput, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { Bars2Icon,UserCircleIcon,HomeIcon,ShoppingBagIcon,HeartIcon } from 'react-native-heroicons/solid'
import BottomNavigation from '../components/BottomNavigation'
import Categories from '../components/Categories'
import CoffeeCard from '../components/CoffeeCard'
import PopularCard from '../components/PopularCard'



export default function HomeScreen({ navigation}) {
  return (  
    <View className='flex h-screen w-screen relative'>

      <ScrollView className=''>

        <View className='flex h-max w-screen bg-[#150C07] pb-[65px]'> 
          
          <View className='flex flex-row justify-between items-center h-20 w-full px-8 pt-15'>
              <Bars2Icon color={'#B95F2A'} size={30}/>
              <UserCircleIcon color={'#B95F2A'} size={30}/>
          </View>

          <View className='flex justify-between h-16 items-start w-full px-8'>
            <Text className='text-xl text-white font-bold'>Hey!</Text>
            <Text className='text-xl text-white font-bold'>What would you like to have?</Text>
          </View>

          <View className='flex w-full justify-center items-center py-5'>
            <TextInput className='h-12 w-[360px] bg-[#26160E] rounded-3xl px-5 py-2 border border-[#B95F2A] text-gray-200' placeholderTextColor={'gray'} placeholder='Find A Coffee'/>
          </View>

          <View className='flex w-full px-10'>
            <ScrollView horizontal className='flex w-full h-10'>
              <Categories isSelected={true} name={'Cappuccino'}/>
              <Categories isSelected={false} name={'Latte'}/>
              <Categories isSelected={false} name={'Frappuccino'}/>
              <Categories isSelected={false} name={'Latte'}/>
              <Categories isSelected={false} name={'Latte'}/>
              <Categories isSelected={false} name={'Latte'}/>
            </ScrollView>
          </View>

          <View className='flex w-full mt-5 px-7'>
            <ScrollView horizontal className='flex w-full h-[250px]'>
              <CoffeeCard navigation={navigation} image={"https://142852039.cdn6.editmysite.com/uploads/1/4/2/8/142852039/s350851868723820076_p17_i1_w800.jpeg"} name={'Cappuccino'} price={3.99} mixture={'milk'} />
              <CoffeeCard navigation={navigation} image={"https://142852039.cdn6.editmysite.com/uploads/1/4/2/8/142852039/s350851868723820076_p17_i1_w800.jpeg"} name={'Cappuccino'} price={3.99} mixture={'chocalate'} />
              <CoffeeCard navigation={navigation} image={"https://142852039.cdn6.editmysite.com/uploads/1/4/2/8/142852039/s350851868723820076_p17_i1_w800.jpeg"} name={'Cappuccino'} price={3.99} mixture={'milk'} />
              <CoffeeCard navigation={navigation} image={"https://142852039.cdn6.editmysite.com/uploads/1/4/2/8/142852039/s350851868723820076_p17_i1_w800.jpeg"} name={'Cappuccino'} price={3.99} mixture={'milk'} />
            </ScrollView>
          </View>

          <View className=''>
            <Text className='text-white text-xl font-bold px-8 py-5'>Popular</Text>
          </View>

          <View> 
            <ScrollView horizontal>
              <PopularCard name={"Java Chip Frappuccino"} mixture={"mocha drizzle and whipped cream"} price={"4.99"} calories={"440"}/>
              <PopularCard name={"Java Chip Frappuccino"} mixture={"mocha drizzle and whipped cream"} price={"4.99"} calories={"440"}/>
              <PopularCard name={"Java Chip Frappuccino"} mixture={"mocha drizzle and whipped cream"} price={"4.99"} calories={"440"}/>
            </ScrollView>
          </View>

          <View className='pt-5'> 
            <ScrollView horizontal>
              <PopularCard name={"Java Chip Frappuccino"} mixture={"mocha drizzle and whipped cream"} price={"4.99"} calories={"440"}/>
              <PopularCard name={"Java Chip Frappuccino"} mixture={"mocha drizzle and whipped cream"} price={"4.99"} calories={"440"}/>
              <PopularCard name={"Java Chip Frappuccino"} mixture={"mocha drizzle and whipped cream"} price={"4.99"} calories={"440"}/>
            </ScrollView>
          </View>
          
        </View>
      </ScrollView>
      <BottomNavigation navigation={navigation}/>
    </View>
  )
}