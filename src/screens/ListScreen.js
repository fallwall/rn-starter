import React from 'react';
import {
  Text, StyleSheet, View, FlatList,
} from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 30,
  },
});

const ListScreen = () => {
  const races = [
    {
      name: 'Berlin',
      date: 'September',
    },
    {
      name: 'Chicago',
      date: 'October',
    },
    {
      name: 'New York',
      date: 'November',
    },
    {
      name: 'Honolulu',
      date: 'December',
    },
  ];

  return (
    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator={false}
      keyExtractor={(race) => race.name}
      data={races}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - {item.date}
          </Text>
        )
      }}
    />
  );
};

export default ListScreen;