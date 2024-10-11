import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UnAuthStackList} from '../types';
import Login from '../screens/Login';
import CreateAccount from '../screens/CreateAccount';

const UnAuthStack = createNativeStackNavigator<UnAuthStackList>();
const UnAuthStackNavigation = () => {
  return (
    <UnAuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <UnAuthStack.Screen name="Login" component={Login} />
      <UnAuthStack.Screen name="CreateAccount" component={CreateAccount} />
    </UnAuthStack.Navigator>
  );
};
export default UnAuthStackNavigation;
