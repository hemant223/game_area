import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MemoryGame from '../../screens/MemoryGame';
import DrawerNavigation from '../drawerNavigation/DrawerNavigation';
import Dashboard from '../../screens/Dashboard';
import StartGame from '../../screens/StartGame';
import Tic_Tac_Toe from '../../screens/Tic_Tac_Toe';

const MainNavigationStack = props => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator headerShown={false}>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tic_Tac_Toe"
          component={Tic_Tac_Toe}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MemoryGame"
          component={MemoryGame}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StartGame"
          component={StartGame}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={DrawerNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigationStack;

const styles = StyleSheet.create({});
