import React from 'react';
import {TextInput, View, Text} from 'react-native';
import styles from '../styles/main';
import PropTypes from 'prop-types';

const InputBlock = ({
  mainMoney,
  resultMoney,
  currentCurrency,
  onChangeMainMoney,
}) => (
  <View style={styles.inputWrapper}>
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, styles.shadow]}
        value={mainMoney}
        keyboardType="decimal-pad"
        onChangeText={onChangeMainMoney}
        clearTextOnFocus
        caretHidden
        maxLength={10}
      />
      <Text style={styles.simpleText}>EUR</Text>
    </View>
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, styles.shadow]}
        value={resultMoney}
        editable={false}
        keyboardType="number-pad"
      />
      <Text style={styles.simpleText}>{currentCurrency}</Text>
    </View>
  </View>
);

export default InputBlock;

InputBlock.propTypes = {
  mainMoney: PropTypes.string.isRequired,
  resultMoney: PropTypes.string.isRequired,
  currentCurrency: PropTypes.string.isRequired,
  onChangeMainMoney: PropTypes.func.isRequired,
};
