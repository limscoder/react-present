import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import imgSrc from './images/architecture-team.png';

export default function () {
  return (
    <Slide>
      <Title>Architect team</Title>
      <img src={ imgSrc } alt="architecture team" />
    </Slide>);
}
