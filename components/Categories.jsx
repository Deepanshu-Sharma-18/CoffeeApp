import { View, Text } from 'react-native'
import React from 'react'

export default function Categories({ isSelected , name}) {
  return (
    
    (isSelected == true) ? (   
        <Text className='text-md text-orange-400 font-bold pr-10'>{name}</Text>
    ) : (  
        <Text className='text-md text-white font-bold pr-10'>{name}</Text>
    )
         
    
  )
    
}