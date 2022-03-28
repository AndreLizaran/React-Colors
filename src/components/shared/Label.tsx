// Modules
import React from 'react';
import { Text } from 'react-native';

export default function Label ({ children }:any) {
  return <Text style={{ fontSize:14, marginBottom:8 }}>{children}</Text>
}
