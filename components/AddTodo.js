import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Keyboard
} from 'react-native';

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val)
    }

    const handleSubmit = (text) => {
        setText('');
        Keyboard.dismiss();
        submitHandler(text);
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                value={text}
                placeholder="new todo..."
                onChangeText={changeHandler}
            />
            <Button 
                onPress={() => handleSubmit(text)} 
                title="Add todo"
                color='coral'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomColor: '#3b3b3b'
    }
})