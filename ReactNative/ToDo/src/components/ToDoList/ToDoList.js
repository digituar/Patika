import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './ToDoList.styles';
import ToDoItem from '../ToDoItem/ToDoItem';

const ToDoList = props => {
  const renderTodo = ({item}) => <ToDoItem toDo={item.value} />;
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.key}
        data={props.todoList}
        renderItem={renderTodo}
      />
    </View>
  );
};

export default ToDoList;
