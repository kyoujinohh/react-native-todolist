import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  View
} from 'react-native';

const TodoInsert = ({onAddTodo, onNewTodo, setNewTodoItem, setUpdateItem, onStatus, setOnStatus, updateId}) => {
    const todoInputHandler = onNewTodo => {
        setNewTodoItem(onNewTodo);
    };

    const addTodoHandler = () => {
        onAddTodo(onNewTodo);
        setNewTodoItem('');
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="내용 입력"
                placeholderTextColor={'#999'}
                onChangeText={todoInputHandler}
                value={onNewTodo}
                autoCorrect={false}
            />
            <View style={styles.button}>
                <Button title={onStatus ? '수정' : '추가'} onPress={onStatus ? () => setUpdateItem(updateId) : addTodoHandler}/>
            </View>
            {onStatus && (
                <View style={styles.button}>
                    <Button title={'취소'} onPress={async () => {setOnStatus(false); setNewTodoItem(''); }}/>
                </View>
            )}
        </View>
    );
};


const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems : 'center',
  },
  input:{
    flex:1,
    padding:20,
    borderBottomColor:"#BBB",
    borderBottomWidth:1,
    fontSize:24,
    marginLeft : 20,
  },
  button : {
    marginRight:10,
  },
});

export default TodoInsert;