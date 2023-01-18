import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './ToDoList.styles';
import ToDoItem from '../ToDoItem/ToDoItem';

const ToDoList = props => {
  const renderTodo = ({item}) => (
    <ToDoItem toDo={item} completeToDo={completeToDo} deleteToDo={deleteToDo} />
  );

  const completeToDo = id => {
    const completedToDo = props.todoList.map(todoItem =>
      todoItem.id === id
        ? {...todoItem, isCompleted: !todoItem.isCompleted}
        : todoItem,
    );
    props.setToDoList(completedToDo);
    console.log(props.todoList);
  };

  const deleteToDo = id => {
    const newToDoList = props.todoList.filter(todo => todo.id !== id);
    props.setToDoList(newToDoList);
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={props.todoList}
        renderItem={renderTodo}
      />
    </View>
  );
};

export default ToDoList;
