import React from 'react';
import {View, Text} from 'react-native';
import styles from './ToDoItem.styles';

const ToDoItem = props => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.toDoText}>{props.toDo}</Text>
      </View>
    </View>
  );
};

export default ToDoItem;
