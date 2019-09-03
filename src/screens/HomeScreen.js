import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
  },
});

const HomeScreen = () => {
  return <Text style={styles.text}> SETTING UP</Text>;
};

export default HomeScreen;
