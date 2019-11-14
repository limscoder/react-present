import React from 'react';
import Slide from './components/Slide';
import Attribution from './components/Attribution';
import Title from './components/Title';

export default function () {
  return (
    <Slide>
      <Title>premature optimization is the root of all evil</Title>
      <Attribution>- Donald Knuth</Attribution>
    </Slide>);
}
