import { StyleSheet } from 'react-native';

const textColor = '#222222';

module.exports = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  h1: {
    fontSize: 56,
    textAlign: 'center',
    margin: 5,
    color: textColor
  },
  h2: {
    fontSize: 32,
    textAlign: 'center',
    margin: 5,
    color: textColor
  },
  h3: {
    fontSize: 24,
    textAlign: 'center',
    color: textColor,
    margin: 5
  },
  warning: {
    fontSize: 24,
    textAlign: 'center',
    color: 'darkRed',
    margin: 5
  },
  slideContent: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    margin: 10,
    marginLeft: 50,
    marginRight: 50
  }
});
