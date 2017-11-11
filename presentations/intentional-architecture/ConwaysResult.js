import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import imgSrc from './images/tech-overlap.png'

export default function () {
  return (
    <Slide>
      <Title>Case Study: too many cooks</Title>
      <img src={imgSrc} alt="tech overlap" />
    </Slide>);
}
