import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { todo_input } from '../styles'

const TodoInput = (props) => {

    const [text, setText] = useState("");

    return (
        <View style={todo_input.container}>
            <View style={todo_input.inputContainer}>
                <TextInput 
                    placeholder="New Todo..."
                    onChangeText={value => setText(value)}
                    value={text}
                />
            </View>

            <View>
                <TouchableOpacity 
                    style={todo_input.buttonContainer}
                    onPress={() => {text && props.onTodoEnter(text), setText("")}}
                    >
                    <Text style={todo_input.buttonText}>Add Todo</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export { TodoInput };