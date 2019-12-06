import React from 'react';
import {Picker, View, Text} from 'react-native';
import {countries} from '../../app';
import styles from '../styles/main';
import PropTypes from 'prop-types';

const CurrencyPicker = ({selectedCurrency, onChangeCurrency, closeModal}) => {
  const onPickerSelect = (itemValue, index) => {
    onChangeCurrency(countries[index]);
    closeModal();
  };

  return (
    <View style={styles.pickerWrapper}>
      <Text style={styles.sectionDescription}>Select country</Text>
      <Picker
        selectedValue={selectedCurrency.currency}
        style={styles.picker}
        onValueChange={onPickerSelect}>
        {countries.map(({name, currency}) => (
          <Picker.Item label={name} value={currency} key={currency} />
        ))}
      </Picker>
    </View>
  );
};

export default CurrencyPicker;

CurrencyPicker.propTypes = {
  selectedCurrency: PropTypes.object.isRequired,
  onChangeCurrency: PropTypes.func.isRequired,
  closeModal: PropTypes.func,
};

CurrencyPicker.defaultProps = {
  closeModal: () => null,
};
