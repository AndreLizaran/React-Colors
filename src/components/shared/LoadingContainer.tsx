// Modules
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

export default function LoadingContainer() {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <ActivityIndicator color='black'/>
    </View>
  )
}
