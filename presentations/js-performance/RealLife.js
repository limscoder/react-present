import React from 'react';
import Slide from './components/Slide';
import Statement from './components/Statement';
import Title from './components/Title';

export default function () {
  return (
    <Slide>
      <Title>IRL</Title>
      <Statement>toolchain config</Statement>
      <Statement>network config</Statement>
      <Statement>browser config</Statement>
    </Slide>);
}