import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoCreation from './components/ToDoCreation';

const App = () => {
  const [todoList, setToDoList] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(todoList.length);
  }, [todoList]);

  const handleSubmit = value => {
    if (todoList.some(e => e.value === value)) {
      Alert.alert(value, ' yapılacaklar arasında mevcut!');
      return;
    }
    setToDoList(todos => {
      return [
        {
          value: value,
          key: Math.random().toString(),
        },
        ...todos,
      ];
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Yapılacaklar </Text>
        <Text style={styles.counter}>{count}</Text>
      </View>
      <View style={styles.list}>
        <ToDoList todoList={todoList} />
      </View>
      <View style={styles.creation}>
        <ToDoCreation submitHandler={handleSubmit} todoList={todoList} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
  title: {
    justifyContent: 'flex-start',
    fontSize: 24,
    fontWeight: '600',
    color: '#ffa500',
  },
  counter: {
    textAlign: 'right',
    fontSize: 24,
    fontWeight: '600',
    color: '#ffa500',
  },
  list: {
    flex: 1,
  },
  creation: {
    marginBottom: 30,
    flex: 0.2,
  },
});

export default App;
