import React from 'react/addons';
const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
import classnames from 'classnames';

import slides from './slides/slideList.jsx';
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
  static propTypes = {
    slideIndex: React.PropTypes.number.isRequired,
    onSlideChange: React.PropTypes.func.isRequired
  }

  state = {
    activeColorIdx: 0,
    lastColorIdx: 0
  }

  componentDidMount() {
    window.addEventListener('keydown', this._onKeyDown);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.slideIndex !== this.props.slideIndex) {
      this._setNextColor();
    }
  }

  render() {
    const slideIdx = this.props.slideIndex;
    const activeSlide = slides[slideIdx];
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
    const nextIdx = this.props.slideIndex + 1;
    if (nextIdx < slides.length) {
      this.props.onSlideChange(nextIdx);
    } else {
      this.props.onSlideChange(0);
    }
  }

  _prevSlide() {
    const prevIdx = this.props.slideIndex - 1;
    if (prevIdx > -1) {
      this.props.onSlideChange(prevIdx);
    } else {
      this.props.onSlideChange(slides.length - 1);
    }
  }
}
