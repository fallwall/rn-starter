import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 10,
    borderColor: 'black',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 200,
  },
  textStyleOne: {
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'grey',
    // marginVertical: 10,
    // marginHorizontal: 10,
    alignSelf: 'flex-start',
    // flex: 1,
    height: 100,
    width: 100,
    margin: 0,
  },
  textStyleTwo: {
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'grey',
    // flex: 1,
    alignSelf: 'flex-end',
    // position: 'absolute',
    left: 10,
    height: 100,
    width: 100,
    margin: 0,
    marginLeft: -20,
  },
  textStyleThree: {
    borderWidth: 1,
    borderColor: 'purple',
    backgroundColor: 'grey',
    // flex: 1,
    alignSelf: 'flex-start',
    height: 100,
    width: 100,
    margin: 0,
  },
});

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      
      <Text style={styles.textStyleOne}>Item #1</Text>
      <Text style={styles.textStyleTwo}>Item #2</Text>
      <Text style={styles.textStyleThree}>Item #3</Text>
    </View>
  )
}

export default BoxScreen;
