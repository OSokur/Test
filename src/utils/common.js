import {fixerKey} from '../../app.json';

export const getCurrencies = async () => {
  const result = await fetch(
    `http://data.fixer.io/api/latest?access_key=${fixerKey}`,
  );
  return result.json();
};
