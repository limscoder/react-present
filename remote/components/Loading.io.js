import React, { PropTypes, Component, Text, View, ProgressBarAndroid  } from 'react-native';
import colors from './colors';
import styles from './styles';

module.exports = class Pairing extends Component {
  render() {
    return (
      <View style={ styles.loading }>
        <Text style={ styles.h3 }>
          loading slide...
        </Text>
      </View>
    );
  }
};
