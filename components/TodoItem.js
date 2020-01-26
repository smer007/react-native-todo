import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item: {key, text}, pressHandler }) {

  return (
    <TouchableOpacity onPress={() => pressHandler(key)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={18} color="#333" />
        <Text style={styles.itemText}>{text}</Text>
      </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
    flexDirection: 'row',
    flex: 1
  },
  itemText: {
    paddingLeft: 10
  }
});
