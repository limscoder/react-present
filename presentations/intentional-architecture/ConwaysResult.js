import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import imgSrc from './images/tech-overlap.png'

export default function () {
  // independent operation resulted in a tech debt mess.
  return (
    <Slide>
      <Title>The result</Title>
      <img src={imgSrc} alt="tech overlap" />
    </Slide>);
}
