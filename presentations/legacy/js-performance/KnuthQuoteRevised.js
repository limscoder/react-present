import React from 'react';
import Slide from './components/Slide';
import Attribution from './components/Attribution';
import Title from './components/Title';

export default function () {
  return (
    <Slide>
      <Title>don't optimize before you measure</Title>
      <Attribution>- What Donald Knuth really meant</Attribution>
    </Slide>);
}
