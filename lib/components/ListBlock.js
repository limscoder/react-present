import React from 'react';
import PropTypes from 'prop-types';

export default class ListBlock extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.node),
    title: PropTypes.node
  };

  render() {
    return (
      <div className="rcp-ListBlock">
        <h2 className="rcp-ListBlock--Title">{this.props.title}</h2>
        <ul className="rcp-ListBlock--List">
          {this.props.items.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </div>
    );
  }
}