import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextInputer from './TextInputer.js';
import CatPicture from './CatPicture.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HELLO WORLD</Text>
        <Text>This is my first React Native App</Text>
        <Text>SHAKE MEEEEE</Text>
        <Text>Jk. Please don't</Text>
        <TextInputer />
        <CatPicture />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
