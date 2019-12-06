import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Main from './screens/Main';
import styles from './styles/main';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Main />
      </SafeAreaView>
    </>
  );
};

export default App;
