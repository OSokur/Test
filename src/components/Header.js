import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/main';
import PropTypes from 'prop-types';

const Header = ({currency}) => (
  <View style={styles.header}>
    <Text style={styles.sectionTitle}>Country: {currency.name}</Text>
    <Text style={styles.sectionDescription}>Currency: {currency.currency}</Text>
  </View>
);

export default Header;

Header.propTypes = {
  currency: PropTypes.object.isRequired,
};
