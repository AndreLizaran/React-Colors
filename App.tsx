// Modules
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import auth from '@react-native-firebase/auth';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

// Colors
import { backgroundGray } from './src/utils/colors';

// Navigations
import TabNavigation from './src/navigation/TabNavigation';

// States
import GeneralState from './src/contexts/GeneralReducer';

// Screens
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';

// Hooks
import useGetGeneralState from './src/hooks/useGetGeneralState';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    card: backgroundGray,
    text: 'white'
  },
};

export type StackType = {
  signup:undefined;
  login:undefined;
  private:undefined;
}

const Stack = createNativeStackNavigator<StackType>();

export default function App() {
  
  return (
    <GeneralState>
      <NavigationContainer theme={MyTheme}>
        <StatusBar backgroundColor={backgroundGray} barStyle="light-content" />
        <AppRoot/>
      </NavigationContainer>
    </GeneralState>
  )
}

function AppRoot () {

  const { loginUser, state, logoutUser } = useGetGeneralState();
  const { uid } = state;

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (!user) {
        logoutUser();
      } else loginUser({ uid: user.uid, username: user.displayName || ''});
    });
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerBackVisible:false }}>
      { 
        uid 
        ? <Stack.Screen name='private' component={TabNavigation} options={{ title:'Home' }}/>
        :
        <>
          <Stack.Screen name='login' component={Login} options={{ title:'Login' }}/>
          <Stack.Screen name='signup' component={SignUp} options={{ title:'Sign Up' }}/>
        </>
      }
    </Stack.Navigator>
  )
}
