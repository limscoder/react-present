import React from 'react';
// import CodeBlock from '../../lib/components/CodeBlock';

import img from './images/javascript-the-good-parts.jpg';

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <img src={img}/>
      </div>
    );
  }
}
