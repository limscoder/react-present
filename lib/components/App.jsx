import React from 'react';
import SlideDeck from './SlideDeck';

export default class App extends React.Component {
  render() {
    const slideIndex = parseInt(this.props.params.slideIdx);

    return  <SlideDeck slideIndex={ slideIndex - 1 }
                       onSlideChange={ this._onSlideChange } />;
  }

  _onSlideChange = (slideIdx) => {
    const newPath = `/${slideIdx + 1}`;
    this.props.history.pushState(null, newPath);
  }
}
