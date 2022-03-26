import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import AppContainer from './src/routes/Routes';
import {Provider} from 'react-redux';
import getStore from './src/redux';

const store = getStore();
const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
