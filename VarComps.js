import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

const Cat = props => {
  return (
    <View>
      <Text>I am also a {props.name}</Text>
    </View>
  );
};

const StateCat = props => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>
        I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(!isHungry);
        }}
        title={isHungry ? 'Pour me some milk, please!' : 'Thank you!'}
      />
    </View>
  );
};

const PizzaTranslator = () => {
  const [text, setText] = useState('');

  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
    </View>
  );
};

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

const ScrollBar = () => {
  return (
    <ScrollView horizontal={true}>
      <Text style={{fontSize: 96}}>Scroll me plz</Text>
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Text style={{fontSize: 96}}>If you like</Text>
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Text style={{fontSize: 96}}>Scrolling down</Text>
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Text style={{fontSize: 96}}>What's the best</Text>
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Text style={{fontSize: 96}}>Framework around?</Text>
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Image source={logo} />
      <Text style={{fontSize: 80}}>React Native</Text>
    </ScrollView>
  );
};

const App = ({navigation}) => {
  return (
    <View>
      <ScrollView>
        <Text>Some Text</Text>
        <View>
          <Text>Some more text</Text>
          <Image
            source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            }}
            style={{width: 200, height: 200}}
          />
        </View>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          defaultValue="You can type in me"
        />

        <Button
          title="Go to Next"
          onPress={() => {
            navigation.navigate('list');
          }}
        />

        <Cat name="Michel" />
        <Cat name="Steve" />
        <StateCat name="Tom" />
        <PizzaTranslator />
        {/* <FlatListBasics /> */}
        <ScrollBar />
      </ScrollView>
    </View>
  );
};

export default App;
