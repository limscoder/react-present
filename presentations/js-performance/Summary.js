import React from 'react';
import Slide from './components/Slide';
import Link from './components/Link';
import Title from './components/Title';
import elephantSrc from './images/elephant.gif';
import freshSrc from './images/freshtracks.png';

export default function () {
  return (
    <Slide>
      <Title>optimize your apps!</Title>
      <div style={{ display: 'flex' }}>
        <img src={elephantSrc} alt="elephant" />
        <div style={{ marginLeft: '20px' }}>
          <img src={freshSrc} alt="freshtracks" />
          <br />
          <Link href="https://freshtracks.io/">freshtracks.io</Link>
        </div>
      </div>
      <br />
      <div><Link href="https://github.com/limscoder/react-present">slides made with react-present: <br /> https://github.com/limscoder/react-present</Link></div>
    </Slide>);
}
