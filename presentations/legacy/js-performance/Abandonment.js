import React from 'react';
import Slide from './components/Slide';
import Link from './components/Link';
import Attribution from './components/Attribution';
import Statement from './components/Statement';

export default function () {
  return (
    <Slide>
      <Statement>53% of mobile site visits are abandoned when pages take longer than 3 seconds to load</Statement>
      <Attribution>- <Link href="https://www.doubleclickbygoogle.com/articles/mobile-speed-matters/">Google Double Click</Link></Attribution>
    </Slide>);
}
