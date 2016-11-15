import React from 'react';

export default class ListBlock extends React.Component {
  static propTypes = {
    items: React.PropTypes.arrayOf(React.PropTypes.node),
    title: React.PropTypes.node
  };

  render() {
    return (
      <div className="rcp-ListBlock">
        <h1 className="rcp-ListBlock--Title">{ this.props.title }</h1>
        <ul className="rcp-ListBlock--List">
          { this.props.items.map((item, idx) => <li key={ idx }>{ item }</li>) }
        </ul>
      </div>
    );
  }
}