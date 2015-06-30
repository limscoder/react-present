import React from 'react';

import Slides from './slides/Slides.jsx';

require('./NavBar.css');

export default React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    activeSlideIdx: React.PropTypes.number.isRequired
  },

  render() {
    return (
      <nav className="rcp-NavBar">
        <div className="rcp-NavBar-Icon" />
        <span className="rcp-NavBar-Title">{ this.props.title }</span>
      </nav>
    );
  }
});
