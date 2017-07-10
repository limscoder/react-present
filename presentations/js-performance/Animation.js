import React from 'react';
import css from 'glamor';
import glamorous from 'glamorous';
import Slide from './components/Slide';
import Title from './components/Title';
import eventLoopSrc from './images/event-loop.png';

export default function () {
  return (
    <Slide>
      <Title>Animation - 60fps</Title>
      <img src={ eventLoopSrc } />
    </Slide>);
}
