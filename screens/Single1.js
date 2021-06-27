import React from 'react';
import {View, Text, Button} from 'react-native';

const Single1 = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Single1</Text>
      <Button
        title="Go to Single2"
        onPress={() => navigation.navigate('Single2')}
      />
      <Button
        title="Open drawer"
        onPress={() => navigation.openDrawer()}
      />
    </View>
  );
};
export default Single1;
