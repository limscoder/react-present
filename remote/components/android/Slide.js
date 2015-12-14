import React, { Component, PropTypes, Text, View } from 'react-native';
import styles from './styles';

module.exports = class Slide extends Component {
  static propTypes = {
    currentSlide: PropTypes.number.isRequired,
    totalSlides: PropTypes.number.isRequired
  }

  render() {
    return (
      <View style={ styles.slideContent }>
        <Text style={ styles.h1 }>
          { this.props.currentSlide + 1 } / { this.props.totalSlides }
        </Text>
      </View>
    );
  }
};
