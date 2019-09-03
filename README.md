```
npm install expo-cli --global
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