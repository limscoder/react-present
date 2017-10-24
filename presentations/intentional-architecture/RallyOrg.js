import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import Statement from './components/Statement';
import Attribution  from './components/Attribution';
import imgSrc from './images/small-team.png';

export default function () {
  return (
    <Slide>
      <Title>Startup mode</Title>
      <img src={ imgSrc } alt="small team" />
    </Slide>);
}
