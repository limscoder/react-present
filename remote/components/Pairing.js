import React, { Component, Text, View  } from 'react-native';
import styles from './styles';

module.exports = class Start extends Component {
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
