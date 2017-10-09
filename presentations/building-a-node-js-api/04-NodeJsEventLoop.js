import React from 'react';

// import nodeJsEventLoop from './images/node-event-loop.png';
import nodeJsArchitecture from './images/node-js-architecture.png';

export default class Slide extends React.Component {

  render() {
    return (
      <div>
        <img src={nodeJsArchitecture}/>
      </div>
    );
  }
}
