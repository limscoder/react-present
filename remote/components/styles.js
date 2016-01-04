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
  slide: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  slideContent: {
    margin: 5,
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  previewContainer: {
    backgroundColor: 'black',
    height: 300,
    flex: 1
  },
  preview: {
    backgroundColor: 'green',
    flex: 1,
    alignSelf: 'stretch',
    height: 300
  },
  textInput: {
    margin: 10,
    marginLeft: 50,
    marginRight: 50
  }
});
