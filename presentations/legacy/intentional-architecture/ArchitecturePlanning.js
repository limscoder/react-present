import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import Statement from './components/Statement';
import imgSrc from './images/board.png';

export default function () {
  return (
    <Slide>
      <Title>Case Study: agile planning</Title>
      <Statement>Architecture team prioritizes tech work</Statement>
      <Statement>With help from all of r + d</Statement>
      <img src={ imgSrc } alt="planning board" />
    </Slide>);
}
