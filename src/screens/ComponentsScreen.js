import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    fontWeight: '800',
    color: 'lightpink',
    backgroundColor: 'lightgrey',
  },
  questionStyle: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    backgroundColor: 'lightgrey',
  }
});

const ComponentsScreen = () => {
  const questions = [
    'Why is this erroring out all the time?',
    'Why can\'t I use JSX extention? My VS code is screaming at me.',
    'style const hoisting issue',
  ];

  const issues = <Text>Another way to import stuff.</Text>;
  
  return (
    <View>
      <Text style={styles.textStyle}>this is a component.</Text>
      {questions.map((q, i) => <Text key={i} style={styles.questionStyle}>{q}</Text>)}
      {issues}
    </View>
  );
};

export default ComponentsScreen;
