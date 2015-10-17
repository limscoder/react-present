import React from 'react';

const leftArrow = 37;
const upArrow = 38;
const rightArrow = 39;
const downArrow = 40;

export default class Slide extends React.Component {
  static propTypes = {
    backgroundColor: React.PropTypes.string.isRequired,
    onNext: React.PropTypes.func.isRequired,
    onPrev: React.PropTypes.func.isRequired
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
      <div style={ style }
           className="rcp-SlideDeck-Body"
           onClick={ this._onClick }>
         { this.props.children }
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

    if (keyCode === downArrow || keyCode === rightArrow) {
      this.props.onNext();
    } else if (keyCode === upArrow || keyCode === leftArrow) {
      this.props.onPrev();
    }
  }
}
