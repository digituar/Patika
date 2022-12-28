import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {
    width: '100%',
    height: Dimensions.get('window').height / 4,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  container: {
    backgroundColor: '#eceff1',
    margin: 5,
    alignItems: 'center',
    borderWidth: 10,
    borderColor: '#eceff1',
    width: Dimensions.get('window').width / 2.2,
    borderRadius: 10,
  },
  product_details: {
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  price: {
    fontSize: 20,
    marginTop: 5,
    fontWeight: 'bold',
  },
  notInStock: {
    fontSize: 17,
    color: 'red',
    fontWeight: 'bold',
  },
});
