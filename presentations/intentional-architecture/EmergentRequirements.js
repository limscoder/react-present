import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import Statement from './components/Statement';
import Attribution  from './components/Attribution';

export default function () {
  return (
    <Slide>
      <Title>Success requirements</Title>
      <Statement>Small number of teams</Statement>
      <Statement>Limited communication paths</Statement>
      <Statement>Trust in dev team leads</Statement>
    </Slide>);
}
