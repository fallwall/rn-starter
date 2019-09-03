import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';


const styles = StyleSheet.create({
  counterStyle: {
    textAlign: 'center',
    marginVertical: 5,
    fontWeight: '500',
  }
});

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        onPress={() => {
          setCounter(counter + 1);
        }}
        title="increase" />
      <Button
        onPress={() => {
          setCounter(counter - 1);
        }}
        title="decrease" />
      <Text style={styles.counterStyle}>Current Count | {counter}</Text>
    </View>
  )
}

export default CounterScreen;
