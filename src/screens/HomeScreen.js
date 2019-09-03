import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
  },
});

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}> SETTING UP</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo"
      />
      <Button
        onPress={() => navigation.navigate('List')}
        title="Go to List Demo"
      />
      <Button
        onPress={() => navigation.navigate('Image')}
        title="Go to Image Demo"
      />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Go to Counter Demo"
      />
      <Button
        onPress={() => navigation.navigate('Color')}
        title="Go to Color Demo"
      />
      <Button
        onPress={() => navigation.navigate('Square')}
        title="Go to Square Demo"
      />
    </View>
  );
};

// const HomeScreen = (props) => {
//   // console.log(props.navigation);

//   return (
//     <View>
//       <Text style={styles.text}> SETTING UP</Text>
//       <Button
//         onPress={() => props.navigation.navigate('Components')}
//         title="Go to Components Demo"
//       />
//       <Button
//         onPress={() => props.navigation.navigate('List')}
//         title="Go to List Demo"
//       />
//     </View>
//   );
// };

export default HomeScreen;