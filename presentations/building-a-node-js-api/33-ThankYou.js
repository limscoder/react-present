import React from 'react';
// import CodeBlock from '../../lib/components/CodeBlock';

import video from './images/thank-you.mp4';

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <video preload="auto" autoPlay muted loop>
          <source src={video} type="video/mp4"/>
        </video>
      </div>
    );
  }
}
