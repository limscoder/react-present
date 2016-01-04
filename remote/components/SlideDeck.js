import React, { Component, PropTypes, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import Slide from './Slide';

module.exports = class SlideDeck extends Component {
  static propTypes = {
    currentSlide: PropTypes.number.isRequired,
    totalSlides: PropTypes.number.isRequired,
    currentSlideHtml: PropTypes.string.isRequired,
    onNext: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired
  }

  render() {
    return (
      <TouchableOpacity onPress={ this.props.onNext } style={ styles.content }>
        <Slide currentSlide={ this.props.currentSlide }
               totalSlides={ this.props.totalSlides }
               currentSlideHtml={ this.props.currentSlideHtml } />
      </TouchableOpacity>
    );
  }
};
