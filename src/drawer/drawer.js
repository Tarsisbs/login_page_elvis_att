import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Perfil from '../paginas/perfil/index.js';

const DrawerNav = createDrawerNavigator();

export default function Drawer() {
  return (
    <DrawerNav.Navigator initialRouteName="Perfil">
      <DrawerNav.Screen name="Perfil" component={Perfil} />
    </DrawerNav.Navigator>
  );
}