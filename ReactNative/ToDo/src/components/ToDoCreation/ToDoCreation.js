import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text, Alert} from 'react-native';
import styles from './ToDoCreation.styles';

const ToDoCreation = props => {
  const [text, setText] = useState('');
  const handleNewTodoChange = newValue => {
    setText(newValue);
  };

  const submitHandler = () => {
    if (text === '') {
      Alert.alert('Yapılacak ekle!');
      return false;
    }
    props.submitHandler(text);
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={text}
        placeholder="Yapılacak..."
        placeholderTextColor={'#7d7d7e'}
        onChangeText={handleNewTodoChange}
        autoFocus={true}
      />
      <View style={styles.seperator} />
      <TouchableOpacity
        title="Kaydet"
        style={text.length > 0 ? styles.addButtonValid : styles.addButton}
        onPress={submitHandler}>
        <Text style={styles.addButtonText}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToDoCreation;
