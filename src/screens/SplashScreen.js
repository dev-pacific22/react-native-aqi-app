import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreenNative from 'react-native-splash-screen';
import {Colors} from '../utils';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreenNative.hide();
      navigation.replace('HomeScreen');
    }, 1000);
  }, [navigation]);

  return (
    <View style={styles.containerStyle}>
      <Text>{'Splash Screen'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.success,
    justifyContent: 'center',
  },
});
export default SplashScreen;
