import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  SectionList,
  Button,
  FlatList,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const style_list = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const SectionListBasics = ({navigation}) => {
  return (
    <View style={style_list.container}>
      <View>
        <Text>Section List</Text>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
            {
              title: 'J',
              data: [
                'Jackson',
                'James',
                'Jillian',
                'Jimmy',
                'Joel',
                'John',
                'Julie',
              ],
            },
          ]}
          renderItem={({item}) => <Text style={style_list.item}>{item}</Text>}
          renderSectionHeader={({section}) => (
            <Text style={style_list.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item, index) => index}
        />
        <Button
          title="Go to Home"
          onPress={() => {
            navigation.navigate('VarCompos');
          }}
        />
      </View>
    </View>
  );
};

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

const App = ({navigation}) => {
  return <SectionListBasics navigation={navigation} />;
};

export default App;
