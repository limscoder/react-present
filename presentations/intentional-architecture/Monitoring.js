import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import Statement from './components/Statement';

export default function () {
  return (
    <Slide>
      <Title>Observability</Title>
      <Statement>System metrics</Statement>
      <Statement>User metrics</Statement>
    </Slide>);
}
