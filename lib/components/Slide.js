import React from 'react';
import PropTypes from 'prop-types';
import Delay from './presentation/Delay';

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
    this.state = {
      children: React.Children.toArray(this.props.children)
    };
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
        <div>
          {this.state.children}
        </div>
      </div>
    );
  }

  _onClick = (e) => {
    if (e.button === 0) {
      this._onNext();
    } else if (e.button === 1) {
      this.props.onPrev();
    }
  }

  _onKeyDown = (e) => {
    const keyCode = e.keyCode || e.which;

    if (keyCode === downArrow || keyCode === rightArrow || keyCode === enter) {
      this._onNext();
    } else if (keyCode === upArrow || keyCode === leftArrow) {
      this.props.onPrev();
    }
  }

  _onNext = () => {
    const hiddenChildIdx = this.state.children.findIndex(child => child.type === Delay && !child.props.show)
    if (hiddenChildIdx > -1) {
      const visibleChild = React.cloneElement(this.state.children[hiddenChildIdx], {show: true});
      const visibleChildren = [...this.state.children];
      visibleChildren[hiddenChildIdx] = visibleChild;
      this.setState({children: visibleChildren});
    } else {
      this.props.onNext();
    }
  }
}
