// Modules
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { KeyboardAvoidingView, Platform, ScrollView, TextInput } from 'react-native';

// Components
import Button from '../components/shared/Button';
import Card from '../components/shared/Card';
import Container from '../components/shared/Container';
import Label from '../components/shared/Label';
import Alert from '../components/shared/Alert';

// Styles
import generalStyles from '../styles';

// Types
import { StackType } from '../../App';

interface Props extends NativeStackScreenProps<StackType, any>{};

const initialState = {
  name:'André Lizarán',
  email:'andrelizaran@gmail.com',
  password:'LimonYSal',
  confirmPassword:'LimonYSal'
}

export default function SignUp({ navigation }:Props) {

  const [ signUpFormValues, setSignUpFormValues ] = useState(initialState);
  const { name, email, password, confirmPassword } = signUpFormValues;
  const [ signupError, setSignupError ] = useState('');
  const [ loadingSignUp, setLoadingSignUp ] = useState(false);

  async function signUpWithEmail () {
    try {
      if (!validateInformation()) return;
      setLoadingSignUp(true);
      const response = await auth().createUserWithEmailAndPassword(email, password);
      await response.user.updateProfile({ displayName:name });
      navigation.navigate('private');
      setLoadingSignUp(false);
    } catch (error:any) {
      console.log(error);
      setLoadingSignUp(false);
    }
  }

  function validateInformation () {
    if (!name || !email || !password || !confirmPassword) {
      setSignupError('There is missing information');
      return false;
    }
    else return true;
  }

  return (
    <Container>
      <ScrollView>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
          { signupError ? <Alert type='danger' text='Error'/> : <></> }
          <Card>
            <Label>Name</Label>
            <TextInput 
              style={generalStyles.textInput}
              onChangeText={(text) => setSignUpFormValues({ ...signUpFormValues, name:text })}
              value={name}
            />
            <Label>Email</Label>
            <TextInput 
              style={generalStyles.textInput} 
              keyboardType='email-address'
              onChangeText={(text) => setSignUpFormValues({ ...signUpFormValues, email:text })} 
              value={email}
            />
            <Label>Password</Label>
            <TextInput 
              style={generalStyles.textInput} 
              secureTextEntry={true}
              onChangeText={(text) => setSignUpFormValues({ ...signUpFormValues, password:text })} 
              value={password}
            />
            <Label>Confirm password</Label>
            <TextInput 
              style={generalStyles.textInput} 
              secureTextEntry={true}
              onChangeText={(text) => setSignUpFormValues({ ...signUpFormValues, confirmPassword:text })} 
              value={confirmPassword}
            />
            <Button type='primary' text='Sign up' onPress={signUpWithEmail} disabled={loadingSignUp}/>
          </Card>
          <Button type='secondary' text='Or login' onPress={() => navigation.navigate('login')} miniButton mt/>
        </KeyboardAvoidingView>
      </ScrollView>
    </Container>
  )
}
