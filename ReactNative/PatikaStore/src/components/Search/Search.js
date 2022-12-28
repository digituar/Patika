import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

const Search = () => {
  return (
    <View>
      <TextInput style={styles.searchInput} placeholder="Ara..." />
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    placeholderTextColor: '#b7b9bc',
    marginTop: 15,
    margin: 5,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#eceff1',
  },
});

export default Search;
