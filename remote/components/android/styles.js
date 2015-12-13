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
    fontSize: 24,
    textAlign: 'center',
    margin: 5,
    color: textColor
  },
  h2: {
    fontSize: 18,
    textAlign: 'center',
    color: textColor,
    margin:5
  },
});
