import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class ProgressIndicator extends React.Component {
  static propTypes = {
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    onSlideChange: PropTypes.func.isRequired
  }

  render() {
    const cells = [];
    for (let i = 0; i < this.props.total; i++) {
      const className = classnames({
        'rcp-ProgressIndicator-cell': true,
        'rcp-ProgressIndicator-cell--active': i <= this.props.current
      });
      const title = `Slide ${i + 1} of ${this.props.total}`;


      cells.push(<div key={i}
        className={className}
        title={title}
        onClick={() => { this.props.onSlideChange(i); }} />);
    }

    cells.push(<div key="deck-link"
      className="rcp-ProgressIndicator-cell rcp-ProgressIndicator-cell--deck"
      title="slide deck"
      onClick={() => { window.open('https://github.com/limscoder/react-present','_blank'); }} />)

    return <div className="rcp-ProgressIndicator">{cells}</div>;
  }
}
