import React from 'react';
import {SafeAreaView, StyleSheet, Platform, StatusBar} from 'react-native';
import AppContainer from './src/routes/Routes';
import {Provider} from 'react-redux';
import getStore from './src/redux';
import {Colors} from './src/utils/Colors';
import {NativeBaseProvider} from 'native-base';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']);

const store = getStore();
const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <SafeAreaView style={[styles.container]}>
          <AppContainer />
        </SafeAreaView>
      </NativeBaseProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.pageBackground,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default App;
