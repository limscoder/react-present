import React, { Component, PanResponder, PropTypes, Text, TouchableOpacity, View } from 'react-native';
import Loading from './Loading';
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
    isLoadingSlide: PropTypes.bool.isRequired,
    elapsedTime: PropTypes.number.isRequired
  };

  componentWillMount() {
    const isSwiping =  (ext, gestureState) => Math.abs(gestureState.dx) > 3;

    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: isSwiping,
      onMoveShouldSetPanResponderCapture: isSwiping,
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        if (!this.props.isLoadingSlide) {
          (gestureState.dx < 0 ? this.props.onPrev : this.props.onNext)();
        }
      }
    });
  }

  render() {
    const onNext = this.props.isLoadingSlide ? () => {} : this.props.onNext;
    const touchProps = {
      onPress: onNext,
      style: {
        alignSelf: 'stretch'
      }
    };

    return (
      <View style={ styles.slide } { ...this.panResponder.panHandlers }>
        <TouchableOpacity { ...touchProps }>
          <Text style={ styles.h1 }>
            { this.props.currentSlide + 1 } / { this.props.totalSlides }
          </Text>

          <Timer elapsedTime={ this.props.elapsedTime } />
        </TouchableOpacity>
        <TouchableOpacity { ...touchProps }>
          { this._renderSlideContent() }
        </TouchableOpacity>
      </View>
    );
  }

  _renderSlideContent() {
    if (this.props.isLoadingSlide) {
      return <Loading />;
    }

    return  <SlideContent currentSlideHtml={ this.props.currentSlideHtml }
                          currentSlideNotes={ this.props.currentSlideNotes } />;
  }
};
