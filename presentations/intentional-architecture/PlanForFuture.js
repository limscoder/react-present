import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import Statement from './components/Statement';
import  imgSrc from './images/sinking.gif';

export default function () {
  return (
    <Slide>
      <Title>Plan for the future</Title>
      <img src={ imgSrc } alt="sinking" />
    </Slide>);
}
