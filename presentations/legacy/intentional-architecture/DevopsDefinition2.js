import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import Statement from './components/Statement';
import Attribution  from './components/Attribution';

export default function () {
  return (
    <Slide>
      <Title>DevOps</Title>
      <Statement>Development teams are responsible for when and how their features are deployed to customers.</Statement>
    </Slide>);
}
