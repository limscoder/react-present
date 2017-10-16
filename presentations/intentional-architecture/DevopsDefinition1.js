import React from 'react';
import Slide from './components/Slide';
import Statement from './components/Statement';
import Attribution  from './components/Attribution';

export default function () {
  return (
    <Slide>
      <Statement>DevOps is when the product team can break production.</Statement>
      <Attribution>-Adam Z</Attribution>
    </Slide>);
}
