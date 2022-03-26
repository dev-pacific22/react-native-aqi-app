import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {buttonClickedAction} from '../redux/action/HomeAction';

const HomeScreen = ({navigation, buttonClickedAction, message}) => {
  return (
    <View style={styles.containerStyle}>
      <Text>{message}</Text>
      <Button onPress={buttonClickedAction} title="Click Here" />
    </View>
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
  return bindActionCreators({buttonClickedAction}, dispatch);
};

const mapStateToProps = ({home}) => ({
  message: home.message,
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
