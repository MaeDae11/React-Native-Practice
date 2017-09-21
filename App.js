import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextInputer from './TextInputer.js';
import CatPicture from './CatPicture.js';
import BasicButton from './BasicButton.js';



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>HELLO WORLD</Text>
        <Text style={styles.text}>This is my first React Native App</Text>
        <Text style={styles.text}>SHAKE MEEEEE</Text>
        <TextInputer />
        <BasicButton />
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
  text: {
      color: 'purple',
      border: 'solid',
      borderColor: 'pink'
  },
});
