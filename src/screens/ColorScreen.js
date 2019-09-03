import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, FlatList } from 'react-native';

const styles = StyleSheet.create({});

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button
        onPress={() => {
          setColors([...colors, randomRgb()])
        }}
        title="Add Color" />
      <FlatList
        keyExtractor={(item)=> item}
        data={colors}
        renderItem={({ item }) =>
          <View style={{ height: 100, width: 100, backgroundColor: item }} />
   
        }
      />
    </View>

  )
}

export default ColorScreen;