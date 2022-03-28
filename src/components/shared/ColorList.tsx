// Modules
import React from 'react';
import { FlatList, View } from 'react-native';

// Components
import ColorElement from './ColorElement';

type Props = {
  data: { code: string; name: string; id: string }[];
}

export default function ColorList({ data }:Props) {
  return (
    <FlatList 
      data={data} 
      renderItem={({ item }) => <ColorElement code={item.code} name={item.name} id={item.id}/>} 
      // ItemSeparatorComponent={() => <View style={{ height:1, width:'100%', backgroundColor:'gray' }}/>}
    />
  )
}


