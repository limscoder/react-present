import React, { PropTypes, Component, Text  } from 'react-native';
import styles from './styles';

module.exports = class Start extends Component {
  static propTypes = {
    elapsedTime: PropTypes.number.isRequired
  };

  render() {
    const timeInSeconds = this.props.elapsedTime / 1000;
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds - (minutes * 60);
    const time = `${minutes}m ${seconds}s`;

    return <Text style={ styles.h1 }>{ time }</Text>;
  }
};
