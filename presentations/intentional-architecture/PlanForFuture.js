import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import Statement from './components/Statement';

export default function () {
  return (
    <Slide>
      <Title>Plan for the future</Title>
      <Statement>Eliminate tech debt</Statement>
      <Statement>Upcoming features and growth</Statement>
      <Statement>Evaluating emerging tech</Statement>
    </Slide>);
}
