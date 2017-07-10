import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import pstSrc from './images/page-speed-tools.png';

export default function () {
  return (
    <Slide>
      <Title>PageSpeed Tools (developers.google.com/speed)</Title>
      <img src={ pstSrc } />
    </Slide>);
}