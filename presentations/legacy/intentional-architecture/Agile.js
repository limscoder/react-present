import React from 'react';
import Slide from './components/Slide';
import Title from './components/Title';
import Statement from './components/Statement';
import Attribution  from './components/Attribution';

export default function () {
  return (
    <Slide>
      <Title>Agile</Title>
      <Statement>code &gt; plans and documentation</Statement>
      <Statement>rapid iterations &gt; large releases</Statement>
      <Statement>people &gt; processes</Statement>
      <Statement>trust &gt; control</Statement>
    </Slide>);
}
