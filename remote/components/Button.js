import React, { Component, PropTypes, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-icons';
import colors from './colors';
import styles from './styles';

module.exports = class Button extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired
  }

  render() {
    return (
      <TouchableOpacity onPress={ this.props.onPress }>
        <Icon name={ this.props.icon }
              size={ 30 }
              color={ colors.text }
              style={ styles.buttonIcon } />
      </TouchableOpacity>
    );
  }
};
