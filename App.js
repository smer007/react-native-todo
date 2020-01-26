import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function App() {
  const [name, setName] = useState('Sumeer');
  const [person, setPerson] = useState({ name: 'Mario', age: 40 });

  const clickHandler = () => {
    setName('Sachin');
    setPerson({ name: 'Luigi', age: 33 });
  }
  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>His name is {person.name} and his age is {person.age}</Text>
      <View style={styles.body}>
        <Button title = 'Update state' onPress={clickHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'orange',
    padding: 20
  },
  body: {
    backgroundColor: 'gray',
    padding: 20
  },
  text: {
    fontWeight: 'bold'
  }
});
