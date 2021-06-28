import React from 'react';
import {Text, View} from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import Single1 from './screens/Single1';
import Single2 from './screens/Single2';
import Stack1 from './screens/Stack1';
import Stack2 from './screens/Stack2';
import Tab1 from './screens/Tab1';
import Tab2 from './screens/Tab2';
import {DrawerContent} from './screens/DrawerContent';



const Tab = createBottomTabNavigator();
const TabsScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Single1" component={Single1} />
      <Tab.Screen name="Single2" component={Single2} />
    </Tab.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" children={TabsScreen} />
        <Drawer.Screen name="Stack1" component={Stack1} />
        <Drawer.Screen name="Stack2" component={Stack2} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default App;
