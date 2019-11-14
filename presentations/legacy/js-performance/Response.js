import React from 'react';
import css from 'glamor';
import glamorous from 'glamorous';
import Slide from './components/Slide';
import Title from './components/Title';
import Statement from './components/Statement';

export default function () {
  return (
    <Slide>
      <Title>Response - 100ms</Title>
      <Statement>users perceive delays over 100ms</Statement>
      <Statement>> 500ms should display indicator</Statement>
    </Slide>);
}
