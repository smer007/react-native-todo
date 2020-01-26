import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default function App() {
  const [name, setName] = useState('Sumeer');
  const [age, setAge] = useState('30');

  const clickHandler = () => {
    setName('Sachin');
    setPerson({ name: 'Luigi', age: 33 });
  }
  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
        multiline
        placeholder="e.g. Rahul"
        style={styles.input}
        onChangeText={value => setName(value)}/>

      <Text>Enter age:</Text>
      <TextInput
        keyboardType="numeric"
        placeholder="e.g. 30"
        style={styles.input}
        onChangeText={value => setAge(value)}/>

      <Text>name: {name}, age: {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 40
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  }
});
