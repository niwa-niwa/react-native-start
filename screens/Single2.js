import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button} from 'react-native';

const Detail2 = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Details!</Text>
    </View>
  );
};

const Single2 = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Single2</Text>
      <Button
        title="Go to Single1"
        onPress={() => navigation.navigate('Single1')}
      />
      <Button
        title="Go to Detail2"
        onPress={() => navigation.navigate('Detail2')}
      />
    </View>
  );
};

const SingleStack = createStackNavigator();
const SingleStackScreen = () => {
  return (
    <SingleStack.Navigator>
      <SingleStack.Screen name="Single2" component={Single2} />
      <SingleStack.Screen name="Detail2" component={Detail2} />
    </SingleStack.Navigator>
  );
};
export default SingleStackScreen;
