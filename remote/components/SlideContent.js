import React, { Component, PanResponder, PropTypes, Text, View, WebView  } from 'react-native';
import Toggle from './Toggle';
import styles from './styles';

module.exports = class SlideContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewIndex: 0
    };
  }

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

  static propTypes = {
    currentSlideHtml: PropTypes.string.isRequired,
    currentSlideNotes: PropTypes.string.isRequired
  };

  render() {
    const html = this.state.viewIndex === 0 ? this.props.currentSlideHtml : this.props.currentSlideNotes;

    return (
      <View style={ styles.slideContent }>
        <Toggle labels={ ['slide', 'notes'] }
                selectedIndex={ this.state.viewIndex }
                onChange={ this._onViewChange } />
        <View style={ styles.previewContainer} {...this._panResponder.panHandlers}>
          <WebView key={ html } ref="webView" style={ styles.preview } html={ html } />
        </View>
      </View>
    );
  }

  _onViewChange = (viewIndex) => {
    this.setState({ viewIndex });
  };
};
