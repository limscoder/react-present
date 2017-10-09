import React from 'react';
// import CodeBlock from '../../lib/components/CodeBlock';

import img from './images/javascript-guy.jpg';

export default class Slide extends React.Component {
  render() {
    return (
      <div>
        <img src={img}/>
      </div>
    );
  }
}
