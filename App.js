import React from 'react';
import { Text, View} from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Single1 from './screens/Single1';
import Single2 from './screens/Single2';
import Stack1 from './screens/Stack1';
import Stack2 from './screens/Stack2';
import Tab1 from './screens/Tab1';
import Tab2 from './screens/Tab2';

const Tab = createBottomTabNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Single1" component={Single1} />
        <Tab.Screen name="Single2" component={Single2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;

// Todo: implement Drawer screen https://reactnavigation.org/docs/drawer-based-navigation
