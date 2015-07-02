import React from 'react';

import Slides from './slides/Slides.jsx';

require('./NavBar.css');

export default React.createClass({
  getInitialState() {
    return {
      showNav: false
    };
  },

  propTypes: {
    title: React.PropTypes.string.isRequired,
    activeSlideIdx: React.PropTypes.number.isRequired,
    onSelectSlide: React.PropTypes.func.isRequired
  },

  render() {
    return (
      <div>
        <nav className="rcp-NavBar">
          <div className="rcp-NavBar-Icon" onClick={ this._toggleNav }/>
          <span className="rcp-NavBar-Title">{ this.props.title }</span>
        </nav>
        { this._renderNav() }
      </div>
    );
  },

  _toggleNav(e) {
    e.stopPropagation();

    this.setState({
      showNav: !this.state.showNav
    });
  },

  _renderNav() {
    if (this.state.showNav) {
      const menuItems = Slides.map((item, idx) => {
        const onClick = () => {
          this.props.onSelectSlide(idx);

          this.setState({
            showNav: false
          });
        };

        return (
          <li key={ item.props.title } onClick={ onClick }>
            { item.props.title}
          </li>
        );
      });

      return (
        <ul className="rcp-NavBar-NavMenu">
          { menuItems }
        </ul>
      )
    }
  }
});
