import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAQIDetailsWithCity} from '../redux/action/HomeAction';
import Spinner from 'react-native-loading-spinner-overlay';

const HomeScreen = ({
  navigation,
  loading,
  getAQIDetailsWithCity,
  message,
  cityData,
  error,
}) => {
  const [cityName, setCityName] = useState('pune');
  return (
    <React.Fragment>
      {console.log('Loading status>>', loading)}
      <Spinner
        visible={loading}
        textContent={'Fetching AQI'}
        textStyle={styles.spinnerTextStyle}
      />
      <View style={styles.containerStyle}>
        <Text>{cityData?.idx}</Text>
        <Button
          onPress={() => getAQIDetailsWithCity(cityName)}
          title="Click Here"
        />
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#69A',
    justifyContent: 'center',
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
