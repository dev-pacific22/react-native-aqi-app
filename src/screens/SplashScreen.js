import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreenNative from 'react-native-splash-screen';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreenNative.hide();
      navigation.navigate('HomeScreen');
    }, 5000);
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
    backgroundColor: '#FAC',
    justifyContent: 'center',
  },
});
export default SplashScreen;
