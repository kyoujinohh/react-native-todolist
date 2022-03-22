/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Button,
  Text,
  ScrollView,
} from 'react-native';

import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
    const [todos, setTodos] = useState([]);
    const [onStatus, setOnStatus] = useState(false);
    const [newTodoItem, setNewTodoItem] = useState('');
    const [updateId, setUpdateId] = useState('');

    const addTodo = text => {
        setTodos([
            ...todos,
            {id:Math.random().toString(), textValue:text, checked:false},
        ]);
    };

    const onRemove = id => {
        setTodos(todos.filter(todo=>todo.id !== id));
    }
    const onReadId = itemID => {
        setUpdateId(itemID);
    }

    const onReadText = itemText => {
        setNewTodoItem(itemText);
        setOnStatus(true);
    }

    const setUpdateItem = id => {
        setTodos(
            todos.map(todo => {
                if(todo.id === id){
                    return {...todo, textValue: newTodoItem};
                }else{
                    return {...todo};
                }
            })
        )
    }

    return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.appTitle}>할일 목록 만들기</Text>
          <View style={styles.card}>
            <TodoInsert
                onAddTodo={addTodo}
                onNewTodo={newTodoItem}
                setNewTodoItem={setNewTodoItem}
                setUpdateItem={setUpdateItem}
                onStatus={onStatus}
                setOnStatus={setOnStatus}
                updateId={updateId}
            />
            <TodoList
                todos={todos}
                onRemove={onRemove}
                onReadId={onReadId}
                onReadText={onReadText}
            />
          </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#3143e8",
    },
    appTitle:{
        color:"#FFF",
        fontSize : 36,
        marginTop : 30,
        marginBottom : 30,
        fontWeight : '300',
        textAlign: "center",
        backgroundColor : "#3143e8",
    },
    card:{
        backgroundColor: "#FFF",
        flex: 1,
        marginLeft: 10,
        marginRight:10,
    },
    input : {
        padding:20,
//        borderBottomColor: "#BBB",
//        borderBottomWidth: 1,
        fontSize: 24,
        marginLeft: 20,
        marginRight: 20,
    },
});

export default App;
