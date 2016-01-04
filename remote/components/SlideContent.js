import React, { Component, PropTypes, Text, View } from 'react-native';
import Preview from './Preview';
import styles from './styles';

module.exports = class SlideContent extends Component {
  static propTypes = {
    currentSlideHtml: PropTypes.string.isRequired
  }

  render() {
    return (
      <View style={ styles.slideContent }>
        <Preview currentSlideHtml={ this.props.currentSlideHtml } />
      </View>
    );
  }
};
