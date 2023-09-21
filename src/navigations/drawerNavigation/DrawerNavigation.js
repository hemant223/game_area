import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import Testing from '../../screens/Testing';


const DrawerNav = createDrawerNavigator();
const DrawerNavigation = props => {
  return (
    <DrawerNav.Navigator
      drawerContent={() => <DrawerContent />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'tranparent',
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          overflow: 'hidden',
          zIndex: 100,
        },
      }}
      initialRouteName="testing">
      <DrawerNav.Screen
        name="testing"
        component={Testing}
        options={{headerShown: false}}
      />
    </DrawerNav.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
