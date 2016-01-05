import React, { Component, PropTypes, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import Slide from './Slide';
import Control from './Control';

module.exports = class SlideDeck extends Component {
  static propTypes = {
    currentSlide: PropTypes.number.isRequired,
    totalSlides: PropTypes.number.isRequired,
    selectedSlide: PropTypes.number.isRequired,
    currentSlideHtml: PropTypes.string.isRequired,
    currentSlideNotes: PropTypes.string.isRequired,
    elapsedTime: PropTypes.number.isRequired,
    onNext: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired,
    onRePair: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    onSelectSlide: PropTypes.func.isRequired,
    onSlideEnd: PropTypes.func.isRequired
  }

  render() {
    const {
      onNext,
      onPrev,
      onRePair,
      onReset,
      onSelectSlide,
      onSlideEnd,
      ...slideProps
    } = this.props;

    return (
      <TouchableOpacity onPress={ onNext } style={ styles.content }>
        <Control currentSlide={ this.props.selectedSlide }
                 totalSlides={ this.props.totalSlides }
                 onRePair={ onRePair }
                 onReset={ onReset }
                 onSelectSlide={ onSelectSlide }
                 onSlideEnd={ onSlideEnd }/>
        <Slide { ...slideProps }/>
      </TouchableOpacity>
    );
  }
};
