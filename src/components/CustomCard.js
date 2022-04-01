import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
const CustomCard = ({children, style, onCardPress}) => {
  return (
    <TouchableOpacity
      onPress={onCardPress != null ? onCardPress : () => {}}
      style={{...styles.card, ...style}}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    shadowOpacity: 0.26,
    elevation: 4,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 6,
  },
});
export {CustomCard};
