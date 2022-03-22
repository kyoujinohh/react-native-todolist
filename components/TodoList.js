import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';

import TodoListItem from "./TodoListItem";

const TodoList = ({todos, onRemove, onReadId, onReadText}) => {
    return (
        <ScrollView contentContainerStyle={styles.listComponent}>
            {todos.map(todo => (
                <TodoListItem key={todo.id} {...todo} onRemove={onRemove} onReadId={onReadId} onReadText={onReadText}/>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    listComponent: {
        alignItems : 'center',
    },
});

export default TodoList;