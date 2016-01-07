import { StyleSheet } from 'react-native';
import colors from './colors';

const activeButton = {
  backgroundColor: colors.highlight,
  borderBottomWidth: 2,
  borderBottomColor: colors.active
};
const inactiveButton = {
  backgroundColor: colors.inactive
};
const activeButtonText = {
  color: colors.text,
  fontSize: 18,
  fontWeight: 'bold',
  marginTop: 2,
  marginBottom: 2,
  marginLeft: 10,
  marginRight: 10
};
const inactiveButtonText = {
  ...activeButtonText,
  color: colors.inactiveText
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
    color: colors.text
  },
  h2: {
    fontSize: 32,
    textAlign: 'center',
    margin: 5,
    color: colors.text
  },
  h3: {
    fontSize: 24,
    textAlign: 'center',
    color: colors.text,
    margin: 5
  },
  warning: {
    fontSize: 24,
    textAlign: 'center',
    color: colors.validation,
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
    alignSelf: 'stretch',
    height: 30
  },
  buttonIcon: {
    width: 30,
    height: 30,
    marginTop: 3
  },
  activeButtonText,
  inactiveButtonText,
  activeToggle: {
    ...activeButton,
    flex: 1
  },
  inactiveToggle: {
    ...inactiveButton,
    flex: 1
  },
  activeToggleText: {
    ...activeButtonText,
    alignSelf: 'center'
  },
  inactiveToggleText: {
    ...inactiveButtonText,
    alignSelf: 'center'
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
  },
  control: {
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    flexDirection: 'row',
    backgroundColor: colors.highlight,
    padding: 5,
    paddingRight: 10
  },
  slider: {
    flex: 1,
    marginLeft: 10,
    marginRight: 5
  },
  sliderText: {
    fontSize: 24,
    textAlign: 'center',
    color: colors.text,
    marginTop: 1,
    marginRight: 10
  },
  sliderTrack: {
    backgroundColor: colors.text
  },
  sliderThumb: {
    backgroundColor: colors.text
  }
});
