import { StyleSheet } from 'react-native';

const textColor = '#222222';
const androidGreen = '#009688';
const activeButton = {
  backgroundColor: androidGreen,
  borderBottomWidth: 2,
  borderBottomColor: '#004D40'
};
const inactiveButton = {
  backgroundColor: '#E0E0E0'
};
const activeButtonText = {
  color: 'white',
  fontSize: 18,
  fontWeight: 'bold',
  marginTop: 2,
  marginBottom: 2,
  marginLeft: 10,
  marginRight: 10
};
const inactiveButtonText = {
  ...activeButtonText,
  color: '#9E9E9E'
};

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
    marginTop: 30,
    marginRight: 5,
    marginBottom: 5,
    marginLeft: 5,
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
  activeButton: {
    ...activeButton,
    margin: 5
  },
  inactiveButton: {
    ...inactiveButton,
    margin: 5
  },
  activeButtonText,
  inactiveButtonText,
  activeToggle: activeButton,
  inactiveToggle: inactiveButton,
  activeToggleText: activeButtonText,
  inactiveToggleText: inactiveButtonText,
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
  },
  control: {
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    flexDirection: 'row',
    padding: 5
  },
  slider: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10
  },
  sliderTrack: {
    backgroundColor: androidGreen
  },
  sliderThumb: {
    backgroundColor: androidGreen
  }
});
