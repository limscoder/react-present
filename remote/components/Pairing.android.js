import React, { PropTypes, Component, Text, View, ProgressBarAndroid  } from 'react-native';
import colors from './colors';
import styles from './styles';

module.exports = class Pairing extends Component {
  static propTypes = {
    progress: PropTypes.number.isRequired
  }

  render() {
    return (
      <View style={ styles.content }>
        <Text style={ styles.h3 }>
          pairing with presentation
        </Text>

        <ProgressBarAndroid progress={ this.props.progress }
                            color={ colors.highlight } />
      </View>
    );
  }
};
