// Modules
import React, { useState } from 'react';
import { TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Components
import Card from '../components/shared/Card';
import Label from '../components/shared/Label';
import Button from '../components/shared/Button';
import Container from '../components/shared/Container';

// Styles
import generalStyles from '../styles';

// Types
import { StackType } from '../../App';

interface Props extends NativeStackScreenProps<StackType, any>{};

const initialState = {
  email:'andrelizaran@gmail.com',
  password:'LimonYSal'
}

export default function Login({ navigation }:Props) {

  const [ loginFormValues, setLoginFormValues ] = useState(initialState);
  const { email, password } = loginFormValues;
  const [ loadingLogin, setLoadingLogin ] = useState(false);
  const [ loginError, setLoginError ] = useState('');

  async function loginWithEmail () {
    try {
      if (!validateInformation()) return;
      setLoadingLogin(true);
      await auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('private');
      setLoadingLogin(false);
    } catch (error:any) {
      console.log(error);
    }
  }

  function validateInformation () {
    if (!email || !password) {
      setLoginError('There is missing information');
      return false;
    }
    else return true;
  }

  return (
    <Container>
      <Card>
        <Label>Email</Label>
        <TextInput 
          style={generalStyles.textInput} 
          keyboardType='email-address' 
          onChangeText={(text) => setLoginFormValues({ ...loginFormValues, email:text })}
          value={email}
        />
        <Label>Password</Label>
        <TextInput 
          style={generalStyles.textInput} 
          secureTextEntry={true} 
          onChangeText={(text) => setLoginFormValues({ ...loginFormValues, password:text })} 
          value={password}
        />
        <Button type='primary' text='Login' disabled={loadingLogin} onPress={loginWithEmail}/>
      </Card>
      <Button type='secondary' text='Or sign up' onPress={() => navigation.navigate('signup')} miniButton mt/>
    </Container>
  )
}
