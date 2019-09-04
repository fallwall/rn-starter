import React, { useReducer } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';
import { setProvidesAudioData } from 'expo/build/AR';

const styles = StyleSheet.create({});

const COLOR_INCREMENT = 10;

const reducer = (state, action) => {
  switch (action.type) {
    case 'change_red':
      return (state.red + action.payload < 255 ||
        state.red + action.payload > 0)
        ? { ...state, red: state.red + action.payload }
        : state;
    case 'change_green':
      return (state.green + action.payload < 255 ||
        state.green + action.payload > 0)
        ? { ...state, green: state.green + action.payload }
        : state;
    case 'change_blue':
      return (state.blue + action.payload < 255 ||
        state.blue + action.payload > 0)
        ? { ...state, blue: state.blue + action.payload }
        : state;
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  return (
    <View>
      <Text>Square Screen</Text>
      <ColorCounter
        onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })}
        color="Blue"
      />
      <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`, marginLeft: 110 }}>
      </View>
      <Text>rgb: ({red}, {green}, {blue})</Text>
    </View>
  )
}

// const SquareScreen = () => {
//   const [red, setRed] = useState(0);
//   const [green, setGreen] = useState(0);
//   const [blue, setBlue] = useState(0);

//   const setColor = (color, change) => {
//     if (color === 'red') {
//       (red + change < 255 || red + change > 0) && setRed(red + change);
//     } else if (color === 'green') {
//       (green + change < 255 || green + change > 0) && setGreen(green + change);
//     } else {
//       (blue + change < 255 || blue + change > 0) && setBlue(blue + change);
//     }
//   };

//   return (
//     <View>
//       <Text>Square Screen</Text>
//       <ColorCounter
//         onIncrease={() => setColor('red', COLOR_INCREMENT)}
//         onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
//         color="Red"
//       />
//       <ColorCounter
//         onIncrease={() => setColor('green', COLOR_INCREMENT)}
//         onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
//         color="Green"
//       />
//       <ColorCounter
//         onIncrease={() => setColor('blue', COLOR_INCREMENT)}
//         onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
//         color="Blue"
//       />
//       <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}>
//       </View>
//     </View>
//   )
// }

export default SquareScreen;