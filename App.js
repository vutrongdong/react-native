/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('vutrongdong');

  const handleSetName = () => {
    setName('ghghhghg');
  }

  const handleChangeInput = (e) => {
    console.log(e.target.value)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello, {name}!</Text>
      </View>
      <TextInput onChangeText={(val) => setName(val)} placeholder="enter name" style={styles.input}/>
      <View style={styles.buttonContainer}>
        <Button title="update name" onPress={handleSetName}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    backgroundColor: 'pink',
    padding: 20
  },
  boldText: {
    fontWeight: 'bold'
  },
  buttonContainer: {
    marginTop: 10
  },
  input: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 8,
    width: 200,
    marginTop: 10
  }
});

export default App;
