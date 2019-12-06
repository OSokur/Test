import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.white,
  },
  simpleText: {
    fontSize: 12,
    color: Colors.white,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.light,
    paddingBottom: 15,
  },
  input: {
    backgroundColor: Colors.lighter,
    borderWidth: 1,
    borderColor: Colors.dark,
    borderRadius: 5,
    fontSize: 20,
    padding: 5,
    marginBottom: 5,
  },
  inputContainer: {
    flex: 1,
    alignItems: 'stretch',
    paddingHorizontal: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  pickerWrapper: {
    padding: 15,
    alignSelf: 'stretch',
    alignItems: 'center',
    margin: 15,
    backgroundColor: Colors.dark,
  },
  picker: {
    alignSelf: 'stretch',
    backgroundColor: Colors.lighter,
    borderRadius: 5,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: Colors.primary,
    borderRadius: 5,
  },
  buttonText: {
    color: Colors.white,
  },
  shadow: {
    elevation: 5,
    shadowColor: Colors.dark,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 0.3,
  },
});

export default styles;
