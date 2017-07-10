import React from 'react';
import Slide from './components/Slide';
import Link from './components/Link';
import freshSrc from './images/freshtracks.png';

export default function () {
  return (
    <Slide>
      <img src={freshSrc} alt="freshtracks" />
      <div><Link href="https://freshtracks.io/">freshtracks.io</Link></div>
      <br />
      <div><Link href="https://github.com/limscoder/react-present">slides made with react-present: https://github.com/limscoder/react-present</Link></div>
    </Slide>);
}
