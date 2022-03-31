import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAQIDetailsWithCity} from '../redux/action/HomeAction';
import Spinner from 'react-native-loading-spinner-overlay';
import {CustomInput} from '../components';
import {Colors} from '../utils/Colors';

const HomeScreen = ({
  navigation,
  loading,
  getAQIDetailsWithCity,
  message,
  cityData,
  error,
}) => {
  const [cityName, setCityName] = useState('pune');

  const onCityTextChange = text => {
    setCityName(text);
  };

  const onSearchPress = () => {
    getAQIDetailsWithCity(cityName);
  };

  return (
    <React.Fragment>
      <Spinner
        visible={loading}
        textContent={'Fetching AQI'}
        textStyle={styles.spinnerTextStyle}
      />

      <View style={styles.containerStyle}>
        <View style={styles.inputContainer}>
          <CustomInput
            name="city"
            onChangeText={onCityTextChange}
            width={'65%'}
            placeholder={'Enter City Name'}
            onTex
          />
          <Button onPress={onSearchPress} title="Search" />
        </View>
        <Text>{message}</Text>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.pageBackground,
  },
  inputContainer: {
    flexDirection: 'row',
    height: '15%',
    maxWidth: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({getAQIDetailsWithCity}, dispatch);
};

const mapStateToProps = ({home, app}) => ({
  loading: app.loading,
  message: home.message,
  cityData: home.cityData,
  error: home.error,
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
