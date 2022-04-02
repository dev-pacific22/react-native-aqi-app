import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  getAQIDetailsWithCity,
  getAQIDetailsWithLocation,
} from '../redux/action/HomeAction';
import Spinner from 'react-native-loading-spinner-overlay';
import {CustomCard, CustomInput} from '../components';
import {Colors} from '../utils/Colors';
import {getFormattedDateTimeWithTZ, getHealthStatusFromAQI} from '../utils';
import GetLocation from 'react-native-get-location';

const HomeScreen = ({
  navigation,
  loading,
  getAQIDetailsWithCity,
  getAQIDetailsWithLocation,
  message,
  cityData,
  error,
}) => {
  const [cityName, setCityName] = useState();

  const onCityTextChange = text => {
    setCityName(text);
  };

  const onSearchPress = () => {
    getAQIDetailsWithCity(cityName);
  };

  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        const {latitude, longitude} = location;
        getAQIDetailsWithLocation(latitude, longitude);
      })
      .catch(err => {
        //TODO: Add fallback if
        const {code, errMessage} = err;
        console.warn(code, errMessage);
      });
  }, [getAQIDetailsWithLocation]);

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
            width={'75%'}
            placeholder={'Enter City Name'}
            onTex
          />
          <Button onPress={onSearchPress} title="Search" />
        </View>
        {!cityData.city ? (
          <Text style={styles.subheader}>
            {'No data found, please try again.'}
          </Text>
        ) : (
          <View style={styles.parentInfoContainer}>
            <Text style={styles.subheader}>{'Overview'}</Text>
            <Text>{`Showing AQI for ${cityData.city?.name}`}</Text>
            <CustomCard style={styles.cardStyle}>
              <View>
                <View style={styles.infoHeaderContainer}>
                  <Text style={[styles.infoText, styles.subheader]}>
                    {'Params'}
                  </Text>
                  <Text style={[styles.infoText, styles.subheader]}>
                    {'Values'}
                  </Text>
                </View>
                <View
                  style={[styles.infoHeaderContainer, styles.infoContainer]}>
                  <Text style={[styles.infoText]}>{'Status'}</Text>
                  <Text
                    style={[
                      styles.infoText,
                      styles.infoValue,
                      {
                        color: getHealthStatusFromAQI(cityData?.aqi || 0)
                          ?.color,
                      },
                    ]}>{`${
                    getHealthStatusFromAQI(cityData?.aqi || 0)?.status || 'N/A'
                  }`}</Text>
                </View>
                <View
                  style={[styles.infoHeaderContainer, styles.infoContainer]}>
                  <Text style={styles.infoText}>{'AQ Index'}</Text>
                  <Text style={[styles.infoText, styles.infoValue]}>{`${
                    cityData.aqi || 'N/A'
                  } - AQI`}</Text>
                </View>

                <View
                  style={[styles.infoHeaderContainer, styles.infoContainer]}>
                  <Text style={styles.infoText}>{'Dominant Pollutant'}</Text>
                  <Text style={[styles.infoText, styles.infoValue]}>{`${
                    cityData?.dominentpol?.toUpperCase() || 'N/A'
                  }`}</Text>
                </View>

                <View
                  style={[styles.infoHeaderContainer, styles.infoContainer]}>
                  <Text style={styles.infoText}>{'Source'}</Text>
                  <Text style={[styles.infoText, styles.infoValue]}>{`${
                    cityData?.attributions?.length > 0
                      ? cityData?.attributions[0]?.name
                      : 'N/A'
                  }`}</Text>
                </View>

                <View
                  style={[styles.infoHeaderContainer, styles.infoContainer]}>
                  <Text style={styles.infoText}>{'Geo-Code:'}</Text>
                  <Text style={[styles.infoText, styles.infoValue]}>
                    {cityData?.city?.geo?.length >= 1
                      ? `${cityData?.city.geo[0]}, ${cityData?.city.geo[1]}`
                      : `N/A`}
                  </Text>
                </View>

                <View
                  style={[styles.infoHeaderContainer, styles.infoContainer]}>
                  <Text style={styles.infoText}>{'Last Updated'}</Text>
                  <Text style={[styles.infoText, styles.infoValue]}>{`${
                    getFormattedDateTimeWithTZ(cityData?.time?.iso) || 'N/A'
                  }`}</Text>
                </View>
              </View>
            </CustomCard>
          </View>
        )}
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
    backgroundColor: Colors.white,
  },
  inputContainer: {
    flexDirection: 'row',
    maxWidth: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  parentInfoContainer: {
    width: '90%',
    marginHorizontal: 16,
    marginVertical: 16,
  },
  cardStyle: {
    width: '100%',
    marginVertical: 16,
    padding: 0,
    borderRadius: 4,
  },
  subheader: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.secondary,
    paddingVertical: 5,
  },
  infoHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.lightGrey,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  infoContainer: {
    backgroundColor: Colors.white,
  },
  infoText: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.primaryTextColor,
    paddingVertical: 3,
    alignSelf: 'flex-start',
    maxWidth: '50%',
    minWidth: '50%',
  },
  infoValue: {
    color: Colors.info,
    fontSize: 14,
    fontWeight: '500',
  },
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {getAQIDetailsWithCity, getAQIDetailsWithLocation},
    dispatch,
  );
};

const mapStateToProps = ({home, app}) => ({
  loading: app.loading,
  message: home.message,
  cityData: home.cityData,
  error: home.error,
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
