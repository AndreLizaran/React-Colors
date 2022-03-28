// Modules
import React from 'react';
import { Text, View } from 'react-native';
import auth from '@react-native-firebase/auth';

// Components
import Button from '../components/shared/Button';
import Container from '../components/shared/Container';

export default function User() {

  return (
    <Container pt={true}>
      <View style={{ justifyContent:'space-between', flexDirection:'row', alignItems:'center', marginBottom:20 }}>
        <LetterBox/>
        <View style={{ alignItems:'flex-end' }}>
          <Text style={{ fontSize:16, color:'black' }}>André Lizarán</Text>
          <Text style={{ fontSize:14 }}>Saved colors: 10</Text>
        </View>
      </View>
      <Button type='danger' text='Sign out' onPress={() => auth().signOut()}/>
      <Text style={{ textAlign:'center', marginTop:20 }}>Version 1.0.0</Text>
    </Container>
  )
}

function LetterBox () {
  return (
    <View style={{ height:60, width:60, justifyContent:'center', alignItems:'center', backgroundColor:'#332FD0', borderRadius:5 }}>
      <Text style={{ fontSize:16, color:'white', fontWeight:'bold' }}>A</Text>
    </View>
  )
}