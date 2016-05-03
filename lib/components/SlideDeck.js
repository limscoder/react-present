import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';

import ProgressIndicator from './ProgressIndicator';
import Slide from './Slide';
import { renderSlideToString } from './RemoteSlide';
import css from 'style-loader!css-loader!./SlideDeck.css';

export default class SlideDeck extends React.Component {
  static propTypes = {
    colors: PropTypes.array.isRequired,
    disableTransitions: PropTypes.bool,
    slideIndex: PropTypes.number.isRequired,
    onSlideChange: PropTypes.func.isRequired
  }

  renderRemoteSlideToString(slideIdx) {
    return renderSlideToString(this._renderSlide(slideIdx));
  }

  render() {
    return (
      <div>
        <ProgressIndicator current={ this.props.slideIndex }
                           total={ this.props.children.length }
                           onSlideChange={ this.props.onSlideChange } />
        { this._renderSlideTransition(this.props.slideIndex) }
      </div>
    );
  }

  _renderSlideTransition(slideIdx) {
    const deckStyle = {
      backgroundColor: this._getColor(this.props.slideIndex - 1)
    };
    const deckClass = 'rcp-SlideDeck';

    if (this.props.disableTransitions) {
      return (
        <div className={ deckClass } style={ deckStyle }>
          { this._renderSlide(slideIdx) }
        </div>
      );
    }

    return (
      <ReactCSSTransitionGroup className={ deckClass }
                               component="div"
                               transitionLeave={ false }
                               transitionName="nextSlide"
                               style={ deckStyle }
                               transitionEnterTimeout={ 750 }>
        { this._renderSlide(slideIdx) }
      </ReactCSSTransitionGroup>
    );
  }

  _renderSlide(slideIdx) {
    const activeSlide = this.props.children[slideIdx];

    return (
      <Slide key={ slideIdx }
             backgroundColor={ this._getColor(slideIdx) }
             onNext={ this._onNextSlide }
             onPrev={ this._onPrevSlide }>
        { activeSlide }
      </Slide>
    );
  }

  _getColor(slideIdx) {
    while(slideIdx >= this.props.colors.length) {
      slideIdx -= this.props.colors.length;
    }

    return this.props.colors[slideIdx];
  };

  _onNextSlide = () => {
    const nextIdx = this.props.slideIndex + 1;
    if (nextIdx < this.props.children.length) {
      this._onSlideChange(nextIdx);
    } else {
      this._onSlideChange(0);
    }
  }

  _onPrevSlide = () => {
    const prevIdx = this.props.slideIndex - 1;
    if (prevIdx > -1) {
      this._onSlideChange(prevIdx);
    } else {
      this._onSlideChange(this.props.children.length - 1);
    }
  }

  _onSlideChange(newSlideIndex) {
    const el = ReactDOM.findDOMNode(this);
    if (!el.querySelector('.nextSlide-enter')) {
      this.props.onSlideChange(newSlideIndex);
    }
  }
}
