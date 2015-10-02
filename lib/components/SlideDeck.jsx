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
    activeColorIdx: 0,
    lastColorIdx: 0
  }

  componentDidMount() {
    window.addEventListener('keydown', this._onKeyDown);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.slideIdx !== this.props.params.slideIdx) {
      this._setNextColor();
    }
  }

  render() {
    const slideIdx = this._getActiveSlideIdx();
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

  _setNextColor() {
    const nextColorIdx = this.state.activeColorIdx + 1;

    this.setState({
      activeColorIdx: (nextColorIdx >= colors.length ? 0 : nextColorIdx),
      lastColorIdx: this.state.activeColorIdx
    });
  }

  _setActiveSlide(slideIdx) {
    const newPath = `/${slideIdx + 1}`;
    this.props.history.pushState(null, newPath);
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

  _nextSlide() {
    const nextIdx = this._getActiveSlideIdx() + 1;
    if (nextIdx < Slides.length) {
      this._setActiveSlide(nextIdx);
    } else {
      this._setActiveSlide(0);
    }
  }

  _prevSlide() {
    const prevIdx = this._getActiveSlideIdx() - 1;
    if (prevIdx > -1) {
      this._setActiveSlide(prevIdx);
    } else {
      this._setActiveSlide(Slides.length - 1);
    }
  }

  _getActiveSlideIdx() {
    const userSlideIdx = this.props.params.slideIdx ? parseInt(this.props.params.slideIdx) : 1;
    return userSlideIdx - 1;
  }
}
