
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import CarItem from './components/CarItems';
import CarsList from './components/CarsList/';
import Header from './components/Header';

const App = () => {
  return (
    <View style={styles.Container}>
      <Header />
      <CarsList />
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});


export default App;
