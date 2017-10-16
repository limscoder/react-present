import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import Statement from './components/Statement';
import Attribution  from './components/Attribution';

export default function () {
  return (
    <Slide>
      <Title>Avoid the Ivory Tower</Title>
      <Statement>Teams are good at writing code</Statement>
      <Statement>Don't tell them how to do their job</Statement>
    </Slide>);
}
