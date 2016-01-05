import React, { Component, PropTypes, Text, View } from 'react-native';
import Slider from 'react-native-slider';
import Button from './Button';
import styles from './styles';

module.exports = class Control extends Component {
  static propTypes = {
    currentSlide: PropTypes.number.isRequired,
    totalSlides: PropTypes.number.isRequired,
    onRePair: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    onSelectSlide: PropTypes.func.isRequired,
    onSlideEnd: PropTypes.func.isRequired
  }

  render() {
    return (
      <View style={ styles.control }>
        <Button onPress={ this.props.onReset }>Reset</Button>
        <Slider style={ styles.slider }
                thumbStyle={ styles.sliderThumb }
                trackStyle={ styles.sliderTrack }
                value={ this.props.currentSlide }
                minimumValue={ 0 }
                maximumValue={ this.props.totalSlides - 1 }
                onValueChange={ (idx) => this.props.onSelectSlide(Math.floor(idx)) }
                onSlidingComplete={ (idx) => this.props.onSlideEnd(Math.floor(idx)) } />
        <Text style={ styles.h3 }>{ this.props.currentSlide + 1 }</Text>
      </View>
    );
  }
};
