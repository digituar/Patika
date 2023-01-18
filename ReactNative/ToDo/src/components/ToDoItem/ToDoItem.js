import React from 'react';
import {View, Text, TouchableWithoutFeedback, Alert} from 'react-native';
import styles from './ToDoItem.styles';

const ToDoItem = props => {
  const completeToDo = () => {
    props.completeToDo(props.toDo.id);
  };

  const deleteToDo = () => {
    props.deleteToDo(props.toDo.id);
  };

  const showConfirmDialog = () => {
    return Alert.alert(
      'Uyarı?',
      '"' + props.toDo.value + '" silmek istediğinize emin misiniz?',
      [
        {
          text: 'EVET',
          onPress: () => {
            deleteToDo();
          },
        },
        {
          text: 'HAYIR',
        },
      ],
    );
  };
  return (
    <View
      style={
        props.toDo.isCompleted ? styles.containerCompleted : styles.container
      }>
      <TouchableWithoutFeedback
        onPress={completeToDo}
        onLongPress={showConfirmDialog}>
        <Text
          style={
            props.toDo.isCompleted ? styles.toDoCompleted : styles.toDoText
          }>
          {props.toDo.value}
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ToDoItem;
