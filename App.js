import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Hello World</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>Lorem Ipsum yada yada</Text>
        <Text>Lorem Ipsum yada yada</Text>
        <Text>Lorem Ipsum yada yada</Text>
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
    backgroundColor: 'green',
    padding: 20
  },
  text: {
    fontWeight: 'bold'
  }
});
