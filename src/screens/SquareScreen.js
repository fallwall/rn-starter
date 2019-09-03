import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';
import { setProvidesAudioData } from 'expo/build/AR';

const styles = StyleSheet.create({});

const COLOR_INCREMENT = 10;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    if (color === 'red') {
      (red + change < 255 || red + change > 0) && setRed(red + change);
    } else if (color === 'green') {
      (green + change < 255 || green + change > 0) && setGreen(green + change);
    } else {
      (blue + change < 255 || blue + change > 0) && setBlue(blue + change);
    }
  };

  return (
    <View>
      <Text>Square Screen</Text>
      <ColorCounter
        onIncrease={() => setColor('red', COLOR_INCREMENT)}
        onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor('green', COLOR_INCREMENT)}
        onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => setColor('blue', COLOR_INCREMENT)}
        onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
        color="Blue"
      />
      <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}>
      </View>
    </View>
  )
}

export default SquareScreen;