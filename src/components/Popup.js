import React from 'react';
import {TouchableOpacity, View, Text, Modal} from 'react-native';
import styles from '../styles/main';
import PropTypes from 'prop-types';

const Popup = ({children, showButtonText, closeModalText}) => {
  const [modalVisible, setModalState] = React.useState(false);
  const openModal = () => setModalState(true);
  const closeModal = () => setModalState(false);
  return (
    <>
      <Modal animationType="slide" transparent visible={modalVisible}>
        <View style={styles.modal}>
          {React.cloneElement(children, {closeModal})}
          <TouchableOpacity
            onPress={closeModal}
            style={[styles.button, styles.shadow]}>
            <Text style={styles.buttonText}>{closeModalText}</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={openModal}
        style={[styles.button, styles.shadow]}>
        <Text style={styles.buttonText}>{showButtonText}</Text>
      </TouchableOpacity>
    </>
  );
};

export default Popup;

Popup.propTypes = {
  children: PropTypes.node,
  showButtonText: PropTypes.string,
  closeModalText: PropTypes.string,
};
