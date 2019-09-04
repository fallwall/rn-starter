import React, { useReducer } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';


const styles = StyleSheet.create({
  counterStyle: {
    textAlign: 'center',
    marginVertical: 5,
    fontWeight: '500',
  }
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase_sum':
      return { ...state, sum: state.sum + action.payload };
    case 'decrease_sum':
      return { ...state, sum: state.sum + action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { sum: 0 });
  const { sum } = state;

  return (
    <View>
      <Button
        onPress={() => {
          dispatch({ type: 'increase_sum', payload: 1
        });
      }}
      title="increase" />
      <Button
        onPress={() => {
          dispatch({ type: 'decrease_sum', payload: -1
        });
      }}
      title="decrease" />
      <Text style={styles.counterStyle}>Current Count | {sum}</Text>
    </View>
  )
}

// const CounterScreen = () => {
//   const [counter, setCounter] = useState(0);

//   return (
//     <View>
//       <Button
//         onPress={() => {
//           setCounter(counter + 1);
//         }}
//         title="increase" />
//       <Button
//         onPress={() => {
//           setCounter(counter - 1);
//         }}
//         title="decrease" />
//       <Text style={styles.counterStyle}>Current Count | {counter}</Text>
//     </View>
//   )
// }

export default CounterScreen;