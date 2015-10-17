import React from 'react';
import classnames from 'classnames';

export default class ProgressIndicator extends React.Component {
  static propTypes = {
    current: React.PropTypes.number.isRequired,
    total: React.PropTypes.number.isRequired,
    onSlideChange: React.PropTypes.func.isRequired
  }

  render() {
    const cells = [];
    for (let i = 0; i < this.props.total; i++) {
      const className = classnames({
        'rcp-ProgressIndicator-cell': true,
        'rcp-ProgressIndicator-cell--active': i <= this.props.current
      });
      const title = `Slide ${i + 1} of ${this.props.total}`;


      cells.push(<div key={ i }
                      className={ className }
                      title={ title }
                      onClick={ () => { this.props.onSlideChange(i); } }/>);
    }

    return <div className="rcp-ProgressIndicator">{ cells }</div>;
  }
}
