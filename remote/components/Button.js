import React, { Component, PropTypes, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

module.exports = class Button extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    return (
      <TouchableOpacity onPress={ this.props.onPress } style={ styles.activeButton }>
        <Text style={ styles.activeButtonText }>{ this.props.children }</Text>
      </TouchableOpacity>
    );
  }
};
