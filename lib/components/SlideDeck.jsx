import React from 'react/addons';
const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
import classnames from 'classnames';

import Slides from './slides/Slides.jsx';

require('./SlideDeck.css');

const leftArrow = 37;
const upArrow = 38;
const rightArrow = 39;
const downArrow = 40;

const colors = [
  '#00a9e0',
  '#b81b10',
  '#f6a900',
  '#f66349',
  '#8dc63f',
  '#005eb8',
  '#ff8200',
  '#00b398',
  '#da1884',
  '#7832a5'
];

export default class SlideDeck extends React.Component {
  state = {
    activeSlideIdx: 0,
    activeColorIdx: 0,
    lastColorIdx: 0
  }

  componentDidMount = () => {
    window.addEventListener('keydown', this._onKeyDown);
  }

  render = () => {
    const slideIdx = this.state.activeSlideIdx;
    const activeSlide = Slides[slideIdx];
    const deckStyle = {
      backgroundColor: colors[this.state.lastColorIdx]
    };
    const slideStyle = {
      backgroundColor: colors[this.state.activeColorIdx]
    };

    return (
      <ReactCSSTransitionGroup className="rcp-SlideDeck"
                               component="div"
                               transitionLeave={ false }
                               onClick={ this._onClick }
                               transitionName="nextSlide"
                               style={ deckStyle }>
        <div key={ slideIdx }
             style={ slideStyle }
             className="rcp-SlideDeck-Body">
          { activeSlide }
        </div>
      </ReactCSSTransitionGroup>
    );
  }

  _getNextColorIdx = () => {
    const nextIdx = this.state.activeColorIdx + 1;
    return nextIdx >= colors.length ? 0 : nextIdx;
  }

  _setActiveSlide = (slideIdx) => {
    this.setState({
      activeSlideIdx: slideIdx,
      activeColorIdx: this._getNextColorIdx(),
      lastColorIdx: this.state.activeColorIdx
    });
  }

  _onClick = (e) => {
    if (e.button === 0) {
      this._nextSlide();
    } else if (e.button === 1) {
      this._prevSlide();
    }
  }

  _onKeyDown = (e) => {
    const keyCode = e.keyCode || e.which;

    if (keyCode === downArrow || keyCode === rightArrow) {
      this._nextSlide();
    } else if (keyCode === upArrow || keyCode === leftArrow) {
      this._prevSlide();
    }
  }

  _nextSlide = () => {
    const nextIdx = this.state.activeSlideIdx + 1;
    if (nextIdx < Slides.length) {
      this._setActiveSlide(nextIdx);
    } else {
      this._setActiveSlide(0);
    }
  }

  _prevSlide = () => {
    const prevIdx = this.state.activeSlideIdx - 1;
    if (prevIdx > -1) {
      this._setActiveSlide(prevIdx);
    } else {
      this._setActiveSlide(Slides.length - 1);
    }
  }
}
