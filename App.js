import React, { useState } from 'react';
import {
  StyleSheet,
  FlatList,
  Alert,
  View,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo'
import Header from './components/Header';


const App = () => {
  const [todos, setTodos] = useState([
    { text: 'vutrongdong', key: 1},
    { text: 'test12345', key: 2},
    { text: 'first in the time', key: 3},
    { text: 'test12345', key: 4},
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {
    if(text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString()},
          ...prevTodos
        ]
      })
    } else {
      Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
        {tex: 'Understood', onPress: () => console.log('alert closed')}
      ]);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={( {item} ) => (
                <TodoItem
                  item={item}
                  pressHandler={pressHandler}
                />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40
  }
});

export default App;
