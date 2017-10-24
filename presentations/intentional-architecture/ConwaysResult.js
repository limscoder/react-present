import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import Statement from './components/Statement';
import Attribution  from './components/Attribution';

export default function () {
  // independent operation resulted in a tech debt mess.
  return (
    <Slide>
      <Title>The result</Title>
      <Statement>TODO: Venn diagram of many different technologies</Statement>
    </Slide>);
}
