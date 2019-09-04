```
npm install expo-cli --global
```

To generate project: 
expo-cli (comes with default configuration)
react-native-cli

```
npx expo-cli init food
```

### Error 02Sep - Resolved.
https://stackoverflow.com/questions/43604603/module-appregistry-is-not-registered-callable-module-calling-runapplication/51304124

https://stackoverflow.com/questions/34969858/react-native-module-appregistry-is-not-a-registered-callable-module

### FlatList
- Turns an array into a list of element;
- We are required to pass in a 'prop' of 'data' - the array of data that we are going to create a bunch og elements out of.
- Also required to pass in a 'renderItem' prop, function that will turn each individual item into an element.
- If you are coming from React on the web, you might be used to 'mapping' an array of data to build a list - FlatList is better with RN.

```
 <FlatList
      horizontal
      // aka horizonal={true}
      showsHorizontalScrollIndicator={false}
      // to hide the bottom scroll bar
      keyExtractor={(race)=>race.name}
      data={races}
      renderItem={({ item }) => {
        return (    
          <Text>{item.name}</Text>
        )
        }}
      />
```

🔥 More FlatList props :
https://facebook.github.io/react-native/docs/flatlist.html

### Buttons w/ RN
- Button: Very simple component for showing a button and detecting a press;
- TouchableOpacity: highly customizable component that can detect a press on just about any kind of element.

```
      <Button
        onPress={() => props.navigation.navigate('Components')}
        title="Go to Components Demo"
      />
```

```
      <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
```

### Images

```
<Image source={require('../../assets/berlin.gif')} />
```
### ScrollView 🔥

https://facebook.github.io/react-native/docs/using-a-scrollview

### Reducer

- Reducer: function that gets called with two objects;
- Argument No.1 : objects that has all of our state in it
  ({red: 0, green: 0, blue: 0})
- Argument No.2 : object that describes the update we want to make.
  (colorToChange: 'red', amount: 15})
- We look at argument #2 and use it to decide how to change Argument #1
- We never directly mutate Argument#1.
- We must always return a value to be used as Argument #1.
- useState || useReducer, never both.

Community Convention:
```
const reducer = (state, action) => {
  ...
}
```
:::action:::
  type: string that describes the exact change operations 
  payload: some data critical to the change operation

```
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
```

### Text Input iOS Thing
```
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
      />
```
1. default style is nada;
2. auto cap: characters | none | sentences | words
3. auto correct default is true.
4. above two are not the same format. 


### Layout Systems
- Box Object Model
- Flex Box
- Position

- Little Difference in Box Object Name: marginTop, borderTopWidth, paddingTop, height, paddingBottom, borderBottomWidth, marginBottom ... margin, marginVertical, marginHorizontal, padding, padding vertical, paddingVertical, paddingHorizontal, borderWidth

- FlexBox: alignItems: stretch, flex-start, center, flex-end

- FlexBox: flexDirection: column, row
- FlexBox: justifyContent: flex-start, center, flex-end, space-between, space-around
- FlexBox Parent: alignItems | flexDirection | justifyContent;
- FlexBox Child: alignSelf | flex

- Position: relative, absolute(ignored by sigblings, still obeys some flex box rules set by parents)
  (top / bottom / left / right)
```
  ...StyleSheet.absoluteFillObject
```
  (position: absolute, top/bottom/left/right: 0)

  
