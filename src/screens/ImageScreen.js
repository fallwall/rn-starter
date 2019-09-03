import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const styles = StyleSheet.create({
});

const ImageScreen = () => {
  return (
    <ScrollView>
      <Text>Image Screen</Text>
      <ImageDetail
        rating={9}
        imageSource={require('../../assets/berlin.gif')}
        title='Berlin' />
      <ImageDetail
        rating={7}
        imageSource={require('../../assets/chicago.gif')}
        title='Chicago' />
      <ImageDetail
        rating={10}
        imageSource={require('../../assets/newyork.gif')}
        title='New York' />
      <ImageDetail
        rating={7}
        imageSource={require('../../assets/honolulu.gif')}
        title='Honolulu' />
    </ScrollView>
  )
}

export default ImageScreen;