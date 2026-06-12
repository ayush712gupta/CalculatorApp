import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Display({ value }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  text: {
    fontSize: 40,
    textAlign: 'right'
  }
});
