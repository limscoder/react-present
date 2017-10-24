import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import Statement from './components/Statement';
import Link from './components/Link';

export default function () {
  return (
    <Slide>
      <Title>Thanks!</Title>
      <div><Link href="https://github.com/limscoder/react-present">slides available on github: <br /> https://github.com/limscoder/react-present</Link></div>
    </Slide>);
}
