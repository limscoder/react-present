import React, { Component, PanResponder, PropTypes, Text, View } from 'react-native';
import SlideContent from './SlideContent';
import Timer from './Timer';
import styles from './styles';


module.exports = class Slide extends Component {
  static propTypes = {
    onNext: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired,
    currentSlide: PropTypes.number.isRequired,
    totalSlides: PropTypes.number.isRequired,
    currentSlideHtml: PropTypes.string.isRequired,
    currentSlideNotes: PropTypes.string.isRequired,
    elapsedTime: PropTypes.number.isRequired
  };

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        (gestureState.dx < 0 ? this.props.onPrev : this.props.onNext)();
      }
    });
  }

  render() {
    return (
      <View style={ styles.slide }>
        <View {...this._panResponder.panHandlers} >
          <Text style={ styles.h1 }>
            { this.props.currentSlide + 1 } / { this.props.totalSlides }
          </Text>

          <Timer elapsedTime={ this.props.elapsedTime } />
        </View>
        <SlideContent currentSlideHtml={ this.props.currentSlideHtml }
                      currentSlideNotes={ this.props.currentSlideNotes }
                      onNext={ this.props.onNext }
                      onPrev={ this.props.onPrev } />
      </View>
    );
  }
};
