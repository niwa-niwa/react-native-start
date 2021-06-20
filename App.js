import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from  '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VarCompos from './VarComps';
import SectionListBasics from './SectionListBasics';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="VarCompos">
        <Stack.Screen name="VarCompos" component={VarCompos} />
        <Stack.Screen name="list" component={SectionListBasics} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
