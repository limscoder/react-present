import React, { Component, Text, View  } from 'react-native';
import styles from './styles';

module.exports = class Pairing extends Component {
  render() {
    return (
      <View style={ styles.content }>
        <Text style={ styles.h3 }>
          pairing with presentation...
        </Text>
      </View>
    );
  }
};
