import React from 'react';
import Slide from './components/Slide';
import Link from './components/Link';
import imgSrc from './images/hack.gif';

export default function () {
  return (
    <Slide>
      <img src={imgSrc} alt="hack" />
      <div><Link href="https://twitter.com/limscoder">@limscoder</Link></div>
    </Slide>);
}
