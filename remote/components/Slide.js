import React, { Component, PropTypes, Text, View } from 'react-native';
import SlideContent from './SlideContent';
import styles from './styles';

module.exports = class Slide extends Component {
  static propTypes = {
    currentSlide: PropTypes.number.isRequired,
    totalSlides: PropTypes.number.isRequired,
    currentSlideHtml: PropTypes.string.isRequired
  }

  render() {
    return (
      <View style={ styles.slide }>
        <Text style={ styles.h1 }>
          { this.props.currentSlide + 1 } / { this.props.totalSlides }
        </Text>

        <SlideContent currentSlideHtml={ this.props.currentSlideHtml } />
      </View>
    );
  }
};
