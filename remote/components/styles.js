import { StyleSheet } from 'react-native';

const textColor = '#222222';

module.exports = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
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
    alignItems: 'center'
  },
  slideContent: {
    margin: 5,
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    backgroundColor: 'white'
  },
  toggle: {
    backgroundColor: 'grey',
    flexDirection: 'row',
    alignSelf: 'center',
    height: 30
  },
  activeToggle: {
    backgroundColor: '#009688',
    borderBottomWidth: 2,
    borderBottomColor: '#004D40'
  },
  inactiveToggle: {
    backgroundColor: '#E0E0E0',
    borderBottomWidth: 2,
    borderBottomColor: '#9E9E9E'
  },
  activeToggleText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 2,
    marginBottom: 2,
    marginLeft: 10,
    marginRight: 10
  },
  inactiveToggleText: {
    color: '#9E9E9E',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 2,
    marginBottom: 2,
    marginLeft: 10,
    marginRight: 10
  },
  previewContainer: {
    height: 300,
    flex: 1,
    marginTop: 10
  },
  preview: {
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
