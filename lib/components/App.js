import React, { PropTypes } from 'react';
import { markdown } from 'markdown';
import SlideDeck from './SlideDeck';
import { connection, connect } from '../remote/Remote';

const spacebar = 32;
const tKey = 84;
const colors = [ '#1c1c1c' ];

export default class App extends React.Component {
  static propTypes = {
    disableTransitions: PropTypes.bool
  };

  componentWillMount() {
    window.addEventListener('keydown', this._onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this._onKeyDown);
  }

  render() {
    return (
      <SlideDeck ref="slideDeck"
                 disableTransitions={ this.props.disableTransitions }
                 slideIndex={ this._getCurrentSlideIdx() }
                 colors={ colors }
                 onSlideChange={ this._onSlideChange }>
        { this.props.children }
      </SlideDeck>
    );
  }

  _getCurrentSlideIdx() {
    return parseInt(this.props.params.slideIdx) - 1;
  }

  _getSlidePayload(slideIdx) {
    return {
      currentSlide: slideIdx,
      totalSlides: React.Children.count(this.props.children),
      currentSlideHtml: this.refs.slideDeck.renderRemoteSlideToString(slideIdx),
      currentSlideNotes: this._getNotes(slideIdx)
    };
  }

  _getNotes(slideIdx) {
    const slide = this.props.children[slideIdx];
    return markdown.toHTML(slide.type.notes || 'no notes');
  }

  _onSlideChange = (slideIdx) => {
    if (connection) {
      connection.publish({
        type: 'SLIDE_IDX_CHANGED_FROM_PRESENTATION',
        payload: this._getSlidePayload(slideIdx)
      });
    }

    this._setPath(slideIdx, this.props.disableTransitions);
  };

  _setPath = (slideIdx, disableTransitions) => {
    const slidePath = `/${slideIdx + 1}`;
    const newPath = disableTransitions ? '/no-transitions' + slidePath : slidePath;
    this.props.history.pushState(null, newPath);
  };

  _onRemoteConnect = () => {
    connection.publish({
      type: 'REMOTE_PAIRED',
      payload: this._getSlidePayload(this._getCurrentSlideIdx())
    });
  };

  _onMessage = (message) => {
    switch(message.type) {
      case 'SLIDE_IDX_CHANGED_FROM_REMOTE':
        this._onSlideChange(message.payload);
        break;
      case 'REMOTE_CONNECTED':
        this._onRemoteConnect();
        break;
    }
  };

  _onKeyDown = (e) => {
    if (e.keyCode === spacebar) {
      connect(this._onMessage);
      window.alert(`remote control pair code is ${connection.channel}`)
    } else if (e.keyCode === tKey && e.ctrlKey) {
      this._setPath(this._getCurrentSlideIdx(), !this.props.disableTransitions);
    }
  };
}
