import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../utils';

const CustomButton = ({title, onPress, buttonStyle, buttonTextStyle}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, buttonStyle]}
      onPress={onPress}>
      <Text style={[styles.buttonTextStyle, buttonTextStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export {CustomButton};

const styles = StyleSheet.create({
  buttonStyle: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    backgroundColor: Colors.primary,
    borderRadius: 4,
  },
  buttonTextStyle: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: '500',
  },
});
