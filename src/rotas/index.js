import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../paginas/login/index.js';
import Drawer from '../drawer/drawer.js';

const Stack = createNativeStackNavigator();

export default function Rotas() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Drawer" component={Drawer} />
    </Stack.Navigator>
  );
}