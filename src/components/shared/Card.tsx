// Modules
import { View } from 'react-native';
import React, { ReactNode } from 'react';

type Props = {
  children:ReactNode
}

export default function Card ({ children }:Props) {
  return (
    <View   
      style={{ 
        paddingHorizontal:20, 
        paddingVertical:15, 
        backgroundColor:'white',
        borderRadius:5
      }}
    >{children}</View>
  )
}
