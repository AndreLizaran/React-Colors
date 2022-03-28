// Modules
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Clipboard from '@react-native-clipboard/clipboard';
import firestore from '@react-native-firebase/firestore';

// Hooks
import useGetGeneralState from '../../hooks/useGetGeneralState';

export type ColorType = {
  code: string;
  name: string;
  id: string;
}

export default function ColorElement ({ code, name, id }:ColorType) {

  const { setToastMessage, addColorToMyColors, state, setMyColors, setSelectedColor } = useGetGeneralState();
  const isFav = state.myColors.includes(id);

  async function addOrRemoveFavorite () {
    try {
      if (isFav) {
        const colors = state.myColors;
        const filterColors = colors.filter((color) => color !== id);
        setMyColors(filterColors);
        setToastMessage('Removed from favorites');
        firestore().collection(state.uid).doc(id).delete();
      } else {
        addColorToMyColors(id);
        setToastMessage('Added to favorites');
        firestore().collection(state.uid).add({ id });
      }   
    } catch (error:any) {
      console.log(error);
    }
  }

  function copyColor () {
    Clipboard.setString(code);
    setToastMessage('Code copied');
  }

  return (
    <TouchableOpacity 
      style={{ 
        flexDirection:'row', 
        justifyContent:'space-between',
        paddingVertical:15,
        alignItems:'center'
      }}
      onPress={copyColor}
    >
      <View 
        style={{ 
          height:35, 
          width:35, 
          borderRadius:5, 
          borderColor:'white', 
          borderWidth:2, 
          backgroundColor:`#${code}` 
        }}
      />
      <View style={{ flexDirection:'row', alignItems:'center' }}>
        <View style={{ flexDirection:'row', alignItems:'flex-end', marginRight:10 }}>
          <Text style={{ fontSize:14, marginRight:5 }}>{name}</Text>
          <Text style={{ fontSize:10 }}>#{code}</Text>
        </View>
        <TouchableOpacity onPress={addOrRemoveFavorite}>
          <Icon color='gray' name={isFav ? 'bookmark' : 'bookmark-outline'} size={20}/>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}
