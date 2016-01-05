import React from 'react/addons';
const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
import classnames from 'classnames';

import ProgressIndicator from './ProgressIndicator';
import Slide from './Slide';
import { renderSlideToString } from './RemoteSlide';
import css from 'style-loader!css-loader!./SlideDeck.css';

export default class SlideDeck extends React.Component {
  static propTypes = {
    colors: React.PropTypes.array.isRequired,
    slideIndex: React.PropTypes.number.isRequired,
    onSlideChange: React.PropTypes.func.isRequired
  }

  renderRemoteSlideToString(slideIdx) {
    return renderSlideToString(this._renderSlide(slideIdx));
  }

  render() {
    const deckStyle = {
      backgroundColor: this._getColor(this.props.slideIdx - 1)
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
          { this._renderSlide(this.props.slideIndex) }
        </ReactCSSTransitionGroup>
      </div>
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
      slideIdx -= (this.props.colors.length - 1);
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
    const el = React.findDOMNode(this);
    if (!el.querySelector('.nextSlide-enter')) {
      this.props.onSlideChange(newSlideIndex);
    }
  }
}
