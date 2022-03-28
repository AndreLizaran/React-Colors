// Modules
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

// Screens
import User from '../screens/User';
import Home from '../screens/Home';
import MyColors from '../screens/MyColors';

// Colors
import { backgroundGray } from '../utils/colors';

// Hooks
import useGetPrivateInformation from '../hooks/useGetPrivateInformation';

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigation() {

  useGetPrivateInformation();

  return (
    <Tab.Navigator 
      barStyle={{ backgroundColor:backgroundGray }}
      activeColor='#FFF'
      inactiveColor='gray'
    >
      <Tab.Screen 
        name="home" 
        component={Home} 
        options={{ 
          title:'Home',
          tabBarIcon: () => <Icon name='home' size={20} color='white'/> 
        }}
      />
      <Tab.Screen 
        name="myColors" 
        component={MyColors} 
        options={{ 
          title:'My colors', 
          tabBarIcon: () => <Icon name='color-palette' size={20} color='white'/> 
        }}
      />
      <Tab.Screen 
        name="user" 
        component={User} 
        options={{ 
          title:'User', 
          tabBarIcon: () => <Icon name='person' size={20} color='white'/> 
        }}
      />
    </Tab.Navigator>
  )
}
