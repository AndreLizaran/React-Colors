// Modules
import React, { useEffect, useRef } from 'react';
import { Text, Animated } from 'react-native';

// Hooks
import useGetGeneralState from '../../hooks/useGetGeneralState';

// Colors
import { backgroundGray } from '../../utils/colors';

export default function Toast() {

  const { state } = useGetGeneralState(); 
  const opacity = useRef(new Animated.Value(0.8)).current;

  Animated.timing(opacity, {
    toValue: 1,
    useNativeDriver: true,
    duration: 1000,
  }).start(() => Animated.timing(opacity, {
    toValue: 0,
    useNativeDriver: true,
    duration: 500,
  }).start());

  if (state.toastMessage) {
    return (
      <Animated.View 
        style={{ 
          backgroundColor:backgroundGray, 
          borderRadius:15, 
          paddingVertical:8, 
          paddingHorizontal:15, 
          alignSelf:'center', 
          position:'absolute',
          bottom:20,
          opacity
        }}
      >
        <Text style={{ color:'white', fontSize:12, textAlign:'center', }}>{state.toastMessage}</Text>
      </Animated.View>
    )
  } else return <></>
}
