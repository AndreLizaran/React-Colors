// Modules
import React from 'react';
import { View } from 'react-native';

export default function BorderContainer ({ children }:any) {
  return <View style={{ borderRadius:5, borderColor:'white', borderWidth:1 }}>{children}</View>
}
