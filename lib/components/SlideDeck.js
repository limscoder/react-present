import React from 'react/addons';
const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
import classnames from 'classnames';

import ProgressIndicator from './ProgressIndicator';
import Slide from './Slide';
require('./SlideDeck.css');

export default class SlideDeck extends React.Component {
  static propTypes = {
    colors: React.PropTypes.array.isRequired,
    slideIndex: React.PropTypes.number.isRequired,
    onSlideChange: React.PropTypes.func.isRequired
  }

  state = {
    activeColorIdx: 0,
    lastColorIdx: 0
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.slideIndex !== this.props.slideIndex) {
      this._setNextColor();
    }
  }

  render() {
    const slideIdx = this.props.slideIndex;
    const activeSlide = this.props.children[slideIdx];
    const activeBackgroundColor = this.props.colors[this.state.activeColorIdx];
    const deckStyle = {
      backgroundColor: this.props.colors[this.state.lastColorIdx]
    };

    return (
      <div>
        <ProgressIndicator current={ this.props.slideIndex }
                           total={ this.props.children.length }
                           onSlideChange={ this.props.onSlideChange } />
        <ReactCSSTransitionGroup className="rcp-SlideDeck"
                                 component="div"
                                 transitionLeave={ false }
                                 transitionName="nextSlide"
                                 style={ deckStyle }>
          <Slide key={ slideIdx }
                 backgroundColor={ activeBackgroundColor }
                 onNext={ this._onNextSlide }
                 onPrev={ this._onPrevSlide }>
            { activeSlide }
          </Slide>
        </ReactCSSTransitionGroup>
      </div>
    );
  }

  _setNextColor() {
    const nextColorIdx = this.state.activeColorIdx + 1;

    this.setState({
      activeColorIdx: (nextColorIdx >= this.props.colors.length ? 0 : nextColorIdx),
      lastColorIdx: this.state.activeColorIdx
    });
  }

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
    const el = React.findDOMNode(this);
    if (!el.querySelector('.nextSlide-enter')) {
      this.props.onSlideChange(newSlideIndex);
    }
  }
}
