import React, { Component, PropTypes, TouchableOpacity } from 'react-native';
import styles from './styles';
import Start from './Start';
import Slide from './Slide';

module.exports = class SlideDeck extends Component {
  static propTypes = {
    currentSlide: PropTypes.number.isRequired,
    totalSlides: PropTypes.number.isRequired,
    onNext: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired
  }

  render() {
    const showStart = this.props.currentSlide < 0;
    const view = showStart ? <Start /> : <Slide currentSlide={ this.props.currentSlide }
                                                totalSlides={ this.props.totalSlides } />;

    return (
      <TouchableOpacity onPressOut={ this.props.onNext }

                        style={ styles.content }>
        { view }
      </TouchableOpacity>
    );
  }
};
