import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import imgSrc from './images/alignment.png'

export default function () {
  return (
    <Slide>
      <img src={ imgSrc } alt="alignment" />
    </Slide>);
}
