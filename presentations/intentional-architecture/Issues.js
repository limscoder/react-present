import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import Statement from './components/Statement';

export default function () {
  return (
    <Slide>
      <Title>Continuing issues</Title>
      <Statement>"Proving" devops / architecture roi</Statement>
      <Statement>Bandwidth to analyze and act on collected metrics</Statement>
      <Statement>Too many functional silos</Statement>
    </Slide>);
}
