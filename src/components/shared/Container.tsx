// Modules
import React, { ReactNode } from 'react';
import { View } from 'react-native';

type Props = {
  children: ReactNode;
  pt?: boolean;
}

export default function Container ({ children, pt = true }:Props) {
  return <View style={{ flex:1, padding:20, paddingTop:pt ? 20 : 10 }}>{children}</View>
}
