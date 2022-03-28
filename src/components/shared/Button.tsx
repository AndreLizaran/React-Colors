// Modules
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';

// Hooks
import useGetColorState, { ColorTypes } from '../../hooks/useGetColorState';

// Colors
import { backgroundGray } from '../../utils/colors';

type Props = {
  text?: string;
  icon?: string;
  loading?: boolean;
  type: ColorTypes
  miniButton?: boolean;
  mt?: boolean
  onPress?: () => void;
  disabled?: boolean;
}

export default function Button ({ text,icon, loading, type, miniButton = false, mt = false, onPress = () => {}, disabled= false }:Props) {
  const color = useGetColorState(type);
  return (
    <TouchableOpacity 
      style={{ 
        ...styles.button, 
        backgroundColor:color, 
        alignSelf:miniButton ? 'flex-start' : 'auto', 
        marginTop: mt ? 20 : 0 
      }}
      onPress={onPress}
      disabled={disabled}
    >
      {(text && !disabled) && <Text style={{ ...styles.text }}>{text}</Text>}
      {(disabled) && <ActivityIndicator color='white'/>}
    </TouchableOpacity>
  )  
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:5,
    color:backgroundGray,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:'center'
  }
})
