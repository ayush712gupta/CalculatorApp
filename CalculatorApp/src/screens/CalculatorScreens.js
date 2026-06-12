import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import Display from '../components/Display';
import Button from '../components/Button';
import { calculateExpression } from '../utils/calculator';

export default function CalculatorScreen() {
  const [input, setInput] = useState('');

  const buttons = [
    '7','8','9','/',
    '4','5','6','*',
    '1','2','3','-',
    '0','.','=','+',
    'C'
  ];

  const handlePress = (value) => {
    if (value === 'C') {
      setInput('');
      return;
    }

    if (value === '=') {
      try {
        setInput(calculateExpression(input).toString());
      } catch {
        setInput('Error');
      }
      return;
    }

    setInput(input + value);
  };

  return (
    <View style={styles.container}>
      <Display value={input} />

      <View style={styles.buttons}>
        {buttons.map((btn) => (
          <Button key={btn} label={btn} onPress={() => handlePress(btn)} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});