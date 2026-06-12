import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({ label, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '25%',
    padding: 20,
    borderWidth: 1,
    alignItems: 'center'
  },
  text: {
    fontSize: 20
  }
});
