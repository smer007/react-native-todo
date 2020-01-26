import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'shaun', id: '1' },
    { name: 'yoshi', id: '2' },
    { name: 'mario', id: '3' },
    { name: 'luigi', id: '4' },
    { name: 'peach', id: '5' },
    { name: 'toad', id: '6' },
    { name: 'bowser', id: '7' },
  ]);



  return (
    <View style={styles.container}>
      <FlatList
        data ={people}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 18,
  }
});