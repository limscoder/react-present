import React from 'react';
import PropTypes from 'prop-types';

const leftArrow = 37;
const upArrow = 38;
const rightArrow = 39;
const downArrow = 40;
const enter = 13;

export default class Slide extends React.Component {
  static propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    onNext: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired
  }

  componentWillMount() {
    window.addEventListener('keydown', this._onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this._onKeyDown);
  }

  render() {
    const style = {
      backgroundColor: this.props.backgroundColor
    };

    return (
      <div style={style}
        className="rcp-SlideDeck-Body"
        onClick={this._onClick}>
        {this.props.children}
      </div>
    );
  }

  _onClick = (e) => {
    if (e.button === 0) {
      this.props.onNext();
    } else if (e.button === 1) {
      this.props.onPrev();
    }
  }

  _onKeyDown = (e) => {
    const keyCode = e.keyCode || e.which;

    if (keyCode === downArrow || keyCode === rightArrow || keyCode === enter) {
      this.props.onNext();
    } else if (keyCode === upArrow || keyCode === leftArrow) {
      this.props.onPrev();
    }
  }
}
