import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';

const styles = StyleSheet.create({
  inputStyle: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 15,
    padding: 5,
  },
});

const TextScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Text Screen</Text>
      <Text>Enter your name:</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(data) => setName(data)}
        style={styles.inputStyle}
      />
      {name ? <Text>Te llamas {name} ...</Text> : null}
      <Text>Enter your password:</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(data) => setPassword(data)}
        style={styles.inputStyle}
      />
      {password.length < 5 &&
        <Text>Password must be longer than 5 characters</Text>}
    </View>

  )
}

export default TextScreen;