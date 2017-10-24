import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import Statement from './components/Statement';

export default function () {
  return (
    <Slide>
      <Title>Frustrations</Title>
      <Statement>Tech debt + legacy tech</Statement>
      <Statement>Long lead times</Statement>
      <Statement>Cumbersome or slow tooling</Statement>
    </Slide>);
}
