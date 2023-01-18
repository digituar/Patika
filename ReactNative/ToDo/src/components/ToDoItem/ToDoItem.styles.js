import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    paddingHorizontal: 12,
    backgroundColor: '#7da453',
  },
  containerCompleted: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    paddingHorizontal: 12,
    backgroundColor: '#37474f',
  },
  toDoText: {
    color: '#ffffff',
    fontSize: 20,
  },
  toDoCompleted: {
    textDecorationLine: 'line-through',
    color: '#808080',
    fontSize: 20,
  },
});
