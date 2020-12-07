import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView, StatusBar, View, KeyboardAvoidingView, Text, FlatList, } from "react-native";

import { app } from './styles';
import { TodoInput, TodoCard } from "./components";

const App = () => {
  const [list, setList] = useState([]);

  function removeTodo(todoId) {
    const newArray = [...list];
    const todoIndex = list.findIndex(t => t.id == todoId);

    newArray.splice(todoIndex, 1);
    setList(newArray);

    (async () => AsyncStorage.setItem("@SAVED_TODO", JSON.stringify(newArray)))()
    
  }

  function doneTodo(todoId) {
    const newArray = [...list];
    const todoIndex = newArray.findIndex(item => item.id == todoId);

    newArray[todoIndex].isDone = !newArray[todoIndex].isDone;

    setList(newArray);
    (async () => AsyncStorage.setItem("@SAVED_TODO", JSON.stringify(newArray)))()
  }

  useEffect(() => {
    async function fetchTodo() {
      let savedTodo = await AsyncStorage.getItem("@SAVED_TODO");
      savedTodo = savedTodo == null ? [] : JSON.parse(savedTodo)
      setList(savedTodo)
    }

    fetchTodo()
  }, [])


  const addTodo = async (text) => {
    const element = {
      id: list.length,
      todo: text,
      isDone: false
    }

    let savedTodo = await AsyncStorage.getItem("@SAVED_TODO");
    savedTodo = savedTodo == null ? [] : JSON.parse(savedTodo)

    const newArray = [element, ...savedTodo]
    setList(newArray);

    AsyncStorage.setItem("@SAVED_TODO", JSON.stringify(newArray))

  }

  const renderTodo = ({item}) => {
    return (
      <TodoCard 
        data={item} 
        onDone={() => doneTodo(item.id)}
        onRemove={() => removeTodo(item.id)}
      />
    )
  } 


    return (
        <SafeAreaView style={app.container}>
          <StatusBar backgroundColor="#280680" />
            <KeyboardAvoidingView style={app.container}>

                <View style={app.banner}>
                    <Text style={app.todoText}>TODO</Text>
                    <Text style={app.todoCount}>{list.filter(t => t.isDone === false).length}</Text>
                </View>

                <FlatList 
                  keyExtractor={(_, index) => index.toString()}
                  data={list}
                  renderItem={renderTodo}
                  ListEmptyComponent={() => <Text style={app.emptyComponent}>Nothing to do..</Text>}
                />


                <TodoInput 
                  onTodoEnter={todoText => addTodo(todoText)}
                />

            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default App;