import React from 'react';
import { markdown } from 'markdown';
import SlideDeck from './SlideDeck';
import { connection, connect } from '../remote/Remote';

const spacebar = 32;
const colors = [
  '#00a9e0',
  '#b81b10',
  '#00b359',
  '#ff6600',
  '#6600cc'
];

export default class App extends React.Component {
  componentWillMount() {
    window.addEventListener('keydown', this._onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this._onKeyDown);
  }

  render() {
    return (
      <SlideDeck ref="slideDeck"
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

    const newPath = `/${slideIdx + 1}`;
    this.props.history.pushState(null, newPath);
  }

  _onRemoteConnect = () => {
    connection.publish({
      type: 'REMOTE_PAIRED',
      payload: this._getSlidePayload(this._getCurrentSlideIdx())
    });
  }

  _onMessage = (message) => {
    switch(message.type) {
      case 'SLIDE_IDX_CHANGED_FROM_REMOTE':
        this._onSlideChange(message.payload);
        break;
      case 'REMOTE_CONNECTED':
        this._onRemoteConnect();
        break;
    }
  }

  _onKeyDown = (e) => {
    if (e.keyCode === 32) {
      connect(this._onMessage);
      window.alert(`remote control pair code is ${connection.channel}`)
    }
  }
}
