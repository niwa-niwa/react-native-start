import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import VarCompos from './VarComps';
import SectionListBasics from './SectionListBasics';
import {Button} from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="VarCompos"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="VarCompos"
          component={VarCompos}
          options={{
            title: 'Home Sweet Home',
            headerRight: () => (
              <Button
                onPress={()=>alert('This is a button!')}
                title="Info"
                color="#fff"
              />
            ),
          }}
        />
        <Stack.Screen
          name="list"
          component={SectionListBasics}
          options={{title: 'List on List'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
