import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'

import Single1 from './screens/Single1';
import Single2 from './screens/Single2';
import Stack1 from './screens/Stack1';
import Stack2 from './screens/Stack2';
import Tab1 from './screens/Tab1';
import Tab2 from './screens/Tab2';

const Stack = createStackNavigator(
  {
    Stack1: {screen:Stack1},
    Stack2: {screen:Stack2},
  },
  {
    initialRouteName:'Stack1'
  }
);

const App = () => {
  const Layout = NavigationContainer(Stack);

  return (
    <NavigationContainer>
      <Stack/>
    </NavigationContainer>
  )
};
export default App;

// TODO: implement Tabs screen https://reactnavigation.org/docs/tab-based-navigation
// Todo: implement Drawer screen https://reactnavigation.org/docs/drawer-based-navigation
// Todo: authentication flow https://reactnavigation.org/docs/auth-flow