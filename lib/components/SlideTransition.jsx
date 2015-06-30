import React from 'react';
import classnames from 'classnames';

require('./SlideTransition.css');

export default React.createClass({
  propTypes: {
    isActive: React.PropTypes.bool.isRequired,
    color: React.PropTypes.string.isRequired
  },

  render() {
    const clsName = classnames({
      'rcp-SlideTransition': true,
      'is-active': this.props.isActive
    });
    const style = {
      backgroundColor: this.props.color
    };

    return <div className={ clsName } style={ style }/>;
  }
});
