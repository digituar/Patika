import React from 'react';
import {SafeAreaView, FlatList, StyleSheet, Text} from 'react-native';

import Search from './components/Search/Search';
import Product from './components/Product';
import patikastore_data from './patikastore_data.json';

const product = ({item}) => <Product product={item} />;
const productKey = item => item.id.toString();

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>PATIKASTORE</Text>
      <FlatList
        ListHeaderComponent={() => <Search />}
        data={patikastore_data}
        numColumns={2}
        keyExtractor={productKey}
        renderItem={product}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#800080',
    marginTop: 10,
  },
  container: {
    flex: 1,
    margin: 10,
  },
  row: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
});

export default App;
