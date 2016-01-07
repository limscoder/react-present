import React, { Component, PropTypes, Text, View } from 'react-native';
import SlideContent from './SlideContent';
import Timer from './Timer';
import styles from './styles';

module.exports = class Slide extends Component {
  static propTypes = {
    currentSlide: PropTypes.number.isRequired,
    totalSlides: PropTypes.number.isRequired,
    currentSlideHtml: PropTypes.string.isRequired,
    currentSlideNotes: PropTypes.string.isRequired,
    elapsedTime: PropTypes.number.isRequired
  };

  render() {
    return (
      <View style={ styles.slide }>
        <Text style={ styles.h1 }>
          { this.props.currentSlide + 1 } / { this.props.totalSlides }
        </Text>

        <Timer elapsedTime={ this.props.elapsedTime } />

        <SlideContent currentSlideHtml={ this.props.currentSlideHtml }
                      currentSlideNotes={ this.props.currentSlideNotes } />
      </View>
    );
  }
};
