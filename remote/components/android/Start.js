import React, { Component, Text, View } from 'react-native';
import styles from './styles';

module.exports = class Start extends Component {
  render() {
    return (
      <View style={ styles.content }>
        <Text style={ styles.h1 }>
          react-present
        </Text>
        <Text style={ styles.h3 }>
          tap or swipe to advance
        </Text>
        <Text style={ styles.h3 }>
          swipe right to reverse
        </Text>
      </View>
    );
  }
};
