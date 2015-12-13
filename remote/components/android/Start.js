import React, { Component, Text, View } from 'react-native';
import styles from './styles';

module.exports = class Start extends Component {
  render() {
    return (
      <View style={styles.content}>
        <Text style={styles.h1}>
          react-present
        </Text>
        <Text style={styles.h2}>
          you're going to kill it!
        </Text>
        <Text style={styles.h2}>
          click to start
        </Text>
      </View>
    );
  }
};
