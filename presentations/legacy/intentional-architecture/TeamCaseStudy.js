import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import Statement from './components/Statement';
import Attribution  from './components/Attribution';
import imgSrc from './images/mineral.png';

export default function () {
  return (
    <Slide>
      <Title>Case Study: relying on teams</Title>
      <img src={ imgSrc } alt="mineral ui" />
    </Slide>);
}
