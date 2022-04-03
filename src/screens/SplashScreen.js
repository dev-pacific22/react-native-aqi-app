import {StyleSheet, Image, View} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreenNative from 'react-native-splash-screen';
import {Colors} from '../utils';
import {assets} from '../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreenNative.hide();
      navigation.replace('HomeScreen');
    }, 500);
  }, [navigation]);

  return (
    <View style={styles.containerStyle}>
      <Image
        resizeMode="contain"
        source={assets.app_logo}
        style={styles.logoStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.white,
    justifyContent: 'center',
  },
  logoStyle: {
    height: 250,
    width: 250,
  },
});
export default SplashScreen;
