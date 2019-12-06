import React from 'react';
import {
  Alert,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import styles from '../styles/main';
import CurrencyPicker from '../components/CurrencyPicker';
import {getCurrencies} from '../utils/common';
import {countries} from '../../app';
import InputBlock from '../components/InputBlock';
import Popup from '../components/Popup';
import Loader from '../components/Loader';
import Header from '../components/Header';

const Main = () => {
  const [allCurrencies, setAllCurrencies] = React.useState(null);
  const [currency, setCurrency] = React.useState(countries[0]);
  const [mainMoney, setMainMoney] = React.useState('0');
  const [resultMoney, setResultMoney] = React.useState('0');

  const fetchData = async () => {
    try {
      const result = await getCurrencies();

      if (result && result.rates) {
        setAllCurrencies(result.rates);
      } else {
        Alert.alert('Error', 'Something went wrong');
      }
    } catch (e) {
      Alert.alert('Error', e.message);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const onChangeCurrency = value => {
    setCurrency(value);
    calculateResult(mainMoney, value);
  };

  const onChangeMainMoney = value => {
    setMainMoney(value.replace(/,/g, '.'));
    calculateResult(value.replace(/,/g, '.'), currency);
  };

  const calculateResult = (value, cur) => {
    if (allCurrencies) {
      const result = +value * allCurrencies[cur.currency];
      setResultMoney(`${result.toFixed(2)}`);
    }
  };

  if (!allCurrencies) {
    return <Loader action={fetchData} actionText="Try again" />;
  }

  const renderPicker = () => {
    if (Platform.OS === 'ios') {
      return (
        <Popup closeModalText="Close" showButtonText="Select currency">
          <CurrencyPicker
            selectedCurrency={currency}
            onChangeCurrency={onChangeCurrency}
          />
        </Popup>
      );
    }
    return (
      <CurrencyPicker
        selectedCurrency={currency}
        onChangeCurrency={onChangeCurrency}
      />
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.body}>
        <Header currency={currency} />
        <InputBlock
          mainMoney={mainMoney}
          resultMoney={resultMoney}
          currentCurrency={currency.currency}
          onChangeMainMoney={onChangeMainMoney}
        />
        {renderPicker()}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Main;
