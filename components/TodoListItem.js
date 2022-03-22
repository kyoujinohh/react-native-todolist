import React, {useState} from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, Button
} from 'react-native';


const TodoListItem = ({textValue, id, checked, onRemove, onReadId, onReadText}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>{
            onReadId(id);
            onReadText(textValue);
            }}>
                <View style={styles.circle}/>
            </TouchableOpacity>
            <Text style={styles.text}>{textValue}</Text>
            <TouchableOpacity>
                <View style={styles.deleteBtnView}>
                    <Button title={'삭제'}  onPress={() => onRemove(id)}/>
                </View>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container:{
        flex:1,
        borderBottomColor:"#bbb",
        borderBottomWidth:StyleSheet.hairlineWidth,
        flexDirection : "row",
        alignItems : "center",
        justifyContent : 'space-between'
    },
    text : {
        flex : 5,
        fontWeight : '400',
        fontSize : 20,
        marginVertical : 20,
        width : 100,
    },
    circle : {
        width : 30,
        height : 30,
        borderRadius : 15,
        borderColor : 'red',
        borderWidth: 2,
        marginRight : 20,
        marginLeft : 20,
    },
    deleteBtnView : {
        marginRight:20,
    },
});

export default TodoListItem;