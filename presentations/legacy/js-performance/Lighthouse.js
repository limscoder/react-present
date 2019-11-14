import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import pstSrc from './images/lighthouse.png';

export default function () {
  return (
    <Slide>
      <Title>Lighthouse Audit</Title>
      <img src={ pstSrc } />
    </Slide>);
}