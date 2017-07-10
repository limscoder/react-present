import React from 'react';
import Slide from './components/Slide';
import Link from './components/Link';
import bunnySrc from './images/bunny.gif';

export default function () {
  return (
    <Slide>
      <img src={bunnySrc} alt="bunny" />
      <div><Link href="https://twitter.com/limscoder">@limscoder</Link></div>
      <div><Link href="https://github.com/limscoder">github.com/limscoder</Link></div>
    </Slide>);
}
