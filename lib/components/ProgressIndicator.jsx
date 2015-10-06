import React from 'react';
import classnames from 'classnames';

export default class ProgressIndicator extends React.Component {
  static propTypes = {
    current: React.PropTypes.number.isRequired,
    total: React.PropTypes.number.isRequired
  }

  render() {
    const cells = [];
    for (let i = 0; i < this.props.total; i++) {
      let className = classnames({
        'rcp-ProgressIndicator-cell': true,
        'rcp-ProgressIndicator-cell--active': i <= this.props.current
      });

      cells.push(<div key={ i } className={ className } />);
    }

    return <div className="rcp-ProgressIndicator">{ cells }</div>;
  }
}
