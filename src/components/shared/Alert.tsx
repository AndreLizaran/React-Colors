// Modules
import React from 'react'
import { Text, View } from 'react-native'

// Hooks
import useGetColorState, { ColorTypes } from '../../hooks/useGetColorState';

type Props = {
  type: ColorTypes
  text: string;
}

export default function Alert({ type, text }:Props) {

  // @ts-ignore
  const color = useGetColorState(type);

  return (
    <View style={{ backgroundColor:color, paddingVertical:15, paddingHorizontal:20, borderRadius:5 }}>
      <Text style={{ fontSize:16, color:'white', fontWeight:'bold', textAlign:'center' }}>{text}</Text>
    </View>
  )
}
