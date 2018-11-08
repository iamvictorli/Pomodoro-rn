import React from 'react';
import { StyleSheet, Button, View, Vibration } from 'react-native';
import Timer from './Timer';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Timer breakLength={5} workLength={10} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
