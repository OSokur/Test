import React from 'react';
import {TouchableOpacity, View, Text, ActivityIndicator} from 'react-native';
import styles from '../styles/main';
import PropTypes from 'prop-types';

const Loader = ({action, actionText}) => (
  <View style={styles.body}>
    <ActivityIndicator size="large" color="#fff" />
    <TouchableOpacity onPress={action}>
      <Text style={styles.sectionDescription}>{actionText}</Text>
    </TouchableOpacity>
  </View>
);

export default Loader;

Loader.propTypes = {
  actionText: PropTypes.string,
  action: PropTypes.func,
};
