import React from 'react';
import classnames from 'classnames';

import NavBar from './NavBar.jsx';
import SlideTransition from './SlideTransition.jsx';
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

export default React.createClass({
  getInitialState() {
    return {
      activeSlideIdx: 0,
      activeColorIdx: 0,
      isInTransition: false,
    }
  },

  componentDidMount() {
    window.addEventListener('keydown', this._onKeyDown);
  },

  render() {
    const activeSlide = Slides[this.state.activeSlideIdx];
    const style = {
      backgroundColor: colors[this.state.activeColorIdx]
    };

    return (
      <div className="rcp-SlideDeck"
           onClick={ this._onClick }
           style={ style }>
        <NavBar title={ activeSlide.props.title }
                activeSlideIdx={ this.state.activeSlideIdx }
                onSelectSlide={ this._setActiveSlide } />
        <div className="rcp-SlideDeck-Body">
          { activeSlide }
        </div>
        <SlideTransition isActive={ this.state.isInTransition }
                         color={ this._getTransitionColor() }/>
      </div>
    );
  },

  _getTransitionColor() {
    return colors[this._getTransitionColorIdx()];
  },

  _getTransitionColorIdx() {
    if (this.state.activeColorIdx === (colors.length - 1)) {
      return 0;
    }

    return this.state.activeColorIdx + 1;
  },

  _setActiveSlide(slideIdx) {
    if (this.transitionTimeoutId) {
      window.clearTimeout(this.transitionTimeoutId);
    }

    this.setState({
      isInTransition: true
    });

    this.transitionTimeoutId = window.setTimeout(() => {
      this.setState({
        isInTransition: false,
        activeSlideIdx: slideIdx,
        activeColorIdx: this._getTransitionColorIdx()
      });

      this.transitionTimeoutId = null;
    }, 500);
  },

  _onClick(e) {
    if (e.button === 0) {
      this._nextSlide();
    } else if (e.button === 1) {
      this._prevSlide();
    }
  },

  _onKeyDown(e) {
    const keyCode = e.keyCode || e.which;

    if (keyCode === downArrow || keyCode === rightArrow) {
      this._nextSlide();
    } else if (keyCode === upArrow || keyCode === leftArrow) {
      this._prevSlide();
    }
  },

  _nextSlide() {
    const nextIdx = this.state.activeSlideIdx + 1;
    if (nextIdx < Slides.length) {
      this._setActiveSlide(nextIdx);
    }
  },

  _prevSlide() {
    const prevIdx = this.state.activeSlideIdx - 1;
    if (prevIdx > -1) {
      this._setActiveSlide(prevIdx);
    }
  }
});
